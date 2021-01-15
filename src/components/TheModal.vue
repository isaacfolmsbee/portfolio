<template>
<div class="modal-bg">
	<div class="modal-wrapper">
		<img src="@/assets/icons/close.svg" alt="close button" @click="$emit('closeModal')">
		<h1>Want to contact me?</h1>
		<h2>Shoot me an email with your inquiry and I'll get back to you soon!</h2>
		<h3>if@sent.com</h3>
	</div>
</div>
</template>
<script>
export default {
	Name: "TheModal",
}
</script>
<style scoped>
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
	opacity: 0;
	animation: fadeAnimation 500ms ease 0s forwards;
}
@keyframes fadeAnimation {
	to {
		opacity: 1;
	}
}
@-webkit-keyframes fadeAnimation {
	to {
		opacity: 1;
	}
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

@media screen and (max-width: 800px) {
	.modal-bg {
		z-index: 1;
		background-color: unset;
		animation: fadeAnimation 650ms ease 0s forwards;
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
}
</style>