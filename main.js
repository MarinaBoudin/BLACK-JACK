var player = function(plateau){
  for (var k = 0;k<=11;k++){
    var lign = plateau[k];
    if (lign.indexOf(2)!=-1){
      var ligne = k;
      var colonne = lign.indexOf(2);
    }
  }
  return [ligne,colonne];
}
var movetop = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]-1][pos[1]];
  if (new_position!=0){
    play(plateau[pos[0]-1][pos[1]]);
    plateau[pos[0]-1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
  }
  affichage(plateau);
}
var movebottom = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]+1][pos[1]];
  if (new_position!=0){
    play(plateau[pos[0]+1][pos[1]]);
    plateau[pos[0]+1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
  }
  affichage(plateau);
}
var moveleft = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]][pos[1]-1];
  if (new_position!=0){
    play(plateau[pos[0]][pos[1]-1]);
    plateau[pos[0]][pos[1]-1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
  }
  affichage(plateau);
}
var moveright = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]][pos[1]+1];
  if (new_position!=0){
    play(plateau[pos[0]][pos[1]+1]);
    plateau[pos[0]][pos[1]+1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
  }
  affichage(plateau);
}
var play = function(type){
  if (type===4){
    var gameboard = document.getElementById("gameboard");
    var cat = document.getElementById("blackcat");
    gameboard.style.display="none";
    blackcat.style.display="block";
  }
}
var affichage = function(plateau){
  var tree = document.getElementById("gameboard");
  if (tree.style.display!='none'){
    var div = document.createElement("div");
    var old_div = document.getElementById("plateau");
    old_div.id="old";
    old_div.style.display="none";
    div.id="plateau";
    div.style.width="1550px";
    div.style.height="600px";
    var gameboard = document.getElementById("gameboard");
    gameboard.appendChild(div);
    for (var lign of plateau){
      for (var column of lign){
        var canvas_grid = document.createElement("canvas");
        if (column===0){
          canvas_grid.style.backgroundColor="white";
        }
        else if (column===1) {
          canvas_grid.style.backgroundColor="black";
        }
        else if (column===2) {
          canvas_grid.style.backgroundColor="#0099ff";
        }
        else if (column===3) {
          canvas_grid.style.backgroundColor="#7300e6";
        }
        else if (column==4){
          canvas_grid.style.backgroundColor="#cc0000";
        }
        else if (column==5){
          canvas_grid.style.backgroundColor="#4c4c34";
        }
        else if (column==6){
          canvas_grid.style.backgroundColor="#3d3d29";
        }
        canvas_grid.style.width="50px";
        canvas_grid.style.height="50px";
        div.appendChild(canvas_grid);
      }
    }
  }
}
var setupListener = function(plateau,base){
  affichage(plateau);
  var top = document.getElementById("Top");
  top.addEventListener("click",function(){movetop(plateau,base)});
  var bottom = document.getElementById("Bottom");
  bottom.addEventListener("click",function(){movebottom(plateau,base)});
  var right = document.getElementById("Right");
  right.addEventListener("click",function(){moveright(plateau,base)});
  var left = document.getElementById("Left");
  left.addEventListener("click",function(){moveleft(plateau,base)});
  var jack = document.getElementById("blackcat");
  jack.style.display="none";
}
var plateau = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,5,0,0,0,0],
            [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,1,6,1,1,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,1,0,0,0,1,0,0,0,0,6,0],
            [0,0,0,0,6,0,0,0,0,5,0,0,0,6,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0],
            [0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,5,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,6,0,0,0,0,0,1,1,5,1,1,1,1,6,1,1,0,0,0,0],
            [0,0,0,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,5,1,1,1,1,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var base = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,5,0,0,0,0],
              [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,1,6,1,1,1,0,0,0,0],
              [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,1,0,0,0,1,0,0,0,0,6,0],
              [0,0,0,0,6,0,0,0,0,5,0,0,0,6,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0],
              [0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,5,0,0,0,0],
              [0,0,0,0,1,0,0,0,0,0,0,6,0,0,0,0,0,1,1,5,1,1,1,1,6,1,1,0,0,0,0],
              [0,0,0,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,1,1,1,5,1,1,1,1,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
window.addEventListener("load",function(){setupListener(plateau,base)});
