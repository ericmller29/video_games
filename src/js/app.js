import env from '../env';
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';

window.axios = require('axios');
window.searchEvent = new Vue();

Vue.use(VueRouter);

Vue.component('bestbuy-button', require('./components/BestbuyButton.vue'));
Vue.component('recent-searches', require('./components/RecentSearches.vue'));
Vue.component('search', require('./components/Search.vue'));

var app = new Vue({
	el: '#app',
	env,
	router: router,
	data: function(){
		return {
			searchQuery: ''
		}
	}
	// created(){
	// 	if(this.$route.query.game){
	// 		this.searchQuery = this.$route.query.game;
	// 	}
	// },
	// methods: {
	// 	search(){
	// 		console.log(this.$route);
	// 		if(this.searchQuery.length < 3){
	// 			return false;
	// 		}
			
	// 		router.push({ name: 'search', query: { game: this.searchQuery }})
	// 	}
	// }
});