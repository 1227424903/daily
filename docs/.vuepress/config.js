
module.exports = {
  title: 'daily',
  description: 'daily',
  base: '/daily',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: '1227424903/daily',
    docsRepo: '1227424903/daily',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'daily',
              collapsable: false,
              children: genEssentialsSidebar()
            },
          ],
  
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A magical vue admin'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    // '/guide/essentials/layout.md',
    // '/guide/essentials/router-and-nav.md',
    // '/guide/essentials/permission.md',
    // '/guide/essentials/tags-view.md',
    // '/guide/essentials/new-page.md',
    // '/guide/essentials/style.md',
    // '/guide/essentials/server.md',
    // '/guide/essentials/mock-api.md',
    // '/guide/essentials/import.md',
    // '/guide/essentials/deploy.md',
    // '/guide/essentials/env.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
