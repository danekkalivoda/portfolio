// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssNesting = require('postcss-nesting')
const postcssNested = require('postcss-nested')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
  postcssNesting(),
  postcssNested()
];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'Daniel Kalivoda',
  siteDescription: 'Mám rád funkční věci, které vycházejí z vysokých nároků klienta. Navrhuji weby, mobilní aplikace a UI/UX interních informačních systémů.',
  siteUrl: 'https://kalivoda.design',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://unitecms.felix.party/danek/danek/api?token=yQP8qdT584UCIiPe-uawOBp_ZeyWYJNV2YplvblEwq4',
        fieldName: 'unite',
        typeName: 'unite'
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-154626626-1'
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
