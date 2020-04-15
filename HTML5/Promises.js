var myPromise = new Promise(function (resolve, reject) {
  // Request fromt the database or some other slow action  
  var words = prompt("Got some words for me")
  if (words !== null) {
    resolve(words)
  } else {
    reject("Words prompt declined")
  }
})
  .then(function (result) {
    // Do something asynchronously
    return result + "tens"
  })
  .then(function (result) {
    // Then do something else asynchronously, with the previous result
    var response = prompt("Do you love code?")
    if (response !== null && response.indexOf('y') >= 0) {
      return "I love " + result
    } else {
      return Promise.reject("You don't love code")
    }
  })
  .then(function (result) {
    // Rinse repeat
    alert("Final result: " + result)
  })
  .catch(function (err) {
    // Have a 'catch' function to deal with rejects
    alert("Error: " + err)
  })



//Create a resolved promise quickly
Promise.resolve("kit")
  .then(function (result) {
    // Do something asynchronously
    return result + "tens"
  })
  .then(function (result) {
    // Then do something else asynchronously, with the previous result

    return "I love " + result
  })
  .then(function (result) {
    // Rinse repeat
    console.log(result)
  })