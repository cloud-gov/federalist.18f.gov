---
title: Migration guide
permalink: /pages/using-federalist/migration-guide/
---

# Migration Guide

Welcome to the beginning of your migrating journey! This process may be difficult. 18F cannot provide support for migration work beyond general guidance, but if you are in a situation where you need a lot of help please contact us for a path analysis from our Custom Partner Solutions team.

## Before you start

Get a sense of how big your migration is before you start. How many pages does your site have? This will help you estimate how long it will reasonably take to migrate your content.

- To find this out, you could try Googling for “site:[your domain]”
- Example: “site:18f.gsa.gov” shows that there are about 722 pages on 18F’s website
- Note that blog tags pages will show up as individual pages

## Federalist’s role

Federalist is primarily a backend hosting service that enables lots of flexibility with the look and feel of a hosted website. Federalist is opinionated about the back end hosting of a site, so your code needs to be in a form that Federalist can host.

Federalist supports the following:
- [Jekyll](https://jekyllrb.com/)
- [Hugo](http://gohugo.io/)
- Static files

In general, we’d expect getting your site up as static files to be the quickest option, but static html can be very difficult to edit and maintain. Even though it takes more effort to initially convert your site content to be published using jekyll or hugo, maintaining your site in the long-term will be easy. Jekyll or Hugo can update all pages with one setting change. For example, If you want to add an item to a menu then you only need to adjust one file with Jekyll or Hugo. If you want to make that same change on static files, then you would need to change every single page.

## Planning the move

You should plan to take everything from your existing site into a format that Federalist can publish. For larger sites, getting an export of the source of your old site might be essential.

List out your options for exporting, which could include:
- Access to the source code
- Access to an export of the site
- Scraping your current site. (most difficult)

Ideally, you can get your content in one bucket and html look/feel in another bucket when running the export, to align with how Jekyll and Hugo work.

## Building a Timeline

You should create a timeline for the site migration. This may be an opportunity to restructure how your content is organized or redesign the look and feel of the site. Think about how much time/work these additional tasks require.

You should plan a stopgap measure into your migration timeline. This could be a basic Federalist setup with a landing page that provides information to key stakeholders or notifies visitors that work is in progress.

Ideal stopgap options to include:
- [Open Foia](https://github.com/18F/open-foia-redirect/tree/be69f7ba1b9433f33c35d271d4b0d665f07d0b13)
- [GSA 10x](https://github.com/GSA/10x/tree/fa7007ff3d881b80348dfb0d3161b8f9d84dc3d2)

For these pages you can simply fork them on Github and reword the content in order to have it based on your website. There are other options as well, and these are two examples.

18F can help you with your stopgap measure if you have a signed IAA.

## Testing the Plan

Test your migration concept by first making one page and learning how to work with Federalist. Try using setting up layouts and content separately. Once the first page is migrated then migrate other pages.

You should create a staging branch in your Github repo and create a pull request from that branch to your master branch. Then migrate to the staging branch and push to master once you’ve confirmed everything is working correctly in staging. This will help you keep track of changes and provide and easy way to identify what is causing issues. You should push to master everyday.
- You may want to consider creating separate staging branches for content and for settings

Reserve time for the go live process. Plan few days before live launch to do a soft launch for stakeholders at a different URL.

## The Migration Team

Who you need in your migration team is based on the work involved in your specific migration. Generally, a migration PM is probably not necessary unless you are managing against a timeline.

- If you are just migrating your site then you will probably only need front end developers depending on the complexity of your backend
- If you are also doing a site redesign and/or restricting content then you may need to bring on user experience designers, visual designers, content designers or more depending on your situation
- For high complexity migrations, 18F offers a path analysis for different technical options, which is not exclusive to a migration to federalist
- If you are planning on bringing on extra developers for the migration let them know how your site is configured - Jekyll or Hugo

Your team will need the following access to get started:
- Access to Federalist for each GitHub account involved in the migration
- The ability to create and/or edit the GitHub repo that Federalist will be building

You are able to start working while IAA is being signed.

## Additional Info

If your site has over 1 GB of images to serve you should look into another way to store those files. Github is not intended to store large amounts of files.
- Github has no problem storing less than 1GB of different files types
For hosting over 1GB of files, we suggest getting access to a public database service that will load the files. One provider of this type of service is [cloud.gov](https://cloud.gov/). More information on repository size limitations is available [here](https://help.github.com/articles/what-is-my-disk-quota/).
