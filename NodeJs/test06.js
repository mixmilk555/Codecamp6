let callbackValue;

function hello4(err,value) {
    callbackValue = value;
}

function tryHello4(callbackFunction){
    let returnValue = 'returnValue';
    let callbackValue = 'callbackValue';
    callbackFunction(null,callbackValue);
    return returnValue;
}

console.log(tryHello4((err,value)=> {callbackValue = value}));
console.log(tryHello4(hello4));
console.log(callbackValue);
