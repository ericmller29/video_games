import env from '../env';

import Vue from 'vue';
window.axios = require('axios');

Vue.component('bestbuy-button', require('./components/BestbuyButton.vue'));

var app = new Vue({
	el: '#app',
	env
});