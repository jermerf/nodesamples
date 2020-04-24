const express = require("express")
const path = require("path")

var app = express()

const PORT_NUMBER = 8080

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res) => {
  res.render('home')
})

app.use("/public", express.static('public'))


app.listen(PORT_NUMBER, () => {
  console.log("Server running on port " + PORT_NUMBER)
})