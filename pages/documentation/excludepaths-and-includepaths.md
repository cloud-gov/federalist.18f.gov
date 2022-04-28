---
title: Exclude and Include Paths
permalink: /documentation/excludepaths-and-includepaths/
layout: page
sidenav: documentation
---

You can configure custom exclude and include paths for your site with the `excludePaths` and `includePaths` keys in the [Federalist configuration file](../federalist-json).

## Syntax

The `excludePaths` and `includePaths` keys in [Federalist configuration file](../federalist-json) should include a list of [unix-style `glob`](https://en.wikipedia.org/wiki/Glob_(programming)#Unix-like) patterns to match against the paths of individual files to be deployed for your site.

### Example
```json
{
  "excludePaths": [
    "/some-exact/file.yml",
    "*/all-files-with-this-name.txt"
  ],
  "includePaths": [
    "/.some-dot-file"
  ]
}
```

### Path Pattern Matching Rules
- These patterns are applied against all of the files to be *deployed* for your site. For the `static` build engine, this is the root of your project, but for other build engines, matching is applied *after* the build process, that is, for the resulting files in the `_site` folder. Many libraries already provide a mechanism to exclude files from the results of the build, which should be preferred since it can be tested locally.

- `includePaths` have priority over `excludePaths` so that you have the ability to override platform defaults as well as include specific files, such as dotfiles, when most should be excluded.

- All [unix-style `glob`](https://en.wikipedia.org/wiki/Glob_(programming)#Unix-like) are supported.

- The paths against which the specified patterns are applied always begin with a `/`.

{% capture content %}
These are different matching rules than apply for [custom headers](../custom-headers).
{% endcapture %}
{% include components/alert--note.html content=content %}

### Examples

| Pattern | Description |
| ------- | ----------- |
| `*/file.txt` | matches all (nested or not) files named `file.txt` |
| `/file.txt` | matches exactly `/file.txt` |
| `/folder*` | matches exactly folders with names starting with `/folder` and their contents |
| `/folder/*` | matches the contents of `/folder` |
| `/folder` | matches exactly `/folder` but *not* it's contents |

See [unix-style `glob`](https://en.wikipedia.org/wiki/Glob_(programming)#Unix-like) for all possibilities.

### Defaults
#### Excluded files
- all files named `Dockerfile`
- all files named `docker-compose.yml`
- all files named `federalist.json`
- all files named `pages.json`
- all dotfiles (files and folders starting with `.`)
  
#### Included files
- `.well-known/security.txt`

#### As configuration
```json
{
  "excludeFiles": [
    "*/Dockerfile",
    "*/docker-compose.yml",
    "*/federalist.json",
    "*/pages.json"
  ],
  "includeFiles": [
    "/.well-known/security.txt"
  ]
}
```
