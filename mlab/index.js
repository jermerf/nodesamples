const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DB_URL = 'mongodb+srv://jermerf:65Ov&79gNRqG@teaching-z6kbj.gcp.mongodb.net/test?retryWrites=true&w=majority'


const BlogPostSchema = new Schema({
  ownerId: Number,
  content: String,
  postTime: Date
})

const BlogPostModel = mongoose.model("BlogPost", BlogPostSchema)

var insertPost = (ownerId, content) => {
    var post = new BlogPostModel()
    post.ownerId = ownerId
    post.content = content
    return post.save()
}



console.log("Connecting...")
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then( db => {
  console.log({db})
  insertPost(1, "Some words")
  console.log("Done")
})
.catch(error => {
  console.log(error)
})
