function draw(n) {
    // debugger;
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            document.write(`*`);
        }
        for (let b = 1; b <= i; b++) {
            if (i >= 2 && b > 1) {
                document.write(`*`);
            }
            else {
                document.write(`-`);
            }
        }
        document.write(`<br>`);
    }
}