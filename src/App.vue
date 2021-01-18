<template>
<div>
	<TheNavbar @openModal="openModal()" />

	<TheModal v-if="isModalActive"
		@closeModal="closeModal()" />

	<div id="intro" class=" w-5/6 lg:w-4/6 2xl:w-1/2 h-screen mx-auto flex flex-col justify-center items-center text-center">
		<div class="mt-20 lg:mt-0 flex-shrink h-1/2 flex flex-col justify-end">
			<h1 class="text-gray-300 text-5xl lg:text-7xl">Isaac Folmsbee</h1>
			<h2 class="font-serif text-gray-400 text-2xl lg:text-3xl font-bold">
				I’m a Full-Stack web developer who loves using
				new technologies to create clean and efficient websites!
			</h2>
		</div>
		<div class="flex-shrink h-1/2 flex flex-col justify-center">
			<div id="projects-arrow" class="cursor-pointer bg-gray-800 p-2 rounded-2xl flex flex-col items-center"
				@click="scrollTo('projects')">

				<h2 class=" text-gray-300 text-center font-serif font-bold text-2xl">Projects</h2>
				<img class="w-12 h-12" src="@/assets/icons/down-arrow.svg" alt="downward arrow">
			</div>
		</div>
	</div>

	<div class="projects pt-10 2xl:pt-0 w-screen min-h-screen h-auto flex flex-col lg:flex-row justify-evenly items-center">
		<ElderonProject />
		<BugTrackerProject />
	</div>
</div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
import TheModal from './components/TheModal';
import ElderonProject from './components/Projects/ElderonProject';
import BugTrackerProject from './components/Projects/BugTrackerProject';

export default {
	name: 'App',
	components: {
		TheNavbar,
		TheModal,
		ElderonProject,
		BugTrackerProject,
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