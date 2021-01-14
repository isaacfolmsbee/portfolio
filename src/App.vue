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
			<Project />
			<Project />
		</div>
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
	width: 50vw;
	height: 60vh;
	margin: 30vh auto 10vh auto;
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
	width: 75%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
		margin: 15vh auto 20vh auto;
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
}
</style>
