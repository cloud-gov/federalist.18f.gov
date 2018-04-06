---
title: Templates
permalink: /pages/using-federalist/templates/
templates:
- title: U.S. Web Design Standards Landing and Docs Template
  url: https://github.com/18f/federalist-uswds-template/
  img: /assets/images/templates/federalist-uswds-template.png
- title: Modern Team Template
  url: https://github.com/18f/federalist-modern-team-template
  img: /assets/images/templates/federalist-modern-team-template.png
- title: Landing Page Template
  url: https://github.com/18F/federalist-landing-page-template
  img: /assets/images/templates/federalist-landing-template.png
- title: Basic Report Template
  url: https://github.com/18F/federalist-report-template
  img: /assets/images/templates/federalist-report-template.png
---

# Templates

Federalist offers several templates for common website types that are meant to serve as a starting point for you. These templates show what’s possible and can even be the basis for your site if your needs are closely aligned to the formatting of the template. Federalist templates are not built to serve as final work products, nor are they like templates that you might typically find in a content management system. Instead, templates serve as a “starter kit.” Substantial configuration of a Federalist template requires technical knowledge and know-how.

Here are the templates currently available:

{% for tem in page.templates %}
  <h3>{{ tem.title }}</h3>
  <p>
    <a class='screenshot' href='{{ tem.url }}'>
      <img src='{{ site.baseurl }}{{ tem.img }}' alt='{{ tem.title }}'>
    </a>
  </p>
{% endfor %}

As time allows, we hope to add other templates based on existing Federalist sites.

Additionally, Federalist will build any Jekyll or Hugo website, supporting [custom website templates]({{site.baseurl}}/pages/how-federalist-works/how-builds-work). Hugo support is currently experimental.
