import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		name: 'home',
		component: require('./views/Home.vue')
	},
	{
		path: '/search',
		name: 'search',
		component: require('./views/Search.vue'),
		canReuse: false
	}
];

export default new VueRouter({
	mode: 'history',
	routes
});