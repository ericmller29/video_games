<template>
	<div>
		<div>
			<h2>Results for <span>"{{ $route.query.game }}"</span></h2>
		</div>
		<div class="games-list">
			<a href="#" class="games-list--item" v-for="game in results">
				<div class="game--icon">
					<img v-bind:src="game.image.medium_url" v-bind:alt="game.name">
				</div>
				<div class="game--info">
					<h3>{{ game.name }} - PS4</h3>
					<span>Generated on <span>09/14/2017</span></span>
				</div>
				<span class="game--follow-link">
					View the trade-in value
					<i class="fa fa-angle-double-right"></i>
				</span>
			</a>
		</div>
	</div>
</template>
<script>
import env from '../../env';

export default{
	data: function(){
		return {
			results: []
		}
	},
	mounted(){
		var _this = this;

		axios.get(env.get('API_URL') + '/scraper/search', {
			params: {
				game: this.$route.query.game
			}
		})
		.then(function(res){
			var result = res;
			_this.results = result.data.results
		})
	}
}
</script>