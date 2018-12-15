goal=0;
var get_scored = function(){
  if (a[0]===1){
    if(a[1]>=2){
      goal=goal+(4-(a[1]-1));
    }
  }
  else if (a[0]===2){
    if (a[1]===0){
      goal=goal+2;
    }
  }
  var go = document.getElementById("go");
  go.textContent=goal;
}

//CAT QUIZZY//
var answer = function(a){
  var img=document.getElementById("omnia");
  var rep=document.getElementById("rep");
  var next =document.getElementById("Next");
  if(this.value==="Oui"){
    img.src="Img/Question/bonne.JPG";
    next.style.display="inline-block";
    rep.style.display="block";
    return [2,0];
  }
  else if(this.value==="Non"){
    img.src="Img/Question/mauvaise.JPG";
    next.style.display="inline-block";
    rep.style.display="block";
    return [2,1];
  }
  else if (this.value==="IDK"){
    img.src="Img/Question/idk.gif";
    rep.textContent="Je suis sûre que vous savez !!";
    return [2,1];
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
  what=reponse1.addEventListener('click',answer);
	var trep1=document.getElementById("textrep1");
  trep1.textContent=rep[a][0];
	var reponse2=document.getElementById("rep2");
  reponse2.value=rep[a][3];
  what=reponse2.addEventListener('click',answer);
	var trep2=document.getElementById("textrep2");
  trep2.textContent=rep[a][2];
  var radio3 =document.getElementById("rep3");
  what=radio3.addEventListener('click',answer);
  var next = document.getElementById("Next");
  next.style.display='none';
  next.addEventListener("click",function(){play(0,what)});
}

// BLACKCAT //
function random(){
  var idx=Math.floor(Math.random() * (max - min +1)) + min;
  while(id.includes(idx)===true){
    idx=Math.floor(Math.random() * (max - min +1)) + min;
  }
  id.push(idx);
  return idx;
}

function createImg(path) {
  var img = document.createElement('img');
  img.src = path;
  return img;
}

function Score(index,sc){
  if(sc<42){
    value=carte[index].search(/\d/);
    sc=sc+Number(carte[index][value]+carte[index][value+1]);
    console.log(sc);
    return sc
  }
  else if(sc>42){
    window.alert("Défaite");
    startagain();
  }
}
var startagain=function(){
  var divJ = document.getElementById("Joueur");
  var longueur = divJ.childNodes.length;
  for (var k = 3; k<longueur;k++){
    divJ.removeChild(divJ.childNodes[3]);
    console.log(divJ.childNodes)
  }
  var divC = document.getElementById("Croupier");
  var longueur = divC.childNodes.length;
  for (var k = 3; k<longueur;k++){
    divC.removeChild(divC.childNodes[3]);
  }
  imgD=document.getElementById("dealer");
  imgJ=document.getElementById("your");
  id=[];
  min=0;
  max=carte.length-1;
  score=0;
  scoreD=0;
  var scored=document.getElementById("score_croupier");
  scored.textContent=scoreD;
  value=0;
  nbCardD=1;
  nbCardJ=1;
  idxD=random();
  imgD.src=carte[idxD];
  scoreD=Score(idxD,scoreD);
  idxJ=random();
  imgJ.src=carte[idxJ];
  score=Score(idxJ,score);
  var scoreJ=document.getElementById("score_joueur");
  scoreJ.textContent=score;
  if (attempt<3){
    attempt=attempt+1;
  }
  else{
    attempt=1;
    play(1,attempt);
  }
}
function addImgInDiv() {
  if(id.length!==52){
    if(this.id==="Stay"){
      while(scoreD<score===true){
        idxD=random();
        var pathC = "Img/arriere.png";
        var newImgC = createImg(pathC);
        var divC = document.getElementById("Croupier");
        var scored=document.getElementById("score_croupier");
        divC.appendChild(newImgC);
        scoreD=Score(idxD,scoreD);
        nbCardD++;
      }
      var scored = document.getElementById("score_croupier");
      scored.textContent=scoreD;
      if(scoreD<42 && score<42){
        if(scoreD<score){
          window.alert("Congratulations");
          startagain();
          play(1,attempt);
        }
        else if(score===scoreD){
          window.alert("Congratulations");
          startagain();
          play(1,attempt-1);
        }
        else{
          window.alert("Defaite");
        }
      }
      else if(scoreD>42 && score<42){
        window.alert("Défaite du Croupier \n Vous avez gagné")
        startagain();
        play(1,attempt-1);
      }
      else{
        window.alert("Défaite du Croupier")
        startagain();
        play(1,attempt-1);
      }
    }
    else if(this.id==="Card"){
      idxJ=random();
      var pathJ = carte[idxJ];
      var newImgJ = createImg(pathJ);
      var divJ = document.getElementById("Joueur");
      var scorej=document.getElementById("score_joueur");
      divJ.appendChild(newImgJ);
      score=Score(idxJ,score);
      scorej.textContent=score;
      nbCardJ++;
      if(score===42){
        window.alert("Congratulations");
        startagain();
        play(1,attempt-1);
      }
      else if(score>42){
        window.alert("Defaite");
        startagain();
      }
    }
  }
}

function blackcat(){
  idxD=random();
  imgD.src=carte[idxD];
  scoreD=Score(idxD,scoreD);
  idxJ=random();
  imgJ.src=carte[idxJ];
  score=Score(idxJ,score);
  var scoreJ=document.getElementById("score_joueur");
  scoreJ.textContent=score;
  var newcard=document.getElementById("Card");
  newcard.addEventListener("click",addImgInDiv);
  var stay=document.getElementById("Stay");
  stay.addEventListener("click",addImgInDiv);
  var start=document.getElementById("Start again");
  start.addEventListener("click",startagain);
}
var carte=["Img/AK1.png","Img/AP1.png","Img/AT1.png","Img/AC1.png","Img/C2.png","Img/C6.png","Img/C7.png","Img/C8.png","Img/C9.png","Img/C10.png","Img/C3.png","Img/C4.png"
,"Img/C5.png","Img/DC10.png","Img/DK10.png","Img/DP10.png","Img/DT10.png","Img/K2.png","Img/K3.png","Img/K4.png","Img/K5.png","Img/K6.png","Img/K7.png","Img/K8.png",
"Img/K9.png","Img/K10.png","Img/P2.png","Img/P3.png","Img/P4.png","Img/P5.png","Img/P6.png","Img/P7.png","Img/P8.png","Img/P9.png","Img/P10.png","Img/RC10.png","Img/RK10.png",
"Img/RP10.png","Img/RT10.png","Img/T2.png","Img/T3.png","Img/T4.png","Img/T6.png","Img/T7.png","Img/T8.png","Img/T9.png","Img/T10.png","Img/VC10.png","Img/VK10.png","Img/VP10.png",
"Img/VT10.png","Img/T5.png"]
var id=[];
var min=0;
var max=carte.length-1;
var score=0;
var scoreD=0;
var value=0;
var nbCardD=1;
var nbCardJ=1;
var imgD=document.getElementById("dealer");
var imgJ=document.getElementById("your");
var attempt=1;
// MAIN //
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
    if ((typeof new_position)=="object"){
      condition=[plateau[pos[0]-1][pos[1]][0],plateau[pos[0]-1][pos[1]][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]-1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau);
    play(condition,0);
  }
  affichage(plateau);
}
var movebottom = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]+1][pos[1]];
  if (new_position!=0){
    if ((typeof new_position)=="object"){
      condition=[plateau[pos[0]+1][pos[1]][0],plateau[pos[0]+1][pos[1]][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]+1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau);
    play(condition,0);
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
    affichage(plateau);
    play(condition,0);
  }
  affichage(plateau);
}
var moveright = function(plateau,base){
  var pos = player(plateau);
  var new_position = plateau[pos[0]][pos[1]+1];
  if (new_position!=0){
    if ((typeof new_position)=="object"){
      condition=[plateau[pos[0]][pos[1]+1][0],plateau[pos[0]][pos[1]+1][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]][pos[1]+1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau);
    play(condition,0);
  }
  affichage(plateau);
}
var play = function(type,what){
  if (type===4){
    var gameboard = document.getElementById("gameboard");
    var cat = document.getElementById("blackcat");
    gameboard.style.display="none";
    cat.style.display="block";
    blackcat();
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
    get_scored(what);
  }
  else if (type===1){
    var gameboard = document.getElementById("gameboard");
    var cat = document.getElementById("blackcat");
    gameboard.style.display="block";
    cat.style.display="none";
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
        else if (column==4){
          canvas_grid.style.backgroundColor="#cc0000";
        }
        else if ((typeof column)=="object"){
          if (column[0]===3) {
            canvas_grid.style.backgroundColor="#7300e6";
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
[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,[3,5],0,0,0,0,[3,9],0,1,4,1,1,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,4,1,1,1,0,0,0,1,0,0,0,0,4,0],
[0,0,0,0,4,0,0,0,0,[3,4],0,0,0,4,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0],
[0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,[3,8],0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,4,0,0,0,0,0,1,1,[3,7],1,1,1,1,4,1,1,0,0,0,0],
[0,0,0,0,[3,3],0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,1,[3,2],1,1,1,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,[3,0],1,1,1,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
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
