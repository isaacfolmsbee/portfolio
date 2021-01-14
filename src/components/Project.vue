<template>
<div class="project-wrapper">
	<div class="image">
	</div>
	<h2>Title of the stuff</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus porttitor metus, eu ullamcorper mi convallis vitae. Vestibulum neque tortor, placerat vitae viverra a, auctor vitae neque. Nulla consequat varius sapien, at vehicula velit fringilla quis. Proin vel nisl non ex scelerisque mattis efficitur sed augue. Fusce in urna semper, scelerisque ipsum tristique, tempus dolor. Proin et urna nec orci blandit iaculis. Fusce faucibus commodo magna sed rhoncus. In nec ipsum ipsum. Donec ultrices in enim nec eleifend.</p>
	<div class="buttons">
		<h3>&lt; Code /&gt;</h3>
		<h3>Live Demo</h3>
	</div>
</div>
</template>
<script>
export default {
	name: "Project"
}
</script>
<style scoped>
.project-wrapper {
	width: 45%;
	height: 85%;
	background: #131A23;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.image {
	width: 95%;
	height: 28%;
	margin-top: 2.5%;
	background: white;
	border-radius: 1rem;
}

h2 {
	margin: 0.4rem 0;
	font-family: 'Francois One', sans-serif;
	font-size: 2rem;
	color: #D6D6D6;
}

p {
	width: 90%;
	font-family: 'Strait', sans-serif;
	font-size: 1.15rem;
	color: #C0C0C0;
	text-align: center;
}

.buttons {
	width: 75%;
	margin-top: auto;
	margin-bottom: 1.25rem;
}

.buttons h3 {
	border-radius: 0.65rem;
	padding: 0.3rem 0.5rem;
	background: #383C44;
	font-family: 'Strait', sans-serif;
	color: #C0C0C0;
}

.buttons h3:first-child {
	float: left;
}

.buttons h3:last-child {
	float: right;
}
</style>