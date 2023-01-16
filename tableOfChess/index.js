var body = document.querySelector("body");


const colors = ['white, black']

var left = 0
var topValue = 0
var counter = 0

for (var i = 1; i < 65; i++) {

  var element = document.createElement("div")
  element.style.left = left + 'px'
  element.style.top = topValue + 'px'

  body.append(element)
  left += 50
  counter++

  if (counter % 2 === 0) {
    element.style.backgroundColor = 'black'
  }

  if (i % 8 === 0 && i !== 0) {

    topValue += 50
    left = 0
    counter -= 1
  }





}


