function draw(n){
    let star = '';
    let num = 1;
    for(let i = 0; i < n; i++){      
     star = star+num++;
    }
    for(let b =0; b <n; b++){
        console.log(star);       
    }
}