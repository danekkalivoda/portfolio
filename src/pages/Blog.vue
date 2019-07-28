<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="post in $page.posts.result" :key="post.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="{path: 'blog/' + post.id}" class="text-copy-primary">{{ post.headline }}</g-link></h2>
        <div v-html="post.content"></div>
      </div> <!-- end post -->

      <!-- <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      /> -->
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: findArticles (sort: { field: "created", order: "DESC"}) {
    total
    result {
      id,
      created,
      headline,
      content      
    }
  },
  site: SiteSetting {
    title,
    footer_text
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>

