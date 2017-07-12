var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static('public'));
server.listen(process.env.PORT || 3100);
console.log('server running ..');
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});