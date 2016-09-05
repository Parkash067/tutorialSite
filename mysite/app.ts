/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/body-parser/body-parser.d.ts" />

import express = require('express');

var app:express.Express=express();
var path=require('path');

//set configuration
app.set('trust proxy',true);
app.set('case sensitive routing',true);
app.set('strict routing', true);

//set view-engine
app.set('views',path.join(__dirname,'./views/'));
app.set('view engine','ejs');

//set middleware
app.use(express.static(path.join(__dirname,'./public')));
app.get('/',function(req,res){
   res.render("index");
});

var port:number=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("Server is listening at port"+port);
})