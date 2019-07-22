---
title: ENV variables available during Federalist builds
permalink: /documentation/env-vars-on-federalist-builds/
layout: page
sidenav: documentation
redirect_from:
  - /pages/how-federalist-works/env-vars-on-federalist-builds/
---

# Environment variables available when your site builds

When Federalist builds your site it makes available the following environment variables:

Name|Description
---|---
BRANCH|Github branch being built
OWNER|Owner of Github repository
REPOSITORY|Github repository
SITE_PREFIX|Path of s3 bucket in which your site will be deployed
BASEURL|Path for deployed site
