<template>
    <div class="w-1/3 p-4">
        <div class="flex flex-col shadow-xl">
            <div class="flex items-center bg-gray-600 dark:bg-black px-8 py-6">
                <g-image :src="reference.image.url" v-if="reference.image" width="100" height="100" fit="contain" class="rounded-full h-16 mr-4"/>
                <div class="block w-full">
                    <h3 v-html="reference.name" class="text-base font-bold text-white dark:text-white"></h3>
                    <div v-html="reference.position" v-if="reference.position" class="text-xs text-gray-200 dark:text-gray-500 mb-1"></div>
                    <div v-html="reference.company" v-if="reference.company" class="text-sm font-semibold bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-400 inline-block rounded-full px-3 leading-normal"></div>
                </div>
            </div>
            <div v-html="reference.content" class="bg-white dark:bg-gray-800 dark:text-gray-200 p-8" ></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['reference'],
    }
</script>