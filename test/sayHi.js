function sayHi(user){
   return console.log(`Hello ${user}`)
}

function sayJa(user){
    return console.log(`Sus ${user}`)
}

 export {sayHi ,sayJa as j}