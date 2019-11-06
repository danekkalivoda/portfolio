<template>
<div class="fixed left-0 bottom-0 z-50 border border-transparent rounded-full bg-gray-200 w-12 h-12 ml-2 text-gray-500 flex justify-center items-center cursor-pointer transition-all hover:text-green-500 dark:text-gray-600 dark:bg-gray-900 sm:ml-10 mb-3 sm:mb-8" @click.prevent="toggleTheme">
  <svg v-if="theme === 'mode-dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
</div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    }
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === 'mode-dark' ? 'mode-light' : 'mode-dark'
      localStorage.setItem('theme', newTheme)
      this.$emit('themeChanged', newTheme)
    }
  }
}
</script>

