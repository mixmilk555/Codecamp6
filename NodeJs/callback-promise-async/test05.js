function addSync(a, b) {
    return (console.log(a + b));
}
let sum = addSync(2, 3);



function add(a, b, callbackFunction) {
    callbackFunction(null, a + b);
}

let sum2 = (err, value) => {
    sum2 = value
}
add(1, 2, sum2);

console.log(sum2);

