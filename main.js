goal=0;
var get_scored = function(a){
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
  else if (a[0]===3){
    if (a[1]<=50){
      goal=goal+3;
    }
    else if(a[1]<=100){
      goal=goal+2;
    }
    else if(a[1]>100){
      goal=goal+1;
    }
  }
  var go = document.getElementById("go");
  go.textContent=goal;
}

//CAT QUIZZY//
var clic=0
var answer = function(a){
  clic=clic+1
  var img=document.getElementById("omnia");
  var rep=document.getElementById("rep");
  var next =document.getElementById("Next");
  if(clic===1){
  if(this.value==="Oui"){
    img.src="Img/Question/bonne.JPG";
    next.style.display="inline-block";
    rep.style.display="block";
    var what=[2,0];
    get_scored(what);
    next.addEventListener("click",function(){
      var gameboard = document.getElementById("gameboard");
      var quizz = document.getElementById("quizz");
      gameboard.style.display="block";
      quizz.style.display="none";
    });
  }
  else if(this.value==="Non"){
    img.src="Img/Question/mauvaise.JPG";
    next.style.display="inline-block";
    rep.style.display="block";
    what=[2,1];
    get_scored(what);
    next.addEventListener("click",function(){
      var gameboard = document.getElementById("gameboard");
      var quizz = document.getElementById("quizz");
      gameboard.style.display="block";
      quizz.style.display="none";
    });
  }
  else if (this.value==="IDK"){
    img.src="Img/Question/idk.gif";
    rep.textContent="Je suis sûre que vous savez !!";
    what=[2,1];
    get_scored(what);
    next.addEventListener("click",function(){
      var gameboard = document.getElementById("gameboard");
      var quizz = document.getElementById("quizz");
      gameboard.style.display="block";
      quizz.style.display="none";
    });
  }
    }
    else{
	window.alert("Vous avez déjà cliqué, veuillez appuyer sur Next")
    }

}
var what=0;
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
      number=Number(carte[index][value]+carte[index][value+1]);
      if(number===1){
	  if(sc+number>=42){
	      sc=sc+1;
	      return sc
	  }
	  else{
	      sc=sc+11;
	      return sc
	  }
      }
      else{
    sc=sc+Number(carte[index][value]+carte[index][value+1]);
	  return sc
      }
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
  attempt=attempt+1;
  var life = document.getElementById("life");
  life.textContent=3-attempt;
  if (attempt===4){
    attempt=1;
    var life = document.getElementById("life");
    life.textContent=3-attempt;
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
          play(1,[1,attempt]);
        }
        else if(score===scoreD){
          window.alert("Congratulations");
          startagain();
          play(1,[1,attempt]);
        }
        else{
          window.alert("Defaite");
          startagain();
        }
      }
      else if(scoreD>42 && score<42){
        window.alert("Défaite du Croupier \n Vous avez gagné")
        startagain();
        play(1,[1,attempt]);
      }
      else if(scoreD===42 && score<42){
        window.alert("Victoire du croupier \n Défaite")
	startagain();
      }
      else{
        window.alert("Défaite du Croupier")
        startagain();
        play(1,[1,attempt]);
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
        play(1,[1,attempt]);
      }
      else if(score>42){
        window.alert("Defaite");
        startagain();
      }
    }
  }
}

function blackcat(){
  var imgD=document.getElementById("dealer");
  var imgJ=document.getElementById("your");
  var life = document.getElementById("life");
  life.textContent=3-attempt;
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
var attempt=1;

//Meowmory//
function random_memory(x){
  var idx=Math.floor(Math.random() * (x));
  return idx;
}
function createImg_memory(path) {
  var img = document.createElement('img');
  img.src = "Img/memory/cat.png";
  img.style.width="15%";
  img.onclick=function(){
    memory(path);
    verif();
  };
  return img;
}
var retourner=function(){
  var txt = document.getElementById("res");
  if(list[0].src.slice(53,56)!=list[1].src.slice(53,56)){
    console.log(list[0].src.slice(53,56),list[1].src.slice(53,56))
    for (var i of list){
      i.id=i.src;
      i.src="Img/memory/cat.png";
    }
    txt.textContent="Wrong";
  }
  else{
    list[0].id="good";
    list[1].id="good";
    txt.textContent="Good";
  }
  list=[];
}
var restart=function(){
  get_scored([3,coups]);
  coups=0;
  var div= document.getElementById("cat");
  var longueur = div.childNodes.length;
  for (var k = 0; k<longueur;k++){
    div.removeChild(div.childNodes[0]);
  }
  chats=["https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir1.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai1.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco1.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton1.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir2.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai2.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco2.png",
    "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton2.png"];
  let order=set(chats);
  var div = document.getElementById("cat");
  let di = 1;
  for (var k of order){
    var newi = createImg_memory(k);
    newi.id=`${k}`;
    newi.className="card";
    div.appendChild(newi);
    di++;
  }
  var un = document.getElementById("un");
  un.src="Img/memory/cat.png";
  un.style.width="50%";
  var deux = document.getElementById("deux");
  deux.src="Img/memory/cat.png";
  deux.style.width="50%";
  var txt = document.getElementById("res");
  txt.textContent="?";
  var gameboard = document.getElementById("gameboard");
  var meowmory = document.getElementById("Meowmory");
  gameboard.style.display="block";
  meowmory.style.display="none";
}
var verif=function(){
  var cards=document.getElementsByClassName("card");
  card=0;
  good=0;
  for (var k of cards){
    if(k.id=="retourner"){
      card++;
    }
  }
  if (card==1){
    var un = document.getElementById("un");
    un.src=list[0].src;
    un.style.width="50%";
    var deux =document.getElementById("deux");
    deux.src="Img/memory/cat.png";
    deux.style.width="50%";
    var txt = document.getElementById("res");
    txt.textContent="?";
  }
  if(card===2){
    var deux = document.getElementById("deux");
    deux.src=list[1].src;
    deux.style.width="50%";
    retourner();
  }
  for (var k of cards){
    if (k.id=="good"){
      good++;
    }
  }
  if (good===24){
    restart();
  }
}
var set = function(img){
  L=[];
  let b=img.length;
  let c=img.length;
  for (let k = 0; k<c; k++){
    a=random_memory(b);
    L.push(img.splice(a,1));
    b--;
  }
  return L;
}
var memory = function(id){
  coups++;
  var coup =document.getElementById("coups");
  coup.textContent=coups;
  var img = document.getElementById(`${id}`);
  img.src=id;
  img.id="retourner";
  list.push(img);
}
var memories = function(){
  let order=set(chats);
  var div = document.getElementById("cat");
  for (var k of order){
    var newi = createImg_memory(k);
    newi.id=`${k}`;
    newi.className="card";
    div.appendChild(newi);
  }
}
coups=0
list=[];
chats=["https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton2.png"];


//Cat Human Mouse//

/*function random_pfc(m){
    var idx=Math.floor(Math.random()*(m));
    var choose=choix[idx];
    choix.splice(idx,1);
    return choose;
}

function createImg(path) {
  var img = document.createElement('img');
    img.src = path;
    img.className="Carte";
    img.addEventListener("click",action)
  return img;
}

function done(y,img){
    var path2=y.src;
    var newImg=createImg(img);
    var newImg2=createImg(path2);
    var div=document.getElementById("res");
    div.appendChild(newImg2);
    div.appendChild(newImg);
    y.parentNode.removeChild(y);
    var com=document.getElementById(x.toString());
    com.parentNode.removeChild(com);
    x=x-1;
    var sc=document.getElementById("score_joueur");
    sc.textContent=score;
    var sc2=document.getElementById("score_pc");
    sc2.textContent=pc;
    max=max-1;
}

function action(){
    if(score<2 && pc<2){
	comp=random_pfc(max);
	if(this.id==="human"){
	    var test="human";
	    if(comp==="Img/PFC/chat.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/human.png"){
		window.alert("Même carte, remise en jeu");
		comp=random_pfc(max);
	    }
	}
	else if(this.id==="chat"){
	    var test="chat"
	    if(comp==="Img/PFC/human.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/chat.png"){
		window.alert("Même carte, remise en jeu");
		comp=random_pfc(max);
	    }
	}
	else if(this.id==="mulot"){
	    var test="mulot"
	    if(comp==="Img/PFC/human.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/chat.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		window.alert("Même carte, remise en jeu");
		comp=random_pfc(max);
	    }
	}
	if(pc===1 && score===1){
	    window.alert("Egalité")
	    restart();
	}
    }
    else if(score===2){
	window.alert("Gagné")
    }
    else if(pc===2){
	window.alert("Défaite")
	restart();
    }
}

function restart(){
    var img=document.getElementById("1");
    img.parentNode.removeChild(img);
    var img1=document.getElementsByClassName("Carte");
    img1[0].parentNode.removeChild(img1[0]);
    var divC=document.getElementById("Cc");
    var path="Img/PFC/arriere.png";
    for(var k=0;k<3;k++){
	var newImg=createImg(path);
	var id=k+1
	newImg.id=id.toString();
	divC.appendChild(newImg);
    }
    var divJ=document.getElementById("Yc");
    var path1="Img/PFC/chat.png";
    var path2="Img/PFC/mulot.png";
    var path3="Img/PFC/human.png";
    var nI1=createImg(path1);
    nI1.id="chat";
    divJ.appendChild(nI1);
    var nI2=createImg(path2);
    nI2.id="mulot";
    divJ.appendChild(nI2);
    var nI3=createImg(path3);
    nI3.id="human";
    divJ.appendChild(nI3);
    var divR=document.getElementById("res");
    var longueur=divR.childNodes.length;
    for(var k=3;k<longueur;k++){
	divR.removeChild(divR.childNodes[3]);
    }
    choix=["Img/PFC/human.png","Img/PFC/chat.png","Img/PFC/mulot.png"]
    max=choix.length;
    x=3;
    score=0;
    pc=0;
    var sc=document.getElementById("score_joueur");
    sc.textContent=score;
    var sc2=document.getElementById("score_pc");
    sc2.textContent=pc;
}

function pfc(){
    var joueur=document.getElementsByClassName("Carte");
    joueur[0].addEventListener("click",action);
    joueur[1].addEventListener("click",action);
    joueur[2].addEventListener("click",action);
}

var choix=["Img/PFC/human.png","Img/PFC/chat.png","Img/PFC/mulot.png"]
var max=choix.length;
var x=3;
var score=0;
var pc=0;
*/

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

var play = function(type,points){
  if (type===4){
    var gameboard = document.getElementById("gameboard");
    var blacat = document.getElementById("blackcat");
    gameboard.style.display="none";
    blacat.style.display="block";
    blackcat();
  }
  else if (type[0]===3) {
    var gameboard = document.getElementById("gameboard");
    var quizz = document.getElementById("quizz");
    gameboard.style.display="none";
    quizz.style.display="block";
    quizzy(type[1])
    clic=0
  }
  else if (type===1){
    var gameboard = document.getElementById("gameboard");
    var blacat = document.getElementById("blackcat");
    gameboard.style.display="block";
    blacat.style.display="none";
    get_scored(points);
    attempt=1;
    score=0;
    scoreD=0;
  }
  else if (type===5){
    var gameboard = document.getElementById("gameboard");
    var meowmory = document.getElementById("Meowmory");
    gameboard.style.display="none";
    meowmory.style.display="block";
    memories();
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
        else if (column===4){
          canvas_grid.style.backgroundColor="#cc0000";
        }
        else if (column===5){
          canvas_grid.style.backgroundColor="#39ac73";
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
  var Meowmory=document.getElementById("Meowmory");
  jack.style.display="none";
  quizz.style.display="none";
  Meowmory.style.display="none";
}
var plateau = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,[3,6],0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,[3,1],0,0,0,0],
[0,0,1,1,5,1,1,0,0,0,0,0,0,0,0,[3,5],0,0,0,5,0,0,1,1,4,1,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,4,1,1,0,0,0,0,1,0,0,0,0,4,0],
[0,0,0,0,4,0,0,0,0,[3,4],0,0,0,[3,9],0,0,0,1,0,0,0,0,0,0,5,1,1,[3,8],1,1,0],
[0,0,0,0,1,0,0,0,0,1,1,4,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,[3,3],0,0,0,0,0,0,1,0,0,0,0,0,5,1,[3,7],1,1,1,4,1,1,5,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,5,1,1,[3,2],1,1,4,1,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,5,1,1,1,4,1,1,[3,0],1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var base = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,7,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,0],
[0,0,1,1,7,1,1,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,1,1,7,1,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,7,1,1,0,0,0,0,1,0,0,0,0,7,0],
[0,0,0,0,7,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,0,0,0,7,1,1,7,1,1,0],
[0,0,0,0,1,0,0,0,0,1,1,7,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,7,0,0,0,0,0,0,1,0,0,0,0,0,7,1,7,1,1,1,7,1,1,7,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,7,1,1,7,1,1,7,1,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,7,1,1,1,7,1,1,7,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
window.addEventListener("load",function(){setupListener(plateau,base)});
