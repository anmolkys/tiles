function maker(){
    let x=document.querySelector('input').value;
    localStorage.setItem("variable",x);
    console.log(x);
    function return2(){
      window.location.href = 'tiles.html';
    }
    return return2();
}
