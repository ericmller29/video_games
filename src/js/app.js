import Vue from 'vue';
import env from '../env';
import axios from 'axios';

Vue.component('bestbuy-button', require('./components/BestbuyButton.vue'));

var app = new Vue({
	el: '#app',
	env
});