<template>
<div class="fixed z-10 w-screen h-screen flex justify-center items-center lg:bg-gray-200 lg:bg-opacity-20 animate-fadein">
	<div class="relative w-full h-full lg:w-auto lg:h-auto lg:rounded-2xl flex flex-col items-center bg-gray-900">
		<svg class="absolute top-2 right-2 w-10 h-10 fill-current text-gray-400 cursor-pointer" viewBox="0 0 24 24" @click="$emit('closeModal')">
			<path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z"></path>
		</svg>
		<h2 class="mt-2 mb-4 lg:mx-20 text-gray-300 text-2xl sm:text-4xl text-center">Want to contact me?</h2>
		<h3 class="mt-3 font-gelasio text-gray-300 text-xl sm:text-3xl">contact@isaacfolmsbee.com</h3>
		<p class="text text-gray-400">or</p>
		<form 
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			class="my-2 flex flex-col px-2 w-full max-w-xs sm:max-w-md lg:max-w-none lg:w-auto"
		>
			<input type="hidden" name="form-name" value="contact">
			<input 
				type="text" 
				name="return-email"
				class="w-full lg:w-96 bg-gray-800 border border-gray-600 rounded-lg pl-1 py-0.5 text-lg sm:text-2xl text-gray-300 placeholder-gray-500"
				placeholder="Your Email...">
			<textarea 
				name="message"
				class="mt-2 resize-none w-full lg:w-96 h-28 bg-gray-800 border border-gray-600 rounded-lg pl-1 py-0.5 sm:text-xl text-gray-300 placeholder-gray-500"
				placeholder="Your Message..." >
			</textarea>
			<button 
				class="mt-2 mx-auto px-2 py-1 bg-gray-700 text-gray-300 text-lg sm:text-xl font-serif font-bold rounded-lg">
				
				Send Message
			</button>
		</form>
	</div>
</div>
</template>