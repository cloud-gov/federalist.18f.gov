---
title: Custom URLs
parent: How Federalist Works
---

## How Federalist custom URLs work

This is technical documentation about how custom domains work on Federalist. It is not required reading to use Federalist and only provided for background; instructions for our partners are [here](/pages/using-federalist/launch-checklist/).

Federalist deploys sites to S3 bucket, which is available at a .com URL such as [http://cg-06ab120d-836f-49a2-bc22-9dfb1585c3c6.s3-website-us-gov-west-1.amazonaws.com/site/18f/federalist-modern-team-template/](http://cg-06ab120d-836f-49a2-bc22-9dfb1585c3c6.s3-website-us-gov-west-1.amazonaws.com/site/18f/federalist-modern-team-template/) (broken CSS on the page is known and explained below). These web addresses are public and useful for testing, but the URLs are not useful and there's no HTTPS.

The Federalist Proxy fronts sites on the S3 URL at URLs such as [https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/](https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/) (broken CSS on the page is known and explained below). The proxy adds some required headers.

Partners point yourprogram.youragency.gov at a CloudFront service created by a cloud.gov broker, which is pointed to the proxy, which completes a technical connection to the S3 bucket contents that leverages a a scalable content delivery network and provides automatic HTTPS certificate renewal.

Here's a full example chain:

 - https://federalist-modern-team-template.18f.gov/ is CNAME'd to https://d2xyasfn4889hb.cloudfront.net/
 - https://d2xyasfn4889hb.cloudfront.net/ is set to load from [https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/](https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/)
 - [https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/](https://federalist-proxy.app.cloud.gov/site/18f/federalist-modern-team-template/) proxies [http://cg-06ab120d-836f-49a2-bc22-9dfb1585c3c6.s3-website-us-gov-west-1.amazonaws.com/site/18f/federalist-modern-team-template/](http://cg-06ab120d-836f-49a2-bc22-9dfb1585c3c6.s3-website-us-gov-west-1.amazonaws.com/site/18f/federalist-modern-team-template/)

### Technical Steps to set up a new site

 - The partner confirms readiness for the site to go-live at its permanent URL (this URL process needs to happen within a few hours timespan when started).
 - The Federalist team uses the cloud.gov CloudFront broker to begin set up for a distribution for a given URL.
  - We do this by accessing our org in cloud.gov and running the command `cf create-service cdn-route cdn-route YOUR.URL.gov-route -c '{"domain": "YOUR.URL.gov", "origin": "federalist-proxy.app.cloud.gov", "path": "/site/<org>/<repo-name>"}'`. Note that the path argument here does not have a trailing slash.
 - After running the command above, the command `cf service YOUR.URL.gov-route` is used to retrieve the CloudFront URL to be used in DNS changes. We communicate that URL to whoever sets the DNS records.
 - The partner sets DNS records with a CNAME to point the subdomain (e.g. yourprogram.youragency.gov) to the CloudFront distribution URL (e.g. d2oezh1w8w4o1u.cloudfront.net).
   - It takes roughly 15-30 minutes for the CNAME to a d2oezh1w8w4o1u.cloudfront.net-style URL to propagate and the broker to create an HTTPS certificate, which also must propagate. Once yourprogram.youragency.gov shows site content (perhaps without images or CSS) under the correct HTTPS certificate, the CloudFront delegation process is complete.
 - The partner then modifies their site's Federalist's configuration with the custom URL to ensure assets and CSS are loaded at the custom URL. This is deliberate so that the site only loads at the correct URL, such as [https://federalist-modern-team-template.18f.gov/](https://federalist-modern-team-template.18f.gov/).
 - The site is then served from the CloudFront broker with automatic HTTPS. Partners retain control of DNS.

Here's a [specific GitHub issue](https://github.com/18F/federalist/issues/551#issuecomment-255841203) with instructions from a successful migration. Note that the HTTPS certifications are managed automatically by the broker using [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt), which means there is no cost for the HTTPS certificate to partners or 18F.
