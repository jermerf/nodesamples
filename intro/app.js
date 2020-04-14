const express = require("express")
const path = require("path")

const cats = require("./cats")

var app = express()

const PORT_NUMBER = 8080

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  let catList = ""
  for(const cat of cats){
    catList += `<li>${cat.name}</li>` 
  }

  res.send(`<h1><ul>${catList}</ul></h1>`)
})

app.get("/canvas", (req, res) => {
  res.sendFile(path.join(__dirname, "canvas.html"))
})

app.get("/ejs", (req, res) => {
  var obj = {
    cats
  }
  res.render(path.join(__dirname, "ejs","home.ejs"), obj)
})



app.listen(PORT_NUMBER, () => {
  console.log("Server running on port " + PORT_NUMBER)
})