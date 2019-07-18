<template >
<div :class="theme">
  <div class="content-wrapper bg-gray-100 dark:bg-gray-900 font-sans leading-normal flex flex-col min-h-screen transition-all">
    <header class="bg-gray-200 dark:bg-black mb-6 sm:mb-12 transition-all">
      <nav class="c-container mx-auto flex flex-wrap justify-between items-center py-4 sm:py-8">
        <div class="flex flex-col sm:flex-row items-center text-center sm:text-left w-full md:w-auto">
          <g-image src="../../static/danek.jpg" :alt="$page.site.title" class="w-32 h-32 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-0 sm:mr-8" />
          <g-link>
            <h1 class="leading-tight font-bold align-middle text-green-500 text-lg md:text-2xl">{{$page.site.title}}</h1>
            <span class="text-xs md:text-sm text-gray-700 dark:text-gray-700">Digital product designer z Pardubic s více než 10-letou praxí.</span>
          </g-link>
          <div class="flex">
            <button @click="toggle" class="hidden sm:flex md:hidden items-center p-3 text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">
              <svg class="current-color h-3 w-3" :class="isOpen ? 'hidden': 'block'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M0 2.5 L16 2.5"/><path d="M0 8 L16 8"/><path d="M0 13.5 L16 13.5"/></svg>
              <svg class="current-color h-3 w-3" :class="isOpen ? 'block': 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"/><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"/></svg>
            </button>
          </div>
        </div>
        <ul
            class="uppercase tracking-wide w-full hidden sm:block flex-grow md:flex md:flex-initial md:w-auto items-center mt-8 md:mt-0"
            :class="isOpen ? 'sm:block': 'sm:hidden'"
          >
            <li class="mr-8 mb-6 md:mb-0">
              <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">O mě</a>
              <g-link v-else to="/#about" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">O mě</g-link>
            </li>
            <li class="mr-8 mb-6 md:mb-0">
              <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">Projekty</a>
              <g-link v-else to="/#projects" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">Projekty</g-link>
            </li>
            <li class="mr-8 mb-6 md:mb-0">
              <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">Kontakt</a>
              <g-link v-else to="/#contact" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">Kontakt</g-link>
            </li>
            <li>
              <g-link to="/blog" class="text-gray-700 dark:text-gray-400 hover:text-gray-800 dark-hover:text-gray-100">Blog</g-link>
            </li>
          </ul>
      </nav>
    </header>

    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-green-700 text-white">
      <div class="c-container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
  <theme-switcher :theme="theme" @themeChanged="updateTheme" />
</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  components: {
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'mode-dark'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
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
