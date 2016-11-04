---
title: Custom Templates
---
Federalist is a continuous deployment-like build environment for static sites. It works by setting a webhook on your site's GitHub repository and generates your site on each `push` event to that repository. Changes made to the site's content and files in its repository through the Federalist web editor or otherwise launch rebuild tasks of the site in a build environment container.

If you don't want to use the Federalist templates, you can add your own GitHub repository to build a completely custom site. When you add a repository-based site, you can choose your build engine: Jekyll, Hugo (not yet implemented), or static, which simply pushes the files in your repository. You can also specify a default branch of your repository to serve as the "production" version of the site.

Federalist is designed to be a modular service. Some people customize their sites by creating new templates that work with the Federalist web editor. Others only use the Federalist build process, managing their content with GitHub. When used this way Federalist acts a no-configuration, production-ready hosting solution for GitHub-based static websites on 18F infrastructure with a custom domain. 

## Jekyll resources

Federalist can generate any Jekyll website, which lets you build custom websites hosted on Federalist. For documentation on getting started with Jekyll, see [jekyllrb.com](http://jekyllrb.com/).

For an example of a Jekyll site optimized for Federalist, see the [federalist-modern-team-template](https://github.com/18F/federalist-modern-team-template).

All government websites must meet section 508 accessibility standards. 18F provides [guidance for building accessible websites](https://pages.18f.gov/accessibility/).

## Federalist features

Federalist provides features beyond just generating Jekyll sites. The steps below outline how to set up custom websites that best take advantage of these features.

### Configuration

Federalist adds a `site.branch` attribute to your global site object with the value of the current branch name. You can access this value in your templates and content and use it to style builds based on the working branch.

Federalist also adds information about the git commit at which the site was built. Access this information through `site.commit`. The commit object includes `site.commit.commit` (the SHA), `site.commit.author`, `site.commit.date`, and `site.commit.message`.

### Content editor

Federalist provides a web-based content editor. To best take advantage of the content editor, content files should be in standard Markdown, with files ending in `.md`. When users open a Markdown file on Federalist, they will see a simple rich text editor with inline formatting for font styles, links, images, and lists.

The rich editor is still in development and does not handle embedded HTML or non-standard elements. If unsupported content is present, the content editor will switch to plain text mode for editing raw Markdown files.

If users open a file with a `.html` extension, they will be redirected to the editor on GitHub.com.

### Navigation menu

Federalist will show a file listing for any repository/project that is added to it. By default, this listing includes all of the files in the project, and users can browse through them. As part of our effort to break away from `git` paradigms for content editors and simplify content management, we lay out the file listing in a more usable way. Instead of showing "files", we prefer to show the user only the "pages" with content that they can edit.

Federalist looks for a `_navigation.json` file in the root of a project to denote which files are "pages" that a content manager would care about. This file can be generated in any form, though for Jekyll sites it is likely best if `_navigation.json` is generated dynamically after each build so that it stays current and up to date.

Since Jekyll does not generate files that start with an underscore, be sure to add `_nagivation.json` to your `_config.yml` file under the `include` block:

    include:
      - _navigation.json

The schema for `_navigation.json` is simple.

Each "page" must have:

1. A `title` value, which should be a string. This will be the title shown to the user of the page in the listing.

2. An `href` value, which should point to the respective "file". This link will be displayed as "Edit" in Federalist and should link the user to the proper file, loaded into the editor. The value should not begin with a "/" and should be a relative URL from the root of the project structure (not the generated output).

A "page" may have the following:

1. A `children` value, which should be an array of pages. This explains hierarchy to Federalist so that pages can be shown under their conceptual parents.

Here is an example of a small `_navigation.json`:

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

### Metadata defaults

If you [specify front-matter defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults) in your Jekyll site configuration, Federalist will pre-fill the front-matter of a new post with these defaults.

### Base URLs

To handle routing sites for previews, Federalist automatically sets a `baseurl` path for your site. This essentially nests your site in a subdirectory under the `federalist.18f.gov` domain, such as `federalist.18f.gov/preview/18f/hub/new-draft`, where `/preview/18f/hub` is the `baseurl`.

All links to other pages or resources on the site require a `baseurl` prefix. The Federalist editor takes care of this when users create links or embed images. If you're designing a custom template to work with Federalist, make sure all references to relative links include `site.baseurl` prefixes, including trailing slashes, as follows:

Link: `{% raw %}[About Us]({{site.baseurl}}/about-us){% endraw %}`

Image: `{% raw %}![18F]({{site.baseurl}}/uploads/18f-logo.png){% endraw %}`

### Jekyll Plugins

Jekyll has a plugin system for adding custom features to the build process of your website. Use-cases for plugins include automatically generating new pages or templates, fetching data or content from external resources, and CCS or JavaScript compilation. [Learn more about Jekyll plugins](http://jekyllrb.com/docs/plugins/).

Federalist supports Jekyll plugins, enabling any plugins in a site's `_plugins` directory. If the site includes a `Gemfile`, Federalist will also run `bundle install && bundle exec jekyll build` to install required Ruby gems and generate the site with those libraries available for use in plugins. You can also use a `Gemfile` to change the version of Jekyll used to build the site.

Several dependencies are already available for use in the building environment. These include `ruby`, `python`, and `node.js`, as well as the [`github-pages` gem](https://pages.github.com/versions/), which includes several common gems used for building sites. You can write plugins that take advantage of these without needing a `Gemfile`.

To see the exact configuration of the build environment, see the [build environment `Dockerfile`](https://github.com/18F/federalist-docker-build/blob/master/Dockerfile) and [base image `Dockerfile`](https://github.com/18F/docker-ruby-ubuntu/blob/master/Dockerfile).

**Note:** using `Gemfile` may considerably slow down the generation of your website, depending on how long the `bundle install` step takes to complete.
