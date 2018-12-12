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
    plateau[pos[0]-1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
  }
}
var setupListener = function(plateau,base){
  var tree = document.getElementById("gameboard");
  if (tree.style.display!='none'){
    for (var lign of plateau){
      for (var column of lign){
        var newDiv = document.createElement("canvas");
        if (column===0){
          newDiv.style.backgroundColor="white";
        }
        else if (column===1) {
          newDiv.style.backgroundColor="black";
        }
        else if (column===2) {
          newDiv.style.backgroundColor="#0099ff";
        }
        else if (column===3) {
          newDiv.style.backgroundColor="#7300e6";
        }
        else if (column==4){
          newDiv.style.backgroundColor="#cc0000";
        }
        else if (column==5){
          newDiv.style.backgroundColor="#4c4c34";
        }
        else if (column==6){
          newDiv.style.backgroundColor="#3d3d29";
        }
        newDiv.style.width="50px";
        newDiv.style.height="50px";
        var div = document.getElementById("plateau");
        div.appendChild(newDiv);
      }
    }
  }
  var top = document.getElementById("Top");
  top.addEventListener("click",movetop(plateau,base));
  var botton = document.getElementById("Botton");
  var right = document.getElementById("Right");
  var left = document.getElementById("Left");
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
window.addEventListener("load",setupListener(plateau,base));
