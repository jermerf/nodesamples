const express = require('express')
const LISTEN_PORT = 8080

var app = express()

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.listen(LISTEN_PORT, () => {
  console.log("Listening on port ", LISTEN_PORT)
})