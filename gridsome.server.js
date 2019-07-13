// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const path = require('path');
const pick = require('lodash.pick');

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    const contentType = addContentType({
      typeName: 'unite',
      route: 'blog/:slug' // add this for one dynamic route...
    })

    contentType.addNode({
      slug: 'slug'
    })
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
        posts: findArticles(sort: { field: "created", order: "DESC"}) {
          result {
            id
            created
            headline
            content
          }
        } 
      }
    `);
        
    data.posts.result.forEach(item => {
      createPage({
        path: `/blog/${item.id}`,
        component: './src/templates/Post.vue',
        context: {
          id: item.id,
          created: item.created,
          headline: item.headline,
          content: item.content,  
          path: item.id
        }
      })
    })
  });
}
