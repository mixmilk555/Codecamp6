function changeColor() {
    //alert("Change Color Function")
    let tcolor = document.querySelector('#in1').value;
        bcolor = document.querySelector('#in2').value;
        bodycolor = document.querySelector('#in3').value;
  //   alret(tcolor)
  //   alert(bcolor)
      document.querySelector('h2').style.color = tcolor;
      document.querySelector('h2').style.backgroundColor = bcolor;
      document.querySelector('body').style.backgroundColor = bodycolor;
  }