const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const LISTEN_PORT = 8080

const upload = multer({dest: "uploads/"})
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/upload', upload.single('chosenfile'), (req, res) => {
  console.log(req.file)
  res.send({
    filesUpload: true,
    properties: req.file
  })
})



app.use(express.static('public'))
app.use('/uploaded', express.static('uploads'))


app.listen(LISTEN_PORT, ()=>{
  console.log(`Listening on port ${LISTEN_PORT}`)  
})