function draw(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) { //rows 
        num++;
        for (let b = 1; b <= n; b++) { //columns
            console.log(num);
            console.log(b);
            document.write(num * b);//1
        }
        document.write(`<br>`);
    }
}