<template>
	<Layout>
		<div class="flex flex-col w-full max-w-6xl mx-auto">
			<div class="px-8 pt-16 pb-4 sm:pt-32 sm:pb-10 flex flex-col items-center justify-center w-full xl:m-auto text-center transition-all duration-150 ease-in">
				<g-link to="/" rel="noreferrer" class="sm:px-4 px-8 md:px-12 block py-2 flex text-gray-500 hover:text-gray-600 lg:justify-end items-center font-semibold">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="w-2 h-2 lg:w-4 lg:h-4 mr-2 current-color transform rotate-180"><title>arrow-right</title><g fill="currentcolor"><polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon></g></svg>
					Zpět
				</g-link>
				<h1><span>Treningy</span></h1>
			</div>
			<div class="w-full max-w-6xl xl:max-w-auto overflow-hidden sm:overflow-visible">
				<div class="flex flex-wrap items-start justify-center">
					<trainings v-for="(training, index) in $page.trainings.findTrainings.result" :key="training.name" :training="training" :index="index" />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
	query {
		trainings: unite{
			findTrainings(sort: { field: "order", order: "ASC" }){
				result{
					name
					base_color
					order
					training_content{
						header
						subheader
						description
						blocks{
							exercise_cz
							exercise_en
						}
					}
				}
			}
		}
	}
</page-query>

<script>
//import PaginationPosts from '../components/PaginationPosts'
import Trainings from "../components/Trainings";

export default {
	metaInfo: {
		title: 'Treningy'
	},
	components: {
		Trainings
		//PaginationPosts
	}
}
</script>

