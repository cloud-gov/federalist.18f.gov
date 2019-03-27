---
title: Access and Permissions
permalink: /documentation/access-permissions/
layout: page
sidenav: documentation
redirect_from: 
  - /pages/using-federalist/access-permissions/

---

# Access and Permissions

## Initial access

### Personal Access
Basic access to federalist is authenticated using GitHub OAuth.  Please ask your team's primary contact for Federalist to request access to Federalist by e-mailing federalist-support@gsa.gov with the GitHub usernames of those that should have access. Primary contacts should also let us know when to remove access as part of offboarding.

### Organizational Access
In order to manage sites where the repository is owned by an organization, Federalist uses GitHub oAuth at the organizational level.  After you have obtained personal access to Federalist by joining the federalist-users GitHub organization, as described above, you must [request organization approval](https://help.github.com/en/articles/requesting-organization-approval-for-oauth-apps) for the federalist.18f.gov oAuth App.  Be sure to follow up with your organization's GitHub admin to confirm approval.

## Site permissions

To take any actions on a site in Federalist, you need permissions set on the corresponding GitHub repository. Write access grants most permissions.

### Collaborator or Write Access

Collaborators with write access to a site's repository can:
- add a current Federalist site to their sites list
- trigger site rebuilds
- view site build history and build logs
- view site collaborator list
- view and update site settings
- view site branches, branch previews and uploaded files

### Administrator

Administrators of a site's repository can take all actions available to collaborator and can:
- add a new repo to Federalist
- delete a site from Federalist
- add/remove site collaborators

