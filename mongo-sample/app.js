const express = require('express')
const databasePromise = require("./modules/database")

var app = express()
var db = null
var student;

databasePromise.then(database => {
  db = database
  app.listen(8080)
})

app.use(express.static("public"))

app.get("/getstudents", (req, res) => {
  db.collection('students').find().toArray()
  .then(students => {
    res.send(students)
  })
})

app.get("/addstudent", (req, res) => {
  db.collection('students').insertOne({
    name: req.query.studentname,
    age: req.query.age
  })
  .then(result => {
    res.send({
      message: "complete",
      result
    })
  })
  .catch(error => {
    console.log("INSERT", error)
  })
})
