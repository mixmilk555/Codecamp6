function draw(n) {
    // debugger;
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            document.write(`-`);
        }
        for (let b = 1; b <= i; b++) {
            document.write(`*`);
        }
        document.write(`<br>`);
    }
}