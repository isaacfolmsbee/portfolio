<template>
<div class="w-96 max-w-full 2xl:w-4/12 h-96 lg:h-2/3 border-2 border-gray-600 rounded-lg flex flex-col mb-6 lg:mb-0">
		<h1 class="text-4xl 2xl:text-6xl text-gray-300 ml-2 2xl:ml-3 mt-1 2xl:mt-2.5 cursor-default">
			<slot name="title"></slot>
		</h1>
		<div class="mt-1.5 ml-1 2xl:ml-3 flex flex-wrap mb-2.5">
			<slot name="tools"></slot>
		</div>
		<label for="about-project" class="text-gray-300 ml-2 2xl:ml-3 text-lg 2xl:text-3xl">About</label>
		<p id="about-project" class=" w-11/12 mt-1 2xl:mt-2 ml-2 2xl:ml-3 text-gray-400 2xl:text-2xl font-serif font-medium flex-grow">
			<slot name="about"></slot>
		</p>
		<div class="flex justify-evenly my-5 2xl:mb-12 whitespace-nowrap">
			<a class="button" :href="codeURL" target="_blank" rel="noopener noreferrer">&lt; Code /&gt;</a>
			<a class="button" :href="demoURL" target="_blank" rel="noopener noreferrer">Live Demo</a>
		</div>
</div>
</template>
<script>
export default {
	props: {
		codeURL: {
			required: false,
			default: "github.com",
			type: String,
		},
		demoURL: {
			required: false,
			default: "#",
			type: String,
		},
	}
}
</script>
<style scoped>
.button {
	@apply text-gray-800 2xl:text-2xl p-1 2xl:p-2 bg-gray-400 rounded-lg
}

.tool {
	@apply font-serif font-bold text-gray-400 text-sm 2xl:text-lg border-gray-700 border rounded m-1 py-0.5 px-1 cursor-default
}
</style>