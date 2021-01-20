<template>
<div class="w-96 max-w-full xl:w-4/12 h-96 lg:h-5/6 bg-gray-900 rounded-lg flex flex-col mb-6 lg:mb-0">
		<h1 class="text-4xl xl:text-6xl text-gray-200 ml-2 xl:ml-3 mt-1 xl:mt-2.5 cursor-default">Elderon</h1>
		<div class="mt-1.5 ml-0.5 xl:ml-3.5 flex flex-wrap mb-2.5">
			<h4 class="tool">Vue.JS</h4>
			<h4 class="tool">Express.JS</h4>
			<h4 class="tool">MongoDB</h4>
			<h4 class="tool">TypeScript</h4>
			<h4 class="tool">Responsive</h4>
			<h4 class="tool">Tailwind</h4>
			<h4 class="tool">Auth0</h4>
			<h4 class="tool">GIT/Github</h4>
			<h4 class="tool">mcfunction</h4>
			<h4 class="tool">Blockbench</h4>
			<h4 class="tool">JSON</h4>
			<h4 class="tool">HTML</h4>
		</div>
		<label for="about-project" class="text-gray-300 ml-2 xl:ml-3 text-lg xl:text-3xl">About</label>
		<p id="about-project" class=" w-11/12 mt-1 xl:mt-2 ml-2 xl:ml-3.5 text-gray-400 xl:text-2xl font-serif font-medium flex-grow">
			Elderon is a minecraft datapack project I am currently working on. Once finished this card will give more details and a link to its website.
		</p>
		<div class="flex justify-evenly mb-6 xl:mb-12">
			<a class="button" href="#">&lt; Code /&gt;</a>
			<a class="button" href="#">Live Demo</a>
		</div>
</div>
</template>
<style scoped>
.button {
	@apply text-gray-200 xl:text-2xl p-1 xl:p-2 bg-gray-700 rounded-lg
}

.tool {
	@apply font-serif font-bold text-gray-400 text-sm xl:text-lg border-gray-700 border rounded mx-1 my-1 p-0.5 cursor-default
}
</style>