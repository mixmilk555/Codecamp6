function draw(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            document.write(`-`);
        }
        for (let b = n - 1; b >= i; b--) {
            document.write(`*`);
        }
        for (let c = n; c >= i; c--) {
            document.write(`*`);
        }
        for (let d = 2; d <= i; d++) {
            document.write(`-`);
        }
        document.write(`<br>`);
    }
}