<template >
<div class="sm:pl-32 sm:pr-16 bg-gray-200 dark:bg-gray-900 w-full transition-bg">
  <div class="content-wrapper leading-normal flex flex-col min-h-screen ">
    <header class="w-full sm:-ml-32 fixed z-60">
      <nav class="flex flex-wrap justify-between sm:justify-start items-center bg-gray-200 dark:bg-gray-900 transition-bg py-4 px-8 sm:p-8 relative">
        <div class="flex flex-row items-center text-left w-auto">
          <g-link class="relative z-40" to="/">
            <g-image src="../../static/danek.jpg" :alt="$static.site.title" class="w-8 h-8 sm:w-16 sm:h-16 rounded-full" />
          </g-link>
          <div class="flex fixed left-0 top-0 min-h-screen w-16 sm:w-32 z-30">
            <div class="hidden sm:block w-full self-stretch mt-16 sm:mt-32 mb-8 sm:mb-16 border-r border-gray-400 dark:border-gray-800 -translate-x-1/2 transition-all"></div>
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </div>
          <div class="fixed left-0 top-0 z-40 ml-16 sm:ml-0 sm:rotate-90 transform-bl z-10">
            <span class="inline-block sm:rotate-180 my-6 sm:my-12 pr-2 pl-2 sm:pl-8  bg-gray-200 dark:bg-gray-900 text-sm sm:text-lg uppercase font-semibold tracking-tight text-green-500 transition-bg">
                <span class="-translate-y-full">
                  {{$static.site.title}}
                </span>
              </span>
          </div>
        </div>
        <button @click="toggle" aria-label="Menu trigger" class="flex sm:hidden items-center p-3 text-gray-700 dark:text-gray-400 hover:text-green-500 outline-none z-20">
          <svg class="current-color h-3 w-3" :class="isOpen ? 'hidden': 'block'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M0 2.5 L16 2.5"/><path d="M0 8 L16 8"/><path d="M0 13.5 L16 13.5"/></svg>
          <svg class="current-color h-3 w-3" :class="isOpen ? 'block': 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"/><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"/></svg>
        </button>
        <div class="fixed left-0 right-0 top-0 min-w-screen h-16 sm:h-32 z-10 pt-1 bg-gray-200 dark:bg-gray-900 sm:pt-0 transition-all">
          <div class="h-full self-stretch mx-16 sm:ml-32 sm:mr-16 border-b border-gray-400 dark:border-gray-800 transition-all -translate-y-1/2"></div>
        </div>
        <ul
            class="uppercase tracking-tight w-full sm:w-auto text-sm flex-col sm:flex-row sm:flex w-auto sm:justify-center bg-gray-200 dark:bg-gray-900 sm:px-5 transition-all z-0 block absolute left-0 top-full sm:relative sm:z-20"
            :class="isOpen ? 'translate-y-0 sm:translate-y-0': '-translate-y-full sm:translate-y-0'"
          >
            <li class="sm:inline-flex" v-for="item in $static.navigation.result" :key="item.order">
              <a v-if="$route.path === '/'" :href="'/' + item.url" v-scroll-to="item.url" class="text-right sm:text-left text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-10 sm:px-3 block">{{ item.title }}</a>
              <g-link v-else :to="'/' + item.url" class="text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">{{ item.title }}</g-link>
            </li>
          </ul>
      </nav>
    </header>
    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-gray-200 dark:bg-gray-900 transition-bg h-24 z-40">
      <div class="c-container mx-auto flex flex-col lg:flex-row items-center justify-between pt-8">
        <div class="text-gray-700 dark:text-gray-500 text-center text-sm md:text-base px-16 w-full editor" v-html="$static.site.footer_text"></div>
      </div>
    </footer>
  </div>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  site: SiteSetting {
    title,
    footer_text
  },
  navigation: findNavigation(
      sort: { field: "order", order: "ASC" }
    ){
    result{
      title,
      url,
      order
    }
  }
}
</static-query>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher';

export default {
  components: {
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'mode-dark'
  },
  metaInfo() {
    return {
      bodyAttrs: {
        class: this.theme
      }
    }
  },
  data() {
    return {
      isOpen: false,
      theme: 'mode-dark',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>
<style src="../main.css" />
