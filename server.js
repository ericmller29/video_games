var express = require('express'),
	app = express(),
	exec = require('child_process').exec,
    request = require('request'),
    api_key = 'a96cf8a79064fbf8fe36cb18dd7af46eb689f02b',
    mcache = require('memory-cache');

var cache = function(duration){
    return function(req, res, next){
        var key = '__express__' + req.originalUrl || req.url;
        var cachedBody = mcache.get(key);

        if(cachedBody){
            res.send(cachedBody);
            return;
        }else{
            res.sendResponse = res.send;
            res.send = function(body){
                mcache.put(key, body, duration * 100000);
                res.sendResponse(body);
            }
            next();
        }
    }
}

app.use(function(req, res, next){    
    res.header("Access-Control-Allow-Origin", "http://localhost:2222");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/scraper/', function(req, res){
    res.send('Scrape it!');
});
app.get('/scraper/search', cache(864), function(req, res){
    var requestOptions = {
        url: 'https://www.giantbomb.com/api/games',
        headers: {
            'User-Agent': 'EricsVideoGameApp'
        },
        qs: {
            api_key: api_key,
            field_list: 'name,platforms,image',
            filter: 'name:' + req.query.game,
            sort: 'original_release_date:desc',
            limit: 20,
            format: 'json'
        }
    }
    request(requestOptions, function(err, response, body){
        if(err) console.log(err);

        res.json(JSON.parse(response.body));
    });  
    // request({
    //     url: 'http://www.giantbomb.com/api/games',
    //     qs: 
    // }, function(err, response, body){
    //     res.json(response);
    // });
});
app.get('/scraper/bestbuy', cache(864), function(req, res){
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
app.get('/scraper/gamestop', cache(864), function(req, res){
	res.setHeader('Content-Type', 'application/json');
    exec('python3 gamestop.py "' + req.query.game + '"', function(err, results){
    	res.json({
    		name: req.query.game,
    		store: 'Game Stop',
    		price: results.replace("\n", "")
    	})
    });
});

app.listen(1234);