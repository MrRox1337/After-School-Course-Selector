import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Login },
	// Add more routes as needed (e.g., Register, Course List, etc.)
];

const router = new VueRouter({
	routes,
	mode: "history",
});

new Vue({
	el: "#app",
	router,
});
