---
title: Support
permalink: /pages/using-federalist/support/
---
# Getting Support

After we execute an Inter-Agency Agreement (IAA), and you are a live customer, we will onboard you into our support process. Our goal is to provide you with support responses within one business day though we aspire to be faster in our responses. As a reminder, Federalist agreements do not include labor hours, but we always want to make sure the platform is working and responsive to your needs as we consider new features.

In general, when helping out with support requests, it is always helpful for users to include:

- Full repository URL (like https://github.com/organization/repository)
- The custom domain being used, if any
- The name of the branch that is experiencing problems
- Full build logs for the failing build

When these points of information are not included, we often end up having to track them down, which slows down the debugging process. We may also ask you to to add Federalist staff to your repo with `write` privileges so that we can more quickly debug.

### Specific Failure Causes

The following is a non-exhausitve list of commmon issues we see partners run into:

1. Trying to deploy code that uses the `github-pages` gem interferes with the Federalist build process to specific URLs. Users should always remove that gem from their repos.
2. Errors like "Federalist can't confirm org permissions for 'your-org'." Either `your-org` hasn't approved access for Federalist or you aren't an org member. Ensure you are an org member and ask an org owner to authorize Federalist for the organization can be resolved by visiting [this link](https://github.com/settings/connections/applications/94d4097d74049df1039b) and requesting org access as needed. This happens because Federalist can't tap a repo without org approval. Typically these permissions are granted when initially granting access to Federalist.

