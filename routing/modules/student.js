const Router = require('express').Router
const collectionPromise = require('./StudentsCollection')

var router = Router()
var collection

collectionPromise.then(studentCollection => {
  collection = studentCollection
})



router.get("/", (req, res) => {
  collection.find().toArray()
  .then(students => {
    res.send(students)
  })
})

router.get("/add", (req, res) => {
  collection.insertOne({
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

module.exports = router