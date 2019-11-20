---
title: Forms
permalink: /documentation/forms/
layout: page
sidenav: documentation
---

When adding a form to your Federalist website, you need to answer two main questions:
1. Does your form need to go through the Paperwork Reduction Act process?
2. What technology will best serve your form's purpose?

Forms in the Federal government have a lot of rules around what is allowed. This page will help you navigate those rules and help to choose what technology is appropriate.

### The Paperwork Reduction Act (PRA)
The PRA can be a complicated and lengthy process. It can take **6 to 9 months** to get a form approved for your website! Luckily, a fantastic guide has been written at [https://pra.digital.gov/](https://pra.digital.gov/) to help your understanding of the PRA and its applicability to your form.

1. Figure out if your form needs to go through the PRA process. There are a handful of exemptions. Also, some agencies have generic clearances in place for common forms already. [https://pra.digital.gov/do-i-need-clearance/](https://pra.digital.gov/do-i-need-clearance/)
2. For help, get in touch with your agency's PRA contact. [https://pra.digital.gov/contact/](https://pra.digital.gov/contact/)
3. If you do need to get PRA approval, then start early! [https://pra.digital.gov/clearance-process/](https://pra.digital.gov/clearance-process/)
4. After you've started the PRA process, then build the form.

### Choosing a form service
Federalist pages are static websites, there is no backend for you to log into to get your form data. You'll need to use a separate form service to use a form on your webpage. Choosing a service depends on what the purpose of your form is. Here are some recommendations.

- Newsletter Sign Ups - [GovDelivery](https://granicus.com/solution/govdelivery/) is the most common tool used for newsletters sign ups. Your agency probably already has an account.
- Customer Feedback - [Touchpoints](https://touchpoints.digital.gov) offers fast track PRA approval for a standardized customer feedback survey.
- Everything else - [Google Forms](https://gsuite.google.com/products/forms/). Google Forms can handle most all of your form needs. Below is more advice for Google Forms.

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
