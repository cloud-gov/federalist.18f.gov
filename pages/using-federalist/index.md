---
title: Using Federalist
permalink: /pages/using-federalist/
---

# Using Federalist

![Federalist Sitelist Screenshot]({{site.baseurl}}/assets/images/federalist-sitelist.png)

### Getting Authorized to use Federalist

Before you start using Federalist, the Federalist team needs to authorize you to use Federalist, either for a live site or for testing during the sales process. This will happen as part of business development conversations with the Federalist team or upon agreement execution.

### Adding a new site
![Federalist Sitelist Screenshot]({{site.baseurl}}/assets/images/federalist-makesite.png)
Federalist shows you a list of your existing sites along with a button to add a new site. When you add a new site, Federalist offers you a list of [available templates]({{site.baseurl}}/pages/using-federalist/templates/). Select "use this template" under a template to use it on your new website. Additionally, Federalist will build any Jekyll or Hugo website, supporting [custom website templates]({{site.baseurl}}/pages/custom-templates/). Hugo support is currently experimental.

After you pick a template or an existing repo to add to Federalist, your new site will be built and added to your list of websites. If you don't see the new site in your list of websites, refresh the page. Sometimes there is a slight delay as your website finishes building.

## Content strategy

The first step to building a new site is to map a strategy for the site's content. 18F provides several resources to assist with this process.

The [18F method cards](https://methods.18f.gov/) are an overview of several different approaches for researching user needs and designing a website. This is often the best place to start for new projects.

The Federalist team also provides a [content guide specifically for Federalist websites]({{site.baseurl}}/pages/content-guide/). This guide will help you "convey what your team does, using language and tone that a general audience will understand, or how to think about what to write in each section of your new website."

## Managing site settings
![Federalist Settings Screenshot]({{site.baseurl}}/assets/images/federalist-settings.png)

The settings option for a site lets you adjust how Federalist handles the site. These settings are for advanced functionality and most people will not need to change them.

#### Basic Settings
- **Live Site Branch** This is the branch of the site's repository that is built and hosted as the production version of the site. Other branches are considered drafts. Changing this value will rebuild the site using a different branch.

- **Custom domains** Enter domain (including https://; without a trailing slash) to host your website on a custom domain. For example, `https://example.gov`. When this setting is defined during the launch process, Federalist will build your site so that links and images are loaded at the custom domain, and so that relative links are set according to the custom domain. For more about setting a custom domain, see the "[launch checklist]({{site.baseurl}}/pages/using-federalist/launch-checklist)" section.

- **Demo Site** Federalist allows you to specify a different branch and domain for a "demo site" that can be used to publicly preview your content at a URL of your choice, such as "preview.login.gov." Launch of a demo URL works just like a live URL from a security standpoint.

#### Advanced Settings
- **Static Site Engine** This controls if Federalist builds your site using Jekyll or Hugo, or simply hosts content you've already generated. If using one of the Federalist provided templates, this should always be "Jekyll." The site engine should not be altered once your site is live. Contact the Federalist team for additional support.

- **Custom configuration (site and preview)** For advanced Jekyll users, you can append different settings to your `_config.yml` configuration during build. This configuration is stored in Federalist, so you may use it to store settings that you don't want to commit to your GitHub repository. Federalist automatically adds a `branch` attribute with the name of the rendered branch, accessible in templates as `site.branch`.
