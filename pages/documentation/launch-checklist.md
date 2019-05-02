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
3. Build your site and verify that the site is ready for launch using our URL previews.
4. Contact the Federalist team; as part of our compliance process, GSA will complete a security scan of your site and let you know of the results within a week.
5. When you are ready to launch your site with a production-ready URL, the Federalist team will provide you with a CloudFront URL (For example: https://d2xyasfn4889hb.cloudfront.net/) and TXT record (needed to issue your auto-renewed TLS certificate). You'll need to configure your DNS records with the CNAME and TXT values within 24 hrs. 
6. When you set the CNAME for your domain, a SSL certificate will automatically be created and associted with your domain. If you do not set the Cloudfront CNAME within 24 hrs, your certificate will expire and we will need to regenerate the certificate.
6. Once the domain is set, your site content will be available at your agency URL. If your assets (Javascript, CSS, Images, etc ) do not load properly, you will need to make sure your domain is properly set in Federalist web interfac. Technical background on this process is [here]({{site.baseurl}}/documentation/custom-urls/).
7. Once you set a custom URL, you will need to make sure you rebuild your site, which will set the proper URLs in the site
