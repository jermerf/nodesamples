
// You can store values using the built in window.localStorage
localStorage.setItem("name", "John Doe")

localStorage.setItem("age", 43)

console.log(localStorage.getItem("name"))

console.log(localStorage.getItem("age"))

console.log(typeof localStorage.getItem("name"))

console.log(typeof localStorage.getItem("age"))

var info = {
  name: "Jane Doe",
  age: 44,
  canDrive: true,
  favouriteBooks: ["Leviathan Wakes", "Cibola Burn", "Tiamat's Wrath"],
  car: {
    make: "Ford",
    model: "Fusion",
    year: 2017
  }
}

localStorage.setItem("badUserInfo", info)

console.log(localStorage.getItem("badUserInfo"))

// All values are stored as strings, so if you want to preserve
// data types and structures you'll need to convert to and from strings
localStorage.setItem("userInfo", JSON.stringify(info))

var obj = JSON.parse(localStorage.getItem("userInfo"))

console.log(obj)

// window.sessionStorage works the exact same way, except the data is 
// cleared when the browser is closed

sessionStorage.setItem("cat", "Tesla")

console.log(sessionStorage.getItem("cat"))