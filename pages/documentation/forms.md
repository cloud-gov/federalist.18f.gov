---
title: Forms on Federalist sites
permalink: /documentation/forms/
layout: page
sidenav: documentation
---
Do you need to ask questions of the people visiting your Federalist website? Do you need to ask for their contact info or let them give you feedback? You need a form. This page provides an overview of existing digital form tools and requirements so you can determine which best apply to your agency's situation and get started.

This pages covers:
* [form services](#choosing-a-form-service)
* [Form requirements](#form-requirements)

## Form services
Federalist pages are static websites. This means there is no backend for you to log into to get your agency’s form data. You’ll need to use a separate form service to use a digital form on your agency’s site. Below is a list of service providers identified through research funded by [GSA's 10x program](https://18f.gsa.gov/tags/10x/). This list is continuously updated, please contact [Federalist product owners](x) if you see other service providers that should be added.

#### [Google Forms](https://www.google.com/forms/about/)
- Use cases: Newsletter sign ups, contact us, feedback, bug reporting, support requests, other custom forms
- Access: Federalist staff can help you determine if you are able to [create a google account with your government email](https://accounts.google.com/SignUpWithoutGmail) or create a GSA Affiliated Customer Account (GACA). Some agencies are fully blocked from using Google Forms; check with your agency if a special waiver for Google GSuite access may be issued.
- Quick tips:
  * [Limit submissions to users with a `.gov` or `.mil` email address](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform) or certain agency affiliation, see how in these [text validation instructions](https://support.google.com/docs/answer/3378864?hl=en).
  * Link one, or [multiple](https://coe.gsa.gov/connect/contact-us.html#joinus), forms on your page.
  * If you need to include government employees whose agency has blocked Google services, provide an alternative submission method, such as an email address.
- To get started: Talk to [Federalist product owners](x) to find out if your agency allows access to Google services.

#### [GovDelivery](https://granicus.com/solution/govdelivery/)
- Use cases: Newsletter sign ups.
- Access: Available for GSA; fully 508 compliant and FedRAMP certified. Other agencies with access listed at the [FedRamp marketplace](https://marketplace.fedramp.gov/#/product/govdelivery-communications-cloud?sort=productName&productNameSearch=govdelivery).
- To get started:  Talk to your Chief Information Security Office (CISO) to get an account.

#### [HubSpot](https://www.hubspot.com/)
- Use cases: Newsletter sign ups.
- Access: Available for GSA. May be available for other agencies.
- To get started: Talk to your CISO to find out if you have access.

#### [Touchpoints](https://feedback.usa.gov/touchpoints/)
- Use cases: standardized feedback and contact forms, custom forms
- Access: Available for all federal agencies, including access to Touchpoint's associated generic clearance. Standardized forms include fast track Paperwork Reduction Act (PRA) approval. Additional approval may be required for custom forms.
- To get started: Visit the [Touchpoints homepage](https://feedback.usa.gov/touchpoints/) to learn more.

## Form requirements
Several requirements may apply to your agency's digital form, whether posting to Federalist or another site.

#### The Paperwork Reduction Act (PRA)
What it is: The Paperwork Reduction Act determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: this [guide to the PRA](https://pra.digital.gov/) will help you understand if and how PRA is applicable to your form.

Tip: If you do need to get PRA approval, publish a more basic version of your form that falls under a PRA exemption, and at the same time, [submit your full version for review]((https://pra.digital.gov/clearance-process/). This will allow you to move forward while you wait for approval, which can take 6 to 9 months.

How to get started: First figure out if PRA applies to your form](https://pra.digital.gov/do-i-need-clearance/) or if an exemption or generic clearance applies to your situation. Also, get in touch with your agency's [PRA contact](https://pra.digital.gov/contact/).

#### 508 Accessibility
What it is: [Section 508 of the Rehabilitation Act of 1973](https://www.section508.gov/manage/laws-and-policies) requires that government websites be fully accessible to people with disabilities. The [21st Century IDEA Act](https://www.congress.gov/bill/115th-congress/house-bill/5759/text) amplifies this accessibility, and requires a modern user experience.

Tips:
- Use the [United States Web Design System](https://designsystem.digital.gov/) (USWDS) to design your form. It's built to help you more easily comply with accessibility. [Federalist templates](https://federalist.18f.gov/documentation/templates/) are all built using the USWDS. To design the different parts of your form, refer to [USWDS form controls](https://designsystem.digital.gov/components/form-controls/). Pre-built [form templates](https://designsystem.digital.gov/components/form-templates/) offer great examples. Even if you use the USDWS, regularly [scan for accessibility compliance](https://accessibility.18f.gov/tools/).
- If you create a form without using the USWDS, follow [18F's accessibility guide](https://accessibility.18f.gov/) to still ensure your form is accessible.
- Follow these [plainlanguage guidelines](https://plainlanguage.gov/guidelines/) to ensure your content is accessible to the public.
- Join the [Web Content Managers Forum](https://digital.gov/communities/web-content-managers/) to learn with others.

To get started: X. 

#### Privacy Act
What it is: The [Privacy Act](https://www.archives.gov/about/laws/privacy-act-1974.html) requires the government to keep track of any forms collecting Personally Identifiable Information (PII) and to help keep that information secure. If your form is collecting PII from the public, you'll most likely need to:
  - Include Privacy Act Notice language with the relevant form. Here is [GSA's Privacy and Security Notice](https://www.gsa.gov/website-information/privacy-and-security-notice), which is linked to from each form on GSA's website.
  - Ensure the form tool you are using has an official System of Record Notice (SORN). Here is the list of [GSA's SORNs for reference](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act).
  - Complete a Privacy Impact Assessment (PIA) to ensure that privacy issues and protections are addressed. Here is a [PIA written for GovDelivery by the Department of the Interior](https://www.doi.gov/sites/doi.gov/files/uploads/govdelivery_pia_final_05.31.2017_1.pdf).

How to get started: Get in contact with your agency's Privacy Office.

## Want to learn more about Federalist or forms?
Contact [Federalist product owners](x).
