---
title: What is Federalist
---

Federalist is an [open source](https://github.com/18F/federalist) web publishing platform for the United States federal government. It provides templates for websites, an online editor for maintaining content, and cloud-based infrastructure for high-scale, low-cost website hosting.

The team at [18F](https://18f.gsa.gov/) builds and maintains it as a hosted service available to federal government agencies.

## Why build static websites

Federalist generates static websites as opposed to using a content management system (CMS) like Drupal or Wordpress. Static websites are collections of text files as opposed to applications that dynamically generate website content.They have several advantages:

- **Easy to host and maintain** It’s very easy to host static website files, and services like Amazon S3 offer very high scalability where you pay only for what you use.

- **Less complexity and vulnerability** Avoiding CMSs means avoiding problems like maintaining dynamic server applications (no PHP or Apache / IIS) and database scaling and redundancy. Production-level static sites generally require one simple static file server or service as opposed to dozens.

- **Fully customizable** Static websites take any form developers and designers intend without the need to strip away CMS-provided features and defaults. Possible applications of static sites vary widely, from organization homepage or intranet to pre-generated web application program interfaces (API).

Static websites store content in text files. The Federalist editor provides a way for editing these files without needing to write code.


## What sites are possible with Federalist

Federalist provides ready-to-use templates for common websites:

#### Modern organization home page based on the US Web Design Standards
![US Web Design Standards template](https://federalist.18f.gov/images/team.thumb.png)

#### Simple website for content-focused microsites
![Microsite template](https://federalist.18f.gov/images/microsite.thumb.png)

#### Documentation for an API and developer resources
![Developer hub](https://federalist.18f.gov/images/developer.thumb.png)

Additionally, Federalist will build any Jekyll-based website, supporting completely custom websites.

Here are a few examples of Federalist websites in production:

![College Scorecard]({{site.baseurl}}/uploads/college-scorecard.png)
**[The College Scorecard](https://collegescorecard.ed.gov/)**


![SBST.gov]({{site.baseurl}}/uploads/sbst.png)
**[The Social and Behavioral Sciences Team](https://sbst.gov/)**


![NotAlone.gov]({{site.baseurl}}/uploads/notalone.png)
**[NotAlone.gov](https://www.notalone.gov/)**


## Getting started

Federalist is currently under active development. We are working with a select list of partners to test the platform and launch new websites. Starting in the first quarter of 2016, we plan to open Federalist to all federal government agencies. We estimate the cost for the platform to be below $750 / per month / per site.

If you have a project that you think would be a good git for Federalist, [please let us know](https://docs.google.com/forms/d/1iB8aW7c9r1QH3s8XElQCrnXRGjAiPUYpWG1CMeEqGIo/viewform).
