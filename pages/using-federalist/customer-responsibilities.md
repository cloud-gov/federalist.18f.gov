---
title: Customer Responsibilities
parent: Using Federalist
---

## Your Responsibilities when using Federalist

Using Federalist places certain responsibilities on you as the government user of Federalist. GSA has many internal sites running on Federalist, but GSA cannot guarantee that Federalist is compatable with your agency's specific policies.

Federalist retains other responsibilities, clarified below. The intent of these policies is to empower you to use Federalist to its full potential with awareness of your responsibilities when using advanced features.

#### You must use a GitHub account to log onto Federalist.

Federalist is a service that leverages GitHub repositories for publishing. Federalist elimates redundancy by allowing GitHub users with editing access to a repository to configure the site on Federalist. This requires Federalist users to authorize the Federalist application on their GitHub account **and** for Federalist to by approved by the parent organizations of repos that are hosted with Federalist.

GitHub is used across the government (see [this dashboard](https://gsa.github.io/github-federal-stats/) from our partners in GSA's Office of Government-wide Policy), and a majority of cabinet agencies have a GitHub presence. However, GSA does not endorse Github and there are other ways to launch static sites if your agency is not prepared to use GitHub. At this time, no prospective Federalist customer has been deterred by integration with GitHub.

#### You own your content

Federalist provides templates for you to start with in configuring your sites, but is not responsible for editing or updating the content or local configuration of your site. The Federalist team ensures that the publishing mechanism remain available to you so that your content edits can be published immediately.

Federalist suggests that you add your 18F point of contact to your repo with editing rights for troubleshooting purposes, but this is not required.

#### You own any custom code on your static webpages

You may wish to use custom Jekyll plugins, Google Analytics from GSA's [Digital Analytics Program](https://www.digitalgov.gov/services/dap/) using embedded Javascript, or other code on your site. Federalist makes this possible - we use analytics extensively on our sites - but you are responsible for the security and stability of any custom code.

Federalist's site management processes prevent any mistakes by one Federalist customer from interfering with the build process of another Federalist customer.

## Federalist's Responsibilities

#### We control access to the core Federalist codebase.

Access to Federalist's configuration tools for your specific content does not grant you access to Federalist's "backend." Federalist's code is open source, but 18F's copy can only be edited by approved members of the 18F team. No one can access Federalist's management tools in [cloud.gov](https://cloud.gov) without FedRAMP-approved two factor authentication.

#### We control access to the hosting service that serves your static webpages

Federalist moves content from your GitHub repositories into a secure build process and then into an "Amazon S3 Bucket" that holds your site files.
