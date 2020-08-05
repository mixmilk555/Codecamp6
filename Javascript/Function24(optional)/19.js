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
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i >= 2 && j <= i - 1) {
                document.write(`-`);
            }
            else {
                document.write(`*`);
            }
        }
        document.write(`<br>`);
    }

}