---
title: Launch checklist
permalink: /documentation/launch-checklist/
layout: page
sidenav: documentation
redirect_from: 
  - /pages/using-federalist/launch-checklist/

---

# Launch checklist

We've worked to make launching a live site on Federalist as simple as possible. You will need to complete these steps:

1. Sign an IAA with 18F to use Federalist.
2. Verify that your agency accepts the risk of launching a site on Federalist.
3. Build your site and verify that the site is ready for launch using our preview URLs.
4. Contact the Federalist team; we'll scan your site within a few days as part of our compliance process and let you know of the results.
5. When ready, schedule launch of your custom URL. At your command, Federalist will initiate setup and provide you with a CloudFront URL such as https://d2xyasfn4889hb.cloudfront.net/ and a TXT record. You will then (within 24 hours) configure DNS records with a CNAME to the CloudFront URL, and the TXT records (needed to issue your auto-renewed TLS certificate) as provided. Once this is complete, your site content will be available at your agency URL but with broken images. Technical background on this process is [here]({{site.baseurl}}/documentation/custom-urls/).
6. Alter your site's settings in the Federalist web interface to have Federalist set up your site to work at your custom URL, which will fix the images. Once the site is rebuilt, you will be fully live.
