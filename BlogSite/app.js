const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('./modules/session')
const auth = require('./modules/auth')
const blog = require('./modules/blog')
const dbPromise = require('./modules/mongo')

const IGNORE_CORS_WHITELIST = true
const CORS_WHITELIST = ["http://localhost:8080", "http://localhost:8081"]

var app = express()
var db = null

function ipOfRequest(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress
}

app.use(cors({
  origin: function (origin, callback) {
    if (IGNORE_CORS_WHITELIST) {
      callback(null, true)
    } else if (CORS_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log("CORS-Failed", { origin })
      callback(new Error('Not allowed by CORS'))
    }
  },
  preflightContinue: true,
  credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

session(app)

app.use((req, res, next) => {
  db.collection('log').insertOne({
    datetime: new Date(),
    path: req.path,
    ip: ipOfRequest(req)
  })
  next()
})

app.use('/auth', auth)
app.use('/blog', blog)

app.use(express.static('public'))


dbPromise.then(database => { 
  db = database 
  app.listen(8080, ()=> {
    console.log("Listening on 8080")
  })
})
