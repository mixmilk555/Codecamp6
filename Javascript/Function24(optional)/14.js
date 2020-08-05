function draw(n) {
    let rows = n;
    let nn;
    // debugger;
    for (let i = 1; i <= rows; i++) {
        for (nn = rows - i; nn >= 0; nn--)
            document.write(`*`);
        for (let j = 1; j < i; j++)
            document.write(`-`);
        document.write(`<br>`);

    }
}
