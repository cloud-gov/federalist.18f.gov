---
title: Pricing
permalink: /pricing/
layout: page
---

{% for plan in site.data.pricing.plans %}

## {{ plan.title }}

{% for feature in plan.features %}
- {{ feature.text }} {% endfor %}

{{ plan.summary }}

{% endfor %}
