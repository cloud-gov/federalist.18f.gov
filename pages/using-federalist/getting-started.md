---
title: Getting started with Federalist
permalink: /pages/using-federalist/getting-started/
---
# {{ page.title }}

Federalist monitors your site’s GitHub repository (or repo) for changes you
make. It will automatically build a new version of your site in a few minutes.
You can view the live site [from Federalist][federalist-sites] and clicking
"View site".

{% capture content %}
If you’re unfamiliar with GitHub, the Federalist team recommends that you
[familiarize
yourself](https://federalist-docs.18f.gov/pages/using-federalist/instructional-demos/#introduction-to-github-for-newcomers)
before continuing through this guide.
{% endcapture %}
{% include components/alert--note.html content=content %}


## Getting Started

Immediately after building a new site, you need to customize the general content
on your site, including your site name and contact information. To do that,
you’ll need to edit the configuration options in `_config.yml`. Keep in mind
that this is a YAML-formatted file, so indentation is important to keep related
options together. We recommend using space characters instead of tabs for
nesting configuration options. Learn more about [working with YAML]({{
  site.baseurl }}{% link pages/using-federalist/yaml.md %}).

Here's an example `_config.yml` snippet:

```
title: This is the site title

theme: uswds-jekyll

site_width: wide

# GitHub information
# This is used for adding an edit this page link to the footer
github:
  organization: 18F
  repository: federalist-uswds-template
  default_branch: report-config
```

To customize your site’s URL or repo options, edit the configuration in
[Federalist][federalist-sites].

Your content lives in the pages/ directory. Click the pages/ directory in
GitHub to see your existing pages. Select “page.md” from the list of options.
Once you’re on page.md, look for the pencil icon near the top right of the
content window to edit the page.

The three dashes `---` separate the “front matter” of the page from the content
of the page. Front matter is used to configure the page and provide additional
data. Learn more about [front matter]({{ site.baseurl }}{% link pages/using-federalist/front-matter.md %}).

The content of your page starts below the second set of three dashes `---`. The
content is all in markdown format, a plain-text simple markup language designed
to be readable for content editors. Try editing your heading by replacing the
text “Welcome to the Federalist Report Template” with “Hello world!”. Learn
more about [markdown]({{ site.baseurl }}{% link pages/using-federalist/markdown.md %}).

Once you’re finished making content changes, scroll to the bottom of the page
and click “Commit changes.” Federalist will automatically detect your changes
and start building your site. It should be live within a few minutes.

{% capture content %}
When making a commit, it’s best to describe the change in
GitHub’s commit summary, along with why you’re making the change in the commit
description. This helps members of your team understand the motivation behind
the changes you’ve made when looking back on the repo’s history.
{% endcapture %}
{% include components/alert--best-practice.html content=content %}

Once your change is committed, Federalist will start rebuilding your site. You
can see the build progress on the [build history page][federalist-sites].<!--
TODO link to this site’s build history page. -->


## Agency logo and other assets

Images, PDFs, and other static files served with your site are called “assets”.
We recommend they be stored in the assets/ directory.

{% capture content %}
There’s no standard practice, but many projects group similar assets into
directories like `assets/images` for images or `assets/css` for CSS files.
{% endcapture %}
{% include components/alert--tip.html content=content %}

Go to the assets/ directory on GitHub. Then click “Upload files”. This will
allow you to upload files like your agency logo to your repo. You’ll then be
able to reference the asset by using a path like `/assets/agency-logo.png` in
your content and \_config.yml.


## Create a new page

Click the pages/ directory in GitHub, then click the “Create new file” button.
Give the file a name with an `.md` extension.

{% capture content %}
The filename should be relatively short and use only lowercase
letters, numbers, dashes, and underscores. Federalist will use this filename in
the page’s URL by default, so keeping your URLs short and consistent will make
them easier to read and remember. `open-source-policy.md` is a great filename
for a page containing your agency’s open source policy.
{% endcapture %}
{% include components/alert--best-practice.html content=content %}

You’ll want to include some basic front matter. Copy and paste this example to
start:

```
---
title: “Your new page”
layout: page
permalink: /link/to/your-new-page/
---
## Your new page heading

And your content goes here.
```

`title` is the title of your page. `layout` specifies which layout to use. This
is usually `page`. `permalink` is the URL to your new page. Don’t forget to
commit your changes when you’re done.


## Template-specific customization

Some templates are geared toward a specific task, like the [Basic Report
template](https://federalist-docs.18f.gov/pages/using-federalist/templates/basic-report/),
which features a downloadable PDF report. You’ll want to refer to the [template
specific documentation](https://federalist-docs.18f.gov/pages/using-federalist/templates/) to learn how to configure your template beyond what is
covered in this guide.


[Federalist]: https://federalist.18f.gov/
[federalist-sites]: https://federalist.18f.gov/sites
