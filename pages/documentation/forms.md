---
title: Forms
permalink: /documentation/forms/
layout: page
sidenav: documentation
---
This page will help you navigate form rules and choose what technology is appropriate.

## Form rules
A number of rules may apply to your federal agency's digital form. 

### The Paperwork Reduction Act (PRA)
The Paperwork Reduction Act determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: a fantastic guide has been written at [https://pra.digital.gov/](https://pra.digital.gov/) to help you understand if any how PRA is applicable to your form. Here's a quick preview of the basic steps you should take:

1. To figure out if PRA applies to your form, first see if an exemption or generic clearance for common forms applies here: [https://pra.digital.gov/do-i-need-clearance/](https://pra.digital.gov/do-i-need-clearance/)
2. If you do need to get PRA approval, then start early! [https://pra.digital.gov/clearance-process/](https://pra.digital.gov/clearance-process/) In some cases it can take 6 to 9 months to get a form approved for your website. To avoid delaying your work, PRA experts recommend you first try to publish a more-basic version of your form that falls under a PRA exemption, while you wait for your full version to be reviewed.
3. After you've started the PRA process, then build the form.
4. Don't go it alone; get in touch with your agency's PRA contact. [https://pra.digital.gov/contact/](https://pra.digital.gov/contact/)

#### Accessibility
The [21st Century IDEA Act](https://www.congress.gov/bill/115th-congress/house-bill/5759/text) applies to all executive agencies' public-facing websites. It mandates a modern user experience in government websites. Importantly, it requires accessibility compliance for users with disabilities. We recommend using the [United States Web Design System](https://designsystem.digital.gov/) for your form. Our Federalist [templates](https://federalist.18f.gov/documentation/templates/) are all built using the USWDS.
- [The USWDS form elements](https://designsystem.digital.gov/components/form-controls/)
- A few pre built [form templates](https://designsystem.digital.gov/components/form-templates/).

The USWDS has [508](https://www.section508.gov/manage/laws-and-policies) compliance built in. If you end up creating a form without using the USWDS, you'll need to do the work to make your form accessible. Use [https://accessibility.18f.gov/](https://accessibility.18f.gov/) as a guide.

#### Privacy
Any forms collecting Personally Identifiable Information (PII) will have to comply with their agency's Privacy process. Here is GSA's for reference: [https://before-you-ship.18f.gov/privacy/](https://before-you-ship.18f.gov/privacy/).

#### SORN
The Federal Records Act also requires that federal agencies publish a list of which systems they keep PII on. These are call System of Record Notices. Each agencies publishes a list, [here](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act) is GSA's for reference.

## Choosing a form service
Federalist pages are static websites; there is no backend for you to log into to get your form data. You'll need to use a separate form service to use a form on your webpage. Choosing a service depends on what the purpose of your form is. Here are some recommendations.

- Newsletter Sign Ups - [GovDelivery](https://granicus.com/solution/govdelivery/) is the most common tool used for newsletters sign ups. Your agency probably already has an account. [HubSpot](https://www.hubspot.com/) is another service used by Federalist customers.
- Customer Feedback - [Touchpoints](https://touchpoints.digital.gov) offers fast track PRA approval for a standardized customer feedback survey.
- Contact forms, bug reporting, support requests - [Google Forms](https://gsuite.google.com/products/forms/). Google Forms can handle most of your form needs. Below is more advice for Google Forms.

#### Google Forms
Google Forms are easy to implement, secure, and customizable enough to handle whatever your form needs are. Here is advice on getting access to Google Forms and for adding them to your website with lots of examples.

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Some agencies can't use Google.</h3>
    <p class="usa-alert-text">Some agencies have the Google Forms domains blocked on their office networks. Unfortunately these agencies will need to find another service to use.</p>
  </div>
</div>

Other agencies, while they may not have an official Google GSuite account purchased for use, can still usually get Google Forms another way.

##### Options for getting access to Google Forms
* Create a Google Account with [your government email](https://accounts.google.com/SignUpWithoutGmail).
* Federalist staff can help set you up a with GSA Affiliated Customer Account (GACA).
* Get a special waiver from your own agency.

##### Advice for using a Google Form
* Google Forms have a setting that lets you restrict submissions to just users within your agency. Turn that on or off as appropriate for your form.
* Text fields have a validation option explained [here](https://support.google.com/docs/answer/3378864?hl=en). This can be used to limit submissions to users with a `.gov` or `.mil` email address, as in this [example](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform).
* The easiest way to include a Google Form on your page is to just link to it. Here is an [example](https://coe.gsa.gov/connect/contact-us.html#joinus) that links to a few different Google Forms.
* A more advanced technique is to write your own HTML form that posts the data directly to Google Forms. Here are some Federalist examples: [Example](https://tech.gsa.gov/work-with-us/#contact), [Example](https://www.afwerx.af.mil/join.html). This lets you maintain a consistent user experience and design for your forms.  Here is [a well written guide](https://blog.webjeda.com/google-form-customize/) for how to write your own HTML form that matches your created Google Form. You'll need to set your form's action url to post to the Google Form url, then set the correct name element for each of your form's questions. Good luck!