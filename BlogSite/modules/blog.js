const Router = require('express').Router
const ObjectID = require('mongodb').ObjectID
const dbPromise = require('./mongo')

var router = Router()
var db = null

dbPromise.then(database => {
  db = database
})

router.post('/add', (req, res) => {
  var { content } = req.body

  //Register, usually in a database
  var responseData = {
    success: false
  }
  db.collection("blog").insertOne({
    owner: new ObjectID(req.session.userId),
    postedOn: new Date(),
    content,
    comments: []
  }).then(details => {
    responseData.success = true
    responseData.detail = details
    res.send(responseData)
  })
})

router.get('/', (req, res) => {
  //Register, usually in a database
  var responseData = {
    success: false
  }
  db.collection("blog").find({}).toArray()
  .then(blogs => {
    responseData.success = true
    responseData.blogs = blogs
    res.send(responseData)
  })
})


router.post('/remove', (req, res) => {
  //Register, usually in a database
  var responseData = {
    success: false
  }
  var query = {
    $and: [
      {owner: new ObjectID(req.session.userId)},
      {_id: new ObjectID(req.body.id)}
    ]
  }
  console.log(query)
  db.collection("blog").deleteOne(query)
  .then(details => {
    if(details.deletedCount == 1){
      responseData.success = true
    } 
    res.send(responseData)
  })
})


module.exports = router