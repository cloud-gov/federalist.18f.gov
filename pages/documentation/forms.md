---
title: Forms on Federalist sites
permalink: /documentation/forms/
layout: page
sidenav: documentation
---
Do you want to use a digital form to ask questions of the people visiting your Federalist website? Do you want them to fill out a form with their contact info or feedback? This page provides an overview of existing digital form tools and requirements so you can determine which best apply to your situation and get started.

This pages covers:
* [Form services](#form-services)
* [Form requirements](#form-requirements)

## Form services
Federalist pages are static websites. This means there is no backend for you to log into to get your agency’s form data. You’ll need to use a separate form service to use a digital form on your agency’s site. You should check with your agency for what services you already have licenses and access for.

<div class="usa-alert usa-alert-info" >
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">
      More vendor specific advice is available for federal employees. Enter your email to access that page.
    </h3>
    <p class="usa-alert-text">
      <form id='fed-email-form' class="usa-form">
        <label for="fed-email">Enter your federal email.</label>
        <input class="usa-input" id="fed-email" name="fed-email" type="email">
        <input class="usa-button" id="submit-btn" type="submit" value="Go to next page">
      </form>
    </p>
  </div>
</div>

<script>
  // Block form submission
  const form = document.getElementById('fed-email-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  // Validate on button click
  const email = document.getElementById('fed-email');
  document.getElementById('submit-btn').addEventListener('click', function(e){
    if (/(.gov|.mil)$/.test(email.value)) {
      // redirect that works on preview builds too
      const current_url = window.location.href;
      // Just replace the url with the entire one we want
      const new_url = "{{ site.baseurl }}/documentation/form-services";
      window.location.href = new_url;
    } else {
      email.setCustomValidity("Please enter a federal email.");
    }
  });
</script>

## Form requirements
Several requirements may apply to your agency's digital form, whether posting to Federalist or another site.

#### [The Paperwork Reduction Act (PRA)](https://digital.gov/resources/paperwork-reduction-act-44-u-s-c-3501-et-seq/)
What it is: The PRA determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: this [guide to the PRA](https://pra.digital.gov/) will help you understand if and how PRA is applicable to your form.

Tip: If you do need to get PRA approval, publish a more basic version of your form that falls under a PRA exemption, and at the same time, [submit your full version for review](https://pra.digital.gov/clearance-process/). This will allow you to move forward while you wait for approval, which can take 6 to 9 months.

How to get started: First [figure out if PRA applies to your form](https://pra.digital.gov/do-i-need-clearance/) or if an exemption or generic clearance applies to your situation. Also, get in touch with your agency's [PRA contact](https://pra.digital.gov/contact/).

#### [Section 508 of the Rehabilitation Act of 1973 (508 Compliance)](https://www.section508.gov/manage/laws-and-policies)
What it is: 508 compliance requires that government websites be fully accessible to people with disabilities. The [21st Century IDEA Act](https://www.congress.gov/bill/115th-congress/house-bill/5759/text) amplifies this accessibility, and requires a modern user experience.

Tips:
- Use the [United States Web Design System](https://designsystem.digital.gov/) (USWDS) to design your form. It's built to help you more easily comply with accessibility. [Federalist templates](https://federalist.18f.gov/documentation/templates/) are all built using the USWDS. To design the different parts of your form, refer to [USWDS form controls](https://designsystem.digital.gov/components/form-controls/). [Pre-built form templates](https://designsystem.digital.gov/components/form-templates/) offer great examples. Even if you use the USDWS, regularly [scan for accessibility compliance](https://accessibility.18f.gov/tools/).
- If you create a form without using the USWDS, follow [18F's accessibility guide for forms](https://accessibility.18f.gov/forms/) to still ensure your form is accessible.
- Follow these [plainlanguage guidelines](https://plainlanguage.gov/guidelines/) to ensure your content is accessible to the public.

To get started: Use the USWDS to design your site. Regularly scan your site for accessibility. Contact the [508 Access Board](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards) for technical assistance . 

#### [Privacy Act](https://www.archives.gov/about/laws/privacy-act-1974.html)
What it is: The Privacy Act requires the government to keep track of any forms collecting Personally Identifiable Information (PII), to keep that information secure, and in some cases, complete a Privacy Impact Assessment (PIA), like this [PIA written for GovDelivery by the Department of the Interior](https://www.doi.gov/sites/doi.gov/files/uploads/govdelivery_pia_final_05.31.2017_1.pdf). Each agency is responsible for assessing the need for an official System of Record Notice (SORN) for information collected via Forms. A list of SORNs should be available in each agency, like [GSA's list of SORNs](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act). If an agency determines it needs a SORN, it must also create and add a Privacy Act Notice to its form.

Tip: If you are required to include a Privacy Act Notice in your form, find out if your agency has a stock language you can link to on your form. Check out [Department of Homeland Security's (DHS) Privacy Act Notice template](https://www.dhs.gov/xlibrary/assets/privacy/privacy_guidance_e3.pdf) for an example. For GSA users, here is [GSA's Privacy and Security Notice](https://www.gsa.gov/website-information/privacy-and-security-notice) to use. 

How to get started: Get in contact with your agency's Privacy Office. GSA users should start by filling out the [GSA Privacy Office intake form](https://docs.google.com/forms/d/1fYME9MzhfAYuRiONJEsf1EFS9cmg03jODFq2Y9hkEgs/viewform?edit_requested=true).

#### [Federal Records Act](https://www.archives.gov/about/laws/fed-agencies.html)
What is is: The data collected in your form needs to be stored and destroyed in compliance with the Federal Records Act. You are responsible for identifying what of your data is considered a record, and managing those records in accordance with your agency's [National Archives and Records Administration (NARA)-approved record schedule](https://www.archives.gov/about/laws/fed-agencies.html).

Tip: If your form data is considered a record, remember that the data collected in your form is stored in the forms service, not in Federalist.

To get started: Get in touch with your agency's Records and Information Management (RIM) office.

## Want to learn from other agencies using digital forms?
Join the [Web Content Managers Forum](https://digital.gov/communities/web-content-managers/).
