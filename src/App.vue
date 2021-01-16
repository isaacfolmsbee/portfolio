<template>
<div>
	<TheNavbar @openModal="openModal()" />

	<TheModal v-if="isModalActive"
		@closeModal="closeModal()" />

	<div id="intro">
		<h1>Isaac Folmsbee</h1>
		<h2>
			I’m a Full-Stack web developer who loves using
			new technologies to create clean and efficient websites!
		</h2>

		<div id="projects-arrow"
			@click="scrollTo('projects')">
			<h2>Projects</h2>
			<img src="@/assets/icons/down-arrow.svg" alt="downward arrow">
		</div>
	</div>

	<div class="projects">
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

<style>
* {
	margin: 0;
	padding: 0;
}

:root {
	font-size: 24px;
}

body {
	background: #383C44;
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
}

body.disable-scroll {
	overflow-y: hidden;
}

#intro {
	width: 50vw;
	height: 60vh;
	padding-top: 30vh;
	padding-bottom: 10vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

#intro h1 {
	color: #D6D6D6;
	font-size: 4rem;
	font-family: 'Francois One', sans-serif;
	text-align: center;
}

#intro h2 {
	color: #C0C0C0;
	font-family: 'Strait', sans-serif;
	text-align: center;
}

#projects-arrow {
	margin-top: auto;
	padding: 0.45rem;
	border-radius: 0.85rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: #131A23;
}

#projects-arrow img {
	width: 3rem;
	height: 3rem;
}

#projects-arrow h2 {
	font-size: 1.8rem;
}

.projects {
	width: 75vw;
	min-height: 100vh;
	max-height: fit-content;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

@media screen and (max-width: 1500px) {
	.projects {
		padding-top: 5rem;
		flex-direction: column;
	}
}

@media screen and (max-width: 1250px) {
	#intro {
		width: 85vw;
	}

	#intro h1 {
		font-size: 3.5rem;
	}

	#intro h2 {
		font-size: 1.25rem;
	}

	#projects-arrow img {
		width: 2.5rem;
		height: 2.5rem;
	}

	#projects-arrow h2 {
		font-size: 1.25rem;
	}
}

@media screen and (max-width: 800px) {
	#intro {
		height: 65vh;
		padding-top: 15vh;
		padding-bottom: 20vh;
	}

	#intro h1 {
		font-size: 2.5rem;
		line-height: 3rem;
		margin-bottom: 0.8rem;
	}

	#intro h2 {
		font-size: 1rem;
	}

	#projects-arrow {
		padding: 0.3rem;
		border-radius: 0.65rem;
	}

	.projects {
		padding-top: 3.75rem;
		flex-direction: column;
	}
}
</style>
