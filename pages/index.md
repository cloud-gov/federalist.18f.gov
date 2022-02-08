---
permalink: /
title: Welcome to Federalist
layout: default
---

<div id="home" class="homepage">
  <div class="well mb-xl">
    <div class="usa-grid">
      <div class="usa-width-two-thirds">
        <h1>There’s no easier way to <br>build, launch, and manage government sites.</h1>
        <p class="font-large sans-regular">
          <a id="page-body"></a>
          Federalist is a publishing platform for <br>modern <a href="/documentation/21st-century-idea/">21st Century IDEA</a> websites.
        </p>
      </div>
      <div class="usa-width-one-third usa-hero-callout">
        <h2 class="contrast-heading">Trusted and scalable</h2>
        <ul>
          <li><b>134</b> production .gov sites</li>
          <li><b>9</b> federal agencies</li>
          <li><b>100+</b> million visitors per year</li>
          <li><b>400+</b> prototypes developed</li>
          <li><b>639+</b> updates per week</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="usa-header federalist-intro p-xxl">
    <div class="usa-grid-full">
      <h4 class="sans-bold mb-xl">HOW IT WORKS</h4>
      <div class="usa-grid-full steps-block">
        <div class="usa-width-one-third">
          <div class="steps-circle">1</div>
        </div>
        <div class="usa-width-one-third line" style="margin: 0;">
          <div class="steps-circle position-center">2</div>
        </div>
        <div class="usa-width-one-third line">
          <div class="steps-circle position-right">3</div>
        </div>
      </div>
      <section class="usa-grid-full features-block mt-xl">
        <div class="usa-width-one-third feature" style="position: relative; right:1%;">
          <div class="steps-circle position-center mb-sm mobile">1</div>
          <p class="sans-bold federalist-intro-heading section-title">BUILD</p>
          <img src="{{site.baseurl}}/assets/images/build.png" alt="Hand building a website" class="mb-xl">
          <div class="feature-copy">
            <p class="sans-regular">
              Use our templates or develop your own and publish your web page right away.
            </p>
          </div>
        </div>
        <div class="usa-width-one-third feature">
          <div class="position-center">
            <div class="steps-circle position-center mb-sm mobile">2</div>
            <p class="sans-bold federalist-intro-heading section-title">LAUNCH</p>
            <img src="{{site.baseurl}}/assets/images/launch.png" alt="Hand launching a secure website with cloud.gov" class="mb-xl">
            <div class="feature-copy">
              <p class="sans-regular">
                You focus on the content, we'll worry about the security, compliance, and deployment.
              </p>
            </div>
          </div>
        </div>
        <div class="usa-width-one-third feature">
          <div clss="position-right" style="">
            <div class="steps-circle position-center mb-sm mobile">3</div>
            <p class="sans-bold federalist-intro-heading section-title">MANAGE</p>
            <img src="{{site.baseurl}}/assets/images/manage.png" alt="Hand using faders to manage website deployments" class="mb-xl">
            <div class="feature-copy">
              <p class="sans-regular">
                Use our intuitive interface to control the process from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  {% include homepage/agencies.html %}
  {% include homepage/case-studies.html %}
  {% include homepage/contact.html %}
  {% include homepage/templates.html %}
  {% include homepage/fact-sheets.html %}
</div>
