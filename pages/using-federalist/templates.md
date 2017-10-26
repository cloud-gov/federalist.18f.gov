---
title: Templates
parent: Using Federalist
templates:
- title: U.S. Web Design Standards Landing and Docs Template
  url: https://github.com/18f/federalist-uswds-template/
  img: https://federalist.18f.gov/images/uswds.thumb.png
- title: Multi Page Template
  url: https://github.com/18f/federalist-modern-team-template
  img: https://federalist.18f.gov/images/team.thumb.png
- title: Single Page Template
  url: https://github.com/18F/federalist-landing-page-template
  img: https://federalist.18f.gov/images/landing.thumb.png
- title: Basic Report Template
  url: https://github.com/18F/federalist-report-template
  img: https://federalist.18f.gov/images/report.thumb.png
---

Federalist provides templates for common website types. Here are the templates currently available:

{% for tem in page.templates %}
  <h3>{{ tem.title }}</h3>
  <p>
    <a class='screenshot' href='{{ tem.url }}'>
      <img src='{{ tem.img }}' alt='{{ tem.title }}'>
    </a>
  </p>
{% endfor %}

As time allows, we hope to add other templates based on existing Federalist sites.

Additionally, Federalist will build any Jekyll or Hugo website, supporting [custom website templates]({{site.baseurl}}/pages/custom-templates/). Hugo support is currently experimental.
