---
permalink: /
title: Welcome to Federalist
layout: default
---

<div id="home" class="homepage">
  <div class="well">
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
    <div class="usa-grid">
      <h4 class="sans-bold">HOW IT WORKS</h4>
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
        <div class="usa-width-one-third">
          <p class="sans-bold federalist-intro-heading">BUILD</p>
          <img src="{{site.baseurl}}/assets/images/build.png">
        </div>
        <div class="usa-width-one-third">
          <div class="position-center">
            <p class="sans-bold federalist-intro-heading">LAUNCH</p>
            <img src="{{site.baseurl}}/assets/images/launch.png">
          </div>
        </div>
        <div class="usa-width-one-third">
          <div clss="position-right">
            <p class="sans-bold federalist-intro-heading">MANAGE</p>
            <img src="{{site.baseurl}}/assets/images/manage.png">
          </div>
        </div>
      </div>
    </div>
  </div>
  {% include homepage/agencies.html %}
  {% include homepage/contact.html %}
  {% include homepage/templates.html %}


  <div class="usa-grid">
    <hr class="hr-light">
    <section class="info-block">
      <div class="description">
        <h2>Build your own look</h2>
        <p class="copy">
          We think our templates are great, but you can always use completely custom designs.
        </p>
        <div class="figure-group">
          <h4>A few websites with custom themes</h4>
          <ul class="figure-list max-2 mobile-center">
            <li>
              <a href="https://www.afwerx.af.mil">
              <figure class="figure figure-seal">
                <div class="tint">
                  <img src="{{site.baseurl}}/assets/images/partner-sites/afwerx.af.mil.png" alt="A screenshot of the AFWERX website">
                </div>
                <figcaption>AFWERX</figcaption>
              </figure>
              </a>
            </li>
            <li>
              <a href="https://revenuedata.doi.gov">
              <figure class="figure figure-seal">
                <div class="tint">
                  <img src="{{site.baseurl}}/assets/images/partner-sites/revenuedata.doi.gov.png"  alt="A screenshot of the Department of the Interior Natural Resources Revenue Data website">
                </div>
                <figcaption>Natural Resources Revenue Data</figcaption>
              </figure>
              </a>
            </li>
            <li>
              <a href="https://login.gov">
              <figure class="figure figure-seal">
                <div class="tint">
                  <img src="{{site.baseurl}}/assets/images/partner-sites/login.gov.png" alt="A screenshot of the Login.gov website">
                </div>
                <figcaption>Login.gov</figcaption>
              </figure>
              </a>
            </li>
            <li>
              <a href="https://designsystem.digital.gov">
                <figure class="figure figure-seal">
                  <div class="tint">
                    <img src="{{site.baseurl}}/assets/images/partner-sites/uswds.png"  alt="A screenshot of the U.S Web Design System website">
                  </div>
                  <figcaption>U.S Web Design System Homepage</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  {% include homepage/fact-sheets.html %}
</div>
