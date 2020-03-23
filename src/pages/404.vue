<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-4xl font-bold mb-16">Page Not Found</h2>
      <g-image src="../../static/404.svg" />
    </div>

  </Layout>
</template>

<page-query>
query{
  site: unite{
    SiteSetting {
      title,
      footer_text
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>

