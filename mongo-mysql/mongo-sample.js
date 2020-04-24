const MongoClient = require('mongodb').MongoClient

const DB_URL = 'mongodb://localhost:27017'
var blogsiteDb = null

const dbPromise = MongoClient.connect(DB_URL, {useUnifiedTopology: true})
.then(client => {
  return client.db('blogsite')
})
.then(db => {
  blogsiteDb = db
})
.catch(error => {
  console.log("DATABASE", error)
})



var insertPost = (ownerId, content) => {
  dbPromise.then(() => {

    blogsiteDb.collection("blogpost")
    .insertOne({
      ownerId,
      content,
      postTime: new Date()
    }).then(res => {
        console.log("INSERT", res)
    })
  })

}

var getPosts = () => {
  dbPromise.then(() => {
    blogsiteDb.collection('blogpost')
    .find().toArray().then(posts => {
      console.log("MONGO-find(): ", posts)
    })
  })
  
}

var getPostByOwner = (ownerId) => {
  dbPromise.then(() => {
    blogsiteDb.collection('blogpost')
    .find({ ownerId }).toArray()
    .then(posts => {
      console.log("FindByOwner(): ", posts)
    })
  })
  
}

module.exports = {
  insertPost,
  getPosts,
  getPostByOwner
}