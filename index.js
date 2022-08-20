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
  tile.setAttribute('onmouseover', 'chooser()');
  tile.setAttribute('onmouseleave', 'pauser()');
  tile.innerHTML = "Press Me Senpai";
  e.appendChild(tile);
}

function rand(s){
  let num = s+Math.floor(Math.random()*(8-s));
  return num;
}
let i=0;
function chooser(){
  let lol = rand(i);
  if (lol>=7){
    i=0;
  }
  else{
    player(i);
    i=lol+1;
  }
}
  
function player(i){
  let song = new Audio("audio/audio"+i+".wav");
  song.play()
}
function pauser(){
  song.pause()
}
