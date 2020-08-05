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
}