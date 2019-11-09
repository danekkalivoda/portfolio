<template>
    <div class="group flex items-end justify-center px-2 mb-8 md:mb-16 mt-4 w-full relative flex-wrap lg:flex-no-wrap" :class="{'lg:flex-row-reverse': index % 2 === 0, 'lg:flex-row': index % 2 !== 0 }">
        <div class="w-full lg:w-1/2 xl:w-2/3 transition-all group-hover:scale-102">
            <div class="relative">
                <a :href="project.url" rel="noreferrer" class="overflow-hidden aspect-ratio-16/9 relative cursor-pointer shadow-lg z-10 block" target="_blank">
                    <g-image v-lazy="project.image.url" :src="project.image.url" :alt="project.name" class="absolute left-0 w-full h-full object-cover self-start" />
                </a>
                <div class="absolute left-1/2 top-1/2 -translate-center bg-white dark:bg-black rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    <div class="loader text-green-500 border-2 w-4 h-4"></div>
                </div>
            </div>
        </div>
        <div class="w-full sm:px-0 sm:w-3/4 lg:w-2/5 sm:-mt-4" :class="{'lg:-mr-6 lg:text-right': index % 2 === 0, 'lg:-ml-6': index % 2 !== 0 }">
            <div class="z-10 relative left-0 py-4 sm:px-4 px-8 md:px-12 md:py-8 w-full bottom-0 bg-white dark:bg-black text-dark-gray-900 dark:text-white transition-all shadow-xl" :class="{'lg:border-l-4 border-green-500': index % 2 === 0, 'lg:border-r-4 border-green-500': index % 2 !== 0 }">
                <h2 v-html="project.name" v-if="isH2Headers" class="text-lg font-semibold text-black dark:text-white"></h2>
                <h3 v-html="project.name" v-else class="text-lg font-semibold text-black dark:text-white"></h3>
                <div v-html="project.description" class="text-sm text-gray-600 dark:text-gray-500"></div>
            </div>
            <a :href="project.url" rel="noreferrer" class="sm:px-4 px-8 md:px-12 block py-4 flex text-green-500 hover:text-green-600 lg:justify-end items-center font-semibold" :class="{'lg:flex-row': index % 2 === 0, 'lg:flex-row-reverse': index % 2 !== 0 }">
                Prohlédnout
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="w-2 h-2 lg:w-4 lg:h-4 current-color" :class="{'ml-4': index % 2 === 0, 'ml-4 lg:ml-0 lg:mr-4 lg:rotate-180': index % 2 !== 0 }"><title>arrow-right</title><g fill="currentcolor"><polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon></g></svg>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'project',
            'headers',
            'index'
        ],
        computed: {
            isH2Headers() {
                return this.headers === "h2"
            }
        }
    }
</script>