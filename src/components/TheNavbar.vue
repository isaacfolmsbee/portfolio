<template>
<div class="fixed w-screen h-20 2xl:w-28 2xl:h-screen flex 2xl:flex-col justify-center items-center bg-gray-800 border-b-2 2xl:border-b-0 2xl:border-r-2 border-gray-600 z-10 text-gray-300">
	<div class="flex 2xl:flex-col 2xl:mt-auto">
		<a href="https://github.com/isaacfolmsbee" 
			target="_blank" rel="noopener noreferrer">
			<svg class="navbar-img" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path></svg>
		</a>
		<a href="https://www.linkedin.com/in/isaacfolmsbee/" 
			target="_blank" rel="noopener noreferrer">
			<svg class="navbar-img" viewBox="0 0 24 24"><path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2zM8.09 18.74h-3v-9h3zM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06z"></path></svg>
		</a>
		<a href="#">
			<svg class="navbar-img" viewBox="0 0 512 512"><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32z"></path><path d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"></path></svg>
		</a>
	</div>

	<h2 class="mr-7 2xl:mr-0 2xl:mb-8 ml-auto 2xl:ml-0 2xl:mt-auto transition-colors duration-500 2xl:text-gray-400 2xl:hover:text-gray-100 text-2xl 2xl:text-3xl cursor-pointer" @click="$emit('openModal')">Contact</h2>
</div>
</template>

<style lang="postcss" scoped>
.navbar-img {
	@apply w-14 h-14 2xl:w-20 2xl:h-20 ml-3 2xl:mx-auto 2xl:my-4 fill-current 2xl:text-gray-400 transition-colors duration-500
}

.navbar-img:hover {
	@apply 2xl:text-gray-200
}
</style>