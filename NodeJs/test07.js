function dropBall(before, after) {
    before()
    console.log('catch ball');
    console.log('release');
    after();
}

function kickBall() {
    console.log('kick ball');
}

function buyBall() {
    console.log('buy ball');
}

dropBall(buyBall, kickBall);

// dropBall(function buyBall() {
//     console.log('buy ball');
// } ,
//     function kickBall() {
//         console.log('kick ball');
//     });
