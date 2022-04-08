---
title: RVM on Federalist
permalink: /documentation/rvm-on-federalist/
layout: page
sidenav: documentation
redirect_from:
  - /pages/how-federalist-works/rvm-on-federalist/
---

Federalist uses [RVM](https://rvm.io/) to select which ruby version to use to build a Federalist site.

## Default Ruby version

By default, the build will use Ruby version 2.7.5.

## Specifying a Ruby version

Prior to building a site, the build will check for a file named `.ruby-version`. If one is found, it will use RVM to install and use the version specified there.

For example, if you wish to use Ruby version 2.7.4 to build a site, add a new file named `.ruby-version` to your repository. The `.ruby-version` file should be at the top-level directory. The contents of that file should be "`2.7.4`".

## End of life (EOL)

When specifying a version using `.ruby-version`, please be aware of the following maintenance stages:

- _normal maintenance_ (bug fix): Branch receives general bug fixes and security fixes.
- _security maintenance_ (security fix): Only security fixes are backported to this branch.
- _eol (end-of-life)_: Branch is not supported by the ruby-core team any longer and does not receive any fixes. No further patch release will be released.

Once a version reaches EOL, it will no longer receive any new fixes. Due to this, Federalist is unable to build or update a site that is using a deprecated version. To view the current maintenance status of various Ruby versions, please visit [Ruby Maintenance Branches](https://www.ruby-lang.org/en/downloads/branches/).
