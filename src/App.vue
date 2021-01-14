<template>
<div id="app">
	<Navbar />
	<div id="content">
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
		</div>
		<!-- <Project v-for="(project, name) in projects"
				:key="name" /> -->
	</div>
</div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
	name: 'App',
	components: {
		Navbar,
	},
	created() {
		document.title = "Testing";
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
	font-size: 24px
}

#content {
	background: #383C44;
	width: 100vw;
	height: 100vh;
	overflow: auto;
}

#intro {
	width: 60%;
	height: 80%;
	margin: 10% auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

#intro h1 {
	color: #D6D6D6;
	font-size: 4rem;
	font-family: 'Francois One', sans-serif;
}

#intro h2 {
	color: #C0C0C0;
	font-family: 'Strait', sans-serif;
	text-align: center;
}

#projects-arrow {
	margin-top: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

#projects-arrow img {
	width: 3rem;
	height: 3rem;
}

#projects-arrow h2 {
	font-size: 1.8rem;
}

.projects {
	width: 60%;
	height: 100%;
	margin: 0 auto;
}
</style>
