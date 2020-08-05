function draw(n) {
    let num = n * n;
    console.log(num);
    for (let i = 1; i <= n; i++) {
        for (let b = 1; b <= n; b++) {
            document.write(num--);
            console.log(num);
        }
        document.write(`<br>`);
    }
}