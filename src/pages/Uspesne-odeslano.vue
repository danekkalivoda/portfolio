<template>
    <Layout>
        <div class="py-8 xl:py-32 -mb-16 min-h-screen relative flex flex-col z-40 items-center justify-center transition-bg flex-grow" id="contact">
            <div class="w-full max-w-4xl bg-white dark:bg-black shadow-lg">
                <div class="px-8 xl:px-32 flex flex-col w-full">
                    <div class="text-green-500 w-full text-center flex flex-col items-center py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="w-8 h-8 lg:w-12 lg:h-12 mb-2 current-color"><title>c-check</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentcolor" stroke="currentcolor"><polyline fill="none" stroke-miterlimit="10" points=" 9,17 13,21 23,11 "></polyline> <circle fill="none" stroke="currentcolor" stroke-miterlimit="10" cx="16" cy="16" r="15"></circle></g></svg>
                        <p>Úspěšně odesláno</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        metaInfo() {
            title: 'Úspěšně odesláno'
        }
    }
</script>

