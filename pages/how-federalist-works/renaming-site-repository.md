---
title: Renaming a site's repository
permalink: /pages/how-federalist-works/renaming-site-repository/
---

# Updating your Federalist site after renaming your repository

Renaming your site repository will interrupt a site's ability to build.  In order to resume site building, it will require you to add a new site to Federalist with the new repository url.  (Note: Please be aware that if your site is already live, your site public site will be frozen until a security scan is performed on your new site.)

## Steps to 

1. Add the new site repository as described [here]({{site.baseurl}}/pages/using-federalist/)
2. Build your site and verify that the site is ready for launch using our preview URLs.
3. Contact the Federalist team; we’ll scan your site within a few days as part of our compliance process and let you know of the results.
4. Let us know when you are ready to go live with the new site and we can update your CloudFront URL to point to your new site.
5. Optional: After the new site is live, you can delete the old site within Site Settings.  (Note: Once deleted, the settings and build history for the site will be lost and is not transferable to a different site.)
