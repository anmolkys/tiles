function reload(){
  location.reload();
}

function maker(){ 
  let x=document.querySelector('input').value;
  console.log(x);
  document.querySelector('form').style.visibility="hidden";
  document.getElementById('tiles').style.visibility="visible";
  var e = document.getElementById('box'); 
  for(let i=0;i<=x-1;i++){
    let tile=document.createElement('div');
    tile.id="row";
    tile.setAttribute('onclick','play()');
    tile.innerHTML="Press Me Senpai";
    e.appendChild(tile);

  }
  
}
const songs=["/audio/sound.mp3","/audio/sound1.mp3"]
function choose(){

}
let song=new Audio(songs[0]);
function play(){
  song.play();
}
