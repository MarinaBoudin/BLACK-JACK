goal=0; // Score du joueur au départ
var get_scored = function(jeu){ // Fonction qui va compter les points du joueur selon le jeu et selon le nmbre de points qu'il a gagné
  if (jeu[0]===1){ // Pour le jeu black-cat qui dépend du nombre de tentatives du joueur au jeu
    if(jeu[1]>=2){
      goal=goal+(4-(jeu[1]-1));
    }
  }
  else if (jeu[0]===2){ // Pour le cat quizzy, le joueur gagne deux points s'il répond juste au quizz
    if (jeu[1]===0){
      goal=goal+2;
    }
  }
  else if (jeu[0]===3){ // Pour le meowmory, le joueur gagne des points selon le nombre de coups
    if (jeu[1]<=50){
      goal=goal+3;
    }
    else if(jeu[1]<=100){
      goal=goal+2;
    }
    else if(jeu[1]>100){
      goal=goal+1;
    }
  }
  var go = document.getElementById("go"); // On réactualise le score sur la page html
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
      seven++; // Le jeu est fini on ajoute donc 1 a seven
      finish(plateau,base); // ON vérifie si le plateau n'est pas complet
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
      seven++; // Le jeu est fini on ajoute donc 1 a seven
      finish(plateau,base); // ON vérifie si le plateau n'est pas complet
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
      seven++; // Le jeu est fini on ajoute donc 1 a seven
      finish(plateau,base); // ON vérifie si le plateau n'est pas complet
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
  var Question=["Est-ce que ceci est beaucoup trop mignon ?","Quand un chat vous crache dessus, cela signifie ?","Le pelage écaille de tortue a une spécificité laquelle ?","Les chats peuvent-ils être droitier ou gaucher ?","De quoi sommes-nous allergiques lorsque nous faisons une allergie aux chats ?","Quelle est la couleur des yeux du chat à la naissance. ?","Combien de doigts ont les chats ?","Les moustaches du chat peuvent-elles repousser ?","Les chats peuvent-ils boire de l'eau de mer ?","Une seule et même portée de chaton peut-elle avoir plusieurs pères ?"];
  var rep=[["Oui","Oui","Non","Non"],["Je t'aime bien","Non","Ne m'approche pas !!","Oui"],["Seules les femelles peuvent l'arborer","Oui","Seuls les mâles peuvent l'arborer","Non"],["Oui","Oui","Non","Non"],["Leur poil","Non","Leur salive","Oui"],["Vert/Jaune","Non","Bleu/grise","Oui"],["Plus de 4 doigts","Non","4 doigts","Oui"],["Non","Non","Oui","Oui"],["Oui","Oui","Non","Non"],["Non","Non","Oui","Oui"]];
  var exp=["C'était évident","En effet, cela signifie que le chat a peur ou se sent agressé.",
  "Les coloris roux et noirs qui font la particularité de l’écaille de tortue se trouvent uniquement dans les chromosomes X. Néanmoins il existe des mâles avec le pelage écaille de tortue mais ceci est très rare, de plus ils sont stériles",
  "Les chats ont une patte dominante, chez le mâle il s'agirait de la gauche, tandis que pour la femelle la droite.",
  "En réalité nous ne sommes pas allergique à proprement dit aux poils de chat mais à la protéine Fel d1, que l'on retrouve sur la peau, dans la salive, l'urine et bien sûr, les poils du félin",
  "A la naissance seul la couche la plus profonde de l'iris est visible d'où cette couleur.",
  "Les chats ont bien 4 doigts à chaque patte avec un ergot. Chez certaines races le chat peut avoir plus de doigts il est alors dit polydactyle",
  "Contrairement aux idées reçues les vibrisses du chat peuvent repousser. Petite anecdote, la maman peut couper volontairement les vibrisses de ses chatons afin qu'il ne s'éloigne pas trop",
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
  console.log(max,min);
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
console.log(max);
var score=0;
var scoreD=0;
var value=0;
var nbCardD=1;
var nbCardJ=1;
var attempt=1;

//Meowmory//
function random_memory(x){ // Fonction qui va choisir au hazard un nombre entier parmis 0 à x
  var alea_num=Math.floor(Math.random() * (x));
  return alea_num;
}
function createImg_memory(path) { // Fonction qui permettre de créer les images retournées du meowmory
  var img = document.createElement('img');
  img.src = "Img/memory/cat.png";
  img.style.width="15%";
  img.onclick=function(){ // Cette partie ajoute un évennement à l'image, si on clique dessus alors on fait appel a memory et verif
    memory(path);
    verif();
  };
  return img;
}
var retourner=function(){ // Cette fonction permet de savoir si les images retournées par l'uttilisateur sont identiques ou non
  var txt = document.getElementById("res");
  if(list[0].src.slice(53,56)!=list[1].src.slice(53,56)){ // Si elles sont différentes alors on remet retourne les images et on indique que les deux images retournées ne sont pas identiques
    for (var i of list){ // Je précise que le cadre à côté des cartes sert à montrer les cartes qui snt retournée par le joueur
      i.id=i.src;
      i.src="Img/memory/cat.png";
    }
    txt.textContent="Wrong";
  }
  else{ // Si elles sont identiques elles restent retournées et on change leur id par good
    list[0].id="good";
    list[1].id="good";
    txt.textContent="Good";
  }
  list=[]; // Cette liste contient à chaque fois les cartes retournées, elle est remise à zéro pour contenir les cartes qui ont être retournées par la suite
}
var restart_meowmory=function(){ // Cette fonction sera uttilisée pour remettre le jeu à zéro
  get_scored([3,coups]); // On calcule d'abord le nombre de points obtenu par le joueur à partir du nombre de coups qui a fait
  coups=0; // ON remeyt lenombre de coups à zéro
  var div= document.getElementById("cat"); // On supprime toutes les cartes
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
  memories(chats); // On replace les cartes dans un ordre aléatoire
  var un = document.getElementById("un");
  un.src="Img/memory/cat.png";
  un.style.width="50%";
  var deux = document.getElementById("deux");
  deux.src="Img/memory/cat.png";
  deux.style.width="50%";
  var txt = document.getElementById("res");
  txt.textContent="?";
  var gameboard = document.getElementById("gameboard"); // On remet le joueur sur le plateau en cachant le meowmory et en faisant apparaître le plateau
  var meowmory = document.getElementById("Meowmory");
  gameboard.style.display="block";
  meowmory.style.display="none";
  seven++; // Le jeu est fini on ajoute donc 1 a seven
  finish(plateau,base); // ON vérifie si le plateau n'est pas complet
}
var verif=function(){ // Cette fonction va vérifier à quelle moment le jeu en est et éffectuer les actions requises
  var cards=document.getElementsByClassName("card"); // On calcule tout d'abord le nombre de cartes retournées sur le plateau
  card=0;
  good=0;
  for (var k of cards){
    if(k.id=="retourner"){
      card++;
    }
  }
  if (card==1){ // Si il n'y en a qu'une alors on l'affiche dans l'image avec l'id un
    var un = document.getElementById("un");
    un.src=list[0].src;
    un.style.width="50%";
    var deux =document.getElementById("deux");
    deux.src="Img/memory/cat.png";
    deux.style.width="50%";
    var txt = document.getElementById("res");
    txt.textContent="?";
  }
  if(card===2){ // Si il y en a deux alors on affiche la deuxième dans l'image avec l'id deux et on lance la fonction retourner
    var deux = document.getElementById("deux");
    deux.src=list[1].src;
    deux.style.width="50%";
    retourner();
  }
  for (var k of cards){ // On calcule le nombre de cartes qui possède un id good, donc celle qui ont été bien retournée avec leur paire
    if (k.id=="good"){
      good++;
    }
  }
  if (good===24){ // Si le nombre de cartes good est de 24 alors le joueur les as toutes retournée on peut recommencer le jeu à zéro
    restart_meowmory();
  }
}
var set = function(liste_img){ // Cette fonction permet de mélanger aléatoirement les images de liste_img
  L=[];
  let b=liste_img.length;
  let c=liste_img.length;
  for (let k = 0; k<c; k++){
    a=random_memory(b);
    L.push(liste_img.splice(a,1));
    b--;
  }
  return L;
}
var memory = function(id){ // Cette fonction permet de retourner la carte, augmenter le nombre de coup de 1 etde l'ajouter à list qui est la liste des cartes retournées
  coups++;
  var coup =document.getElementById("coups");
  coup.textContent=coups;
  var img = document.getElementById(`${id}`);
  img.src=id;
  img.id="retourner";
  list.push(img);
}
var memories = function(chats){ // Cette fonction permet de créer le plateau avec les cartes
  let order=set(chats);
  var div = document.getElementById("cat");
  for (var img_cat of order){
    var new_img = createImg_memory(img_cat); // On crée une image avec l'image du chat
    new_img.id=`${img_cat}`; // Son id sera sont chemin d'accès
    new_img.className="card";
    div.appendChild(new_img); // On l'ajoute à la division
  }
}
coups=0 // Nombre de cou au départ pour le joueur
list=[]; // Liste des cartes retournées
chats=["https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph1.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton1.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/bal2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ben2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/bir2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/cha2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/cor2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/mai2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/mun2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/per2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sco2.png",
  "https://marinaboudin.github.io/BLACK-JACK/Img/memory/sia2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/sph2.png","https://marinaboudin.github.io/BLACK-JACK/Img/memory/ton2.png"]; // listes de images qui sont en doubles


//Cat Human Mouse//

function random_pfc(m){
    var idx=Math.floor(Math.random()*(m));
    var choose=choix[idx];
    choix.splice(idx,1);
    return choose;
}

function createImg_pfc(path) {
    var img = document.createElement('img');
    img.src = path;
    img.className="Carte";
    return img;
}

function done(y,img){
    var path2=y.src;
    var newImg=createImg_pfc(img);
    var newImg2=createImg_pfc(path2);
    var div=document.getElementById("mvt");
    div.appendChild(newImg2);
    div.appendChild(newImg);
    y.parentNode.removeChild(y);
    var com=document.getElementById(x.toString());
    com.parentNode.removeChild(com);
    x=x-1;
    var sc=document.getElementById("score_pfc");
    sc.textContent=score_pfc;
    var sc2=document.getElementById("score_pc");
    sc2.textContent=pc;
    max_pfc=max_pfc-1;
}

function action(){
    if(score<2 && pc<2){
	comp=random_pfc(max_pfc);
	if(this.id==="human"){
	    var test="human";
	    if(comp==="Img/PFC/chat.png"){
		score_pfc=score_pfc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/human.png"){
		window.alert("Même carte, remise en jeu");
	    }
	}
	else if(this.id==="chat"){
	    var test="chat"
	    if(comp==="Img/PFC/human.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		score_pfc=score_pfc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/chat.png"){
		window.alert("Même carte, remise en jeu");
	    }
	}
	else if(this.id==="mulot"){
	    var test="mulot"
	    if(comp==="Img/PFC/human.png"){
		score_pfc=score_pfc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/chat.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="Img/PFC/mulot.png"){
		window.alert("Même carte, remise en jeu");
	    }
	}
	if(pc===1 && score===1){
	    window.alert("Egalité")
	    restart_pfc();
	}
    }
    else if(score===2){
	window.alert("Gagné")
    }
    else if(pc===2){
	window.alert("Défaite")
	restart_pfc();
    }
}

function restart_pfc(){
  var img=document.getElementById("1");
  img.parentNode.removeChild(img);
  var img1=document.getElementsByClassName("Carte");
  img1[0].parentNode.removeChild(img1[0]);
  var divC=document.getElementById("Cc");
  var path="Img/PFC/arriere.png";
  for(var k=0;k<3;k++){
    var newImg=createImg_pfc(path);
    var id=k+1
    newImg.id=id.toString();
    divC.appendChild(newImg);
  }
  var divJ=document.getElementById("Yc");
  var path1="Img/PFC/chat.png";
  var path2="Img/PFC/mulot.png";
  var path3="Img/PFC/human.png";
  var nI1=createImg_pfc(path1);
  nI1.id="chat";
  nI1.addEventListener("click",action);
  divJ.appendChild(nI1);
  var nI2=createImg_pfc(path2);
  nI2.id="mulot";
  nI2.addEventListener("click",action);
  divJ.appendChild(nI2);
  var nI3=createImg_pfc(path3);
  nI3.id="human";
  nI3.addEventListener("click",action);
  divJ.appendChild(nI3);
  var divR=document.getElementById("mvt");
  var longueur=divR.childNodes.length;
  for(var k=3;k<longueur;k++){
    divR.removeChild(divR.childNodes[3]);
  }
  choix=["Img/PFC/human.png","Img/PFC/chat.png","Img/PFC/mulot.png"]
  max_pfc=choix.length;
  x=3;
  score=0;
  pc=0;
  var sc=document.getElementById("score_pfc");
  sc.textContent=score_pfc;
  var sc2=document.getElementById("score_pc");
  sc2.textContent=pc;
  seven++; // Le jeu est fini on ajoute donc 1 a seven
  finish(plateau,base); // ON vérifie si le plateau n'est pas complet
}

function pfc(){
    var joueur=document.getElementsByClassName("Carte");
    joueur[0].addEventListener("click",action);
    joueur[1].addEventListener("click",action);
    joueur[2].addEventListener("click",action);
}

var choix=["Img/PFC/human.png","Img/PFC/chat.png","Img/PFC/mulot.png"]
var max_pfc=choix.length;
var x=3;
var score_pfc=0;
var pc=0;

// MAIN //
var finish=function(plateau,base){ // Cette fonction vérifie si le jeu a été fini ou non
  if (seven===34){ // Il y a 34 jeux seven compte le nombre de jeux déjà joués
    window.alert(`Ton score est de ${goal}/95. Le jeu est fini bravo !`);
    location.reload(); // A la fin on relance la page après avoir donné son crore au joueur
  }
}
var player = function(plateau){ // Cette fonction permet d'avoir la position du joueur dans le plateau
  for (var k = 0;k<=11;k++){ // Pour chaque ligne du plateau
    var lign = plateau[k];
    if (lign.indexOf(2)!=-1){ // Si 2 existe dans la ligne alors
      var ligne = k; // On stock la valeur de ligne
      var colonne = lign.indexOf(2);// et celle de la colonne
    }
  }
  return [ligne,colonne]; // On retourne les positions
}
var movetop = function(plateau,base){ // Cette fonction permet de déplacer le joueur vers le haut
  var pos = player(plateau);
  var new_position = plateau[pos[0]-1][pos[1]];
  if (new_position!=0){ // Le personnage bouge seuelement si la nouvelle position n'est pas une case vide, égale à 0
    if ((typeof new_position)=="object"){ // Condition respectée seulement dans le cadre du quizzy cat
      condition=[plateau[pos[0]-1][pos[1]][0],plateau[pos[0]-1][pos[1]][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]-1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]]; // L'ancienne position reprend sa valeur de base dans base
    affichage(plateau); // On réactualise le plateau à chaque mouvement
    if (condition!=1){
      play(condition,0); // Condition permet de savoir quel jeu lancé selon la valeur de condition
    }
  }
  affichage(plateau); // On réactualise le plateau à chaque mouvement
}
var movebottom = function(plateau,base){ // Cette fonction permet de déplacer le joueur vers le bas
  var pos = player(plateau);
  var new_position = plateau[pos[0]+1][pos[1]];
  if (new_position!=0){ // Le personnage bouge seuelement si la nouvelle position n'est pas une case vide, égale à 0
    if ((typeof new_position)=="object"){ // Condition respectée seulement dans le cadre du quizzy cat
      condition=[plateau[pos[0]+1][pos[1]][0],plateau[pos[0]+1][pos[1]][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]+1][pos[1]] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau); // On réactualise le plateau à chaque mouvement
    if (condition!=1){
      play(condition,0); // Condition permet de savoir quel jeu lancé selon la valeur de condition
    }
  }
  affichage(plateau); // On réactualise le plateau à chaque mouvement
}
var moveleft = function(plateau,base){ // Cette fonction permet de déplacer le joueur vers la gauche
  var pos = player(plateau);
  var new_position = plateau[pos[0]][pos[1]-1];
  if (new_position!=0){ // Le personnage bouge seuelement si la nouvelle position n'est pas une case vide, égale à 0
    if ((typeof new_position)=="object"){ // Condition respectée seulement dans le cadre du quizzy cat
      condition=[plateau[pos[0]][pos[1]-1][0],plateau[pos[0]][pos[1]-1][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]][pos[1]-1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau); // On réactualise le plateau à chaque mouvement
    if (condition!=1){
      play(condition,0); // Condition permet de savoir quel jeu lancé selon la valeur de condition
    }
  }
  affichage(plateau); // On réactualise le plateau à chaque mouvement
}
var moveright = function(plateau,base){ // Cette fonction permet de déplacer le joueur vers la droite
  var pos = player(plateau);
  var new_position = plateau[pos[0]][pos[1]+1];
  if (new_position!=0){ // Le personnage bouge seuelement si la nouvelle position n'est pas une case vide, égale à 0
    if ((typeof new_position)=="object"){ // Condition respectée seulement dans le cadre du quizzy cat
      condition=[plateau[pos[0]][pos[1]+1][0],plateau[pos[0]][pos[1]+1][1]];
    }
    else{
      condition=new_position;
    }
    plateau[pos[0]][pos[1]+1] = 2;
    plateau[pos[0]][pos[1]]=base[pos[0]][pos[1]];
    affichage(plateau); // On réactualise le plateau à chaque mouvement
    if (condition!=1){
      play(condition,0); // Condition permet de savoir quel jeu lancé selon la valeur de condition
    }
  }
  affichage(plateau); // On réactualise le plateau à chaque mouvement
}

var play = function(type,points){ // Cette fonction permet de coordonner les différents jeux et affichages
  if (type===4){ // Ici on lance le black_cat
    var gameboard = document.getElementById("gameboard");
    var blacat = document.getElementById("blackcat");
    gameboard.style.display="none";
    blacat.style.display="block";
    blackcat();
  }
  else if (type[0]===3) { // Ici on lance le quizzy cat
    var gameboard = document.getElementById("gameboard");
    var quizz = document.getElementById("quizz");
    gameboard.style.display="none";
    quizz.style.display="block";
    quizzy(type[1]) // Le quizzy cat prend aussi la valeur de la question qui sera posée car plusieurs questions
    clic=0 // Ici on remet le nombre de clics à zéro pour la prochaine question
  }
  else if (type===1){ // Ici on relance le plateau après un jeu de black_cat
    var gameboard = document.getElementById("gameboard");
    var blacat = document.getElementById("blackcat");
    gameboard.style.display="block";
    blacat.style.display="none";
    get_scored(points); // ON compte le nombre de points obtenus par le joueur
    attempt=1; //  On remet à éro le nombre de tentatives du joueur pour le prochain black_cat
    score=0; // On remet son score à zéro
    scoreD=0; // ainsi que celui du croupier
    seven++; // Le jeu est fini on ajoute donc 1 a seven
    finish(plateau,base); // ON vérifie si le plateau n'est pas complet
  }
  else if (type===5){ // Ici on lance le meowmory
    var gameboard = document.getElementById("gameboard");
    var meowmory = document.getElementById("Meowmory");
    gameboard.style.display="none";
    meowmory.style.display="block";
    memories(chats);
  }
  else if (type===6){ // Ici on lance le cat human mouse
    var gameboard = document.getElementById("gameboard");
    var pifeci = document.getElementById("PFC");
    gameboard.style.display="none";
    pifeci.style.display="block";
    pfc();
  }
}
var affichage = function(plateau){ // Cette fonction permet d'afficher l'arbre à chat
  var tree = document.getElementById("gameboard");
  if (tree.style.display!='none'){
    var div = document.createElement("div"); // On crée un nouveau plateau
    var old_div = document.getElementById("plateau"); // On cache l'ancien plateau
    old_div.id="old";
    old_div.style.display="none";
    div.id="plateau";
    div.style.width="1550px";
    div.style.height="600px";
    div.style.margin="auto";
    var gameboard = document.getElementById("gameboard"); // On ajoute le nouveau plateau au gameboard
    gameboard.appendChild(div);
    for (var lign of plateau){ // Puis on ajoute une à une les cases du plateau selon leurs valeurs
      for (var column of lign){
        var canvas_grid = document.createElement("canvas");
        if (column===0){ // Si la valeur est de 0 alors c'est une case vide qui sera blanche
          canvas_grid.style.backgroundColor="white";
        }
        else if (column===1) { // Si la valeur est de 1 alors c'est une branche de l'abre qui sera noir
          canvas_grid.style.backgroundColor="black";
        }
        else if (column===2) { // Si la valeur est 2 alors c'est la position du joueur qui sera bleu ciel
          canvas_grid.style.backgroundColor="#0099ff";
        }
        else if (column===7){ // Si la valeur est de 7 alors c'est un jeu qui a déjà été joué qui sera jaune
          canvas_grid.style.backgroundColor="yellow";
        }
        else if (column===4){ // Si la valeur est de 4 alors c'est une partie de black_cat qui sera rouge
          canvas_grid.style.backgroundColor="#cc0000";
        }
        else if (column===5){ // Si la valeur est de 5 alors c'est une partie de meowmory qui sera cyan
          canvas_grid.style.backgroundColor="#39ac73";
        }
        else if (column===6){ // Si la valeur est de 6 alors c'est une partie de cat mhuman mouse qui sera rose pale.
          canvas_grid.style.backgroundColor="#D2B48C";
        }
        else if ((typeof column)=="object"){ // SI c'est un object alors c'est le questionnaire
          if (column[0]===3) { // La couleur de la case sera donc violette
            canvas_grid.style.backgroundColor="#7300e6";
          }
        }
        canvas_grid.style.width="50px";
        canvas_grid.style.height="50px";
        div.appendChild(canvas_grid); // On ajoute la canvas à chaque fois
      }
    }
  }
}
var setupListener = function(plateau,base){ // Cette fonction coordonne les évennements de l'arbre à chat
  affichage(plateau); // On affiche le plateau
  var top = document.getElementById("Top");
  top.addEventListener("click",function(){movetop(plateau,base)});
  var bottom = document.getElementById("Bottom");
  bottom.addEventListener("click",function(){movebottom(plateau,base)});
  var right = document.getElementById("Right");
  right.addEventListener("click",function(){moveright(plateau,base)});
  var left = document.getElementById("Left");
  left.addEventListener("click",function(){moveleft(plateau,base)});
  var jack = document.getElementById("quizz"); // On cache au départ tous les jeux on ne garde que l'arbre à chat
  var quizz = document.getElementById("blackcat");
  var Meowmory=document.getElementById("Meowmory");
  var pifeci=document.getElementById("PFC");
  jack.style.display="none";
  quizz.style.display="none";
  Meowmory.style.display="none";
  pifeci.style.display="none";
}
seven=0;
var plateau = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,[3,6],0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,[3,1],0,0,0,0],
[0,0,1,5,1,6,1,0,0,0,0,0,0,0,0,[3,5],0,0,0,5,0,0,1,6,1,4,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,4,1,6,1,0,0,0,0,1,0,0,0,0,4,0],
[0,0,0,0,4,0,0,0,0,[3,4],0,0,0,[3,9],0,0,0,1,0,0,0,0,0,0,5,1,1,[3,8],1,1,0],
[0,0,0,0,1,0,0,0,0,1,4,1,6,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,[3,3],0,0,0,0,0,0,1,0,0,0,0,0,5,1,[3,7],1,6,1,4,1,1,5,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,5,1,1,[3,2],1,1,4,1,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,6,1,1,1,4,1,1,[3,0],1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]; // C'est le plateau de jeu avec tous les jeux qui sont placés
var base = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,7,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,0],
[0,0,1,7,1,7,1,0,0,0,0,0,0,0,0,7,0,0,0,7,0,0,1,7,1,7,1,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,7,1,7,1,0,0,0,0,1,0,0,0,0,7,0],
[0,0,0,0,7,0,0,0,0,7,0,0,0,7,0,0,0,1,0,0,0,0,0,0,7,1,1,7,1,1,0],
[0,0,0,0,1,0,0,0,0,1,7,1,7,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,7,0,0,0,0,0,0,1,0,0,0,0,0,7,1,7,1,7,1,7,1,1,7,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,7,1,1,7,1,1,7,1,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,7,1,1,1,7,1,1,7,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]; // C'est la base du plateau
window.addEventListener("load",function(){setupListener(plateau,base)});
