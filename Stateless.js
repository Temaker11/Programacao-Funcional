let number = 2 
// Statefull function
function square() {
  return number * number
}

number = square()

// stateless function 

const square = n => n * n