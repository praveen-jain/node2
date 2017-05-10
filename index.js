var express = require('express');
var logger = require('log4js').getLogger();
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/dist',express.static(path.join(__dirname, '/dist')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(app.get('port'), function(){
    logger.info('Nodejs server is started on port number '+app.get('port'));
});