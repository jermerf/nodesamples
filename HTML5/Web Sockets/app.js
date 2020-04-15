const express = require('express')
const WebSocketServer = require('./modules/socket')

const app = express()

app.use(express.static('public'))
app.listen(8081)


//Simple Websocket setup

// WebSocketServer.on('connection', function(ws) {

//   ws.on('message', function(message){
//     console.log(message)
//     ws.send("You sent: " + message)
//   })

// })

// Message redirecting for group paint app

WebSocketServer.on('connection', function(ws) {

  ws.on('message', function(msg){
    for(var c of WebSocketServer.clients){
      if(c == ws) continue
      c.send(msg)
    }
  })

})