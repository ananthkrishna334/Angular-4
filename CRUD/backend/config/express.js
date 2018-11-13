var express=require('express');
var bodyparser=require('body-parser');
var cors = require('cors');
module.exports=function(){
    var app=express();
    app.use(bodyparser.urlencoded({extended:true}));
    app.use(bodyparser.json());
    app.use(cors());
    require("../app/routs")(app);
    return app;
}