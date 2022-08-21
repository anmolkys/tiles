alert("If music doesn't play, please wait for it to load.")
function reload(){
  function return1(){
    window.location.href = 'index.html';
  }
  return return1();
}
let x=localStorage.getItem("variable");
console.log(x);
var e = document.getElementById('box');
for (let i = 0; i <= x - 1; i++) {
  let tile = document.createElement('div');
  tile.id = "row";
  tile.className="til";
  tile.setAttribute('onmouseover', 'chooser()');
  tile.innerHTML = "";
  e.appendChild(tile);
}
function Englishdisplayer(i){
  const taals=["D0","RE","MI","FA","SO","LA","TI"];
  document.getElementById("dis").textContent=taals[i]+"["+(i+1)+"]";

}
function Hindidisplayer(i){
  const hind=["सा","रे","गा","मा","पा","ध","नी","सा"];
  document.getElementById("dis").textContent=hind[i]+" ["+(i+1)+"]";

}

function rand(s,e){
  let num = s+Math.floor(Math.random()*(e-s+1)+s);
  return num;
}
let i=0;
function chooser(){
  let lol = -1;
  if (lol>=6 || lol==-1){
    i=rand(0,6);
    player(i);
    Englishdisplayer(i);
  }
  else{
    player(i);
    Englishdisplayer(i);
    i=lol+1;
  }
}
  
function player(i){
  let song = new Audio("audio/audio"+i+".wav");
  song.play()
}
function hindiplayer(){
  let song = new Audio("audio1/audio"+i+".wav");
  song.play()
}
function chooserr(){
  let lol = -1;
  if (lol>=6 || lol==-1){
    i=rand(0,6);
    hindiplayer(i);
    Hindidisplayer(i);
  }
  else{
    hindiplayer(i);
    Hindidisplayer(i);
    i=lol+1;
  }
}

function toggleCheck() {
  if(document.getElementById("checkboxx").checked === true){
    let els = document.querySelectorAll("#row");
    for(var i = 0; i < els.length;  i++){
      els[i].setAttribute("onmouseover","chooserr()");
    }
    document.getElementById("lg").textContent="भाषा: हिन्दी";
    document.getElementById("lg").style.width="180px";
    document.querySelector("body").style.backgroundImage="url('https://wallpaperaccess.com/full/4291371.jpg')";

    
  } else {
    let els = document.querySelectorAll("#row");
    for(var i = 0; i < els.length;  i++){
      els[i].setAttribute("onmouseover","chooser()");
    }
    document.getElementById("lg").textContent="Language: English";
    document.getElementById("lg").style.width="160px";
    document.querySelector("body").style.backgroundImage="url('https://collections.mfa.org/internal/media/dispatcher/977899/resize%3Aformat%3Dpreview;jsessionid=AA9479BE6CD713245DBB5991E9DE130C')";
  }
}
