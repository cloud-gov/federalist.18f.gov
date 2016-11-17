---
title: Using Federalist
---

### Adding a new site

Federalist shows you a list of your existing sites along with a button to add a new site. When you add a new site, Federalist offers you a list of available templates. Select "use this template" under a template to use it on your new website.

After you pick a template, your new site will be built and added to your list of websites. If you don't see a new "view site" link in your list of websites, refresh the page. Sometimes there is a slight delay as your website finishes building.

## Federalist templates

Federalist provides templates for common websites. Here are the templates currently available:

#### Modern organization home page based on the Draft US Web Design Standards
![US Web Design Standards template](https://federalist.18f.gov/images/team.thumb.png)

#### Landing Page for Information about a Released Report
![Landing Page template](https://github.com/18F/federalist/raw/master/assets/images/landing.thumb.png)

#### Simple website for content-focused microsites
![Microsite template](https://federalist.18f.gov/images/microsite.thumb.png)

#### Documentation for an API and developer resources
![Developer hub](https://federalist.18f.gov/images/developer.thumb.png)

Additionally, Federalist will build any Jekyll-based website, supporting [custom website templates]({{site.baseurl}}/pages/custom-templates/).

## Editing content

The Federalist web editor is a simplified tool for editing your website content directly from your web browser. After opening a site in the editor, you will see all of the files that make up your website. The `pages` folder holds the content that people visiting your website will see. You can select any page in this folder to edit its content.

The rich text editor gives you a toolbar for formatting options including links, lists, and header styles.

Your site should be drafted using links like this: `[Our Work]({{site.baseurl}}/work/)`. The "site.baseurl" framing allows multiple versions of the links to be built on preview copies of the site without interfering with the live site.  Enter text in the main field. Highlight text and select a formatting option to apply it. The arrow buttons undo and redo changes. 

You can use the editor to uploaded new images and insert images that you've already uploaded. The image button opens a browser of past images. Selecting one adds it to the page's content. Please note that image support is not as robust as in a full CMS.


### Page settings

Page settings give you control of additional elements of a page's design, including its title, layout, and URL (for example, you might set the URL to /about/ in order for the page to be accessible at www.xyz.gov/about). Some templates have unique settings that show up here as well. For instance, the "modern homepage" template allows you to set a feature image for some pages within page settings.


### Saving changes

The save button will store any changes you made to content or settings on a page. There is an optional field to enter a log message describing your changes. This log message is useful for reviewing the history of changes to a page.

When you save a page, Federalist will automatically rebuild your site to publish the new changes to the internet. This process may take some time, depending on your site template. By returning to the site listing page, you may view the latest version of your site or check the log to see the status of recent builds.

If you save a page as a draft, Federalist will provide a button to view the draft page. For those making edits directly in GitHub, the drafts are available for preview (with Federalist login) at `https://federalist.18f.gov/preview/:owner/:repo/:branch/`.

## Content strategy

The first step to building a new site is to map a strategy for the site's content. 18F provides several resources to assist with this process.

The [18F method cards](https://methods.18f.gov/) are an overview of several different approaches for researching user needs and designing a website. This is often the best place to start for new projects.

The Federalist team also provides a [content guide specifically for Federalist websites]({{site.baseurl}}/pages/content-guide/). This guide will help you "convey what your team does, using language and tone that a general audience will understand, or how to think about what to write in each section of your new website."


## Managing site settings

The settings option for a site lets you adjust how Federalist handles the site. These settings are for advanced functionality and most people will not need to change them.

- **Default branch** This is the branch of the site's repository that is built and hosted as the production version of the site. Other branches are considered drafts. Changing this value will rebuild the site using a different branch.

- **Draft previews** By default, preview builds of a site are only visible to users who log into Federalist. You can change this setting to make preview builds available without authentication. This is useful for sharing drafts of a site with others who do not have accounts on Federalist.

- **Custom domains** Enter domain (including protocol; without a trailing slash) to host your website on a custom domain. For example, `https://example.gov`. When this setting is defined, Federalist will change the "View" link for your site to use the custom domain. It will also remove the `basurl` when generating your site, so that relative links are relative to the root domain. For more about setting a custom domain, see the "[launch checklist]({{site.baseurl}}/pages/using-federalist/launch-checklist)" section.

- **Custom configuration** Enter a block of `yaml` configuration to append to your `_config.yml` configuration. This configuration is stored in Federalist, so you may use it to store settings that you don't want to commit to your GitHub repository. Federalist automatically adds a `branch` attribute with the name of the rendered branch, accessible in templates as `site.branch`.
