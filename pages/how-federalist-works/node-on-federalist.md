---
title: Node on Federalist
permalink: /pages/how-federalist-works/node-on-federalist/
---

# Node on Federalist

*Note that the features described in this document are experimental.*

Federalist supports using node and npm to build parts of your site before the build engine starts its work.
This is helpful for doing things like compiling a site's assets, or employing a build tool such as [Fractal](https://github.com/frctl/fractal).

## The Federalist NPM script

Before Federalist starts the build engine, it checks for a package.json file.
If it finds one, it will run `npm install`.
Additionally, if the package.json provides a script named `federalist`, the build engine will run this script.
This enables Federalist users to add Javascript dependencies to their site, and run a script to prepare the site for the build engine.

Here's an example package.json for a site that uses Webpack:

```json
{
  "name": "Webpack example",
  "version": "1.0.0",
  "description": "An example Federalist site using webpack",
  "main": "index.js",
  "scripts": {
    "build": "`npm bin`/webpack",
    "federalist": "npm run build",
    "start": "`npm bin`/webpack-dev-server"
  },
  "author": "Jonathan Hooper",
  "license": "ISC",
  "dependencies": {
    "webpack": "^1.14.0"
  },
  "devDependencies": {
    "webpack-dev-server": "^1.16.2"
  }
}
```

## Specifying a Node version

Federalist uses [Node Version Manager](https://github.com/creationix/nvm) to track the node version your site is meant to use.
Before running any npm commands, Federalist checks for a file named `.nvmrc`.
If it finds one, it will use NVM to install and use the desired node version before continuing.

## Excluding node modules

When Federalist runs `npm install` it will create a directory named `node_modules`. This is where it saves the downloaded dependencies. These will be built into a site if the build is not configured to ignore them, causing them to be uploaded. This can cause the time it takes to upload a site increase significantly.

To ignore the node modules for a jekyll site, add the following to the site's `_config.yml`:

```jekyll
exclude:
  - node_modules
```

After adding that, jekyll will ignore the `node_modules` directory when building the site.
