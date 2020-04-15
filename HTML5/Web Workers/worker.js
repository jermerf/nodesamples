var count = 0

function delayedCounter() {
  count++
  postMessage(count)
  setTimeout(delayedCounter, 200)
}

delayedCounter()
