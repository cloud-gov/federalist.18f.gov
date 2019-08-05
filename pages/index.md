---
permalink: /
title: Welcome to Federalist
layout: default
---

<div id="home" class="homepage">
  <div class="well mb-xl">
    <div class="usa-grid">
      <div class="usa-width-two-thirds">
        <h1 class="federalist-heading font-large">There’s no easier way to build, launch, and manage government sites.</h1>
        <p class="font-large sans-regular">
          <a id="page-body"></a>
          Federalist is a publishing platform for modern, compliant government websites.
        </p>
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

      <div class="usa-grid-full features-block mt-xl">
        <section class="usa-width-one-third" style="position: relative; right:1%;">
          <p class="sans-bold federalist-intro-heading section-title">BUILD</p>
          <img src="{{site.baseurl}}/assets/images/build.png" class="mb-xl">
          <p class="sans-regular">Use our templates or develop your own—publish your web page  right away.</p>
          <a class="sans-regular" href="#">See how the Centers of Excellence (CoEs) use Federalist to get new pages up quickly →</a>
        </section>
        <div class="usa-width-one-third">
          <section class="position-center">
            <p class="sans-bold federalist-intro-heading section-title">LAUNCH</p>
            <img src="{{site.baseurl}}/assets/images/launch.png" class="mb-xl">
            <p class="sans-regular">You focus on the content, we'll worry about the security, compliance, deployment.</p>
            <a class="sans-regular" href="#">Learn how DoD leveraged the Federalist platform to build their own template designs →</a>
          </section>
        </div>
        <div class="usa-width-one-third">
          <section clss="position-right" style="left:5%;position:relative;">
            <p class="sans-bold federalist-intro-heading section-title">MANAGE</p>
            <img src="{{site.baseurl}}/assets/images/manage.png" class="mb-xl">
            <p class="sans-regular">Use our intuitive interface to control the process from start to finish.</p>
            <a class="sans-regular" href="#">Learn how DOI used a Federalist template to host their data projects →</a>
          </section>
        </div>
      </div>
    </div>
  </div>
  {% include homepage/agencies.html %}
  {% include homepage/contact.html %}
  {% include homepage/templates.html %}
  {% include homepage/fact-sheets.html %}
</div>
