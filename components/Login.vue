<template>
	<div class="login-page">
		<h2>Login</h2>
		<form @submit.prevent="login">
			<input v-model="email" type="email" placeholder="Email" required />
			<input v-model="password" type="password" placeholder="Password" required />
			<button type="submit">Login</button>
		</form>
		<p>New here? <router-link to="/register">Register</router-link></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		login() {
			// Handle login logic
			console.log("Logging in:", this.email, this.password);
		},
	},
};
</script>
