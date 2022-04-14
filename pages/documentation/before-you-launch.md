---
title: Before you launch
permalink: /documentation/before-you-launch/
layout: page
sidenav: documentation
redirect_from:
  - /pages/using-federalist/launch-checklist/
  - /documentation/launch-checklist/
---

We've worked to make publishing a government site on Federalist as simple as possible. Please note that while the entire process usually takes a couple days, it may take up to a week, so plan accordingly.

- [Requirements](#requirements)
- [Launch Process](#launch-process)
- [Launch Checklist](#launch-checklist)

## Requirements
- You must have an active, signed IAA with Federalist. Sandbox accounts without IAAs will be unable to configure custom domains and preview urls are **not** suitable for production use.

- Your agency must accept the risk of launching a site on Federalist. This requirement varies by agency, some will accept Federalist's GSA Agency ATO while others may require additional documentation.

- You must understand [your responsibilities](../customer-responsibilities).

- Ensure you know how, or who to contact to make changes to the DNS configuration for your domain.

- If necessary, obtain a custom domain.

## Launch Process
1. Notify Federalist support of your intent to launch along with your repository name/url and production-ready git branch via:
- email: `federalist-support@gsa.gov`
- Slack: `#federalist-support`

2. Federalist support will send you a brief site questionnaire that must be completed before continuing.

3. Upon receipt of the completed site questionnaire, Federalist support will perform a static code scan of your repository and request a live site scan of your preview build to identify any vulnerabilities. If your repository is not open source, you must provide access to the source by either sending an archive to Federalist support or adding a Federalist operator as a read-only collaborator.

4. After all findings from the aforementioned scans are resolved, your site is ready to launch!

5. Complete the process of [adding your custom domain](../custom-domains) and notify Federalist Support. If you are migrating an existing site to Federalist, make sure to review [minimizing downtime](../custom-domains#minimizing-downtime).

6. Federalist Support will reach out once the custom domain has been provisioned and your site is live!! Note, current limitations require a rebuild of your site once it is provisioned, so there may be a slight delay between then the custom domain resolves to your site and when css, images, and other assets are linked properly. This is triggered automatically, but if you have concerns, you can follow the steps in [minimizing downtime](../custom-domains#minimizing-downtime).

7. An additional live site scan of your custom domain will be run by GSA IT just to verify the final configuration, then the Federalist ISSO will share the Site Review document for your product owner to sign.

8. Sign and return the Site Review document provided to the Federalist ISSO.


## Launch Checklist

1. Notify Federalist support that you are ready to launch your site
2. Complete the site questionnaire provided to you by Federalist support
3. Resolve any findings identified by vulnerability scans
4. [Configure your DNS](../custom-domains#configure-your-dns)
5. Notify Federalist support
6. Sign and return the Site Review document to the Federalist ISSO