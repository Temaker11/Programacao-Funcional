// função impura 

// Exemplo 1: Está dependendo de dado externo 
// que não foi passado como parâmetro
function calculaeteCircumference(radius) {
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo

let person = {
  name: 'Rafael Camarada',
  age: "jovem"
}

function changeName(name) {
  person.name = name
}

// Função pura

// Exemplo 1 
const calculaeteCircumference = function (pi, radius) {
  return pi * (radius + radius)
}

// com arrow function 

const calculaeteCircumference = (pi, radius) => 
pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) =>
({...person, name})