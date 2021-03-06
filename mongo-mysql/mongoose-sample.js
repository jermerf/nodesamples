const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DB_URL = 'mongodb+srv://jermerf:65Ov&79gNRqG@teaching-z6kbj.gcp.mongodb.net/test?retryWrites=true&w=majority'
var blogsiteDb = null

const dbPromise = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => {
  blogsiteDb = null
})

const BlogPostSchema = new Schema({
  ownerId: Number,
  content: String,
  postTime: Date
})

const BlogPostModel = mongoose.model("BlogPost", BlogPostSchema)

var insertPost = (ownerId, content) => {
  dbPromise.then(() => {
    var post = new BlogPostModel()
    post.ownerId = ownerId
    post.content = content
    post.save()
  })

}

module.exports = {
  insertPost
}