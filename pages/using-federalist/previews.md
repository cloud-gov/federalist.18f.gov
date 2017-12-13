---
title: Previews
permalink: /pages/using-federalist/previews/
---

# Previews on Federalist

_Every_ branch in a GitHub repo is built by Federalist and is previewable. There can be two "special" branches, which are specified in the web UI's Basic Settings page as the Live Site Branch and/or the Demo Site Branch. Those branches can be built with custom domains (that's really the only way they're special).

Here's how the URLs work:
- for the Live site: Live Site Domain, if set, OR `https://federalist-proxy.app.cloud.gov/site/<OWNER>/<REPOSITORY>`.
- for the Demo site:  Demo Site Domain, if set, OR `https://federalist-proxy.app.cloud.gov/demo/<OWNER>/<REPOSITORY>`.
- for branch previews:  `https://federalist-proxy.app.cloud.gov/preview/<OWNER>/<REPOSITORY>/<BRANCH>`.

You can find links to previews in the "GitHub Branches" page after logging into Federalist. Preview links also auto-generate in pull requests; to see them, click on "details" after a build reports completion.

![Federalist Preview Screenshot]({{site.baseurl}}/assets/images/federalist-preview.png)
