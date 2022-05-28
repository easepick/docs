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
    repo: 'https://github.com/easepick/easepick/',
    editLinks: true,
    docsRepo: 'https://github.com/easepick/docs/',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          //collapsable: false,
          sidebarDepth: 0,
          children: [
            '',
            {
              title: 'Development',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  title: 'Evnironment',
                  path: '/guide/development/evnironment',
                },
                {
                  title: 'Creating plugins',
                  path: '/guide/development/plugins',
                },
              ]
            },
            {
              title: 'Support',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  title: 'Getting support',
                  path: '/guide/support/getting-support',
                },
                {
                  title: 'Reporting issues',
                  path: '/guide/support/reporting-issues',
                },
                {
                  title: 'License',
                  path: '/guide/support/license',
                },
              ]
            },
          ]
        },
        {
          title: 'Configurator',
          path: '/guide/configurator',
        },
        {
          title: 'Packages',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: '@easepick/bundle',
              path: '/guide/packages/bundle',
            },
            {
              title: '@easepick/base-plugin',
              path: '/guide/packages/base-plugin',
            },
            {
              title: '@easepick/datetime',
              path: '/guide/packages/datetime',
            },
            {
              title: '@easepick/core',
              path: '/guide/packages/core',
            },
            {
              title: '@easepick/amp-plugin',
              path: '/guide/packages/amp-plugin',
            },
            {
              title: '@easepick/kbd-plugin',
              path: '/guide/packages/kbd-plugin',
            },
            {
              title: '@easepick/lock-plugin',
              path: '/guide/packages/lock-plugin',
            },
            {
              title: '@easepick/range-plugin',
              path: '/guide/packages/range-plugin',
            },
            {
              title: '@easepick/preset-plugin',
              path: '/guide/packages/preset-plugin',
            },
            {
              title: '@easepick/time-plugin',
              path: '/guide/packages/time-plugin',
            },
          ]
        },
        {
          title: 'Examples',
          //collapsable: false,
          children: [
            {
              title: 'Basic example',
              path: '/guide/examples/basic',
            },
            {
              title: 'Basic hotel calendar',
              path: '/guide/examples/hotel',
            },
          ]
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/images/og_image.png' }],
    ['script', { src: '/js/custom.js', defer: true, async: true }],
  ],
}
