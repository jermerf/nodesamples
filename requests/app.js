const express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/wrong", (req, res, next) => {
  res.redirect("/")
  next()
})

app.use((req, res, next) => {
  console.log("Request made to ", req.path)
  next()
})

const catsFromDb = [
  {name: "Tesla", age: 7},
  {name: "Edison", age: 4},
  {name: "Spotify", age: 1},
]

app.get("/cats", (req, res) => {
  res.send(catsFromDb)
})

app.get('/cats/:index', (req, res) => {
  res.send(catsFromDb[req.params.index])
})

app.get('/form', (req, res) => {
  res.send(`Hello there ${req.query.fname} ${req.query.lname}. How are you?`)
})

app.post('/form', (req, res) => {
  res.send(`Hello there ${req.body.fname} ${req.body.lname}. How are you?`)
})

app.use(express.static('public'))

app.listen(8888)