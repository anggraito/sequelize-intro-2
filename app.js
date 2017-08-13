const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, '/public')));


var index = require('./routers/index')
var teacher = require('./routers/teacher')
var subject = require('./routers/subject')
var student = require('./routers/student')


app.use('/', index)
app.use('/teachers', teacher)
app.use('/subjects', subject)
app.use('/students', student)


app.listen(5002, function(){
	console.log('Iam listen you on port 3000')
})
