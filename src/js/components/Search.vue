<template>
<form v-on:submit.prevent="search()">
	<div class="form-item-header">
		<label class="hidden" for="game">What game are you looking for?</label>
		<input type="text" id="game" placeholder="What game are you looking for?" v-model="searchQuery" autofocus>
	</div>
	<button class="form-button-header">
		<i class="fa fa-search"></i>
	</button>
</form>
	
</template>
<script>
export default{
	data: function(){
		return {
			searchQuery: ''
		}
	},
	methods: {
		search(){
			if(this.searchQuery.length < 3){
				return false;
			}
			
			searchEvent.$emit('searched', this.searchQuery);
			this.$router.push({ name: 'search', query: { game: this.searchQuery }})
		}
	}
}
</script>