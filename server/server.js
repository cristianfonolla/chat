var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

var redis = new Redis();

redis.psubscribe('*', function(err, count) {
    console.log('Suscribed to'+count);

    if (err){
        console.log("Error");
    }
});

redis.on('pmessage', function(subscribed,channel, message) {
    console.log('Message Recieved at channel(' + channel + '): ' + message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});


http.listen(3000,function () {

    console.log("listening at port 3000");

});
