var express=require('./config/express');
var server=express();
var config=require('./config/config');
var mongoose=require('./config/mongoose')();
server.listen(config.port)
console.log("your port Number"+config.port)
