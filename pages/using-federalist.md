---
title: Using Federalist
---

### Adding a new site

Federalist shows you a list of your existing sites along with a button to add a new site. When you add a new site, Federalist offers you a list of available templates. Select "use this template" under a template to use it on your new website.

After you pick a template, your new site will be built and added to your list of websites. If you don't see a new "view site" link in your list of websites, refresh the page. Sometimes there is a slight delay as your website finishes building.

## Federalist templates

Federalist provides templates for common websites. Here are the templates currently available:

#### U.S. Web Design Standards Landing and Docs Template
![US Web Design Standards template](https://federalist.18f.gov/images/uswds.thumb.png)

#### Multi Page Template
![Multi Page Template](https://federalist.18f.gov/images/team.thumb.png)

#### Single Page Template
![Single Page Template](https://federalist.18f.gov/images/landing.thumb.png)

Additionally, Federalist will build any Jekyll-based website, supporting [custom website templates]({{site.baseurl}}/pages/custom-templates/).

## Content strategy

The first step to building a new site is to map a strategy for the site's content. 18F provides several resources to assist with this process.

The [18F method cards](https://methods.18f.gov/) are an overview of several different approaches for researching user needs and designing a website. This is often the best place to start for new projects.

The Federalist team also provides a [content guide specifically for Federalist websites]({{site.baseurl}}/pages/content-guide/). This guide will help you "convey what your team does, using language and tone that a general audience will understand, or how to think about what to write in each section of your new website."


## Managing site settings

The settings option for a site lets you adjust how Federalist handles the site. These settings are for advanced functionality and most people will not need to change them.

- **Default branch** This is the branch of the site's repository that is built and hosted as the production version of the site. Other branches are considered drafts. Changing this value will rebuild the site using a different branch.

- **Static Site Engine** This controls if Federalist builds your site using Jekyll then hosts it, or simply hosts content you've already generated. If using a template, this should always be "Jekyll."

- **Custom domains** Enter domain (including protocol; without a trailing slash) to host your website on a custom domain. For example, `https://example.gov`. When this setting is defined, Federalist will change the "View" link for your site to use the custom domain. It will also remove the `baseurl` when generating your site, so that relative links are relative to the root domain. For more about setting a custom domain, see the "[launch checklist]({{site.baseurl}}/pages/using-federalist/launch-checklist)" section.

- **Demo Site** Federalist allows you to specify a different branch and domain for a "demo site" that can be used to publicly preview your content at a URL of your choice, such as "preview.login.gov." Launch of a demo URL works just like a live URL from a security standpoint.

- **Custom configuration (site and preview) ** For advanced Jekyll users, you can append different settings to your `_config.yml` configuration during build. This configuration is stored in Federalist, so you may use it to store settings that you don't want to commit to your GitHub repository. Federalist automatically adds a `branch` attribute with the name of the rendered branch, accessible in templates as `site.branch`.
