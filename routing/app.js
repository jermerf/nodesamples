const express = require('express')
const student = require('./modules/student')

var app = express()

app.use((req, res, next) => {
  console.log("PATH: ", req.path)
  next()
})

app.get("/cat", (req, res) => {
  res.send("Mewo moew meow")
})

app.use("/student", student)

app.use(express.static("public"))

app.use((req, res, next) => {
  res.send("404 Not Found")
})

app.listen(8080)