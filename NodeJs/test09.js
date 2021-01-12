// setTimeout(function setTime() { console.log('A'); }, 1000)
// setTimeout(() => { console.log('A') }, 1000)
// setTimeout(() => { return console.log('A'); }, 1000)
// setTimeout(() => { return (console.log('A')); }, 1000)
// setTimeout(setTime = () => {  console.log('A'); console.log('B'); console.log('C') }, 1000)

setTimeout(() => console.log('A'), 1000)
setTimeout(() => console.log('B'), 200)
setTimeout(() => console.log('C'), 300)