<template>
  <Layout>
    <div class="px-8 pt-32 pb-16 sm:pt-32 sm:pb-16 md:pr-16 md:pl-32 md:min-h-screen md:left-0 md:right-0 md:fixed flex flex-col items-center justify-center w-full xl:m-auto text-center transition-all">
      <h1 v-html="$page.homepage.h1"></h1>
      <a :href="'/' + $page.homepage.button_link" v-scroll-to="$page.homepage.button_link" class="px-8 py-2 mt-8 lg:px-12 lg:py-4 lg:mt-16 bg-green-500 hover:bg-white dark-hover:bg-white text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg transition-all uppercase hover:scale-105">{{ $page.homepage.button_text}}</a>
    </div>

    <div class="p-8 md:mt-screen sm:p-16 relative transition-all shadow-lg z-50 bg-white dark:bg-black md:min-h-screen flex flex-col items-center justify-center" id="about">
      <div class="c-container flex flex-row flex-wrap items-start justify-center">
        <div class="w-1/2 mb-4 lg:mb-8 mx-auto md:w-1/3 lg:w-1/5 xl:mx-0">
          <g-image src="../../static/danek.jpg" :alt="$page.site.title" class=" max-w-full max-w-1/2 mx-auto rounded-full" />
        </div>
        <div class="w-full lg:w-3/4 lg:pl-8 xl:w-4/5">
          <div class="editor text-gray-900 dark:text-gray-300 w-full lg:text-lg" v-html="$page.homepage.textblock_1"></div>
        </div>
      </div>
      <div class="flex flex-row mt-16 w-full">
        <div class="flex flex-row items-center w-full c-container mb-8">
          <div class="rounded-full w-full flex bg-gray-300 dark:bg-gray-800 h-1 shadow-xl transition-bg">
            <div class="relative text-xs w-5/12 text-white pr-2 h-full rounded-l-full font-bold bg-green-500">
              <div class="absolute left-0 right-0 top-0 -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg px-2 md:px-4 pb-2 inline-flex text-green-500">42%</div>
              </div>
            </div>
            <div class="relative text-xs w-3/12 text-white pr-2 h-full font-bold bg-blue-600">
              <div class="absolute left-0 right-0 top-0 -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg px-2 md:px-4 pb-2 inline-flex text-blue-600">25%</div>
              </div>
            </div>
            <div class="relative text-xs w-4/12 text-white pr-2 h-full rounded-r-full font-bold bg-yellow-500">
              <div class="absolute left-0 right-0 top-0 -translate-y-full">
                <div class="bg-white dark:bg-black transition-bg px-2 md:px-4 pb-2 inline-flex text-yellow-500">33%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:flex xl:flex-row mt-4 c-container">
        <div class="w-full xl:mr-4 flex flex-row  items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-green-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>web-design</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="40.012" y2="20" stroke-linecap="butt"></line> <polyline fill="none" stroke="currentcolor" stroke-miterlimit="10" points="62,17 62,58 2,58 2,6 54.033,6 " stroke-linecap="butt"></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M31.848,28.152L56,4.036 c1.381-1.381,3.619-1.381,5,0l0,0c1.381,1.381,1.381,3.619,0,5L36.849,33.151" stroke-linecap="butt"></path> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M35.08,29.92 C33.842,28.682,32.197,28,30.446,28c-1.751,0-3.397,0.682-4.634,1.92C23.351,32.38,23,42,23,42s9.62-0.351,12.08-2.811 c1.238-1.238,1.92-2.884,1.92-4.634S36.318,31.158,35.08,29.92z"></path> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="50" x2="54" y2="50"></line></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ $page.homepage.skill_1_header}}</h3>
            <div v-html="$page.homepage.skill_1_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-blue-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>window-dev</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 22,34 18,38 22,42 "></polyline> <polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 42,34 46,38 42,42 "></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="28" y1="46" x2="36" y2="30"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="43" y1="13" x2="54" y2="13"></line> <line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="62" y2="20"></line> <rect x="2" y="6" fill="none" stroke="currentcolor" stroke-miterlimit="10" width="60" height="52"></rect></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ $page.homepage.skill_2_header}}</h3>
            <div v-html="$page.homepage.skill_2_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 text-yellow-500 current-color" width="64" height="64" viewBox="0 0 64 64"><title>b-meeting</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polygon data-color="color-2" fill="none" stroke-miterlimit="10" points=" 62,2 28,2 28,30 38,22 62,22 "></polygon> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="50" cy="36" r="6"></circle> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="14" cy="36" r="6"></circle> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M26,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,49.435,18.716,48,14,48c-4.777,0-8.127,1.426-10.052,2.575C2.736,51.299,2,52.601,2,54.013 V60H26z"></path> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M62,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,49.435,54.716,48,50,48c-4.777,0-8.127,1.426-10.052,2.575 C38.736,51.299,38,52.601,38,54.013V60H62z"></path></g></svg>
          </div>
          <div class="editor text-gray-700 dark:text-gray-600 leading-snug text-sm mt-1">
            <h3>{{ $page.homepage.skill_3_header}}</h3>
            <div v-html="$page.homepage.skill_3_text"></div>
          </div>
        </div>
      </div>
      <a :href="'/' + $page.homepage.skills_button_link" v-scroll-to="$page.homepage.skills_button_link" class="px-8 py-2 mt-4 lg:px-12 lg:py-4 lg:mt-8 text-green-500 font-bold hover:text-gray-900 dark-hover:text-white rounded-full text-sm border-2 border-gray-300 dark:border-gray-700 transition-all uppercase hover:scale-105">{{ $page.homepage.skills_button_text}}</a>
    </div>

    <div class="py-8 sm:pt-16 xl:pt-32 relative md:min-h-screen flex flex-col z-40 items-center bg-gray-200 dark:bg-gray-900 transition-bg flex-grow" id="projects">
      <div class="px-8 sm:px-16 xl:px-32 flex flex-col w-full">
        <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center" v-html="$page.homepage.textblock_2">
        </div>
      </div>
      <div class="w-full max-w-6xl overflow-hidden sm:overflow-visible">
        <div class="-mx-2 flex flex-wrap">
            <div v-for="(project, index) in $page.projects.edges" :key="project.node.name" class="group flex items-end justify-center px-2 mb-16 mt-4 w-full relative flex-wrap lg:flex-no-wrap" :class="{'lg:flex-row-reverse': index % 2 === 0, 'lg:flex-row': index % 2 !== 0 }">
              <div class="w-full lg:w-1/2 xl:w-2/3 transition-all group-hover:scale-102">
                <div class="relative">
                  <a :href="project.node.link" rel="noreferrer" class="overflow-hidden aspect-ratio-16/9 relative cursor-pointer shadow-lg z-10 block" target="_blank">
                    <img v-lazy="project.node.attachments[1].url" :alt="project.node.name" class="absolute left-0 w-full h-full object-cover self-start" />
                  </a>
                  <div class="absolute left-1/2 top-1/2 -translate-center bg-white dark:bg-black rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    <div class="loader text-green-500 border-2 w-4 h-4"></div>
                  </div>
                </div>
              </div>
              <div class="w-full sm:px-0 sm:w-3/4 lg:w-2/5 sm:-mt-4" :class="{'lg:-mr-6 lg:text-right': index % 2 === 0, 'lg:-ml-6': index % 2 !== 0 }">
                <div class="z-10 relative left-0 py-4 sm:px-4 px-8 md:px-12 md:py-8 w-full bottom-0 bg-white dark:bg-black text-dark-gray-900 dark:text-white transition-all shadow-xl">
                  <h3 v-html="project.node.name" class="text-lg font-semibold text-black dark:text-white"></h3>
                  <div v-html="project.node.notes" class="text-sm text-gray-600 dark:text-gray-500"></div>
                </div>
                <a :href="project.node.link" rel="noreferrer" class="sm:px-4 px-8 md:px-12 block py-4 flex text-green-500 hover:text-green-600 lg:justify-end items-center font-semibold" :class="{'lg:flex-row': index % 2 === 0, 'lg:flex-row-reverse': index % 2 !== 0 }">
                  Prohlédnout
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="w-2 h-2 lg:w-4 lg:h-4 current-color" :class="{'ml-4': index % 2 === 0, 'ml-4 lg:ml-0 lg:mr-4 lg:rotate-180': index % 2 !== 0 }"><title>arrow-right</title><g fill="currentcolor"><polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon></g></svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="relative lg:min-h-screen flex flex-col z-40 items-center justify-center transition-bg flex-grow bg-gray-200 dark:bg-gray-900" id="references">
      <div class="py-8 xl:py-16 mb-8 w-full">
        <div class="flex flex-col max-w-6xl mx-auto">
          <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center">
            <h2>Co o mě říkají klienti?</h2>
          </div>
          <div class="flex -mx-4">
            <reference v-for="(reference, index) in $page.references.result" :key="reference.name" :reference="reference"/>
          </div>
        </div>
      </div>
    </div>

    <div class="relative lg:min-h-screen flex flex-col z-40 items-center justify-center transition-bg flex-grow bg-gray-200 dark:bg-gray-900" id="contact">
      <div class="py-8 xl:py-16 mb-8 w-full max-w-4xl shadow-lg bg-white dark:bg-black transition-bg">
        <div class="px-8 xl:px-32 flex flex-col w-full">
          <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center" v-html="$page.homepage.textblock_3">
          </div>
        </div>
        <form name="contact"
              action="/uspesne-odeslano/"
              method="POST"
              v-on:submit.prevent="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="flex flex-wrap px-6 sm:px-12">
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
            <input type="text" name="name" id="name" required v-model="formData.name" class="appearance-none transition-all border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"/>
          </p>
          <p class="mb-4 w-full md:w-1/2 px-2">
            <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-1" for="email">
              E-mail
            </label>
            <input type="email" name="email" id="email" required v-model="formData.email" class="appearance-none transition-all border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"/>
          </p>
          <p class="mb-4 w-full px-2">
            <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-1" for="message">
              Zpráva
            </label>
            <textarea name="message" id="message" rows="6" v-model="formData.message" class="appearance-none transition-all border dark:border-gray-800 dark:bg-black w-full py-2 px-3 text-gray-900 dark:text-gray-500 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </p>
          <p class="mb-4 text-center w-full px-2">
            <button type="submit" aria-label="Send e-mail" class="px-8 py-2 lg:px-12 bg-green-500 hover:bg-white dark-hover:bg-white text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg transition-all uppercase hover:scale-105">Odeslat</button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  homepage: HomepageSetting {
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
  },
  site: SiteSetting {
    title,
    footer_text
  },
  references: findReferences {
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
  },
  projects: allProjects(sortBy: "order", order: DESC) {
    edges {
      node {
        name
        notes
        link
        order
        date
        attachments {
          url,
          thumbnails{
            large{
              url
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Reference from '../components/Reference.vue';

export default {
  components: {
    Reference
  },
  data() {
    return {
      formData: {},
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

