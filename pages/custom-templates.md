---
title: Developing Custom Templates
---

## Jekyll resources

Federalist generates any Jekyll website. This allows you to build completely custom websites hosted on Federalist. For documentation on getting started with Jekyll, see [jekyllrb.com](http://jekyllrb.com/).

For an example of a Jekyll site optimized for Federalist, see the [federalist-modern-team-template](https://github.com/18F/federalist-modern-team-template).

## Federalist features

In addition to generating Jekyll sites, Federalist provides several features.

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

### Jekyll Plug-ins
