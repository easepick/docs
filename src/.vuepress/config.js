const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'easepick',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsRepo: 'https://github.com/easepick/docs/',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    activeHeaderLinks: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/easepick/easepick/',
      },
      {
        text: 'Donate',
        link: 'https://ko-fi.com/V7V418NB3',
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        //collapsable: false,
        //sidebarDepth: 0,
      },
      {
        title: 'Configurator',
        path: '/configurator/',
        collapsable: false,
        sidebarDepth: 0,
      },

      {
        title: 'Packages',
        //path: '/packages/',
        //collapsable: false,
        //sidebarDepth: 0,
        children: [
          {
            title: '@easepick/bundle',
            path: '/packages/bundle',
          },
          {
            title: '@easepick/base-plugin',
            path: '/packages/base-plugin',
          },
          {
            title: '@easepick/datetime',
            path: '/packages/datetime',
          },
          {
            title: '@easepick/core',
            path: '/packages/core',
          },
          {
            title: '@easepick/amp-plugin',
            path: '/packages/amp-plugin',
          },
          {
            title: '@easepick/kbd-plugin',
            path: '/packages/kbd-plugin',
          },
          {
            title: '@easepick/lock-plugin',
            path: '/packages/lock-plugin',
          },
          {
            title: '@easepick/range-plugin',
            path: '/packages/range-plugin',
          },
          {
            title: '@easepick/preset-plugin',
            path: '/packages/preset-plugin',
          },
          {
            title: '@easepick/time-plugin',
            path: '/packages/time-plugin',
          },
        ],
      },


      {
        title: 'Development',
        //collapsable: false,
        //sidebarDepth: 0,
        children: [
          {
            title: 'Environment',
            path: '/development/environment',
          },
          {
            title: 'Creating plugins',
            path: '/development/plugins',
          },
        ]
      },

      {
        title: 'Support',
        //collapsable: false,
        //sidebarDepth: 0,
        children: [
          {
            title: 'Getting support',
            path: '/support/getting-support',
          },
          {
            title: 'Reporting issues',
            path: '/support/reporting-issues',
          },
          {
            title: 'License',
            path: '/support/license',
          },
        ]
      },


      {
        title: 'Examples',
        //collapsable: false,
        //sidebarDepth: 0,
        children: [
          {
            title: 'Basic example',
            path: '/examples/basic',
          },
          {
            title: 'Basic hotel calendar',
            path: '/examples/hotel',
          },
          {
            title: 'Show nights in tooltip',
            path: '/examples/nights',
          },
          {
            title: 'Using another language',
            path: '/examples/language',
          },
          {
            title: 'Allowed days',
            path: '/examples/allowed-days',
          },
          {
            title: 'Days with prices',
            path: '/examples/days-with-prices',
          },
          {
            title: 'Customize',
            path: '/examples/customize',
          },
        ]
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@mr-hope/sitemap',
      {
        hostname: 'https://easepick.com',
      },
    ],
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/images/og_image.png' }],
    ['script', { src: '/js/custom.js', defer: true, async: true }],
  ],
}
