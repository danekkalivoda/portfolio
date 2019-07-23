<template >
<div :class="theme">
  <div class="sm:pl-32 sm:pr-16 bg-gray-200 dark:bg-gray-900 w-full transition-bg">
    <div class="content-wrapper font-sans leading-normal flex flex-col min-h-screen ">
      <header class="w-full sm:-ml-32 fixed z-50">
        <nav class="flex flex-wrap justify-between sm:justify-start items-center bg-gray-200 dark:bg-gray-900 transition-bg p-4 sm:p-8">
          <div class="flex flex-row items-center text-left w-auto">
            <g-link class="relative z-20">
              <g-image src="../../static/danek.jpg" :alt="$page.site.title" class="w-8 h-8 sm:w-16 sm:h-16 rounded-full" />
            </g-link>
            <div class="flex fixed left-0 top-0 min-h-screen w-16 sm:w-32 z-10">
              <div class="hidden sm:block w-full self-stretch mt-16 sm:mt-32 mb-8 sm:mb-16 border-r border-gray-400 dark:border-gray-800 -translate-x-1/2 transition-all"></div>
              <theme-switcher :theme="theme" @themeChanged="updateTheme" />
            </div>
            <div class="fixed left-0 top-0 z-40 ml-12 sm:ml-0 sm:rotate-90 transform-bl">
              <span class="inline-block sm:rotate-180 my-6 sm:my-12 pr-1 pl-4 sm:pl-8 sm:pr-2 bg-gray-200 dark:bg-gray-900 text-sm sm:text-lg uppercase font-bold tracking-tight text-green-500 transition-bg">
                  <span class="-translate-y-full">
                    Daniel Kalivoda
                  </span>
                </span>
            </div>     
          </div>
          <button @click="toggle" class="flex sm:hidden items-center p-3 text-gray-700 dark:text-gray-400 hover:text-green-500 outline-none  z-20">
            <svg class="current-color h-3 w-3" :class="isOpen ? 'hidden': 'block'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M0 2.5 L16 2.5"/><path d="M0 8 L16 8"/><path d="M0 13.5 L16 13.5"/></svg>
            <svg class="current-color h-3 w-3" :class="isOpen ? 'block': 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" stroke-width="3"><path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"/><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"/></svg>
          </button>
          <div class="fixed left-0 right-0 top-0 min-w-screen h-16 sm:h-32 z-10 pt-1 sm:pt-0">
            <div class="h-full self-stretch mx-16 sm:ml-32 sm:mr-16 border-b border-gray-400 dark:border-gray-800 transition-all -translate-y-1/2"></div>
          </div>
          <ul
              class="uppercase tracking-tight w-full sm:w-auto text-sm flex-col sm:flex-row sm:flex w-auto sm:justify-center bg-gray-200 dark:bg-gray-900 sm:px-5 transition-all z-50"
              :class="isOpen ? 'block': 'hidden'"
            >
              <li class="sm:inline-flex">
                <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-right sm:text-left text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Kdo <span class="hidden md:inline">jsem</span>?</a>
                <g-link v-else to="/#about" class="text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Kdo <span class="hidden md:inline">jsem</span></g-link>
              </li>
              <li class="sm:inline-flex">
                <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-right sm:text-left text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Co <span class="hidden md:inline">dělám</span>?</a>
                <g-link v-else to="/#projects" class="text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Co <span class="hidden md:inline">dělám</span></g-link>
              </li>
              <li class="sm:inline-flex">
                <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-right sm:text-left text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Kontakt</a>
                <g-link v-else to="/#contact" class="text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Kontakt</g-link>
              </li>
            </ul>
        </nav>
      </header>

      <div class="flex-grow">
        <slot/>
      </div>
      <footer class="text-white" id="contact">
        <div class="c-container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
          <div class="mb-8 lg:mb-0">
            <div>Copyright 2019. All rights reserved.</div>
              <g-link to="/blog" class="text-gray-700 dark:text-gray-400 hover:text-green-500 flex-1 text-center py-3 sm:py-1 px-3 block">Blog</g-link>
          </div>
        </div>
      </footer>
    </div>
  </div>
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
<style lang="postcss">
  body{
    @apply .bg-gray-900
  }
</style> 

<style src="../main.css" />
