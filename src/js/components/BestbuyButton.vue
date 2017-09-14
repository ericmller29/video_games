<template>
	<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
		<form v-on:submit.prevent="check()">
			<input type="text" v-model="game" placeholder="Which Game?" :disabled="loading">
			<button type="submit" :disabled="loading">Check Game</button>
		</form>
		<ul v-if="results.length">
			<li v-for="result in results">{{ result.price }} for <strong>{{ result.game }}</strong> - {{ result.store }}</li>
		</ul>
		<p v-if="loading">{{ loadingText }}...</p>
	</div>
</template>
<script>
import env from '../../env';

export default{
	data: function(){
		return {
			game: '',
			results: [],
			loading: false,
			loadingText: ''
		}
	},
	methods: {
		getBestBuy: function(){
			return axios.get(env.get('API_URL') + '/scraper/bestbuy?game=' + this.game);
		},
		getGameStop: function(){
			return axios.get(env.get('API_URL') + '/scraper/gamestop?game=' + this.game);
		},
		check: function(){
			var _this = this;
			_this.loading = true;
			_this.loadingText = 'Loading GameStop';
			_this.results = [];
			axios.get(env.get('API_URL') + '/scraper/gamestop?game=' + this.game)
				.then(function(res){
					res.data.game = _this.game;
					_this.results.push(res.data);
					
					_this.loadingText = 'Loading BestBuy';

					return axios.get(env.get('API_URL') + '/scraper/bestbuy?game=' + _this.game);
				})
				.then(function(res){
					res.data.game = _this.game;
					_this.results.push(res.data);
					_this.loading = false;
				});
		}
	}
}
</script>