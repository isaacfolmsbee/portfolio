<template>
<div class="fixed z-10 w-screen h-screen flex justify-center items-center lg:bg-gray-200 lg:bg-opacity-20 animate-fadein">
	<div class="relative w-full h-full lg:w-96 lg:h-80 lg:rounded-2xl flex flex-col justify-center items-center bg-gray-900">
		<svg class="absolute top-2 right-2 w-10 h-10 fill-current text-gray-400 active:text-gray-100 cursor-pointer" viewBox="0 0 24 24" @click="$emit('closeModal')">
			<path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z"></path>
		</svg>
		<h1 class="text-gray-300 text-4xl text-center">Want to contact me?</h1>
		<h2 class=" font-serif text-gray-400 text-2xl text-center">Shoot me an email with your inquiry and I'll get back to you soon!</h2>
		<h3 class="h-1/5 mt-10 font-gelasio text-gray-300 text-3xl">if@sent.com</h3>
	</div>
</div>
</template>