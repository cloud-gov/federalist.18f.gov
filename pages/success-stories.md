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
  <div class="usa-grid">
    <div class="usa-width-one-whole">
      <h1>{{ site.data.success_stories.case_studies_title }}</h1>
      <p>{{ site.data.success_stories.case_studies_summary }}</p>
    </div>
  </div>

  {% for item in site.data.success_stories.case_studies %}
    <div class="usa-grid">
      <hr class="hr-light">
      <div class="usa-width-one-half">
        <h2>{{item.title}}</h2>
        <p>{{item.summary}}</p>
      </div>
      <div class="usa-width-one-half info-image">
        <a href="{{item.url}}"><img alt="website thumbnail" src="{{site.baseurl}}{{item.thumbnail}}"></a>
      </div>
    </div>
  {% endfor %}

  <div class="usa-grid">
    <hr class="hr-light">
  </div>    

  <section class="example-sites">
    <div class="usa-grid">
      <div class="usa-width-one-full">
        <h1>{{ site.data.success_stories.screenshots_title }}</h1>
        <p>{{ site.data.success_stories.screenshots_summary }}</p>
      </div>
      
      <div class="usa-width-one-full flexbox-grid example-sites-list">
        {% for item in site.data.success_stories.screenshots %}
          <div class="usa-width-one-third case-study">
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
