<template>
	<div
		class="group flex items-start justify-center w-full mb-8 md:mb-16 mt-4 md:w-3/4 lg:w-1/2 xl:w-2/5 relative sm:px-2 xl:px-4"
	>
		<div
			:class="'bg-' + training.base_color + '-200 border-' + training.base_color + '-800 dark:bg-' + training.base_color + '-900'"
			class="border-t-4 rounded-lg w-full text-dark-gray-900 dark:text-white transition-all duration-150 ease-in shadow-xl"
		>
			<h3 v-html="training.name"
				class="text-lg font-bold text-black dark:text-white inline-block rounded-tl rounded-br-lg px-2"
				:class="'bg-' + training.base_color + '-800 text-' + training.base_color + '-100'"
			>
			</h3>
			<div v-for="(training, index) in training.training_content" :key="index" :base-color="base_color"
				 class="w-full pb-4 sm:px-4 px-8 md:px-12 md:pb-8 border-b mt-4 md:mt-8"
				 :class="'border-b-' + training.base_color + '-800'"
			>
				<p v-html="training.header" class="text-black dark:text-white"></p>
				<p v-html="training.subheader" class="text-black dark:text-white"></p>
				<p v-html="training.description" class="text-black dark:text-white"></p>
				<div v-for="(training_blocks, index) in training.blocks" :key="index" class="w-full pt-4 pb-2 md:pt-4 md:pb-0">
					<p v-html="training_blocks.exercise_cz" class="text-black dark:text-white"></p>
					<p v-html="training_blocks.exercise_en" class="text-black dark:text-white"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		props: [
			'training',
			'index'
		]
	}
</script>