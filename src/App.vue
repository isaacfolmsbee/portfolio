<template>
<div>
	<TheNavbar @openModal="openModal()" />

	<TheModal v-if="isModalActive"
		@closeModal="closeModal()" />

	<div id="intro" class="w-5/6 lg:w-4/6 2xl:w-1/2 h-screen mx-auto flex flex-col justify-center items-center text-center">
		<div class="mt-20 lg:mt-0 flex-shrink h-1/3 2xl:h-1/2 flex flex-col justify-end">
			<h1 class="text-5xl lg:text-7xl text-primary-300">Isaac Folmsbee</h1>
			<h2 class="font-serif text-gray-500 text-2xl lg:text-3xl font-bold">
				I’m a Full-Stack web developer who loves using
				new technologies to create clean and efficient websites!
			</h2>
		</div>
		<div class="flex-shrink h-1/2 flex flex-col justify-center">
			<div id="projects-arrow" class="cursor-pointer border-2 border-gray-600 p-1.5 rounded-xl text-gray-400"
				@click="scrollTo('projects')">

				<h2 class="text-center font-serif font-bold text-2xl">Projects</h2>
				<svg class="w-12 h-12 fill-current mx-auto animate-bounce-slow mt-2 -mb-2" viewBox="0 0 24 24"><path d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z"></path></svg>
			</div>
		</div>
	</div>

	<div class="projects pt-24 2xl:pt-0 w-11/12 mx-auto lg:h-screen flex flex-col lg:flex-row justify-evenly items-center">
		<Project codeURL="https://github.com/isaacfolmsbee/ProjectManager">
			<template v-slot:title>
				Project Manager
			</template>
			<template v-slot:tools>
				<h4 class="tool">Vue.JS</h4>
				<h4 class="tool">Express.JS</h4>
				<h4 class="tool">MongoDB</h4>
				<h4 class="tool">TypeScript</h4>
				<h4 class="tool">Responsive</h4>
				<h4 class="tool">Tailwind</h4>
				<h4 class="tool">Auth0</h4>
				<h4 class="tool">HTML</h4>
			</template>
			<template v-slot:about>
				The Project Manager project is a web based application that is scheduled to be worked on over the next couple months. Once done this card will be updated.
			</template>
		</Project>
		<Project>
			<template v-slot:title>
				Elderon
			</template>
			<template v-slot:tools>
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
			</template>
			<template v-slot:about>
				Elderon is a minecraft datapack project I am currently working on. Once finished this card will give more details and a link to its website.
			</template>
		</Project>
	</div>
</div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
import TheModal from './components/TheModal';
import Project from './components/Project';

export default {
	name: 'App',
	components: {
		TheNavbar,
		TheModal,
		Project,
	},
	data() {
		return {
			isModalActive: false,
		}
	},
	methods: {
		scrollTo(targetClass) {
			var element = this.$el.getElementsByClassName(targetClass)[0];
			element.scrollIntoView({behavior: 'smooth'});
		},
		openModal() {
			this.isModalActive = true;
			document.body.classList.add('disable-scroll');
		},
		closeModal() {
			this.isModalActive = false;
			document.body.classList.remove('disable-scroll');
		}
	}
}
</script>