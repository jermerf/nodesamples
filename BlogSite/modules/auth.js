const Router = require('express').Router
const bcrypt = require('bcrypt')
const dbPromise = require('./mongo')

var router = Router()
var db = null

dbPromise.then(database => {
  db = database
})

function hash(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

router.post('/register', (req, res) => {
  var { username, password } = req.body

  var hashPass = hash(password)

  //Register, usually in a database
  var responseData = {
    success: false
  }

  db.collection('users').insertOne({
    username,
    password: hashPass
  })
    .then(details => {
      loginSuccess(req, username, details.insertedId)
      responseData.success = true
      responseData.username = username
      res.send(responseData)
    })
    .catch(err => {
      console.log("Caught Promise Rejection:", err)
    })
})

router.post('/login', (req, res) => {
  var { username, password } = req.body

  //Register, usually in a database
  var responseData = {
    success: false
  }
  db.collection('users').findOne({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        loginSuccess(req, username, user._id)
        responseData.username = username
        responseData.success = true
      } else {
        responseData.message = "bad credentials"
      }
      res.send(responseData)
    })

})


router.post('/logout', (req, res) => {
  //Register, usually in a database
  var responseData = {
    success: true
  }
  req.session.destroy()
  res.send(responseData)
})

router.post('/check', (req, res) => {
  //Register, usually in a database
  var responseData = {
    success: false
  }
  if(req.session.userId) {
    responseData.success = true
    responseData.username = req.session.username
  }
  res.send(responseData)
})

function loginSuccess(req, username, userId) {
  req.session.username = username
  req.session.userId = userId
}

module.exports = router