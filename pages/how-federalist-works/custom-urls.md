---
title: Custom URLs
parent: How Federalist Works
---

## How Federalist custom URLs work

This is a explanation of how custom domains work on Federalist.

Without explicit configuration, Federalist deploys sites to an S3 bucket such as [http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/18F/federalist-landing-page-template/](http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/18F/federalist-landing-page-template/). These sites are public and useful for testing, but the URLs are not useful and there's no HTTPS.

Working with a cloud.gov tool and DNS configuration owners at your agency, Federalist sites can be served from an address like yourprogram.youragency.gov. In plain language, cloud.gov creates a new web address and points it at your Federalist content. You then point yourprogram.youragency.gov at the new web address, which completes a technical connection to your content.

To get the URLs and HTTPS to work for your production site, there are a few technical steps:

 - Confirm you are ready for your site to go-live at its permanent URL (this process should not be abandoned while incomplete).
 - The Federalist team uses the cloud.gov CloudFront broker to begin set up for a distribution for a given URL.
  - If you are also a cloud.gov customer (which isn't required Federalist), you can do this by navigating to your org/space and doing this command `cf create-service cdn-route cdn-route YOUR.URL.gov-route -c '{"domain": "YOUR.URL.gov", "origin": "bucketname.s3-website-us-gov-west-1.amazonaws.com", "path": "/site/org/repo-name", "insecure_origin": true}'`. Otherwise, we're happy to take care of it.
 - After running the command above, the command `cf service YOUR.URL.gov-route` is used to retrieve the CloudFront URL to be used in DNS changes. We'll communicate that URL to you as needed.
 - You, our partner, set your DNS records with a CNAME to delegate the subdomain (e.g. yourprogram.youragency.gov) to the CloudFront distribution URL (e.g. d2oezh1w8w4o1u.cloudfront.net).
   - It takes roughly 30 minutes for the d2oezh1w8w4o1u.cloudfront.net-style URL to start pointing at your specified origin/path. Once yourprogram.youragency.gov shows your site content (perhaps without images or CSS) under the correct HTTPS certificate, you'll know the CloudFront delegation process is complete.
 - Modify your site's Federalist's configuration with the custom URL to ensure assets and CSS are configured appropriately for the custom URL.
 - The site is then served from the CloudFront broker with automatic HTTPS. You retain control over the DNS settings.

Here's a [specific GitHub issue](https://github.com/18F/federalist/issues/551#issuecomment-255841203) with instructions from a successful migration. Note that the HTTPS certifications are managed automatically by the broker using [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt), which means there is no cost for the HTTPS certificate for you or 18F.
