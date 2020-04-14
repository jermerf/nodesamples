const express = require('express')
const studentPromise = require("./modules/students")

var app = express()
var student;
studentPromise.then(studentCollection => {
  student = studentCollection
})

app.use(express.static("public"))

app.get("/getstudents", (req, res) => {
  student.find().toArray()
  .then(students => {
    res.send(students)
  })
})

app.get("/addstudent", (req, res) => {
  student.insertOne({
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

app.listen(8080)