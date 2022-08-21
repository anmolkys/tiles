# Tiles
**Task 3** : Tiles and Wave! <br />
**Robovitics** - The official Robotics Club of VIT

> by [Henit Chobisa](https://github.com/henit)

 - The problem is to create a matrix of order n where each (row, column) is a tile, the order n has
to be taken from the user and the outliers should be taken care by the developer, this means
that the developer has to set a minimum size of each tile and if the order exceeds the height
or the width of the window, then you have to show the maximum tiles that can fit in the
window.

 - Each tile is meant to play one of the sound from “do, re, mi, fa….” on mouse hover satisfying
the following conditions :
In the beginning the site should play any note from the eight musical notes.
If the last played note has an index i ( i ≠ 0 && i ≠ 7 ) then the note which should be played
must have index between i + 1 to 7, including i + 1 and 7.

 - If the last played note has an index 7, the next note can be picked from any of the 0 to 7
indices.
 
 

## Algorithm
Firstly , we make a random function which takes two variables as Input and produces a random number between them including both of them .

    function rand(s,e){
        let num = s+Math.floor(Math.random()*(e-s+1)+s);
        return num;
    }

Then , we make the algorithm to play selected music from folder named audio.

    function player(i){
        let song = new Audio("audio/audio"+i+".wav");
        song.play()
    }
  Lastly , combining the above two functions we make the chooser algorithm which chooses and plays the song when mouse cursor hovers on the tile .
  

    function chooser(){
        let lol = -1;
        if (lol>=6 || lol==-1){
            i=rand(0,6);
            player(i);
        }
        else{
            player(i);
            i=lol+1;
        }
    }


## Flow Chart

```mermaid
graph LR
A[Hover]
Y((Play i'th Audio))
X[Random]
Z[Random]
B((If i>6 or i=-1))
D[Play Audio and  i+1]
A --> X
X --> B
B --> Z
Z --> Y
X --> C(else)
C --> D
```
