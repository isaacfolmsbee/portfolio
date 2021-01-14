<template>
<div class="navbar-wrapper">
	<div class="img-container">
		<a href="https://github.com/isaacfolmsbee" 
			target="_blank" rel="noopener noreferrer">
			<img src="github.svg" alt="Github icon">
		</a>
	</div>
	<div class="img-container">
		<a href="https://www.linkedin.com/in/isaac-folmsbee-a72487201/" 
			target="_blank" rel="noopener noreferrer">
			<img src="linkedin.svg" alt="Linkedin icon">
		</a>
	</div>
	<div class="img-container">
		<a href="#">
			<img src="resume.svg" alt="resume icon">
		</a>
	</div>

	<h2 class="contact">Contact</h2>
</div>
</template>
<script>
export default {
	name: "Navbar"
}
</script>
<style scoped>
.navbar-wrapper {
	position: fixed;
	width: 6rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #131A23;
}

.img-container {
	width: 100%;
	height: 5.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	width: 3rem;
	height: 3rem;
	margin: auto 0;
	cursor: pointer;
	transition: height 350ms, width 350ms;
}

img:hover {
	width: 3.4rem;
	height: 3.4rem;
}

.contact {
	position: absolute;
	bottom: 1rem;
	color: #D6D6D6;
	font-size: 1.5rem;
	font-family: 'Strait', sans-serif;
	cursor: pointer;
	transition: color 350ms;
}

.contact:hover {
	color: #ffffff;
}
</style>