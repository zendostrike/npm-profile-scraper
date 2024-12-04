# npm-profile-scraper

## Install

```
npm i npm-profile-scraper
```

## Usage

```
import { fetchNPMProfile } from 'npm-profile-scraper'

const result = await fetchNPMProfile({ username: 'zendostrike' })

result.profile // NPMProfile

/**

  NPMProfile

  username: string
  fullName: string
  githubUsername: string
  githubLink: string
  totalPackages: string

**/

result.packages // NPMPackage[]

/**

  NPMPackage

  name: string
  description: string
  creator: string
  info: string
  link: string

**/
```