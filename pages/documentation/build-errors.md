---
title: Build Errors
permalink: /documentation/build-errors/
layout: page
sidenav: documentation
---


# Build Errors

The following is a non-exhausitve list of commmon issues we see partners run into:

- Trying to deploy code that uses the `github-pages` gem interferes with the Federalist build process to specific URLs. Users should always remove that gem from their repos.
- Errors like "Federalist can't confirm org permissions for 'your-org'." Either `your-org` hasn't approved access for Federalist or you aren't an org member. Ensure you are an org member and ask an org owner to authorize Federalist for the organization can be resolved by visiting [this link](https://github.com/settings/connections/applications/94d4097d74049df1039b) and requesting org access as needed. This happens because Federalist can't tap a repo without org approval. Typically these permissions are granted when initially granting access to Federalist.