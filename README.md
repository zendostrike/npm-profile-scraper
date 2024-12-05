<hr>
<div align="center">
  <h1 align="center">
    npm-profile-scraper
  </h1>
</div>

<p align="center">
  <a aria-label="Types" href="https://www.npmjs.com/package/react-hotkeys-hook">
    <img alt="Types" src="https://img.shields.io/npm/types/react-hotkeys-hook?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/react-hotkeys-hook?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i npm-profile-scraper</pre>

<p align="center">
Get any NPM Profile information to use on your own Website or Blog.
</p>

<hr>

## Quick Start

The easiest way to use the library.

```jsx harmony
import { fetchNPMProfile } from 'npm-profile-scraper'

const result = await fetchNPMProfile({ username: 'zendostrike' })

result.profile // Type: NPMProfile

/**

  NPMProfile

  username: string
  fullName: string
  githubUsername: string
  githubLink: string
  totalPackages: string

**/

result.packages // Type: NPMPackage[]

/**

  NPMPackage

  name: string
  description: string
  creator: string
  info: string
  link: string

**/
```

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Giancarlo Ramirez - [@zendostrike](https://github.com/zendostrike) - gece.ramirez@gmail.com

Project Link: [https://github.com/zendostrike/npm-profile-scraper](https://github.com/zendostrike/npm-profile-scraper)

## Contributors

<a href="https://github.com/zendostrike/npm-profile-scraper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zendostrike/npm-profile-scraper" />
</a>