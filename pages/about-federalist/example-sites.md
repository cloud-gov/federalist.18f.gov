---
title: Example Sites
parent: About Federalist
examples:
- title: College Scorecard
  url: https://collegescorecard.ed.gov/
  img: /uploads/partner-sites/collegescorecard-ed-gov.png
- title: Extractive Industries Transparency Initiative
  url: https://useiti.doi.gov/
  img: /uploads/partner-sites/useiti-doi-gov.png
- title: FICAM Architecture
  url: https://arch.idmanagement.gov
  img: /uploads/partner-sites/arch-idmanagement-gov.png
- title: 18F Homepage
  url: https://18f.gsa.gov/
  img: /uploads/partner-sites/18f-gsa-gov.png
- title: login.gov
  url: https://login.gov
  img: /uploads/partner-sites/login-gov.png
- title: Office of Evaluative Sciences
  url: https://oes.gsa.gov/
  img: /uploads/partner-sites/oes-gsa-gov.png
- title: 18F Method Cards
  url: https://methods.18f.gov/
  img: /uploads/partner-sites/method-cards.png
- title: Tech at GSA (GSA IT)
  url: https://tech.gsa.gov/
  img: /uploads/partner-sites/tech-gsa-gov.png
- title: US Web Design Standards
  url: https://standards.usa.gov/
  img: /uploads/partner-sites/standards-usa-gov.png
- title: vote.gov
  url: https://vote.gov/
  img: /uploads/partner-sites/vote-gov.png
---
Federalist currently hosts 83 websites, including these 10 examples. Their source code is also available for your reuse. Please contact us with questions at federalist-inquiries@gsa.gov.

{% for ex in page.examples %}
  <a class='screenshot' href='{{ ex.url }}'>
    <img src='{{site.baseurl}}{{ ex.img }}' alt='{{ ex.title }}'>
  </a>
{% endfor %}
