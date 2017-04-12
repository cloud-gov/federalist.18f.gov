---
title: Launch checklist
parent: Using Federalist
---

## Launching a site with Federalist

We've worked to make launching a live site on Federalist as simple as possible. You will need to complete these steps:

1. Sign an IAA with 18F to use Federalist.
2. Verify that your agency accepts the risk of launching a site on Federalist.
3. Build your site and verify that the site is ready for launch using our preview URLs.
4. Initiate setup of your custom URL within your agency and with the Federalist team. At your command, Federalist will initiate the process and provide you with a CloudFront URL such as https://d2xyasfn4889hb.cloudfront.net/. You will then configure DNS records with a CNAME to the CloudFront URL. Once this is complete, your site content will be available at your agency URL but with broken images. Technical background on this process is [here](/pages/how-federalist-works/custom-urls/).
5. Alter your site's settings in the Federalist web interface to have Federalist set up your site to work at your custom URL, which will fix the images. Once the site is rebuilt, you will be fully live.
