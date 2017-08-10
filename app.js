const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


var index = require('./routers/index')

app.use('/', index)


app.listen(3000, function(){
	console.log('Iam listen you on port 3000')
})
