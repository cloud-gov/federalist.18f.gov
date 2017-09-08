---
permalink: /
title: About Federalist
---

Federalist is a compliant web publishing service for [open source](https://github.com/18F/federalist) [static sites](https://18f.gsa.gov/2016/07/11/conversation-about-static-dynamic-websites/) created by the United States federal government. It provides templates for websites and access to cloud-based infrastructure for high-scale hosting along with [several other unique features]({{site.baseurl}}/pages/how-federalist-works/included-with-federalist/) that offer great value to our agency partners.

The team at [18F](https://18f.gsa.gov/) builds and maintains Federalist as a service available to federal government agencies. We also use Federalist to host many of our own websites.

## Evaluating Federalist for your office or agency

Federalist is [out of beta and open for business](https://18f.gsa.gov/2017/06/01/federalist-is-out-of-beta-and-open-for-business/)! If you work for a federal agency and are interested in buying Federalist [please let us know](https://docs.google.com/forms/d/1iB8aW7c9r1QH3s8XElQCrnXRGjAiPUYpWG1CMeEqGIo/viewform) (note to TTS bug bounty participants: this form is out of scope). If you can't access the GSA Google Form, please reach out to federalist-inquiries@gsa.gov.

## Why static websites?

Federalist generates static websites instead of using a more complex content management system (CMS) like Drupal or Wordpress. There are several advantages to static websites:

- **Less complexity and vulnerability:** Avoiding the use of a traditional CMS means avoiding problems like maintaining dynamic server applications (no PHP or Apache / IIS) in addition to database scaling and redundancy. Production-level static sites generally require one simple static file server or service as opposed to dozens. This means that the whole website is easier to maintain and has fewer vulnerabilities.

- **Update content without writing code:** Static websites store content in simple text files that anyone on the team can edit. The GitHub editor enables any team member to complete basic edits to their text files regardless of their experience writing code.

- **Easy to host and maintain:** It’s very easy to host static website files on Federalist. You can easily take advantage of scaling services like Amazon S3 through Federalist where you pay only for what you use.

- **Fully customizable:** Designers and developers can customize static websites into whatever form they want without having to strip away CMS-provided features and defaults. Static sites can be used to build many different types of sites, from organization homepages or intranets to pre-generated web application program interfaces that display data from a separate server.

## What can I build with Federalist?

Federalist provides [ready-to-use templates]({{site.baseurl}}/pages/using-federalist/#federalist-templates) for several common website types. You can also use custom website templates based on Jekyll. 18F maintains many Jekyll-based websites that you can fork and adopt.

Possible sites include:

- A simple homepage for your government organization with information about personnel and contact information.

- Data visualization sites that pull data from a separate API server (Federalist does not provide API servers).

- A single page with information about a recently released report that may receive a lot of traffic.

For real world examples, see these [ten existing sites]({{site.baseurl}}/pages/about-federalist/example-sites/) out of the 79 sites currently live on Federalist.
