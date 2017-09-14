<template>
<div>
	<div>
		<h2>Recent Searches</h2>
	</div>
	<div class="games-list">
		<a href="#" class="games-list--item">
			<div class="game--icon">
				<img src="https://static-ca.ebgames.ca/images/products/725011/3max.jpg">
			</div>
			<div class="game--info">
				<h3>NHL 17 - PS4</h3>
				<span>Generated on <span>09/14/2017</span></span>
			</div>
			<span class="game--follow-link">
				View the trade-in value
				<i class="fa fa-angle-double-right"></i>
			</span>
		</a>
		<a href="#" class="games-list--item">
			<div class="game--icon">
				<img src="https://www.unilad.co.uk/wp-content/uploads/2016/07/FIFA17ps42DPFTglo.jpg">
			</div>
			<div class="game--info">
				<h3>FIFA 17 - PS4</h3>
				<span>Generated on <span>09/12/2017</span></span>
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
export default{
	mounted(){
		console.log('recent searches');
	}
}
</script>