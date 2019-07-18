// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Daniel Kalivoda',
  siteDescription: 'Mám rád funkční věci, které vycházejí z vysokých nároků klienta. Navrhuji weby, mobilní aplikace a UI/UX interních informačních systémů. Tištěnou grafiku u mě nehledejte.',
  siteUrl: 'https://gridsome-portfolio-starter.netlify.com',
  plugins: [
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://kalivoda.unitecms.io/danek/api',
        fieldName: 'unite',
        typeName: 'unite',
        headers: {
          Authorization: `OvwJDmdUpWu-UKBxYvqbl5P25JNX2mXRGZsvpElZvZY`,
        },
      },
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keygEegw3zV3Xtdni', // required
        baseId: 'appKEuqOMBxbHVB8k', // required
        tableName: 'Furniture', // required
        typeName: 'Product', // required
        route: '/products/:name' // optional
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
