---
layout: page
sidenav: documentation
title: Getting started with Netlify CMS
permalink: /documentation/getting-started-with-netlify-cms/
---

Federalist recently integrated support for Netlify CMS, an open source content management system for your Git workflow that provides editors with a friendly UI and intuitive workflows.

### Building a new site from template
Netlify CMS functionality is now built into the base Federalist Jekyll and Gatsby templates. To begin utilizing: 
1. select the [template]({{site.baseurl}}/documentation/templates/) that you wish to use as your base site
2. navigate to the new repository that Federalist created, and update the Netlify CMS configuration to point to the current repository

```
    # Jekyll: /admin/config.yml
    # Gatsby or Hugo: /static/admin/config.yml

    backend:
      ...
      name: github
      repo: <your org>/<your repo>
      ...
```

3. once your site is rebuilt in Federalist, Netlify CMS is ready to use! Navigate to `https://<site url>/admin` and edit away.

### Adding Netlify CMS to existing site
If your site is already up and running, please follow the instructions on [Netlify's Add To Your Site](https://www.netlifycms.org/docs/add-to-your-site/) page to add Netlify CMS. Please pay particular attention to the location of the admin folder depending on your static site generator.

Jekyll:
/admin/config.yml

Gatsby or Hugo:
/static/admin/config.yml

### Getting familiar with Netlify CMS
To learn more about Netlify CMS and how it may help you manage content changes on your Federalist site, please visit [netlifycms.org/](https://www.netlifycms.org/) 

[GovCloud](https://cloud.gov/docs/apps/govcloud/) region in [cloud.gov](https://cloud.gov/docs/)
