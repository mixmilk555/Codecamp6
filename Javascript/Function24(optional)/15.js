function draw(n) {
    // debugger;
    let i, b, m;
    for (i = 1; i <= n; i++) {
        console.log(i);
        for (b = 1; b <= i; b++)
            document.write(`*`);
        for (m = i; m < n; m++)
            document.write("-");
        document.write('<br/>');
    }
    let rows = n;
    let nn;
    // debugger;
    for (let i = 2; i <= rows; i++) {
        for (nn = rows - i; nn >= 0; nn--)
            document.write(`*`);
        for (let j = 1; j < i; j++)
            document.write(`-`);
        document.write(`<br>`);

    }

}