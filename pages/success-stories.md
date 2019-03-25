---
title: Success Studies
permalink: /success-stories/
layout: default
redirect_from: 
  - /case-studies/
  - /examples/
  - /content/examples/
---

<div id="home">
  <div class="well">
    <div class="usa-grid federalist-hero">
      <div class="usa-width-two-thirds">
        <h1 class="hero-heading">
          Trusted and scalable.
        </h1>
        <p class="hero-copy sub-heading">
          Nine agencies use Federalist to host over 100 sites with over 140,000 page views per day. This page shows a sample of our partners.
        </p>
      </div>
      <div class="usa-width-one-third usa-hero-callout">
        <p class="medium-copy">
          Federalist welcomes its newest client, <b>GSA's Office of Government Wide Policy Councils Team</b>
        </p>
        <p class="small">
          February 28, 2018
        </p>
      </div>
    </div>
  </div>
        
  
  {% for item in site.data.case_studies %}
    <div class="usa-grid">
      <hr class="hr-light">
      <div class="info-block">
        <div class="usa-width-one-half description">
          <h2 class="heading">{{item.title}}</h2>
          <p class="copy">
            {{item.summary}}
          </p>
          <ul class="figure-list">
          </ul>
        </div>
        <div class="usa-width-one-half info-image">
          <a href="{{item.url}}"><img alt="website thumbnail" src="{{site.baseurl}}{{item.thumbnail}}"></a>
        </div>
      </div>
    </div>
  {% endfor %}





  <div class="usa-grid">
    <br/>
    <hr class="hr-light">
  </div>    

  <section class="well example-sites">
    <div class="usa-grid federalist-hero">
      <div class="usa-width-one-full">
        <h1 class="hero-heading">
          See more sites powered by Federalist.
        </h1>
        <p class="example-sites-copy">
          Nine agencies use Federalist to host over 100 sites with over 140,000 page views per day. This page shows a sample of our partners.
        </p>
      </div>
      
      <!--1 -->
      <div class="usa-width-one-full flexbox-grid example-sites-list">
        {% for item in site.data.screenshots %}
          <div class="usa-width-one-fourth case-study">
            <a href="{{item.url}}">
              <img data-action="name-site" class="thumbnail" src="{{site.baseurl}}{{item.thumbnail}}" alt="{{item.title}} screenshot">
              <p>{{item.title}}</p>
            </a>
          </div>
        {% endfor %}
      </div>
    </div>
  </section>

</div>