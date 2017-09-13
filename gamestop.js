var casper = require('casper').create();

var price;

function getPrice(){
	var text = $('.basicBox').find('span.regularPrice').text()
	return { price: text.slice(0, -1) }
}

casper.start('http://www.gamestop.com/trade#!/games');

casper.then(function(){
	this.fill('form[action="/trade/Browse"]', {
		'q': casper.cli.get('game')
	}, true);
});

casper.waitForText('Trade Instructions', function(){
	this.page.injectJs('/Users/Eric/Desktop/Desktop/projects/games/jquery.min.js');

	estimate = this.evaluate(getPrice);
	console.log(estimate.price);
})

casper.run();