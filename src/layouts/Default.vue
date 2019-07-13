<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <header>
      <nav class="c-container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link v-if="theme === 'theme-light'" to="/"><h1 class="leading-tight text-black">{{$page.page.title}}</h1></g-link>
          <g-link v-else to="/"><h1 class="leading-tight text-white">{{$page.page.title}}</h1></g-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block': 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0">
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-copy-primary hover:text-gray-600">Projects</a>
            <g-link v-else to="/#projects" class="text-copy-primary hover:text-gray-600">Projects</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-copy-primary hover:text-gray-600">About</a>
            <g-link v-else to="/#about" class="text-copy-primary hover:text-gray-600">About</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-copy-primary hover:text-gray-600">Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">Contact</g-link>
          </li>
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-gray-600">Blog</g-link>
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
    this.theme = localStorage.getItem('theme') || 'theme-light'
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
