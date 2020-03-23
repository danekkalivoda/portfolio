<template>
  <Layout>
    <div class="px-8 pt-32 pb-16 sm:pt-32 sm:pb-16 md:pr-16 md:pl-32 md:min-h-screen md:left-0 md:right-0 md:fixed flex flex-col items-center justify-center w-full xl:m-auto text-center transition-all duration-150 ease-in">
      <h1 v-html="page.h1"></h1>
      <a :href="'/' + page.button_link" v-scroll-to="page.button_link" class="px-8 py-2 mt-8 lg:px-12 lg:py-4 lg:mt-16 bg-green-500 hover:bg-white dark-hover:bg-white text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg transition-all duration-150 ease-in uppercase transform hover:scale-105">{{ page.button_text}}</a>
    </div>

    <div class="p-8 md:mt-screen sm:p-16 relative transition-all duration-150 ease-in shadow-lg z-50 bg-white dark:bg-black md:min-h-screen flex flex-col items-center justify-center" id="about">
      <div class="c-container flex flex-row flex-wrap items-start justify-center">
        <div class="w-1/2 mb-4 lg:mb-8 mx-auto md:w-1/3 lg:w-1/5 xl:mx-0">
          <g-image src="../../static/danek.jpg" :alt="$page.site.title" class=" max-w-full max-w-1/2 mx-auto rounded-full" />
        </div>
        <div class="w-full lg:w-3/4 lg:pl-8 xl:w-4/5">
          <div class="editor text-gray-900 dark:text-gray-300 w-full lg:text-lg" v-html="page.textblock_1"></div>
        </div>
      </div>
      <div class="flex flex-row mt-16 w-full">
        <div class="flex flex-row items-center w-full c-container mb-8">
          <div class="rounded-full w-full flex bg-gray-300 dark:bg-gray-800 h-1 shadow-xl transition-bg duration-150 ease-in">
            <div class="relative text-xs w-5/12 text-white pr-2 h-full rounded-l-full font-bold bg-green-500">
              <div class="absolute left-0 right-0 top-0 transform -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg duration-150 ease-in px-2 md:px-4 pb-2 inline-flex text-green-500">42%</div>
              </div>
            </div>
            <div class="relative text-xs w-3/12 text-white pr-2 h-full font-bold bg-blue-600">
              <div class="absolute left-0 right-0 top-0 transform -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg duration-150 ease-in px-2 md:px-4 pb-2 inline-flex text-blue-600">25%</div>
              </div>
            </div>
            <div class="relative text-xs w-4/12 text-white pr-2 h-full rounded-r-full font-bold bg-yellow-500">
              <div class="absolute left-0 right-0 top-0 transform -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg duration-150 ease-in px-2 md:px-4 pb-2 inline-flex text-yellow-500">33%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:flex xl:flex-row mt-4 c-container">
        <div class="w-full xl:mr-4 flex flex-row  items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start" v-prlx="{preserveInitialPosition: true, limit: { min: -100, max: 300 }, speed: 0.1 , fromBottom: true}">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-green-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>web-design</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="40.012" y2="20" stroke-linecap="butt"></line> <polyline fill="none" stroke="currentcolor" stroke-miterlimit="10" points="62,17 62,58 2,58 2,6 54.033,6 " stroke-linecap="butt"></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M31.848,28.152L56,4.036 c1.381-1.381,3.619-1.381,5,0l0,0c1.381,1.381,1.381,3.619,0,5L36.849,33.151" stroke-linecap="butt"></path> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M35.08,29.92 C33.842,28.682,32.197,28,30.446,28c-1.751,0-3.397,0.682-4.634,1.92C23.351,32.38,23,42,23,42s9.62-0.351,12.08-2.811 c1.238-1.238,1.92-2.884,1.92-4.634S36.318,31.158,35.08,29.92z"></path> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="50" x2="54" y2="50"></line></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ page.skill_1_header}}</h3>
            <div v-html="page.skill_1_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start" v-prlx="{preserveInitialPosition: true, limit: { min: -100, max: 300 }, speed: 0.1 , fromBottom: true}">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-blue-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>window-dev</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 22,34 18,38 22,42 "></polyline> <polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 42,34 46,38 42,42 "></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="28" y1="46" x2="36" y2="30"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="43" y1="13" x2="54" y2="13"></line> <line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="62" y2="20"></line> <rect x="2" y="6" fill="none" stroke="currentcolor" stroke-miterlimit="10" width="60" height="52"></rect></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ page.skill_2_header}}</h3>
            <div v-html="page.skill_2_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start" v-prlx="{preserveInitialPosition: true, limit: { min: -100, max: 300 }, speed: 0.1 , fromBottom: true}">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-yellow-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>b-meeting</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polygon data-color="color-2" fill="none" stroke-miterlimit="10" points=" 62,2 28,2 28,30 38,22 62,22 "></polygon> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="50" cy="36" r="6"></circle> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="14" cy="36" r="6"></circle> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M26,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,49.435,18.716,48,14,48c-4.777,0-8.127,1.426-10.052,2.575C2.736,51.299,2,52.601,2,54.013 V60H26z"></path> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M62,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,49.435,54.716,48,50,48c-4.777,0-8.127,1.426-10.052,2.575 C38.736,51.299,38,52.601,38,54.013V60H62z"></path></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ page.skill_3_header}}</h3>
            <div v-html="page.skill_3_text"></div>
          </div>
        </div>
      </div>
      <a :href="'/' + page.skills_button_link" v-scroll-to="page.skills_button_link" class="px-8 py-2 mt-4 lg:px-12 lg:py-4 lg:mt-8 text-green-500 font-bold hover:text-gray-900 dark-hover:text-white rounded-full text-sm border-2 border-gray-300 dark:border-gray-700 transition-all duration-150 ease-in uppercase transform hover:scale-105">{{ page.skills_button_text}}</a>
    </div>

    <div class="py-8 sm:pt-16 xl:pt-32 relative md:min-h-screen flex flex-col z-40 items-center bg-gray-200 dark:bg-gray-900 transition-bg duration-150 ease-in flex-grow" id="projects">
      <div class="px-8 sm:px-16 xl:px-32 flex flex-col w-full">
        <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center" v-html="page.textblock_2">
        </div>
      </div>
      <div class="w-full max-w-6xl overflow-hidden sm:overflow-visible">
        <div class="-mx-2 flex flex-wrap">
            <projects v-for="(project, index) in $page.projects.findProjects.result" :key="project.name" :project="project" :index="index"/>
        </div>
      </div>
      <div class="flex relative w-full items-center justify-center mt-4 lg:mt-8 max-w-6xl">
        <div class="w-full h-px absolute left-0 top-1/2 bg-gray-400 dark:bg-gray-800 transition-bg duration-150 ease-in"></div>
        <g-link :to="page.projects_button_link"  class="relative z-10 px-8 py-2 lg:px-12 lg:py-4 text-green-500 font-bold hover:text-gray-900 dark-hover:text-white rounded-full text-sm border-2 border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-150 ease-in uppercase transform hover:scale-105">{{ page.projects_button_text}}</g-link>
      </div>
    </div>

    <div class="relative flex flex-col z-40 items-center justify-center transition-bg duration-150 ease-in flex-grow bg-gray-200 dark:bg-gray-900" id="references">
      <div class="py-8 xl:py-16 mb-8 w-full">
        <div class="flex flex-col max-w-6xl mx-auto">
          <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center">
            <h2>Co o mě říkají klienti?</h2>
          </div>
          <div class="referencesList">
            <references v-for="(reference, index) in $page.references.findReferences.result" :key="reference.name" :reference="reference" :index="index"/>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex flex-col z-40 items-center justify-center transition-bg duration-150 ease-in duration-150 ease-in flex-grow bg-gray-200 lg:py-32 dark:bg-gray-900" id="contact">
      <div class="max-w-6xl mx-auto w-full">
        <div class="py-8 xl:py-16 mb-8 w-full shadow-lg bg-white dark:bg-black transition-bg duration-150 ease-in">
        <div class="px-8 xl:px-32 flex flex-col w-full">
          <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center" v-html="page.textblock_3">
          </div>
        </div>
        <form name="contact"
              action="/uspesne-odeslano/"
              method="POST"
              v-on:submit.prevent="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="flex flex-wrap px-6 sm:px-12 max-w-2xl mx-auto">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden class="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p class="mb-4 w-full md:w-1/2 px-2">
            <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-1" for="name">
              Jméno
            </label>
            <input type="text" name="name" id="name" required v-model="formData.name" class="appearance-none transition-all duration-150 ease-in border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"/>
          </p>
          <p class="mb-4 w-full md:w-1/2 px-2">
            <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-1" for="email">
              E-mail
            </label>
            <input type="email" name="email" id="email" required v-model="formData.email" class="appearance-none transition-all duration-150 ease-in border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"/>
          </p>
          <p class="mb-4 w-full px-2">
            <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-1" for="message">
              Zpráva
            </label>
            <textarea name="message" id="message" rows="6" v-model="formData.message" class="appearance-none transition-all duration-150 ease-in border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </p>
          <p class="mb-4 text-center w-full px-2">
            <button type="submit" aria-label="Send e-mail" class="px-8 py-2 lg:px-12 bg-green-500 hover:bg-white dark-hover:bg-white text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg transition-all duration-150 ease-in uppercase transform hover:scale-105">Odeslat</button>
          </p>
        </form>
      </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  homepage: unite {
    HomepageSetting {
      title,
      h1,
      button_text,
      button_link,
      textblock_1,
      textblock_2,
      textblock_3,
      skill_1_header,
      skill_2_header,
      skill_3_header,
      skill_1_text,
      skill_2_text,
      skill_3_text,
      skills_button_text,
      skills_button_link,
      projects_button_text,
      projects_button_link,
    }
  },
  site: unite{
    SiteSetting {
      title,
      footer_text
    }
  },
  references: unite{
    findReferences(sort: { field: "order", order: "ASC" }){
      result{
          name
          company
          created
          content
          position
          image{
            url
          }
      }
    }
  },
  projects: unite{
    findProjects(
      sort: { field: "order", order: "ASC" }
      limit: 3
      filter: {
        AND: [
            { field: "active", operator: "=", value:"true"},
          ]
        }
      )
      {
      result{
        name
        description
        order
        active
        url
        image{
          url
        }
      }
   }
  },
}
</page-query>

<script>

import References from '../components/References.vue';
import Projects from '../components/Projects.vue';

export default {
  components: {
    References,
    Projects
  },
  data() {
    return {
      formData: {},
    }
  },
  computed: {
    page() {
      return this.$page.homepage.HomepageSetting;
    }
  },
  metaInfo() {
    return {
      title: this.$page.homepage.title
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
              .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
              .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
              .then(() => this.$router.push('/uspesne-odeslano'))
              .catch(error => alert(error))
    }
  }
}
</script>

