<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $context.headline }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $context.created }}</div>
      <div class="mb-8" v-html="$context.content" />
    </div>
  </Layout>
</template>

<page-query>
query{
  site: SiteSetting {
    title,
    footer_text
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$context.headline
    }
  }
}
</script>