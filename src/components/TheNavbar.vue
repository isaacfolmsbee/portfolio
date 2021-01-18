<template>
<div class="navbar-wrapper fixed w-screen 2xl:w-28 h-20 lg:h-28 2xl:h-screen flex 2xl:flex-col justify-center items-center bg-gray-900">
	<div class="flex 2xl:flex-col 2xl:flex-grow 2xl:justify-end">
		<a href="https://github.com/isaacfolmsbee" 
			target="_blank" rel="noopener noreferrer">
			<img class="navbar-img" src="@/assets/icons/github.svg" alt="Github icon">
		</a>
		<a href="https://www.linkedin.com/in/isaacfolmsbee/" 
			target="_blank" rel="noopener noreferrer">
			<img class="navbar-img" src="@/assets/icons/linkedin.svg" alt="Linkedin icon">
		</a>
		<a href="#">
			<img class="navbar-img" src="@/assets/icons/resume.svg" alt="resume icon">
		</a>
	</div>

	<h2 class="mr-3 lg:mr-7 2xl:mr-0 2xl:mb-8 flex-grow text-white text-2xl lg:text-3xl flex 2xl:flex-col justify-end" @click="$emit('openModal')">Contact</h2>
</div>
</template>

<style scoped>
.navbar-img {
	@apply w-14 lg:w-16 h-14 lg:h-16 ml-3 lg:ml-5 2xl:mx-auto 2xl:my-4
}
</style>