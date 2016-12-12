---
title: Custom URLs
parent: How Federalist Works
---

## How Federalist custom URLs work

This is a technical explaination of how custom domains work on Federalist.

Without explicit configuation, Federalist deploys sites to an S3 bucket such as [http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/18F/federalist-landing-page-template/](http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/18F/federalist-landing-page-template/). These sites are public and useful for testing, but the URLs are not useful and there's no HTTPS.

To get the URLs and HTTPS to work for your production site, there are a few steps:

 - Confirm you are ready for your site to go-live.
 - The Federalist team uses the cloud.gov CloudFront broker to set up a distribution for a given URL.
  - If a cloud.gov customer (not required to use Federalist), you do this by navigating to your org/space and doing this command `cf create-service cdn-route cdn-route YOUR.URL.gov-route -c '{"domain": "YOUR.URL.gov", "origin": "bucketname.s3-website-us-gov-west-1.amazonaws.com", "path": "/site/org/repo-name", "insecure_origin": true}'`
 - You, our partner, set your DNS records to delegate the subdomain to a CloudFront distribution such as d2oezh1w8w4o1u.cloudfront.net provided by the route command above with a CNAME.
   - It takes roughly 30 minutes for the d2oezh1w8w4o1u.cloudfront.net-style URL to start pointing at your specified origin/path.
 - Modify your site's Federalist's configuration with the custom URL to ensure assets and CSS are configured appropiately for the custom URL.
 - The site is then served from the CloudFront broker with automatic HTTPS. You retain control over the DNS settings.
 
Here's a [specific GitHub issue](https://github.com/18F/federalist/issues/551#issuecomment-255841203) with instructions from a successful migration. Note that the HTTPS certifications are managed automatically by the broker using [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt), which means there is no cost for the HTTPS certificate for you or 18F.
