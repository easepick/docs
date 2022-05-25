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
    sidebar: [
      ['/guide/', 'Guide'],
      ['/configurator/', 'Configurator'],
      {
        title: 'Packages',
        path: '/packages/',
        collapsable: true,
        children: [
          {
            title: '@easepick/bundle',
            path: '/packages/bundle',
          },
        ],
      },
      {
        title: 'Development',
        path: '/development/',
        collapsable: true,
        children: [
          {
            title: 'Environment',
            path: '/development/',
          },
          {
            title: 'Creating plugins',
            path: '/development/plugins',
          },
        ],
      },
      {
        title: 'Support',
        path: '/support/',
        collapsable: true,
        children: [
          {
            title: 'Getting support',
            path: '/support/',
          },
          {
            title: 'Reporting issues',
            path: '/support/reporting-issues',
          },
          {
            title: 'License',
            path: '/license',
          },
        ],
      },
      {
        title: 'Examples',
        path: '/examples/',
        collapsable: true,
        children: [
          {
            title: 'Basic example',
            path: '/examples/basic',
          },
        ],
      },
    ],
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
