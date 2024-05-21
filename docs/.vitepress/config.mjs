import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Quick Request Laravel",
  description: "Easily consume your endpoints in Laravel. Using Ajax? Discover something even more exciting! 💻✨",
  lang: 'en-US',
  lastUpdated: true,
  base: '/Quick-Request-Laravel',
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2023 Raul Mauricio Uñate'
    },
    editLink: {
      pattern: 'https://github.com/rmunate/Quick-Request-Laravel/tree/main/docs/:path'
    },
    logo: '/img/quick-request.png',
    nav: [
      { text: 'v1.0.3', link: '/' }
    ],
    sidebar: [
      {
        items: [
          { text: 'What is QuickRequest?', link: '/introduction/introduction' }
        ]
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Installation', link: '/getting-started/install' },
          { text: 'Versions', link: '/getting-started/versions' },
          { text: 'Release Notes', link: '/getting-started/changelog' },
        ]
      },
      {
        text: 'Usage',
        collapsed: true,
        items: [
          { text: 'General Structure', link: '/usage/general-structure' },
          { text: 'Examples', link: '/usage/examples' },
          { text: 'BLOB', link: '/usage/blobs' },
          { text: 'RunTime Exceptions', link: '/usage/exceptions' },
          { text: 'Read Errors', link: '/usage/laravel-errors' },
        ]
      },{
        text: 'Contribute',
        collapsed: true,
        items: [
            {text: 'Bug Report', link: '/contribute/report-bugs'},
            {text: 'Contribution', link: '/contribute/contribution'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rmunate/Quick-Request-Laravel' }
    ],
    search: {
      provider: 'local'
    }
  },
  head: [
    ['link', {
      rel: 'stylesheet',
      href: '/Quick-Request-Laravel/css/style.css'
    }
    ],
    ['link', {
      rel: 'icon',
      href: '/Quick-Request-Laravel/img/quick-request.png',
      type: 'image/png'
    }
    ],
    ['meta', {
      property: 'og:image',
      content: '/Quick-Request-Laravel/img/logo-github.png'
    }
    ],
    ['meta', {
      property: 'og:image:secure_url',
      content: '/Quick-Request-Laravel/img/logo-github.png'
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
      content: 'Quick-Request-Laravel'
    }
    ],
    ['meta', {
      property: 'og:description',
      content: 'Developing Laravel monoliths has never been easier and more efficient! 💻✨'
    }
    ],
    ['meta', {
      property: 'og:url',
      content: 'https://rmunate.github.io/Quick-Request-Laravel/'
    }
    ],
    ['meta', {
      property: 'og:type',
      content: 'website'
    }
    ]
  ],
})
