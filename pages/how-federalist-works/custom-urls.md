---
title: Custom URLs
parent: How Federalist Works
---

## How Federalist custom URLs work

This is a technical explaination of how custom domains work on Federalist.

Your site will be build using links with codes like this: `[Our Work]({{site.baseurl}}/work/)`. The "site.baseurl" framing allows multiple versions of the links to be built on preview copies of the site without interfering with the live site.

Federalist stores a variable (set in its GUI) that is sent to the federalist-builder application, which builds the site with the correct URLS. You will point your custom domain at the S3 bucket with the Federalist files.
