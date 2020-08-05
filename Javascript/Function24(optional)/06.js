function draw(n) {
    let rows = n;
    let columns = n;
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            document.write(num++);
        }
        document.write(`<br>`);
    }
}