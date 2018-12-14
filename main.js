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
    if ((typeof new_position)=="object"){
      condition=[plateau[pos[0]][pos[1]-1][0],plateau[pos[0]][pos[1]-1][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]][pos[1]-1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    console.log(plateau[pos[0]][pos[1]]);
    affichage(plateau);
    play(condition);
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
var answer = function(a){
  var img=document.getElementById("omnia");
  var rep=document.getElementById("rep");
  var next =document.getElementById("Next");
  console.log(this)
  if(this.value==="Oui"){
    img.src="Img/Question/bonne.JPG";
    next.style.display="block";
    rep.style.display="block";
  }
  else if(this.value==="Non"){
    img.src="Img/Question/mauvaise.JPG";
    next.style.display="block";
    rep.style.display="block";
  }
  else if (this.value==="IDK"){
    img.src="Img/Question/idk.gif";
    rep.textContent="Je suis sûre que vous savez !!";
  }
}
var quizzy = function(a){
  var image=["Img/Question/omnia.jpg","Img/Question/hiss.gif","Img/Question/tortue.jpg","Img/Question/patte.gif","Img/Question/sneeze.gif","Img/Question/eye.JPG","Img/Question/paw.gif","Img/Question/mustache.gif","Img/Question/water.gif","Img/Question/chaton.JPG"]
  var Question=["Est-ce que ceci est beaucoup trop mignon ?","Quand un chat vous crache dessus, cela signifie ?","Le pelage écaille de tortue a une spécificité laquelle ?","Les chats peuvent-il être droitier ou gaucher ?","De quoi sommes-nous allergique lorsque nous faisons une allergie aux chats ?","Quelle est la couleur des yeux du chat à la naissance. ?","Combien de doigts ont les chats ?","Les moustaches du chat peuvent-elles repoussées ?","Les chats peuvent-ils boire de l'eau de mer ?","Une seule et même portée de chaton peut-elle avoir plusieurs pères ?"];
  var rep=[["Oui","Oui","Non","Non"],["Je t'aime bien","Non","Ne m'approche pas !!","Oui"],["Seules les femelles peuvent l'arborer","Oui","Seuls les mâles peuvent l'arborer","Non"],["Oui","Oui","Non","Non"],["Leur poil","Non","Leur salive","Oui"],["Vert/Jaune","Non","Bleu/grise","Oui"],["Plus de 4 doigts","Non","4 doigts","Oui"],["Non","Non","Oui","Oui"],["Oui","Oui","Non","Non"],["Non","Non","Oui","Oui"]];
  var exp=["C'était évident","En effet, cela signifie que le chat a peur ou se sent agressé.",
  "Les coloris roux et noirs qui font la particularité de l’écaille de tortue se trouvent uniquement dans les chromosomes X. Néanmoins il existe des mâles écaille mais ceci est très rare de plus ils sont stériles",
  "Les chats ont une patte dominante, chez le mâle il s'agirait de la gauche, tandis que pour la femelle la droite.",
  "En réalité nous ne sommes pas allergique à proprement dit aux poils de chat mais à la protéine Fel d1, que l'on retrouve sur la peau, dans la salive, l'urine et bien sûr, les poils du félin",
  "A la naissance seul la couche la plus profonde de l'iris est visible d'où cette couleur.",
  "Les chats ont bien 4 doigts à chaque patte avec un ergot. Chez certaines races le chat peut avoir plus de doigts il est alors dit polydactyle",
  "Contrairement aux idées reçues les vibrisses du chat peuvent repoussés. Petite anecdote, la maman peut couper volontairement les vibrisses de ces chatons afin qu'il ne s'éloigne pas trop",
  "Oui les chats ont de bien meilleurs reins que les nôtres",
  "Que ce soit chez le chat ou chez le chien il s'agit de la superfécondation"];
  var det=document.getElementById("rep");
  det.textContent=exp[a];
  det.style.display="none";
  var img = document.getElementById("omnia");
  img.src=image[a];
  var ask = document.getElementById("Question");
  ask.textContent=Question[a];
  var reponse1=document.getElementById("rep1");
  reponse1.value=rep[a][1];
  reponse1.addEventListener('click',answer);
	var trep1=document.getElementById("textrep1");
  trep1.textContent=rep[a][0];
	var reponse2=document.getElementById("rep2");
  reponse2.value=rep[a][3];
  reponse2.addEventListener('click',answer);
	var trep2=document.getElementById("textrep2");
  trep2.textContent=rep[a][2];
  var radio3 =document.getElementById("rep3");
  radio3.addEventListener('click',answer);
  var next = document.getElementById("Next");
  next.style.display='none';
  next.addEventListener("click",function(){play(0)});
}
var play = function(type){
  if (type[0]===4){
    var gameboard = document.getElementById("gameboard");
    var cat = document.getElementById("blackcat");
    gameboard.style.display="none";
    blackcat.style.display="block";
  }
  else if (type[0]===3) {
    var gameboard = document.getElementById("gameboard");
    var quizz = document.getElementById("quizz");
    gameboard.style.display="none";
    quizz.style.display="block";
    quizzy(type[1])
  }
  else if (type===0) {
    var gameboard = document.getElementById("gameboard");
    var quizz = document.getElementById("quizz");
    gameboard.style.display="block";
    quizz.style.display="none";
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
    div.style.margin="auto";
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
        else if (column===7){
          canvas_grid.style.backgroundColor="yellow";
        }
        else if ((typeof column)=="object"){
          if (column[0]===3) {
            canvas_grid.style.backgroundColor="#7300e6";
          }
          else if (column[0]==4){
            canvas_grid.style.backgroundColor="#cc0000";
          }
          else if (column[0]==5){
            canvas_grid.style.backgroundColor="#4c4c34";
          }
          else if (column[0]==6){
            canvas_grid.style.backgroundColor="#3d3d29";
          }
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
  var jack = document.getElementById("quizz");
  var quizz = document.getElementById("blackcat");
  jack.style.display="none";
  quizz.style.display="none";
}
var plateau = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,[3,6],0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,[3,1],0,0,0,0],
[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,[3,5],0,0,0,0,[3,9],0,1,6,1,1,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,1,0,0,0,1,0,0,0,0,6,0],
[0,0,0,0,6,0,0,0,0,[3,4],0,0,0,6,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0],
[0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,[3,8],0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,6,0,0,0,0,0,1,1,[3,7],1,1,1,1,6,1,1,0,0,0,0],
[0,0,0,0,[3,3],0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,1,[3,2],1,1,1,1,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,[3,0],1,1,1,[4,1],1,1,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var base = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,7,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,7,0,0,0,0],
[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,7,0,0,0,0,7,0,1,7,1,1,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,7,1,1,1,0,0,0,1,0,0,0,0,7,0],
[0,0,0,0,7,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0],
[0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,7,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,7,0,0,0,0,0,1,1,7,1,1,1,1,7,1,1,0,0,0,0],
[0,0,0,0,7,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,1,7,1,1,1,1,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,7,1,1,1,7,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
window.addEventListener("load",function(){setupListener(plateau,base)});
