const mysqlSample = require('./mysql-sample')
const mongoSample = require('./mongo-sample')
const mongooseSample = require('./mongoose-sample')

const INSERT_DATA = [
  { ownerId: 1, content: "Black cats are the best" },
  { ownerId: 2, content: "But theyre bad luck!" },
  { ownerId: 3, content: "I like trains" },
  { ownerId: 1, content: "Youre both crazy" },
  { ownerId: 1, content: "','2020-04-17'); DROP DATABASE blogsite;-- " }
] 

for(const post of INSERT_DATA){
  mysqlSample.insertPost(post.ownerId, post.content)
  mongoSample.insertPost(post.ownerId, post.content)
  mongooseSample.insertPost(post.ownerId, post.content)
}

mysqlSample.getPosts()
mongoSample.getPosts()
mongoSample.getPostByOwner(2)