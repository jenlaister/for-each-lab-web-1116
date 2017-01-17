function iterativeLog(array) {
  array.forEach(callback)
}

function callback(element, index) {
  console.log(`${index}: ${element}`)
}

function iterate(callback) {
  sweets = ["cookies", "cupcakes"]
  sweets.forEach(callback)
  return sweets
}


function doToArray(array, callback) {
  array.forEach(callback)
}
