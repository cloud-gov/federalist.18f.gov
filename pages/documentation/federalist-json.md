---
title: Federalist.json
permalink: /documentation/federalist-json/
layout: page
sidenav: documentation
---

Federalist-specific configuration can be done in a `federalist.json` file in the root of your project. Currently, we only support the following keys:
- `headers`
- `excludePaths`
- `includePaths`
- `fullClone`

## `headers`
See [specifying custom headers](../custom-headers) for details.

## `excludePaths` and `includePaths`
See [specifying exclude and include paths](../excludepaths-and-includepaths) for details.

## `fullClone`

| values | default? | effect |
| ------ |:--------:| ------ |
| not specified | **Y** | shallow clone |
| `true` | | full clone |
| anything else | | shallow clone |


By default, Federalist does a "shallow" clone of a single branch of your repository to minimize the duration of your build as well as the space it requires. This means that the entire git revision history is NOT available during Federalist builds, which may differ from your local environment. This can cause an issue with some site engines or plugins that generate "last modified" datetimes based on the git revision history for particular files.

Examples:
- Hugo: `.Page.Lastmod` with configuration option `enableGitInfo = true`
- Jekyll: [jekyll-last-modified-at](https://github.com/gjtorikian/jekyll-last-modified-at)

Setting `"fullClone": true` in your `federalist.json` file will tell Federalist to pull the entire revision history for the specific branch.

**Note:** For larger repositories this may cause a noticable increase in build time.

### Example
```json
{
  "fullClone": true
}
```
