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

			<!-- <div class="projects-arrow">
				<h2>Projects</h2>
				<h1>\/</h1>
			</div> -->
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
}

#intro {
	width: 60vw;
	margin: 0 auto;
	padding-top: 30vh;
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
</style>
