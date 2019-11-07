<template>
    <div class="w-full lg:w-1/2 md:p-4">
        <div class="flex flex-col bg-white dark:bg-black shadow-lg">
            <div class="flex items-center px-8 py-6 border-b dark:border-gray-900">
                <g-image :src="reference.image.url" v-if="reference.image" width="100" height="100" fit="contain" class="rounded-full h-16 mr-4"/>
                <div class="block w-full">
                    <h3 v-html="reference.name" class="text-base font-bold text-green-500"></h3>
                    <div v-html="reference.position" v-if="reference.position" class="text-xs text-gray-700 dark:text-gray-500 mb-1"></div>
                    <div v-html="reference.company" v-if="reference.company" class="text-sm font-semibold bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-400 inline-block rounded-full px-3 leading-normal"></div>
                </div>
            </div>
            <div v-html="reference.content" class="p-8 dark:text-white" ></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['reference'],
    }
</script>