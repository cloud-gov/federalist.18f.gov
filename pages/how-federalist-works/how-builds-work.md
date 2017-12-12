---
title: How Builds Work
---

# How Builds Work

Federalist is a continuous deployment-like build environment for static sites. It works by setting a webhook on your site's GitHub repository and generates your site on each `push` event to that repository, then uploads your site files to S3. Changes made to the site's content and files in its repository through the GitHub web editor or otherwise launch rebuild tasks of the site in a build environment container.

If you don't want to use the Federalist templates, you can add your own GitHub repository to build a completely custom site. When you add a repository-based site, you can choose your build engine: Jekyll, Hugo (experimental), or static, which simply pushes the files in your repository to S3. You can also specify a default branch of your repository to serve as the "production" version of the site.

Federalist is designed to be a modular service. Some people customize their sites by creating new templates. Others use a default template content, editing with GitHub. When used this way Federalist acts a no-configuration, production-ready hosting solution for GitHub-based static websites, hosted using cloud.gov tooling, with a custom domain.

When building our your sites, please remember that all government websites must meet section 508 accessibility standards. 18F provides [guidance for building accessible websites](https://accessibility.18f.gov/).

## Jekyll resources

Federalist can generate any Jekyll website, which lets you build custom websites hosted on Federalist. For documentation on getting started with Jekyll, see [jekyllrb.com](http://jekyllrb.com/).

For an example of a Jekyll site optimized for Federalist, see our [templates]({{site.baseurl}}/pages/using-federalist/templates/).

## Jekyll build features

Federalist provides features beyond just generating Jekyll sites. The steps below outline how to set up custom websites that best take advantage of these features.

### Configuration

Federalist adds a `site.branch` attribute to your global site object with the value of the current branch name. You can access this value in your templates and content and use it to style builds based on the working branch.

### Metadata defaults

If you [specify front-matter defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults) in your Jekyll site configuration, Federalist will pre-fill the front-matter of a new post with these defaults.

### Base URLs

To handle routing sites for previews, Federalist automatically sets a `baseurl` path for your site. This essentially nests your site in a subdirectory under the `federalist.18f.gov` domain, such as `federalist.18f.gov/preview/18f/hub/new-draft`, where `/preview/18f/hub` is the `baseurl`.

All links to other pages or resources on the site require a `baseurl` prefix. If you're designing a custom template to work with Federalist, make sure all references to relative links include `site.baseurl` prefixes, including trailing slashes, as follows:

Link: `{% raw %}[About Us]({{site.baseurl}}/about-us){% endraw %}`

Image: `{% raw %}![18F]({{site.baseurl}}/uploads/18f-logo.png){% endraw %}`

### Jekyll Plugins

Jekyll has a plugin system for adding custom features to the build process of your website. Use-cases for plugins include automatically generating new pages or templates, fetching data or content from external resources, and CCS or JavaScript compilation. [Learn more about Jekyll plugins](http://jekyllrb.com/docs/plugins/).

Federalist supports Jekyll plugins, enabling any plugins in a site's `_plugins` directory. If the site includes a `Gemfile`, Federalist will also run `bundle install && bundle exec jekyll build` to install required Ruby gems and generate the site with those libraries available for use in plugins. You can also use a `Gemfile` to change the version of Jekyll used to build the site.

Several dependencies are already available for use in the building environment. These include `ruby`, `python`, and `node.js`, as well as the [`github-pages` gem](https://pages.github.com/versions/), which includes several common gems used for building sites. You can write plugins that take advantage of these without needing a `Gemfile`.

To see the exact configuration of the build environment, see the [build environment `Dockerfile`](https://github.com/18F/federalist-garden-build/blob/master/Dockerfile) and [base image `Dockerfile`](https://github.com/18F/docker-ruby-ubuntu/blob/master/Dockerfile).

**Note:** using `Gemfile` may considerably slow down the generation of your website, depending on how long the `bundle install` step takes to complete.

## Hugo resources (experimental)

Federalist can also generate websites with [Hugo](http://gohugo.io/), the Go-based static site generator. See the [Hugo Docs](https://gohugo.io/documentation/) for getting started with Hugo.

## Build environment variables

At the time your site is built with either Jekyll or Hugo, a number of special environment variables are exposed. You can access these environment variables with your build engine to customize your build (for instance, to add some special text to your site to show which branch has been built).

See the [federalist-garden-build README](https://github.com/18f/federalist-garden-build#variables-exposed-during-builds) for information on the environment variables that your site build can access.
