// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
   one()
   two()
   three()
   makeVisible()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

function two () {

  var two = document.getElementById('two')

  two.classList.add('green')

}

function three () {

var three = document.getElementById('three')
three.classList.add('purple')

}

function makeVisible () {

  var invisible = document.getElementsByClassName('0')
  visible.classList.add('visible')

}
console.log

// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION makeVisible HERE
