<template>
  <a href="#" class="text-green-500 hover:text-green-700 transition-color fixed right-0 bottom-0 bg-white dark:bg-black shadow-lg rounded-full p-3 mr-6 mb-6" @click.prevent="toggleTheme">
    <svg v-if="theme === 'mode-dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  </a>
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

