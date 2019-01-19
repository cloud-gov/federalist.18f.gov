---
permalink: /case-studies/
title: Case Studies
layout: home
redirect_from: 
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
          Eight agencies use Federalist to host over 100 sites with over 140,000 page views per day. This page shows a sample of our partners.
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
        
  <div class="usa-grid">
    <hr class="hr-light">
    <div class="info-block">
      <div class="usa-width-one-half description">
        <h2 class="heading">Vote.gov</h2>
        <p class="copy">
          Vote.gov makes it easier for eligible voters to participate in our democratic process by providing streamlined information on how to vote. Site visitors can register electronically in states that allow it, and download a printable application in a number of languages for those states where electronic registration isn't an option. Vote.gov was ranked as the <a href="http://www2.itif.org/2017-benchmarking-us-government-websites.pdf">#1 federal website in 2017</a> by the Information Technology &amp; Innovation Foundation for meeting basic standards in security, speed, mobile friendliness, and accessibility.
        </p>
        <ul class="figure-list">
        </ul>
      </div>
      <div class="usa-width-one-half info-image">          
        <a href="https://vote.gov"><img src="{{site.baseurl}}{{site.baseurl}}/assets/images/partner-sites/vote.gov.png"></a>
      </div>
    </div>
  </div>

  <div class="usa-grid">
    <hr class="hr-light">
    <div class="info-block">
      <div class="usa-width-one-half description">
        <h2 class="heading">College Scorecard</h2>
        <p class="copy">
          The U.S. Department of Education uses Federalist to host College Scorecard. Combined with an API server, College Scorecard provides important information on everything from financial aid to expected earnings. Federalist's cloud infrastructure helps manage site traffic during spikes in visitors, making sure College Scorecard is always available.
        </p>
        <ul class="figure-list">
        </ul>
      </div>
      <div class="usa-width-one-half info-image">          
        <a href="https://collegescorecard.ed.gov"><img src="{{site.baseurl}}{{site.baseurl}}/assets/images/partner-sites/collegescorecard.ed.gov.png"></a>
      </div>
    </div>
  </div>

      
        
  <div class="usa-grid">
    <hr class="hr-light">
    <div class="info-block">
      <div class="usa-width-one-half description">
        <h2 class="heading">Department of Homeland Security</h2>
        <p class="copy">
          DHS used a Federalist template to publish information about a new <a href="https://cyber.dhs.gov/">binding operational directive</a>. Federalist makes it easy to update and maintain the documentation, reducing e-mail queries to DHS.
        </p>
        <ul class="figure-list">
        </ul>
      </div>
      <div class="usa-width-one-half info-image">
        <a href="https://cyber.dhs.gov/"><img src="{{site.baseurl}}{{site.baseurl}}/assets/images/partner-sites/cyber.dhs.gov.png"></a>
      </div>
    </div>
  </div>


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
              <img data-action="name-site" class="thumbnail" src="{{site.baseurl}}{{site.baseurl}}{{item.thumbnail}}" alt="{{item.title}} screenshot">
              <p>{{item.title}}</p>
            </a>
          </div>
        {% endfor %}
      </div>
    </div>
  </section>

</div>