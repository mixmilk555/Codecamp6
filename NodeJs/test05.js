function addSync(a, b) {
    return (console.log(a + b));
}
let sum = addSync(2, 3);



function add(a, b, callbackFunction) {
    callbackFunction(null, a + b);
}
let sum2;
add(1, 2, (err, value) => {
    sum2 = value;
});


console.log(sum);
console.log(sum2);
