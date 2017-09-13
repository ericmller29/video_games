var express = require('express'),
	app = express(),
	exec = require('child_process').exec;

app.use(function(req, res, next){    
    res.header("Access-Control-Allow-Origin", "http://games.eastoh.co");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', function(req, res){
    res.send('Scrape it!');
})
app.get('/bestbuy', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	console.log(req.query.game);
    exec('casperjs bestbuy.js --game="' + req.query.game + '"', function(err, results){
    	res.json({
    		name: req.query.game,
    		store: 'Best Buy',
    		price: results.replace("\n", "").slice(0, -1)
    	})
    });
});
app.get('/gamestop', function(req, res){
	res.setHeader('Content-Type', 'application/json');
    exec('python3 gamestop.py "' + req.query.game + '"', function(err, results){
    	res.json({
    		name: req.query.game,
    		store: 'Game Stop',
    		price: results.replace("\n", "")
    	})
    });
});

app.listen(3000);