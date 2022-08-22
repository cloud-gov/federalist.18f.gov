---
title: Large File Handling
permalink: /documentation/large-file-handling/
layout: page
sidenav: documentation

---

There are a few guidelines and restrictions to be aware of when dealing with large files, or a large number of files.

## General Guidelines 

Due to restrictions imposed by Github and cloud.gov, as well as the internal infrastructure of Federalist, sometimes builds fail when running out of disk space. This usually shows up as an error in build logs like `"Disk quota exceeded"` or `"No space left on device"`. The Federalist team is looking into longer-term upgrades to help ease these restrictions. In the meantime, here are a few general rules and tips:
- Our regular build container provide 2GB of total user space. Because dependencies like those included in your `Gemfile` or `package.json` will be installed here, it's a good rule of thumb to keep your total Github repository size under 1GB.
- If your site starts hitting this initial limit, we can update your user space to 4GB.
- If your site is going over both of these limits, one temporary workaround is to create a new site just to store certain large assets like images, PDFs, or slide decks. For example, the [Federal Retirement Thrift Savings Board](https://www.frtib.gov/) (FRTIB) hosts all their archived meeting minutes from another Github repo which deploys to https://minutes.frtib.gov and links to these from the primary site.


## Details

### Federalist Build Containers

We offer two sizes of build containers ("regular": 4GB and "large": 6GB). The maximum size is limited by the size of containers available on [cloud.gov](https://cloud.gov). The first 2GB of each container is taken up by dependencies installed by Federalist (Ruby, Node, Python, and additional packages for each) leaving either 2GB or 4GB for the user space.

### Github

Github is not intended to store large files or a large number of files. There are caps on the size on an individual file and the total size of a single repository:
- Individual file size: 100MB<sup>*</sup>
- Single repository size: Recommended to keep below 1GB

More details can be found [on their website](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).

_*[Git LFS](https://git-lfs.github.com/) can support larger file storage but currently does not integrate with the Federalist build process_
