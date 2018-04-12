---
title: Templates
permalink: /pages/using-federalist/templates/
---
{% assign templates = site.templates | sort: 'order' %}

# Templates

Federalist offers several templates for common website types that are meant to serve as a starting point for you. These templates show what’s possible and can even be the basis for your site if your needs are closely aligned to the formatting of the template. Federalist templates are not built to serve as final work products, nor are they like templates that you might typically find in a content management system. Instead, templates serve as a “starter kit.” Substantial configuration of a Federalist template requires technical knowledge and know-how.

Here are the templates currently available:

{% for tem in templates %}
  <h3>{{ tem.title }}</h3>
  <p>
    <a class='screenshot' href='{{ tem.preview_url }}'>
      <img src='{{ site.baseurl }}{{ tem.img }}' alt='Screenshot of the {{ tem.title }}'>
    </a>
  </p>
  <p>
    {% comment %}
      TODO: move all the template docs that we support to federalist-docs.
      If the docs live outside of federalist docs, use docs_url, otherwise use
      the url for the template's docs page.
    {% endcomment %}
    <a href="{{ tem.docs_url | default: tem.url }}">Read the template documentation.</a>
  </p>
{% endfor %}

As time allows, we hope to add other templates based on existing Federalist sites.

Additionally, Federalist will build any Jekyll or Hugo website, supporting [custom website templates]({{site.baseurl}}/pages/how-federalist-works/how-builds-work). Hugo support is currently experimental.
