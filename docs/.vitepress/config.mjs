import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Quick Request Laravel",
  description: "Easily consume your endpoints in Laravel. Using Ajax? Discover something even more exciting! 💻✨",
  lang: 'en-US',
  lastUpdated: true,
  base: '/QuickRequest-Laravel',
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2023 Raul Mauricio Uñate'
    },
    editLink: {
      pattern: 'https://github.com/rmunate/QuickRequest-Laravel/tree/main/docs/:path'
    },
    logo: '/img/quick-request.png',
    nav: [
      { text: 'v1.0.0', link: '/' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction/introduction' }
        ]
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Install', link: '/getting-started/install' },
          { text: 'Version', link: '/getting-started/versions' },
          { text: 'Changelog', link: '/getting-started/changelog' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rmunate/QuickRequest-Laravel' }
    ],
    search: {
      provider: 'local'
    }
  },
  head: [
    ['link', {
      rel: 'stylesheet',
      href: '/QuickRequest-Laravel/css/style.css'
    }
    ],
    ['link', {
      rel: 'icon',
      href: '/QuickRequest-Laravel/img/quick-request.png',
      type: 'image/png'
    }
    ],
    ['meta', {
      property: 'og:image',
      content: '/QuickRequest-Laravel/img/logo-github.png'
    }
    ],
    ['meta', {
      property: 'og:image:secure_url',
      content: '/QuickRequest-Laravel/img/logo-github.png'
    }
    ],
    ['meta', {
      property: 'og:image:width',
      content: '600'
    }
    ],
    ['meta', {
      property: 'og:image:height',
      content: '400'
    }
    ],
    ['meta', {
      property: 'og:title',
      content: 'QuickRequest-Laravel'
    }
    ],
    ['meta', {
      property: 'og:description',
      content: 'Developing Laravel monoliths has never been easier and more efficient! 💻✨'
    }
    ],
    ['meta', {
      property: 'og:url',
      content: 'https://rmunate.github.io/QuickRequest-Laravel/'
    }
    ],
    ['meta', {
      property: 'og:type',
      content: 'website'
    }
    ]
  ],
})
