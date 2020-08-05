function draw(n) {
    let star = '';
    let star2 = '';
    let num = 1;
    for (let i = 0; i < n; i++) {
        star = star + n; //4444
        star2 = star2 + num; //1111

    }
    console.log(star)
    for (let b = 1; b < n; b++) {
        console.log(star - star2 * num++);
    }

}