---
title: Custom Templates
---

Federalist is a continuous deployment-like build environment for static sites. It works by setting a webhook on your site's GitHub repository and generates your site on each `push` event to that repository. Changes made to the site's content and files in its repository through the Federalist web editor or otherwise launch rebuild tasks of the site in a build environment container.

In addition to using the templates provided by Federalist, you may add your own GitHub repository to build a completely custom site. When adding a repository-based site, you may select a build engine: Jekyll, Hugo (not yet implemented), or static, which simply pushes the files in your repository.

You may also specify a default branch of your repository to serve as the "production" version of the site.

Federalist is designed to be a modular service. Some users only use this build process and make edits directly through GitHub or their own git-based workflow. Doing so provides a no-configuration production-ready hosting solution for GitHub-based static websites on 18F infrastructure with a custom domain. Others set up their custom sites to work with the Federalist web editor just like the provided templates.

## Jekyll resources

Federalist generates any Jekyll website. This allows you to build custom websites hosted on Federalist. For documentation on getting started with Jekyll, see [jekyllrb.com](http://jekyllrb.com/).

For an example of a Jekyll site optimized for Federalist, see the [federalist-modern-team-template](https://github.com/18F/federalist-modern-team-template).

## Federalist features

In addition to generating Jekyll sites, Federalist provides several features. The steps below outline how to set up custom websites that best take advantage of these.

### Configuration

Federalist adds a `site.branch` attribute to your global site object with the value of the current branch name. You may access this value in your templates and content. It's useful for styling a build differently based on a branch.


### Content editor

Federalist provides a web-based content editor. To best take advantage of the content editor, content files should be in standard Markdown, with files ending in `.md`, and containing no embedded HTML (while embedded HTML is supported in Markdown, it does not currently work with our editor). When users open a Markdown file on Federalist, they will see a simple rich text editor with inline formatting for font styles, links, images, and lists.

If your markdown files include non-standard elements or embedded HTML, users will instead see a text editor for the raw Markdown files.

If users open files with a `.html` extension, they will be redirected to the editor on GitHub.com.

### Navigation menu

Federalist will show a file listing for any repository/project that is added to it. By default, this listing is all of the files in the project, and enables the user to browser through them. However, as part of our effort to break away from `git` paradigms for content editors, we want to lay out the file listing in a more usable way. Instead of showing "files", we want to show the user only the "pages" they should be thinking about with regards to editing content.

Federalist looks for a `_navigation.json` file in the root of a project to denote what "files" are "pages" that the user needs to care about. This file can be generated in any form, though for Jekyll sites it is likely best if `_navigation.json` is generated dynamically after each build, to make sure it stays current and up to date.

Since Jekyll will not generate files that start with an underscore, be sure to add `_nagivation.json` to your `_config.yml` file under the `include` block:

```yml
include:
  - _navigation.json
```

The schema for `_navigation.json` is simple.

Each "page" must have:

1. A `title` value, which should be a string. This will be the title shown to the user of the page in the listing
2. A `href` value, which should point to the respective "file". This link will be displayed as "Edit" in Federalist and should link the user to the proper file, loaded into the editor. The value should not begin with a "/" and should be a relative URL from the root of the project structure (not the generated output).

A "page" may have the following:

1. A `children` value, which should be an array of pages. This explains hierarchy to Federalist so that pages can be shown under their conceptual parents.

Here is an example of a small `_navigation.json`:

```json
[
  {
    "title": "About",
    "href": "pages/about.md"
  },
  {
    "title": "Approach",
    "href": "pages/approach.md"
  },
  {
    "title": "Work",
    "href": "pages/work.md",
    "children": [
      {
        "title": "Project 1",
        "href": "pages/projects/microloans-for-farmers.md"
      },
      {
        "title": "Project 2",
        "href": "pages/projects/reducing-summer-melt.md"
      }
    ]
  }
]
```

### Metadata defaults

If you [specify front-matter defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults) in your Jekyll site configuration, Federalist will pre-fill the front-matter of a new post with these defaults.

### Base URLs

To handle routing sites for previews, Federalist automatically sets a `baseurl` path for your site. This essentially nests your site in a subdirectory under the `federalist.18f.gov` domain, such as `federalist.18f.gov/preview/18f/hub/new-draft`, where `/preview/18f/hub` is the `baseurl`.

All links to other pages or resources on the site require a `baseurl` prefix. The Federalist editor takes care of this when users create links or embed images. If you're designing a custom template to work with Federalist, make sure all references to relative links include `site.baseurl` prefixes, including trailing slashes, as follows:

Link: `{% raw %}[About Us]({{site.baseurl}}/about-us){% endraw %}`

Image: `{% raw %}![18F]({{site.baseurl}}/uploads/18f-logo.png){% endraw %}`

### Jekyll Plugins

Jekyll supports a plugin system for adding custom features to the build process of your website. Use-cases for plugins include automatically generating new pages or templates, fetching data or content from external resources, and CCS or JavaScript compilation. [Learn more about Jekyll plugins](http://jekyllrb.com/docs/plugins/).

Federalist supports Jekyll plugins. It enables any plugins in a site's `_plugins` directory. Moreover, if the site includes a `Gemfile`, Federalist will run `bundle install && bundle exec jekyll build` to install required Ruby gems and generate the site with those libraries available for use in plugins. You may also use a `Gemfile` to change the version of Jekyll used to build the site.

Several dependencies are already available for use in the building environment. These include `ruby`, `python`, and `node.js`, as well as the [`github-pages` gem](https://pages.github.com/versions/), which includes several common gems used for building sites. You can write plugins that take advantage of these without needing a `Gemfile`.

To see the exact configuration of the build environment, see the [build environment `Dockerfile`](https://github.com/18F/federalist-docker-build/blob/master/Dockerfile) and [base image `Dockerfile`](https://github.com/18F/docker-ruby-ubuntu/blob/master/Dockerfile).

**Note:** using `Gemfile` may considerably slow down the generation of your website, depending on how long the `bundle install` step takes to complete.
