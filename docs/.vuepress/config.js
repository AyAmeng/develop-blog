module.exports = {
  title: 'Develop Blog',
  description: 'Record Develop',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  serviceWorker: true, // Only Production
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: '/external' }
    ],
    sidebar: {
      '/basics/': ['one', 'two']
    }
  },
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    lineNumbers: true,
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it'))
    }
  }
  // .vuepress/config.js
}
