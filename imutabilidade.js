// Exemplo em JS

const cart = {
  quality: 2,
  total: 200
}

// bad

cart.quality = 3 

// good

const newCart = {...cart, quality: 3}

// Exemplo em ReactJS

const [amount, setAmount] = useState(0)

// bad 
amount = 2

// good

setAmount(2)