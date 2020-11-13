const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', function (req, res){
    res.send('hello,sei wprld')
});

app.get('/about', function(req, res){
    res.send('yerrrrrrr')
});
app.get('/blog',function(req,res){
    res.send('you know what it is')
});

app.listen(8000);


