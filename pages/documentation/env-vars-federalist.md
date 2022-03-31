---
title: Build environment variables
permalink: /documentation/env-vars-on-federalist-builds/
layout: page
sidenav: documentation
redirect_from:
  - /pages/how-federalist-works/env-vars-on-federalist-builds/
---

At the time your site is built, a number of special environment variables are exposed. You can access these environment variables with your build engine to customize your build (for instance, to add some special text to your site to show which branch has been built).


## Default environment variables

When Federalist builds your site it makes available the following environment variables, which change depending on the environment (`preview`, `demo`, or `site`) being deployed to:

<table>
<thead>
<tr>
<th rowspan="2">Name</th>
<th rowspan="2">Description</th>
<th colspan="2" style="text-align: center">Example</th>
</tr>
<tr>
<th>Preview</th>
<th>Site (Live)</th>
</tr>
</thead>
<tbody>
<tr>
<td>BRANCH</td>
<td>Github branch being built</td>
<td markdown="1">
`new-feature`
</td>
<td markdown="1">
`main`
</td>
</tr>
<tr>
<td>OWNER</td>
<td>Owner of Github repository</td>
<td markdown="1" colspan="2" style="text-align: center">
`cloud-gov`
</td>
</tr>
<tr>
<td>REPOSITORY</td>
<td>Github repository</td>
<td markdown="1" colspan="2" style="text-align: center">
`my-website`
</td>
</tr>
<tr>
<td>SITE_PREFIX</td>
<td>Path of s3 bucket in which your site will be deployed</td>
<td markdown="1">
`preview/cloud-gov/my-website/new-feature`
</td>
<td markdown="1">
`site/cloud-gov/my-website`
</td>
</tr>
<tr>
<td>BASEURL</td>
<td markdown="1">
Path for deployed site (empty string when using a custom domain, otherwise the same as `SITE_PREFIX`)
</td>
<td markdown="1">
`/preview/cloud-gov/my-website/new-feature`
</td>
<td markdown="1">
`''`
</td>
</tr>
</tbody>
</table>

## Adding custom environment variables

Additional environment variables can be added to your builds by:
1. Visit your site's Site Settings -> Environment Variables
2. Click "Add a new environment variable"
3. Enter the name and value
4. Click "Add" to save

You can remove environment variables by clicking the "X" button next to the desired environment variable in the Current Environment Variables table.

Certain environment variable names are reserved for Federalist use and will be ignored. Warnings for any ignored environment variables will be present in the build logs. See above for an up-to-date list.

Federalist is a **FISMA Low** system, do NOT store variables for systems that are Moderate or High, and only expose variables if it is safe to do so. You assume the risk if the values you add contain, or allow access to information that is not suitable for this categorization. See [FISMA Security Categorization](https://csrc.nist.gov/Projects/Risk-Management/Risk-Management-Framework-(RMF)-Overview/Security-Categorization) for more information on FISMA information categorization.

![Image of environment variable settings]({{site.baseurl}}/assets/images/env-vars.png)
