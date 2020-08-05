function draw(n){
    // debugger;
    for (let i = 1; i <= n; i++) {
        for (let j = n-1; j >= i; j--) {
            document.write(`-`);
        }
        for (let c = 1; c <= i; c++) {
            document.write(`*`);
        }
        for (let b = 2; b <= i; b++) {
            document.write(`*`);
        }
        for (let d = n-1; d >= i; d--) {
            document.write(`-`);
        }
        document.write(`<br>`);
    }
    }