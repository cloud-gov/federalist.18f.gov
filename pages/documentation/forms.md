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
The Paperwork Reduction Act (PRA) determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: a fantastic guide has been written at [https://pra.digital.gov/](https://pra.digital.gov/) to help you understand if any how PRA is applicable to your form. Here's a quick preview of the basic steps you should take:

1. To figure out if PRA applies to your form, first see if an exemption or generic clearance for common forms applies here:[https://pra.digital.gov/do-i-need-clearance/](https://pra.digital.gov/do-i-need-clearance/)
2. If you do need to get PRA approval, then start early! [https://pra.digital.gov/clearance-process/](https://pra.digital.gov/clearance-process/)In some cases it can take 6 to 9 months to get a form approved for your website. To avoid delaying your work, PRA experts recommend you first try to publish a more-basic version of your form that falls under a PRA exemption, while you wait for your full version to be reviewed. 
3. After you've started the PRA process, then build the form.
4. Don't go it alone; get in touch with your agency's PRA contact. [https://pra.digital.gov/contact/](https://pra.digital.gov/contact/)

### Privacy Act (PA)
Add overview and link

### Additional rules that may apply
- The 21st Century IDEA Act applies to all executive agencies' public-facing websites. Use USDWS code to build your form found [here] (https://designsystem.digital.gov/components/form-templates/) and [here] (https://designsystem.digital.gov/components/form-controls/), which have important usability guidance baked right in.  
- While the PRA and PA primarily focus on how data is collected, it is the [Federal Records Act] (https://www.archives.gov/records-mgmt/faqs/federal.html) that focus on how that data is stored or destroyed. Contact [X] to find out more.
- If you will be collecting sensitive health data, fill in with overview and link. Contact [X] to find out more.

## Choosing a form service
Federalist pages are static websites; there is no backend for you to log into to get your form data. You'll need to use a separate form service to use a form on your webpage. Choosing a service depends on what the purpose of your form is. Here are some recommendations.

- Newsletter Sign Ups - [GovDelivery](https://granicus.com/solution/govdelivery/) is the most common tool used for newsletters sign ups. Your agency probably already has an account.
- Customer Feedback - [Touchpoints](https://touchpoints.digital.gov) offers fast track PRA approval for a standardized customer feedback survey. This service costs X.
- Everything else - [Google Forms](https://gsuite.google.com/products/forms/). Google Forms can handle most all of your form needs for free. Below is more advice for Google Forms.

#### Google Forms
Google Forms are easy to implement, secure, and customizable enough to handle whatever your form needs are. Here is advice on getting access to Google Forms and for adding them to your website with lots of examples.

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Some agencies can't use Google.</h3>
    <p class="usa-alert-text">Some agencies have the Google Forms domains blocked on their office networks. Unfortunately these agencies will need to find another service to use.</p>
  </div>
</div>

Most other agencies, while they may not have an official Google GSuite account purchased for use, can still usually get Google Forms another way.

##### Options for getting access to Google Forms
* Create a Google Account with your government email [using this form](https://accounts.google.com/SignUpWithoutGmail).
* Federalist staff can help set you up a with GSA Affiliated Customer Account (GACA).
* Get a special waiver from their own agency.

##### Advice for using a Google Form
Google Forms have a setting that lets you restrict submissions to just users within your agency. Turn that on or off as appropriate for your form.

The easiest way to include a Google Form on your page is to just link to it. Here is an [example](https://coe.gsa.gov/connect/contact-us.html#joinus) that links to a few different Google Forms.

To maintain a consistent user experience and design for your forms, we recommend a more advanced technique though. You can write your own HTML form that posts the data to Google Forms. Here are some Federalist examples: [Example](https://tech.gsa.gov/work-with-us/#contact), [Example](https://www.afwerx.af.mil/join.html)

Here is [a well written guide](https://blog.webjeda.com/google-form-customize/) for how to write your own HTML form that matches your created Google Form. You'll need to set your form's action url to post to the Google Form url, then set the correct name element for each of your form's questions. 

#### USDWS advice
If you are writing your own form HTML data, we recommend using the [United States Web Design System](https://designsystem.digital.gov/). Our Federalist [templates](https://federalist.18f.gov/documentation/templates/) are all built using the USWDS.
- [The USWDS form elements](https://designsystem.digital.gov/components/form-controls/)
- A few pre built [form templates](https://designsystem.digital.gov/components/form-templates/)
