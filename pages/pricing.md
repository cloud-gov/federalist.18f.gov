---
title: Pricing
permalink: /pricing/
layout: page
---

{% for plan in site.data.pricing.plans %}

## {{ plan.title }}

**Included in subscription:**

{% for feature in plan.features %}
- {{ feature.text }} {% endfor %}

{{ plan.summary }}

{% endfor %}
