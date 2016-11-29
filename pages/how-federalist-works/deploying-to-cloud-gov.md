---
title: Deploying to cloud.gov
parent: How Federalist Works
---

## Deploying Federalist to cloud.gov's GovCloud environment

Federalist is built to be deployed to the [GovCloud](https://cloud.gov/docs/apps/govcloud/) region in [cloud.gov](https://cloud.gov/docs/). This guide is targeted at anyone who wishes to deploy the entire Federalist system to cloud.gov from the ground up, or anyone who wishes to get a better grasp of how the system is architected by looking at how it is deployed.

Before reading this guide, it may be helpful to refer to [How Federalist Works](http://localhost:4000/pages/how-federalist-works/) to understand what components make up the Federalist architecture and how they are interrelated.

A Federalist deploy comprises of the following steps:

- Deploy a private registry
- Pushing a federalist-docker-build image to the registry
- Deploying build containers
- Provisioning AWS resources
- Deploying federalist-builder
- Deploying federalist

## Deploying a private registry

Federalist's private registry stores the image that Federalist uses for its build containers. Under the hood it is a [private Docker registry](https://docs.docker.com/registry/deploying/) using an [S3 storage driver](https://docs.docker.com/registry/storage-drivers/s3/) with [read-only](https://docs.docker.com/registry/configuration/#/read-only-mode) mode enabled.

Push a registry to cloud.gov using the `library/registry:2` image:

```shell
cf push federalist-registry -o library/registry:2
```

The registry needs an S3 bucket in which to store images. To this end a S3 service can be created:

```shell
cf create-service s3 basic federalist-registry-s3
```

After the registry and the S3 bucket are both up and running the registry's environment will need to be configured such that the registry uses the S3 bucket as a storage backend and is in read-only mode. This can be done by setting the registry [environment](https://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html) as such:

```yaml
REGISTRY_STORAGE: s3
REGISTRY_STORAGE_S3_ACCESSKEY: <ACCESS KEY FOR S3 SERVICE>
REGISTRY_STORAGE_S3_SECRETKEY: <SECRET KEY FOR S# SERVICE>
REGISTRY_STORAGE_S3_BUCKET: <BUCKET NAME FOR S3 SERVICE>
REGISTRY_STORAGE_S3_REGION: us-gov-west-1
REGISTRY_STORAGE_MAINTENANCE_READONLY: enabled: true
```

After setting the environment, the registry will need to be restaged to use the new configs:

```shell
cf restage federalist-registry
```

## Pushing a federalist-docker-build image to the registry

Unfortunately pushing an image to the private registry is not as simple as building the image and pushing it to the registry. To push an image you must follow the following steps:

- Build the federalist-docker-build image
- Scan the federalist-docker-build image
- Push the federalist-docker-build image

### Building the image

The federalist-docker-build image can be built with docker. Clone the repo, cd into it and run `docker build`.

```shell
docker build --no-cache --tag federalist-docker-build .
```

The image should now appear in the list when you run `docker images`.

### Scanning the image

Before the image can be pushed to the registry, it will need to be scanned by [Clair](https://github.com/coreos/clair). The steps to do this are:

- Set some shell variables
- Start up Clair with Docker and wait for vulnerability updates
- Use Clair CLI tool to scan the image

#### Set some shell variables

Clair's CLI tool copies the image to a `tmp` directory where Clair picks it up. In order for this to work, you need to change the value of the `TMPDIR` variable to `/tmp`

``` shell
export TMPDIR=/tmp
```

Additionally, if you do not have your `GOPATH` set, you'll need to set that. [Here is some documentation on how to set `GOPATH`](https://golang.org/doc/code.html#GOPATH).

#### Start up Clair with Docker and wait for vulnerability updates

We recommend starting Clair with [Docker Compose](https://docs.docker.com/compose/). Here is an example `docker-compose.yml` for preparing Clair to scan `federalist-docker-build`:

``` yaml
version: '2'
services:
  postgres:
    container_name: clair_postgres
    image: postgres:latest
    environment:
      POSTGRES_PASSWORD: password

  clair:
    container_name: clair_clair
    image: quay.io/coreos/clair
    environment:
      - "TMPDIR=/tmp"
    depends_on:
      - postgres
    ports:
      - "6060-6061:6060-6061"
    links:
      - postgres
    volumes:
      - /tmp:/tmp
      - ./clair_config:/config
    command: [-config, /config/config.yaml]
```

Clair will look for a config file in `./clair_config/config`. We recommend using [Clair's example config](https://github.com/coreos/clair/blob/master/config.example.yaml):

``` shell
curl -L https://raw.githubusercontent.com/coreos/clair/v1.2.2/config.example.yaml -o ./config/config.yaml
```

Once those parts are in place. Clair can be started with Docker Compose. It takes Clair a while to update it's vulnerability definitions. Give it a few hours or your scan results will come up empty.

To start:

``` shell
docker-compose up
```

#### Use Clair CLI tool to scan the image

To actually scan the image we'll use the [Cliar CLI Tool](https://github.com/coreos/clair/tree/master/contrib/analyze-local-images).

First install the CLI tool:

``` shell
go get -u github.com/coreos/clair/contrib/analyze-local-images
```

Then use it to scan your image. Here `<IMAGE ID>` is the image ID for `federalist-docker-build` found by running `docker images`:

``` shell
analyze-local-images <IMAGE ID>
```

It can take a while, but it should get back to you with a report about whatever vulnerabilities it finds. Cross-reference the list of vulnerabilities with the list in the POAM and add any vulnerabilities that are missing from the POAM.

### Pushing the image

Since the registry in cloud.gov is in read-only mode, it is not possible to push an image to it directly. In order to push an image to the registry a local registry with the same S3 storage driver is started and the image is pushed to that. The image is then saved in the S3 bucket where it is available to the remote registry.

We recommend using [Docker Compose](https://docs.docker.com/compose/) to run the local registry. To use Docker Compose you'll need to create a `docker-compose.yml` file. Here is an example of what a `docker-compose.yml` file would look like for a local registry:

```yaml
registry:
  restart: always
  image: registry:2
  ports:
    - 5000:5000
  environment:
    REGISTRY_STORAGE: s3
    REGISTRY_STORAGE_S3_ACCESSKEY: <ACCESS KEY FOR S3 SERVICE>
    REGISTRY_STORAGE_S3_SECRETKEY: <SECRET KEY FOR S# SERVICE>
    REGISTRY_STORAGE_S3_BUCKET: <BUCKET NAME FOR S3 SERVICE>
    REGISTRY_STORAGE_S3_REGION: us-gov-west-1
```

After creating a `docker-compose.yml`, the registry can be started:

```shell
docker-compose up
```

By default the registry runs at `localhost:5000`. To push an image to the registry it will need to be tagged it with the URL for the local registry:

```shell
docker tag federalist-docker-build localhost:5000/federalist-docker-build
```

Finally, the image can be pushed to the local registry:

```
docker push localhost:5000/federalist-docker-build
```

Now the image should be available from the remote registry as `<remote-registry-url>/federalist-docker-build`.

To confirm that this worked you can pull the image from the remote registry and inspect it:

```shell
docker pull federalist-registry.fr.cloud.gov/federalist-docker-build
docker inspect federalist-registry.fr.cloud.gov/federalist-docker-build
```

## Deploying build containers

TODO: Describe how to deploy a build container

## Provisioning AWS resources

The next pieces of Federalist that need to be deployed will depend on certain AWS resources. That makes this a good time to provision the AWS resources that are needed:

- An RDS instance for the database
- A Redis instance for the session store
- An SQS queue for build messages
- A CloudFront distribution to serve as a CDN and provide support custom URLs.

TODO: Describe how to provision each resource

## Deploying federalist-builder

TODO: Describe how to deploy federalist-builder

## Deploying federalist

TODO: Describe how to deploy federalist core
