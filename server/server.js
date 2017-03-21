var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

var redis = new Redis();

http.listen(3000,function () {

    console.log("listening at port 3000")

});
