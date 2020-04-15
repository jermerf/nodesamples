const express = require('express')
const dbPromise = require('./mongo')
const noteHandler = require('./note')

var app = express()
var db = null

dbPromise.then(database => {
  db = database
})

app.get((req, res) => {
  noteHandler(req, res, db)
})

app.listen(8080)