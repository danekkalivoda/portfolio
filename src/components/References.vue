<template>
    <div class="w-full md:p-4 mb-2 md:mb-4 reference">
        <div class="flex w-full flex-col transition-bg duration-150 ease-in bg-white dark:bg-black shadow-lg">
            <div class="flex items-center px-6 md:px-8 py-4 md:py-6 transition-all duration-150 ease-in border-b dark:border-gray-900">
                <g-image v-lazy="reference.image.url" :src="reference.image.url" v-if="reference.image" width="120" height="120" fit="contain" class="rounded-full h-20 mr-4"/>
                <div class="block w-full">
                    <h3 v-html="reference.name" class="text-base font-bold text-green-500"></h3>
                    <div v-html="reference.position" v-if="reference.position" class="text-xs text-gray-700 dark:text-gray-500"></div>
                    <div v-html="reference.company" v-if="reference.company" class="text-sm font-semibold bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-400 inline-block rounded-full px-3 leading-normal"></div>
                </div>
            </div>
            <div v-html="reference.content" class="p-6 md:p-8 dark:text-white" ></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['reference'],
    }
</script>