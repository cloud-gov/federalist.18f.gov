---
title: Forms
permalink: /documentation/forms/
layout: page
sidenav: documentation
---
Looking to post a digital form to your federal agency's Federalist site? This page provides an overview of existing ditigal form tools and requirements so you can determine which best apply to your agency's situation and get started.

This pages covers:
* [Choosing a form service](#choosing-a-form-service)
* [Form requirements](#form-requirements)

## Choosing a form service
Federalist pages are static websites. This means there is no backend for you to log into to get your agency's form data. You'll need to use a separate form service to use a digital form on your agency's site. Choosing a service depends on what the purpose of your agency's form is. Here are some options:

[Google Forms](https://www.google.com/forms/about/)
- Use cases: sign ups, contact us, feedback, bug reporting, support requests, data filtering, other custom forms
- Access: Federalist staff can help you determine if you are able to [create a google account with your government email](https://accounts.google.com/SignUpWithoutGmail) or create a GSA Affiliated Customer Account (GACA). Some agencies are fully blocked from using Google Forms; check with your agency if a special waiver for Google GSuite access may be issued.
- Quick tips:
* [Limit submissions to users with a `.gov` or `.mil` email address](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform) or certain agency affiliation, see how in these [text validation instructions](https://support.google.com/docs/answer/3378864?hl=en).
* Link one, or [multiple](https://coe.gsa.gov/connect/contact-us.html#joinus), forms on your page.
- To get started, do this/go here.

[GovDelivery](https://granicus.com/solution/govdelivery/)
- Use cases: sign ups
- Access: Available for GSA; fully 508 compliant and FedRAMP certified. For others, check with your agency's X group. 
- To get started, do this/go here.

[HubSpot](https://www.hubspot.com/)
- Use cases: sign ups
- Access: Available for GSA. For others, check with your agency's X group.
- To get started, do this/go here.

[Touchpoints](https://touchpoints.digital.gov)
- Use cases: standardized feedback and contact forms, custom forms
- Access: Available for all federal agencies, including access to Touchpoint's associated generic clearance. Standardized forms include fast track Paperwork Reduction Act (PRA) approval. Additional approval may be required for custom forms.
- To get started, do this/go here.

## Form requirements
Here are some requirements that may apply to your agency's digital form. 

### The Paperwork Reduction Act (PRA)
The Paperwork Reduction Act determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: a fantastic guide has been written at [https://pra.digital.gov/](https://pra.digital.gov/) to help you understand if and how PRA is applicable to your form. Here's a quick preview of the basic steps you should take:

1. To figure out if PRA applies to your form, first see if an exemption or generic clearance for common forms applies here: [https://pra.digital.gov/do-i-need-clearance/](https://pra.digital.gov/do-i-need-clearance/)
2. If you do need to get PRA approval, then start early! [https://pra.digital.gov/clearance-process/](https://pra.digital.gov/clearance-process/) In some cases it can take 6 to 9 months to get a form approved for your website. To avoid delaying your work, PRA experts recommend you first try to publish a more basic version of your form that falls under a PRA exemption, while you wait for your full version to be reviewed.
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
The Federal Records Act also requires that federal agencies publish a list of which systems they keep PII on. These are call System of Record Notices. Each agency publishes a list, [here](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act) is GSA's for reference.
