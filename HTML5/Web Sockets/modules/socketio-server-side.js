const express = require('express')
const SocketIO = require('socket.io')

var app = express()
var io = null;

io = SocketIO(app)
io.on('connection', function(socket){
  
  //setup socket details
  
})




    