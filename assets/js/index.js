// Since the uswds-jekyll generates the navigation there is no way to have URLs for different environments
// Not great, but we can't get around this easily, so this works fine.
switch (window.location.hostname){
  case 'federalist.18f.gov':
    // do nothing. we keep as the first match so it's fastest in production
  break;
  case 'federalist-proxy-staging.app.cloud.gov':
  case 'federalist-staging.18f.gov':
    document.querySelector('.usa-nav-secondary-links li:last-child a').href = 'https://federalistapp-staging.18f.gov';
  break;
  default:
    // this will catch different local addresses: localhost, 0.0.0.0, 127.0.0.1, etc
    document.querySelector('.usa-nav-secondary-links li:last-child a').href = 'http://localhost:1337';
}

// Temporary added to ensure the search input is visible to browser users
//
// Can be removed once https://github.com/18F/uswds-jekyll/issues/184 is resolved
// and the dependency is updated.
//
document.getElementById('search_form').classList.remove('usa-sr-only');