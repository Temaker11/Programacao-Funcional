const sayMyName = () => console.log('Temaker')
const runFunction = fn => fn()

runFunction(sauMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))