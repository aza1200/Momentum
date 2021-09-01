const kpop = require('kpop');
var express = require('express')
var app = express();

app.use('/css',express.static(__dirname+'/css'))
app.use('/js',express.static(__dirname+'/js'))
app.use('/node_modules', express.static(__dirname+'/node_modules'))
app.listen(9999);

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

