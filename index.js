const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/rss',function(req,res){
    var Parser = require('rss-parser');

    var parser = new Parser();

    parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml', function(err, result) {
            res.send(result);
        })
    }
)





