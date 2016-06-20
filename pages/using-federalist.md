---
title: Using Federalist
---

## Content strategy

The first step to building a new site is to map a strategy for the site's content. 18F provides several resources to assist with this process.

The [18F method cards](https://methods.18f.gov/) are an overview of several different approaches for researching user needs and designing a website. This is often the best place to start for new projects.

The Federalist team also provides a [content guide specifically for Federalist websites]({{site.baseurl}}/pages/content-guide/). This guide will help you "convey what your team does, using language and tone that a general audience will understand, or how to think about what to write in each section of your new website."

## Federalist templates

Federalist provides templates for common websites. Here are the templates currently available:

#### Modern organization home page based on the US Web Design Standards
![US Web Design Standards template](https://federalist.18f.gov/images/team.thumb.png)

#### Simple website for content-focused microsites
![Microsite template](https://federalist.18f.gov/images/microsite.thumb.png)

#### Documentation for an API and developer resources
![Developer hub](https://federalist.18f.gov/images/developer.thumb.png)

Additionally, Federalist will build any Jekyll-based website, supporting [custom website templates]({{site.baseurl}}/pages/custom-templates/).


### Adding a new site

After logging into Federalist, you will see a list of your sites and a button to add a new site. When adding a new site, you will see a list of available templates. Select "use this template" under a template to use it as a basis for your new website.

After selecting a template, you'll go back to the site listing where your new site will be available after it finishing building for the first time.


## Editing content

The Federalist web editor provides a simplified tool for editing your website content. After opening a site in the editor, you will a list of pages in your site. Pages are nested to reflect the menu hierarchy of your site. Select any page to edit its content.


### Main body content

Edit main body content of a page using the rich text editor. This editor provides a toolbar for formatting options including links, lists, and header styles. Enter text in the main field. Highlight text and select a formatting option to apply it. The arrow buttons undo and redo changes.

The editor supports uploading images and referencing those that were uploaded previously. The image button opens a browser of past images. Selecting one adds it to the page's content.


### Page settings

Page settings include additional elements of a page's design, including its title, layout, and permalink — the relative URL for the page. Additional settings may be available depending on the template. For instance, the "Modern homepage" template includes an optional `image` setting for the URL to a feature image that appears at the top of the page.


### Saving changes

The save button with store any changes you made to content or settings on a page. There is an optional field to enter a log message describing your changes. This log message is useful for reviewing the history of changes to a page.

Once you save a page, Federalist will rebuild your site with the new changes. This process may take some time, depending on your site template. By returning to the site listing page, you may view the latest version of your site or check the log to see the status of recent builds.


## Managing site settings

The settings option for a site lets you adjust how Federalist handles the site. These settings are generally for advanced functionality and most users will not need to change them.

- **Default branch** This is the branch of the site's repository that is gets built and hosted as the production version of the site. Other branches are considered drafts. Changing this value will rebuild the site using a different branch.

- **Draft previews** By default, preview builds of a site are only visible to users who log into Federalist. You can change this setting to make preview builds available without authentication. This is useful for circling drafts of a site to others who do not have accounts on Federalist.

- **Custom domains** Enter domain (including protocol; without a trailing slash) for your website to host it on a custom domain, for instance, `https://example.gov`. When this setting is defined, Federalist will change the "View" link for your site to use the custom domain. It will also remove the `basurl` when generating your site, so that relative links are relative to the root domain. For more about setting a custom domain, see the "[launch checklist]({{site.baseurl}}/pages/using-federalist/launch-checklist)" section below.

- **Custom configuration** Enter a block of `yaml` configuration to append to your `_config.yml` configuration. This configuration is stored in Federalist, so you may use it to store settings that you don't want to commit to your GitHub repository. Federalist automatically adds a `branch` attribute with the name of the rendered branch, accessible in templates as `site.branch`.
