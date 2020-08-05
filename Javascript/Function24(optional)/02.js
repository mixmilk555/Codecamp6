function draw(n) {
    let star = ''
    for (let i = 0; i < n; i++) {
        star = star + '*';
    }
    for (let b = 0; b < n; b++) {
        console.log(star);
    }
}