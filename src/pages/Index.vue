<template>
  <Layout>
    <div class="px-8 pt-32 pb-16 sm:pt-32 sm:pb-16 md:pr-16 md:pl-32 md:min-h-screen md:left-0 md:right-0 md:fixed flex flex-col items-center justify-center w-full xl:m-auto text-center transition-all">
      <h1 v-html="$page.homepage.h1"></h1>
      <a :href="'/' + $page.homepage.button_link" v-scroll-to="$page.homepage.button_link" class="px-8 py-2 mt-8 lg:px-12 lg:py-4 lg:mt-16 bg-green-500 hover:bg-white dark-hover:bg-white text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg transition-all uppercase hover:scale-110 shadow-lg">{{ $page.homepage.button_text}}</a>
    </div>

    <div class="p-8 md:mt-screen sm:p-16 relative transition-all shadow-lg z-40 bg-white dark:bg-black md:min-h-screen flex flex-col items-center justify-center" id="about">
      <div class="editor text-gray-900 dark:text-gray-300 mx-auto w-full lg:w-2/3 xl:w-1/2 lg:text-lg c-container" v-html="$page.homepage.textblock_1"></div>
      <div class="xl:flex xl:flex-row mt-16 c-container">
        <div class="w-full xl:mr-4 flex flex-row text-green-500 items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 current-color" width="64" height="64" viewBox="0 0 64 64"><title>web-design</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="40.012" y2="20" stroke-linecap="butt"></line> <polyline fill="none" stroke="currentcolor" stroke-miterlimit="10" points="62,17 62,58 2,58 2,6 54.033,6 " stroke-linecap="butt"></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M31.848,28.152L56,4.036 c1.381-1.381,3.619-1.381,5,0l0,0c1.381,1.381,1.381,3.619,0,5L36.849,33.151" stroke-linecap="butt"></path> <path data-color="color-2" fill="none" stroke-miterlimit="10" d="M35.08,29.92 C33.842,28.682,32.197,28,30.446,28c-1.751,0-3.397,0.682-4.634,1.92C23.351,32.38,23,42,23,42s9.62-0.351,12.08-2.811 c1.238-1.238,1.92-2.884,1.92-4.634S36.318,31.158,35.08,29.92z"></path> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="50" x2="54" y2="50"></line></g></svg>
          </div>
          <div class="editor text-gray-800 dark:text-gray-600 leading-snug text-xs lg:text-sm mt-1">
            <h3>{{ $page.homepage.skill_1_header}}</h3>
            <div class="flex flex-row flex-grow items-center mb-4">
              <div class="flex-0 pr-2 text-green-500">42%</div>
              <div class="rounded-full w-1/2 md:w-1/3 xl:w-full bg-gray-300 dark:bg-gray-800 h-2 shadow-xl transition-bg">
                <div class="text-xs text-right w-5/12 rounded-full text-white pr-2 h-full font-bold bg-green-500"></div>
              </div>
            </div>
            <div v-html="$page.homepage.skill_1_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row text-green-500 items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 current-color" width="64" height="64" viewBox="0 0 64 64"><title>window-dev</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 22,34 18,38 22,42 "></polyline> <polyline data-color="color-2" fill="none" stroke-miterlimit="10" points=" 42,34 46,38 42,42 "></polyline> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="28" y1="46" x2="36" y2="30"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="13" x2="14" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="20" y1="13" x2="24" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="43" y1="13" x2="54" y2="13"></line> <line fill="none" stroke="currentcolor" stroke-miterlimit="10" x1="2" y1="20" x2="62" y2="20"></line> <rect x="2" y="6" fill="none" stroke="currentcolor" stroke-miterlimit="10" width="60" height="52"></rect></g></svg>
          </div>
          <div class="editor text-gray-800 dark:text-gray-600 leading-snug text-xs lg:text-sm mt-1">
            <h3>{{ $page.homepage.skill_2_header}}</h3>
            <div class="flex flex-row flex-grow items-center mb-4">
              <div class="flex-0 pr-2 text-green-500">25%</div>
              <div class="rounded-full w-1/2 md:w-1/3 xl:w-full bg-gray-300 dark:bg-gray-800 h-2 shadow-xl transition-bg">
                <div class="text-xs text-right w-3/12 rounded-full text-white pr-2 h-full font-bold bg-green-500"></div>
              </div>
            </div>
            <div v-html="$page.homepage.skill_2_text"></div>
          </div>
        </div>
        <div class="w-full xl:ml-4 flex flex-row text-green-500 items-stretch xl:px-4">
          <div class="w-8 md:w-16 mr-2 md:mr-4 xl:mr-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-16 md:h-16 current-color" width="64" height="64" viewBox="0 0 64 64"><title>b-meeting</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polygon data-color="color-2" fill="none" stroke-miterlimit="10" points=" 62,2 28,2 28,30 38,22 62,22 "></polygon> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="50" cy="36" r="6"></circle> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="14" cy="36" r="6"></circle> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M26,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,49.435,18.716,48,14,48c-4.777,0-8.127,1.426-10.052,2.575C2.736,51.299,2,52.601,2,54.013 V60H26z"></path> <path fill="none" stroke="currentcolor" stroke-miterlimit="10" d="M62,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,49.435,54.716,48,50,48c-4.777,0-8.127,1.426-10.052,2.575 C38.736,51.299,38,52.601,38,54.013V60H62z"></path></g></svg>
          </div>
          <div class="editor text-gray-800 dark:text-gray-600 leading-snug text-xs lg:text-sm mt-1">
            <h3>{{ $page.homepage.skill_2_header}}</h3>
            <div class="flex flex-row flex-grow items-center mb-4">
              <div class="flex-0 pr-2 text-green-500">33%</div>
              <div class="rounded-full w-1/2 md:w-1/3 xl:w-full bg-gray-300 dark:bg-gray-800 h-2 shadow-xl transition-bg">
                <div class="text-xs text-right w-2/6 rounded-full text-white pr-2 h-full font-bold bg-green-500"></div>
              </div>
            </div>
            <div v-html="$page.homepage.skill_3_text"></div>
          </div>
        </div>
      </div>
      <a href="/#contact" v-scroll-to="'#projects'" class="px-8 py-2 mt-4 lg:px-12 lg:py-4 lg:mt-8 text-green-500 hover:text-gray-900 dark-hover:text-white rounded-full text-sm border border-green-500 transition-all uppercase">Napište mi</a>
    </div>

    <div class="py-8 sm:py-16 xl:py-32 relative md:min-h-screen flex flex-col items-center bg-gray-200 dark:bg-gray-900 transition-bg flex-grow" id="projects">
      <div class="px-8 sm:px-16 xl:px-32 flex flex-col w-full">
        <div class="editor text-gray-900 dark:text-gray-300 w-full c-container text-center" v-html="$page.homepage.textblock_2">
        </div>
      </div>
      <div class="container">
        <div class="parent w-full">
            <a v-for="(project, index) in $page.projects.edges" :key="project.node.name" class="bg-white hover:scale-110 transition-all" :class="'div' + [index + 1]">
              <div class="aspect-ratio-16/10 relative m-2">
                <g-image :src="project.node.attachments[0].url" :alt="project.node.name" class="object-cover absolute left-0 right-0 top-0 bottom-0" />
              </div>
            </a>
        </div>
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
    skill_1_header,
    skill_2_header,
    skill_3_header,
    skill_1_text,
    skill_2_text,
    skill_3_text,
  },
  projects: allProjects {
    edges {
      node {
        name
        notes
        attachments {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.homepage.title
    }
  }
}
</script>

