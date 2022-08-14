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
  tile.setAttribute('onclick', 'player()');
  tile.innerHTML = "Press Me Senpai";
  e.appendChild(tile);
}






/*const songs=["/audio2/DO.wav","/audio2/RE.wav","/audio2/MI.wav","/audio2/FA.wav","/audio2/SO.wav","/audio2/LA.wav","/audio2/TI.wav"];
let banned=[];
function rnd(){
  return Math.floor(Math.random() * 7);
}
r=rnd();

let flag=false;
function player(){
  function check(){
    if(banned.includes(r)==false){
      console.log(r);
      banned.push(r);
      return r;
    }
    else{
      r=rnd();
      return false;
    }
  }
  while(flag=false){
    flag=check();
  }
  let chosen=flag;
  let song=new Audio(songs[chosen]);
  song.play();
}
*/
function player(){
  let song = new Audio("/audio/sound.mp3");
  song.play()
}


