const mysql = require('mysql')

const blogsiteDb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'blogsite'
})


var insertPost = (ownerId, content) => {
  var query = `
    INSERT INTO blog_post (owner_id, content, post_time) VALUES (
      ${mysql.escape(ownerId)},
      ${mysql.escape(content)},
      ${mysql.escape(new Date())}
    )`
  blogsiteDb.query(query, (error, rows, fields) => {
    // console.log({error, rows, fields})
  })
}

var getPosts = () => {
  var query = `SELECT * FROM blog_post`
  blogsiteDb.query(query, (error, rows, fields) => {
    console.log({error, rows, fields})
  })
}

module.exports = {
  insertPost,
  getPosts
}