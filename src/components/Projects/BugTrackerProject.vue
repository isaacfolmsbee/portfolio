<template>
<div class="project-wrapper">
	<img src="@/assets/test-image.jpg" alt="project cover photo">
	<h2>Bug Tracker</h2>
	<p>The Bug Tracker project is a web based application that is scheduled to be worked on over the next couple months. Once done this card will be updated.</p>
	<div class="buttons">
		<h3>&lt; Code /&gt;</h3>
		<h3>Live Demo</h3>
	</div>
</div>
</template>
<script>
export default {
	name: "BugTrackerProject"
}
</script>
<style scoped>
.project-wrapper {
	width: 34vw;
	height: 90vh;
	margin: 5vh 0;
	background: #131A23;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

img {
	display: block;
	max-width: 95%;
	max-height: 28%;
	margin-top: 2.5%;
	background: white;
	border-radius: 1rem;
	background: #131A23;
}

h2 {
	margin: 0.4rem 0;
	font-family: 'Francois One', sans-serif;
	font-size: 2rem;
	text-align: center;
	color: #D6D6D6;
}

p {
	width: 85%;
	max-height: 40%;
	font-family: 'Strait', sans-serif;
	font-size: 1.15rem;
	color: #C0C0C0;
	text-align: center;
	overflow-y: auto;
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

@media screen and (max-width: 1500px) {
	.project-wrapper {
		max-width: 90vw;
		width: 25rem;
		height: 80vh;
	}
}

@media screen and (max-width: 800px) {
	h2 {
		margin: 0.35rem 0;
		font-size: 1.75rem;
	}

	p {
		max-height: 42.5%;
		font-size: 1rem;
	}

	.buttons {
		width: 90%;
		margin-top: auto;
		margin-bottom: 0.8rem;
	}

	.buttons h3 {
		border-radius: 0.65rem;
		padding: 0.25rem 0.4rem;
		font-size: 1rem;
	}
}
</style>