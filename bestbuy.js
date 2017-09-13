var casper = require('casper').create();

var links, price;

function getBtnLink(){
	var links = document.querySelectorAll('.img-rounded');

	return Array.prototype.map.call(links, function(e){
		return {
			alt: $(e).attr('alt'),
			src: e.getAttribute('src'),
			x: $(e).parent().next().find('a').position().left,
			y: $(e).parent().next().find('a').position().top
		}
	}).filter(function(el){
		return el.alt === casper.cli.get('game').toUpperCase();
	});
}

function getTradeInPrice(){
	return { price: $('h1.value-label > span > span').text() }
}

casper.start('https://tradein.bestbuy.com/client/#/catalog/catalog/search-results?q=' + casper.cli.get('game'));

// casper.then(function(){
// 	this.page.injectJs('/Users/Eric/Desktop/Desktop/projects/games/jquery.min.js');

// 	links = this.evaluate(getBtnLink);
// 	this.mouse.click(links[0].x, links[0].y);
// });

casper.waitForText('Your Estimated Trade-In Value', function(){
	this.page.injectJs('/Users/Eric/Desktop/Desktop/projects/games/jquery.min.js');
});

casper.then(function(){
	this.page.injectJs('/Users/Eric/Desktop/Desktop/projects/games/jquery.min.js');

	price = this.evaluate(getTradeInPrice);

	console.log(price.price);
});

casper.run();