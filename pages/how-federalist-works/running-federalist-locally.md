---
title: Running Federalist locally
parent: How Federalist Works
---

## Dependencies / Tooling

Before you start, ensure you have the following installed:

- [node](https://nodejs.org/en/download/package-manager/#osx)
- [nvm](https://github.com/creationix/nvm#installation) or [n](https://github.com/tj/n#installation)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/engine/installation/mac/)
- [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)
- [AWS CLI](https://aws.amazon.com/cli/)

## Repositories

See [How Federalist Works]({{site.baseurl}}/pages/how-federalist-works) for a list of the code repositories and descriptions of the different parts of the Federalist system. You'll want to pull the repos relevant to the parts of the system you are working with locally.

## Running Federalist

The main Federalist app's code lives in the [18F/federalist](https://github.com/18F/federalist) repository on GitHub. After pulling the app, the `config/local.js` file should be created from the template at `config/local.sample.js`.

In order to run the app needs an S3 bucket and a SQS queue to communicate with. In development we use the staging S3 bucket and the staging SQS queue for this purpose. To this end you can edit your `config/local.js` to contain the credentials of the staging instances of those services.

The Federalist app uses GitHub for authentication. You will need to create a [GitHub OAuth application](https://github.com/settings/applications/new) and add the client ID, client secret, and callback URL to your `config/local.js`.

Optionally, you are able to create a new GitHub team, add yourself to that team, and then add the team's ID to the `organizations` array in `config/local.js`. If you are on the 18F GitHub team that should not be necessary since the 18F GitHub team is included by default in `config/passport.js`.

Federalist needs a Postgres database from which to read and write data. By default, it looks for a database on the localhost named `federalist`. Additionally, the tests look for a database named `federalist-test`.

To create the databases, run the following:

```
createdb federalist
createdb federalist-test
```

Once the local config and the database is setup and ready to go the app can be started:

```
npm install
npm run build
npm start
```

If everything works as expected you should be able to see the app running at [http://localhost:1337/](http://localhost:1337/).

Note that if you are working on the frontend you can use `npm run watch` to have browserify rebuild the frontend as you make changes.

If everything is setup correctly you should also be able to run the tests:

```
npm test
```

## Running federalist-builder

The Federalist build scheduler's code lives in the [18F/federalist-builder](https://github.com/18F/federalist-builder) repository on GitHub.

federalist-builder is not designed to be run locally. Due to its tight coupling with the build process and it's dependence on the Cloud Foundry environment, running it locally has the potential to create a race condition between builds running in Cloud Foundry and builds that were scheduled locally.

To check the behavior of federalist builder you can run its test suite:

```
npm install
npm test
```

## Running federalist-docker-build

The Federalist build container's image specification lives in the [18F/federalist-docker-build](https://github.com/18F/federalist-docker-build) repository on GitHub.

The image can be built with docker:

```
docker build --tag federalist-docker-build .
```

Once the image is built, it is possible to shell into a container running it and run commands in the container. In order to get closer parody with the build containers running in cloud.gov use the `--login` option with `/bin/bash`:

```
docker run -it federalist-docker-build /bin/bash --login
```
