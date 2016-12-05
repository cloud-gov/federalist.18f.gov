---
title: Deploying Federalist
parent: How Federalist Works
---

## Deploying Federalist from TravisCI

This guide covers how the deployment process for Federalist and Federalist Builder works.
In order to understand the process for Federalist Docker Build and Federalist Registry, see [the cloud.gov setup guide]({{site.baseurl}}/pages/how-federalist-works/cloud-gov-setup/).

Federalist is deployed by [TravisCI](https://docs.travis-ci.com/user/deployment/).
Federalist and Federalist Builder are configured such that changes to the master branch are deployed to production and changes to the staging branch are deployed to staging.
In both repos this configuration lives in the [.travis.yml](https://docs.travis-ci.com/user/customizing-the-build) file in the project root.

Both projects use a file at `scripts/deploy-travis.sh` to run the actual deploy.
These scripts authenticate with cloud.gov using a [cloud.gov deploy user](https://cloud.gov/docs/apps/continuous-deployment/#deployer-account).
Despite some minor differences, both of these scripts do essentially the same thing:

0. Check the current branch and use it to determine which space to deploy to
0. Install Autopilot for cf-cli (used for zero downtime deploys)
0. Use `cf login` to authenticate the deploy user
0. Do a zero downtime push of the application

It is worth noting that the environment for these scripts is set in the `.travis.yml` for the following:

- `CF_API`: The Cloud Foundry API endpoint, for example `api.cloud.gov`
- `CF_USERNAME`: The username for the cloud.gov deploy user
- `CF_ORGANIZATION`: The Cloud Foundry org where the app is deployed
- `CF_PASSWORD`: An [environment](https://docs.travis-ci.com/user/environment-variables/#Defining-encrypted-variables-in-.travis.yml) variable for the cloud.gov deploy user's password

## Zero downtime deploys

Federalist has high availability requirements because it needs to be up to receive GitHub webhook and build status requests.
Because of this, the [autopilot](https://cloud.gov/docs/apps/production-ready/#zero-downtime-deploy) Cloud Foundry CLI plugin is used so the app can be deployed without downtime.

Zero downtime deploys work by:

0. Renaming the app to `<appname>-venerable`, for example `federalist-venerable`
0. Pushing a new app with the old app's name
0. When the new app is started, routing requests to the new app and deleting the venerable app

#### Cleanup after a failed deploy

If autopilot fails to deploy the new app, it exits and does not clean up after itself.
So after a failed deploy there will be a stopped app named `<appname>` and a running app named `<appname>-venerable` fielding requests.
This is by design so that a failed deploy does not cause the app to go down.

The downside of this setup is that all future deploys will fail since there will be a name collision on `<appname>-venerable`.
As a result, the failed deploy will need to be cleaned up before another deploy can succeed.

To cleanup after a failed deploy:

0. Delete the new app. For the main Federalist app that would be `federalist`.
0. Rename the venerable app to the name of the new app. For example, rename `federalist-venerable` to `federalist`.
0. Start a build on Travis to re-deploy.
