<template>
<div class="navbar-wrapper">
	<div class="img-container">
		<a href="https://github.com/isaacfolmsbee" 
			target="_blank" rel="noopener noreferrer">
			<img src="@/assets/icons/github.svg" alt="Github icon">
		</a>
	</div>
	<div class="img-container">
		<a href="https://www.linkedin.com/in/isaacfolmsbee/" 
			target="_blank" rel="noopener noreferrer">
			<img src="@/assets/icons/linkedin.svg" alt="Linkedin icon">
		</a>
	</div>
	<div class="img-container">
		<a href="#">
			<img src="@/assets/icons/resume.svg" alt="resume icon">
		</a>
	</div>

	<h2 class="contact" @click="$emit('openModal')">Contact</h2>
</div>
</template>
<script>
export default {
	name: "TheNavbar"
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

.img-container img {
	width: 3rem;
	height: 3rem;
	margin: auto 0;
	cursor: pointer;
	transition: height 350ms, width 350ms;
}

.img-container img:hover {
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

@media screen and (max-width: 1500px) {
	.navbar-wrapper {
		width: 100vw;
		height: 5rem;
		flex-direction: row;
	}

	.img-container {
		width: 4.5rem;
		height: 100%;
	}

	.img-container:first-of-type {
		margin-left: 1rem;
	}

	.img-container:last-of-type {
		margin-right: auto;
	}

	.img-container img {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 auto;
	}

	.img-container img:hover {
		width: 3rem;
		height: 3rem;
	}

	.contact {
		bottom: unset;
		right: 2rem;
	}
}

@media screen and (max-width: 800px) {
	.navbar-wrapper {
		height: 3.75rem;
	}

	.img-container {
		width: 2.5rem;
	}

	.img-container:first-of-type {
		margin-left: 0.375rem;
	}

	.img-container img {
		width: 1.75rem;
		height: 1.75rem;
		transition: 0s;
	}

	.img-container img:hover {
		width: 1.75rem;
		height: 1.75rem;
	}

	.contact {
		font-size: 1.15rem;
		bottom: unset;
		right: 0.65rem;
	}
}
</style>