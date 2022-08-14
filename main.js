window.onload=function(){
    document.getElementById("content").style.visibility="visible";
    document.getElementById("loader").remove();
    document.querySelector("body").style.backgroundImage='url("https://giffiles.alphacoders.com/150/15011.gif")';
}

function maker(){
    let x=document.querySelector('input').value;
    localStorage.setItem("variable",x);
    console.log(x);
    function return2(){
      window.location.href = 'tiles.html';
    }
    return return2();
}



