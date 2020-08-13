---
title: Launch Checklist
permalink: /documentation/launch-checklist/
layout: page
sidenav: documentation
redirect_from: 
  - /pages/using-federalist/launch-checklist/

---

We've worked to make launching a live site on Federalist as simple as possible. You will need to complete these steps:

1. Sign an IAA with 18F to use Federalist.
1. Verify that your agency accepts the risk of launching a site on Federalist.
1. Build your site and verify that the site is ready for launch using our URL previews.
1. Contact the Federalist team; as part of our compliance process, GSA IT will complete a security scan of your site and let you know of the results within a week.  The Federalist team will also ask you to complete a brief questionnaire providing background information on your site.
1. When you are ready to launch your site with a production-ready URL (ie: www.example.gov), you must apply the following DNS changes to obtain your auto-renewed TLS certificate and make your site accessible at your domain:
	1. create a CNAME for `_acme-challenge.www.example.gov.` with value `_acme-challenge.www.example.gov.external-domains-production.cloud.gov.`.
	1. create an CNAME for `www.example.gov.` with value `www.example.gov.external-domains-production.cloud.gov.`
	(Note: Please be aware that you cannot set a CNAME for a root domain.  If you are looking to set a CNAME for a root domain like example.gov, a common solution is to create the domain www.example.gov, set the CNAME for www.example.gov, and setup a redirect from example.gov to www.example.gov. If you're migrating your already live site to Federalist and would like to minimize downtime, you can opt to complete this step after the Cloudfront distribution is provisioned and your TLS certificate is issued).
1. Let the Federalist team know that your DNS settings have been made and you are ready for the Federalist team to provision your site's CloudFront distribution.  Be sure to provide your site's preview url.
1. The Federalist team uses the [cloud.gov CloudFront broker](https://cloud.gov/docs/services/external-domain-service/) to provision a Cloudfront Distribution for your given URL.
1. Once your site's TLS certificate is issued, your site content will be available at your custom URL. If your assets (Javascript, CSS, Images, etc ) do not load properly, you will need to make sure your custom URL is properly set in Federalist web interface. Technical background on this process is [here]({{site.baseurl}}/documentation/custom-urls/).
1. After your customURL is set in the Federalist web interface, Federalist will rebuild your site, which will set the proper URLs in the site.  Once the site is rebuilt, you will be fully live.
