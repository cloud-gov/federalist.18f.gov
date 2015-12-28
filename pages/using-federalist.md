---
title: Using Federalist
---

## Content strategy

The first step to building a new site is to map a strategy for the site's content. 18F provides a several resources to assist with this process.

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

- **Custom domains** Enter domain (including protocol; without a trailing slash) for your website to host it on a custom domain, for instance, `https://example.gov`. When this setting is defined, Federalist will change the "View" link for your site to use the custom domain. It will also remove the `basurl` when generating your site, so that relative links are relative to the root domain. For more about setting a custom domain, see the "[going live](#going-live-with-a-site)" section below.

- **Custom configuration** Enter a block of `yaml` configuration to append to your `_config.yml` configuration. This configuration is stored in Federalist, so you may use it to store settings that you don't want to commit to your GitHub repository. Federalist automatically adds a `branch` attribute with the name of the rendered branch, accessible in templates as `site.branch`.


## Going live with a site

The following requires elevated access to Amazon Web Services. When you're ready to go live with a Federalist site, **[contact the Federalist team](https://github.com/18F/federalist/issues/new), and we will configure the following settings for you**.

Here is an overview of the process to set up a domain to work with Federalist.

Going live with a site generally consists of 1) setting a custom domain in Federalist, 2) setting up a CloudFront distribution to route to Federalist, and 3) setting your DNS provider to route to that distribution.

### 1. Setting a custom domain in Federalist

Follow the instructions for setting a custom domain in the [previous section](#managing-site-settings). After setting a site's domain on the settings form, take note of the Custom Domain origin. This is the URL at which Federalist hosts your site. To use a custom domain, you'll need to route your domain to this origin URL.

### 2. Setting up a CloudFront distribution

[AWS CloudFront](https://aws.amazon.com/cloudfront/) distributions are an easy way to route requests to a Federalist website. They also provide a way to upload a certificate for HTTPS support.

1. Create a new "web" distribution
2. Paste the Custom Domain origin from Federalist in the Origin Domain Name field. Focusing on the next field on the form will automatically parse the Custom Domain origin into the name and Origin Path fields, as well as populating an Origin ID.
3. The Origin Protocol Policy should be `HTTP Only`
4. The Viewer Protocol Policy should be `Redirect HTTP to HTTPS`
5. Set Object Caching to `Customize` and enter `0` for the three TTL fields
6. Set the Alternate Domain Names (CNAMEs) field to include the custom domains for your site. For subdomains, this is usually one value, such as `example.agency.gov`. For root domains, this is usually takes the form of `example.com, www.example.gov`.
7. Set a custom SSL Certificate. See [Amazon's documentation](http://docs.aws.amazon.com/console/cloudfront/custom-ssl-certificate) for more information.
8. Save the settings and wait for the changes to take effect, which can take up to 30 minutes. You will see a Domain Name for your origin, like `d2q5lcXXXXX.cloudfront.net`. Save this domain name for the next step.

### 3. Setting up a DNS record

Now that you have a domain for your site from CloudFront, the last step is to set your DNS provider to point to this domain. At 18F, we generally use AWS Route 53 for this. If the domain is owned by another agency, create a new hosted zone in Route 53 and request that the agency set the `NS` records for the domain to those provided by Route 53 for the hosted zone.

For subdomains, set a CNAME record in Route 53 (or another DNS provider) to point to the Domain Name value provided by CloudFront.

For root domains, you need to use a DNS provide like AWS Route 53 that supports `Alias` records. In Route 53, add a new `A` record set to your hosted zone as an `Alias` that points to the CloudFront distribution.

Once this setting propagates, your site will be available at the custom domain.
