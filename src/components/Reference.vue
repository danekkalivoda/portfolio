<template>
    <div class="w-1/2 p-4">
        <div class="flex flex-col shadow-xl">
            <div class="flex items-center bg-gray-400 dark:bg-white px-8 py-6">
                <g-image :src="reference.image.url" v-if="reference.image" width="100" height="100" fit="contain" class="rounded-full h-16 mr-4"/>
                <div class="block w-full">
                    <h3 v-html="reference.name" class="text-base font-bold text-gray-900 dark:text-white"></h3>
                    <div v-html="reference.position" v-if="reference.position" class="text-xs text-gray-700"></div>
                    <div v-html="reference.company" v-if="reference.company" class="text-sm bg-gray-200 inline-block rounded-full px-2 leading-tight"></div>
                </div>
            </div>
            <div v-html="reference.content" class="bg-white p-8" ></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['reference'],
    }
</script>