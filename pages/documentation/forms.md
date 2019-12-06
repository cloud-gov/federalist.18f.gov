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
Federalist pages are static websites. This means there is no backend for you to log into to get your agency’s form data. You’ll need to use a separate form service to use a digital form on your agency’s site. Below is a list of service providers, identified through research funded by [GSA's 10x program](https://18f.gsa.gov/tags/10x/). This list is continuously updated, please contact Federalist product owners at federalist-support@gsa.gov if you see other service providers that should be added.

#### [Google Forms](https://www.google.com/forms/about/)
- Use cases: Newsletter sign ups, contact us, feedback, bug reporting, support requests, other custom forms
- Access: Available when you [create a google account with your government email](https://accounts.google.com/SignUpWithoutGmail) or create a GSA Affiliated Customer Account (GACA). Some agencies are fully blocked from using Google Forms; your agency may be able to issue you a special waiver for Google GSuite access.
- Quick tips:
  * [Limit submissions to users with a `.gov` or `.mil` email address](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform) or certain agency affiliation, see how in these [text validation instructions](https://support.google.com/docs/answer/3378864?hl=en).
  * Link one, or [multiple](https://coe.gsa.gov/connect/contact-us.html#joinus), forms on your page.
  * Keep in mind your form users need to have access to Google GSuite too. If you need to include users who are blocked, post an email address to where they can request a PDF form instead.
- To get started: See if you can [create a google account with your government email](https://accounts.google.com/SignUpWithoutGmail). If not, try to open this [test form](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform). If you can't, your agency likely fully blocks access to Google Forms. Ask your Office of the Chief Information Officer about acquiring a special waiver.

#### [GovDelivery](https://granicus.com/solution/govdelivery/)
- Use cases: Newsletter sign ups.
- Access: Available for GSA; fully 508 compliant and FedRAMP certified. Other agencies with access are listed at the [FedRamp marketplace](https://marketplace.fedramp.gov/#/product/govdelivery-communications-cloud?sort=productName&productNameSearch=govdelivery).
- To get started:  Once you've checked your agency has access, talk to your Office of the Chief Information Officer to get an account.

#### [HubSpot](https://www.hubspot.com/)
- Use cases: Newsletter sign ups.
- Access: Available for GSA. May be available for other agencies.
- To get started: Talk to your Office of the Chief Information Officer to find out if you have access.

#### [Touchpoints](https://feedback.usa.gov/touchpoints/)
- Use cases: standardized feedback and contact forms, custom forms
- Access: Available for all federal agencies, including access to Touchpoint's associated generic clearance. Standardized forms include fast track Paperwork Reduction Act (PRA) approval and conform to OMB's Circular A-11 requirements. Additional approval may be required for custom forms.
- To get started: Visit the [Touchpoints homepage](https://feedback.usa.gov/touchpoints/) to learn more.

## Form requirements
Several requirements may apply to your agency's digital form, whether posting to Federalist or another site.

#### [The Paperwork Reduction Act (PRA)](https://digital.gov/resources/paperwork-reduction-act-44-u-s-c-3501-et-seq/)
What it is: The PRA determines how federal agencies collect information from the public. Adhering to this law doesn't have to be complicated: this [guide to the PRA](https://pra.digital.gov/) will help you understand if and how PRA is applicable to your form.

Tip: If you do need to get PRA approval, publish a more basic version of your form that falls under a PRA exemption, and at the same time, [submit your full version for review](https://pra.digital.gov/clearance-process/). This will allow you to move forward while you wait for approval, which can take 6 to 9 months.

How to get started: First [figure out if PRA applies to your form](https://pra.digital.gov/do-i-need-clearance/) or if an exemption or generic clearance applies to your situation. Also, get in touch with your agency's [PRA contact](https://pra.digital.gov/contact/).

#### OMB Circular A-11
What it is:
Tip:
To get started:

#### [Section 508 of the Rehabilitation Act of 1973 (508 Compliance)](https://www.section508.gov/manage/laws-and-policies)
What it is: 508 compliance requires that government websites be fully accessible to people with disabilities. The [21st Century IDEA Act](https://www.congress.gov/bill/115th-congress/house-bill/5759/text) amplifies this accessibility, and requires a modern user experience.

Tips:
- Use the [United States Web Design System](https://designsystem.digital.gov/) (USWDS) to design your form. It's built to help you more easily comply with accessibility. [Federalist templates](https://federalist.18f.gov/documentation/templates/) are all built using the USWDS. To design the different parts of your form, refer to [USWDS form controls](https://designsystem.digital.gov/components/form-controls/). [Pre-built form templates](https://designsystem.digital.gov/components/form-templates/) offer great examples. Even if you use the USDWS, regularly [scan for accessibility compliance](https://accessibility.18f.gov/tools/).
- If you create a form without using the USWDS, follow [18F's accessibility guide](https://accessibility.18f.gov/) to still ensure your form is accessible.
- Follow these [plainlanguage guidelines](https://plainlanguage.gov/guidelines/) to ensure your content is accessible to the public.

To get started: X. 

#### [Privacy Act](https://www.archives.gov/about/laws/privacy-act-1974.html)
What it is: The Privacy Act requires the government to keep track of any forms collecting Personally Identifiable Information (PII), to keep that information secure, and in some cases, complete a Privacy Impact Assessment (PIA), like this [PIA written for GovDelivery by the Department of the Interior](https://www.doi.gov/sites/doi.gov/files/uploads/govdelivery_pia_final_05.31.2017_1.pdf). Each agency is responsible for assessing the need for an official System of Record Notice (SORN) for information collected via Forms. A list of SORNs should be available in each agency, like [GSA's list of SORNs](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act). If an agency determines it needs a SORN, it must also create and add a Privacy Act Notice to its Form.
Tip: If you are required to include a Privacy Act Notice in your form, find out if your agency has a stock language you can link to on your form. Check out [Department of Homeland Security's (DHS) Privacy Act Notice template](https://www.dhs.gov/xlibrary/assets/privacy/privacy_guidance_e3.pdf) for an example. For GSA users, here is [GSA's Privacy and Security Notice](https://www.gsa.gov/website-information/privacy-and-security-notice) to use. 

How to get started: Get in contact with your agency's Privacy Office. GSA users should start by filling out the [GSA Privacy Office intake form](https://docs.google.com/forms/d/1fYME9MzhfAYuRiONJEsf1EFS9cmg03jODFq2Y9hkEgs/viewform?edit_requested=true).

#### [Federal Records Act](https://www.archives.gov/about/laws/fed-agencies.html)
What is is: The data collected in your form needs to be stored and destroyed in compliance with the Federal Records Act. You are responsible for identifying what of your data is considered a record, and managing those records in accordance with your agency's [National Archives and Records Administration (NARA)-approved record schedule](https://www.archives.gov/about/laws/fed-agencies.html).
Tip: If your form data is considered a record, remember that the data collected in your form is stored in the forms service, not in Federalist.
To get started: Get in touch with your agency's Records and Information Management (RIM) office.

## Want to learn from other agencies using digital forms?
Join the [Web Content Managers Forum](https://digital.gov/communities/web-content-managers/).
