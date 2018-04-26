var definitions = [
  {
    term: "Advanced user",
    definition: "Advanced users of Federalist are able to use Jekyll, Hugo, or their own custom tools to build their Federalist site according to their specific needs. While you do not need to have extensive programming knowledge to use Federalist, in-depth customization of your site requires help from advanced users.",
  },
  {
    term: "ATO",
    definition: "An authorization to operate (ATO) is a formal declaration by a designated approving authority authorizing the use and operation of a product and accepting the risk to agency operations. All federal websites must have an authority to operate. An ATO is granted when the system has met and passed all requirements to become operational.",
  },
  {
    term: "Attack surface",
    definitions: "All of the ways an an unauthorized user can try to enter or extract data from a software environment. Keeping the attack surface as small as possible makes security simpler.",
  },
  {
    term: "CloudFront Content Delivery Network Distribution",
    definition: "A service that securely and scalably delivers data to your users, relying on data centers across the world to keep load times fast. Federalist uses the cloudfront distribution to serve your content on Federalist to people visiting your URL.",
  },
  {
    term: "Denial of service attack",
    definition: "A cyber-attack in which the attacker seeks to make a product unavailable to its users temporarily or indefinitely. This is typically done by flooding the targeted product with unnecessary requests in an attempt to overload the product, preventing legitimate requests from being fulfilled.",
  },
  {
    term: "FedRAMP",
    definition: "The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud-hosted products and services. FedRAMP enables agencies to rapidly adapt from old, insecure legacy technology to mission-enabling, secure, and cost effective cloud-based technology. More information at https://www.fedramp.gov/.",
  },
  {
    term: "Git",
    definition: "A free and open source distributed version control system designed to track and coordinate changes to files among multiple people. Git is easy to learn and can be used for projects ranging in size with speed and efficiency.",
  },
  {
    term: "GitHub",
    definition: "A web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management of Git in addition to its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.",
  },
  {
    term: "GitHub repository",
    definition: "A storage space where your projects can live. It can be a local folder on your computer or a storage space on GitHub or another online host. You can keep code files, text files, and image files stored inside a repository.",
  },
  {
    term: "GitHub branch",
    definition: "To allow multiple people to work on a project at the same time, you can  create a branch, which is a parallel version or copy of a repository. It is contained within the repository, but does not affect the primary or master branch, allowing you to work freely without disrupting the \"live\" version. When you’ve made the changes you want to make and are ready to update the main project, you can merge your branch back into the master branch to publish your changes. This action combines your content with the existing repository file.",
  },
  {
    term: "GitHub pull request",
    definition: "Pull requests notify your project team about changes you want to make to your project repository on GitHub, pulling changes from one branch to another. Once a pull request is opened, project collaborators discuss and review the potential changes before the changes are merged into the repository.",
  },
  {
    term: "Hugo",
    definition: "A static site generator that takes data files, configurations, templates for layouts, static files, and content written in markdown and renders a static website. Hugo is an open source project with several notable features including multilingual support, image processing, custom output formats, and shortcodes. To work with Hugo, users should have some familiarity with the programming language Go."
  },
  {
    term: "Jekyll",
    definition: "A simple, static site generator for personal, project, or organization sites. Jekyll is distributed under an open source license. Instead of using databases, Jekyll takes the content, renders markdown templates, and produces a complete, static website. Jekyll sites can be connected to cloud-based content management software, enabling content editors to modify site content without having to know how to code. To work with Jekyll, users should have some familiarity with the programming language Ruby."
  },
  {
    term: "Markdown",
    definition: "A lightweight markup language that is easy to write using a basic text editor and easy to read so that changes can be made to your content without having to know how to code. Experiment at markdown-helper.18f.gov."
  },
  {
    term: "Open source",
    definition: "Software that does not charge users a purchase or licensing fee for modifying or redistributing the source code so that it can be reused freely and easily."
  },
  {
    term: "Public domain",
    definition: "The state of being available to the public. Items in the public domain are not subject to copyright regulations."
  },
  {
    term: "Static website",
    definition: "A set of files on a web server, each representing a single webpage at a specific web address. When visiting a specific page of a static website, you are downloading and viewing that page’s file using a browser. A static website differs from a dynamic website in that dynamic websites require application code to be run and processed on every request. With a static site, there is no application code. It’s solely serving data files to be processed and rendered in the browser."
  },
  {
    term: "Amazon S3 bucket",
    definition: "Amazon’s Simple Storage Service (S3) is a web service offered by Amazon Web Services (AWS). S3 buckets are units of storage used to store objects, which consist of data and metadata that describes the data."
  }
];
Federalist.Glossary.create(definitions);

// We need to do this because uswds-jekyll doesn't allow for
// a tags without an `href` property, or for tags with a '#'
// as the `href`
const glossaryBtn = document.querySelector('.js-glossary-toggle');
glossaryBtn.addEventListener('click', function(event) {
  event.preventDefault()
});
