<template>
<div id="app" 
	:class="{ 'disable-scroll': isModalActive }">
	<Navbar 
		:isModalActive="isModalActive" 
		@openModal="isModalActive = true" />

	<div class="modal-bg"
		:class="{ active: isModalActive }">

		<div class="modal-wrapper">
			<img src="close.svg" alt="close button" @click="isModalActive = false">
			<h1>Want to contact me?</h1>
			<h2>Shoot me an email with your inquiry and I'll get back to you soon!</h2>
			<h3>if@sent.com</h3>
		</div>
	</div>

	<div id="intro">
		<h1>Isaac Folmsbee</h1>
		<h2>
			I’m a Full-Stack web developer who loves using
			new technologies to create clean and efficient websites!
		</h2>

		<div id="projects-arrow"
			@click="scrollTo('projects')">
			<h2>Projects</h2>
			<img src="down-arrow.svg" alt="downward arrow">
		</div>
	</div>

	<div class="projects">
		<Project />
		<Project />
	</div>
</div>
</template>

<script>
import Navbar from './components/Navbar';
import Project from './components/Project'

export default {
	name: 'App',
	components: {
		Navbar,
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

#app {
	background: #383C44;
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
}

#app.disable-scroll {
	overflow-y: hidden;
}

.modal-bg {
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(255, 255, 255, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 450ms;
}

.modal-bg.active {
	visibility: visible;
	opacity: 1;
}

.modal-wrapper {
	position: relative;
	width: 24rem;
	height: 16rem;
	background: #131A23;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.modal-wrapper img {
	position: absolute;
	right: 0.3rem;
	top: 0.3rem;
	width: 1.6rem;
	height: 1.6rem;
	cursor: pointer;
}

.modal-wrapper h1 {
	margin-top: 0.35rem;
	color: #ebebeb;
	font-size: 2.2rem;
	font-family: 'Francois One', sans-serif;
}

.modal-wrapper h2 {
	width: 80%;
	margin-top: 0.1rem;
	color: #cacaca;
	font-size: 1.8rem;
	font-family: 'Strait', sans-serif;
	text-align: center;
}

.modal-wrapper h3 {
	margin: auto;
	color: #ebebeb;
	font-size: 2.25rem;
	font-family: 'Gelasio', serif;
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
	.modal-bg {
		z-index: 1;
		background-color: unset;
		transition: visibility 0s, opacity 650ms;
	}

	.modal-wrapper {
		position: relative;
		width: 100vw;
		height: 100vh;
		border-radius: 0;
	}

	.modal-wrapper img {
		position: absolute;
		right: 1rem;
		top: 1rem;
		width: 1.8rem;
		height: 1.8rem;
	}

	.modal-wrapper h1 {
		width: 92%;
		margin-top: 12vh;
		font-size: 2rem;
		text-align: center;
	}

	.modal-wrapper h2 {
		width: 92%;
		margin-top: 0.25rem;
		font-size: 1.5rem;
	}

	.modal-wrapper h3 {
		margin-top: 8vh;
		font-size: 2.25rem;
	}

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
