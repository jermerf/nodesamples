const MongoClient = require("mongodb").MongoClient
// const DB_URL = "mongodb+srv://jermerf:jimhawkins@teaching-z6kbj.gcp.mongodb.net/test?retryWrites=true&w=majority"

const DB_URL = "mongodb://localhost:27017"


module.exports = MongoClient.connect(DB_URL, {useUnifiedTopology: true})
.then(client => {
  return client.db('classroom')
}).then(db =>{
  return db.createCollection("users").then(users => {
    // Make sure usernames are unique
    users.createIndex({ username: 1 }, { unique: true })
    return db
  })
})
.catch(error => {
  console.log("DATABASE", error)
})
