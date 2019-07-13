<template>
  <Layout :title="$context.headline">
    <div>{{$context.headline}}</div>
    <div>{{$context.position}}</div>
    <div v-html="$page.page.content"/>
  </Layout>
</template>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.page.headline
    }
  }
}
</script>