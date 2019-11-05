// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import VueLazyLoad from 'vue-lazyload'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueLazyLoad)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
    offset: -64,
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Designer Pardubice,Product Owner,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'author',
    content: 'Daniel Kalivoda'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,800&display=swap&subset=latin-ext'
  })
}


