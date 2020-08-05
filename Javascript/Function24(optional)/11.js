function draw(n) {
    debugger;
    for (let i = 1; i <= n; i++) {
        for (let j = 1 ; j<=i; j++) {
            if (i >= 2 && j <= i-1) {
                document.write(`*`);
            }
            else {
                document.write(`-`);
            }
        }
        for(let b = 1; b<= n-i; b++){
        document.write(`*`);
        }
        document.write(`<br>`);
    }
}