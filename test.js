function answer(){
    clic=clic+1;
    var img=document.getElementById("omnia");
    var rep=document.getElementById("rep");
    var sc=document.getElementById("score");
    if(clic===1){
	if(this.value==="Oui"){
	    img.src="Img/Question/bonne.JPG"
	    rep.textContent=detail;
	    score++;
	    sc.textContent=score;	
	}
	else if(this.value==="Non"){
	    img.src="Img/Question/mauvaise.JPG";
	}
	else{
	    img.src="Img/Question/idk.gif"
	    rep.textContent="Je suis sûre que vous savez !!"
	}
    }
    else{
	rep.textContent="Vous avez déjà répondu";
    }
}
    
function Next(){
    clicn++;
    console.log(clicn);
    clic=0;
    if(clicn<=9){
	var det=document.getElementById("rep");
	det.textContent=""
	var img=document.getElementById("omnia");
	var texte=document.getElementById("Question");
	var reponse1=document.getElementById("rep1");
	var trep1=document.getElementById("textrep1");
	var reponse2=document.getElementById("rep2");
	var trep2=document.getElementById("textrep2");
	idx=(idx+1)%Question.length;
	img.src=image[idx];
	detail=exp[idx];
	texte.textContent=Question[idx];
	trep1.textContent=rep[idx][0];
	reponse1.value=rep[idx][1];
	trep2.textContent=rep[idx][2];
	reponse2.value=rep[idx][3];
    }
    else{
	if(score>=8){
	    window.alert("Gagné");
	}
	else if(score>=5){
	    window.alert("Dommage, vous n'étiez pas loin")
	}
	else{
	    window.alert("Vous avez perdu")
	}
    }
}

function setUplistener(){
    var radio=document.getElementsByClassName("test");
    console.log(radio);
    for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', answer);
    }
    var quest=document.getElementById("Next");
    quest.addEventListener("click",Next);
}

var clicn=0;
var clic=0;
var idx=0;
var score=0;
var detail="C'était évident";
var image=["Img/Question/hiss.gif","Img/Question/tortue.jpg","Img/Question/patte.gif","Img/Question/sneeze.gif","Img/Question/eye.JPG","Img/Question/paw.gif","Img/Question/mustache.gif","Img/Question/water.gif","Img/Question/chaton.JPG"]
var Question=["Quand un chat vous crache dessus, cela signifie ?","Le pelage écaille de tortue a une spécificité laquelle ?","Les chats peuvent-il être droitier ou gaucher ?","De quoi sommes-nous allergique lorsque nous faisons une allergie aux chats ?","Quelle est la couleur des yeux du chat à la naissance. ?","Combien de doigts ont les chats ?","Les moustaches du chat peuvent-elles repoussées ?","Les chats peuvent-ils boire de l'eau de mer ?","Une seule et même portée de chaton peut-elle avoir plusieurs pères ?"]
var rep=[["Je t'aime bien","Non","Ne m'approche pas !!","Oui"],["Seules les femelles peuvent l'arborer","Oui","Seuls les mâles peuvent l'arborer","Non"],["Oui","Oui","Non","Non"],["Leur poil","Non","Leur salive","Oui"],["Vert/Jaune","Non","Bleu/grise","Oui"],["Plus de 4 doigts","Non","4 doigts","Oui"],["Non","Non","Oui","Oui"],["Oui","Oui","Non","Non"],["Non","Non","Oui","Oui"]]
var exp=["En effet, cela signifie que le chat a peur ou se sent agressé.","Les coloris roux et noirs qui font la particularité de l’écaille de tortue se trouvent uniquement dans les chromosomes X. Néanmoins il existe des mâles écaille mais ceci est très rare de plus ils sont stériles","Les chats ont une patte dominante, chez le mâle il s'agirait de la gauche, tandis que pour la femelle la droite.","En réalité nous ne sommes pas allergique à proprement dit aux poils de chat mais à la protéine Fel d1, que l'on retrouve sur la peau, dans la salive, l'urine et bien sûr, les poils du félin","A la naissance seul la couche la plus profonde de l'iris est visible d'où cette couleur.","Les chats ont bien 4 doigts à chaque patte avec un ergot. Chez certaines races le chat peut avoir plus de doigts il est alors dit polydactyle","Contrairement aux idées reçues les vibrisses du chat peuvent repoussés. Petite anecdote, la maman peut couper volontairement les vibrisses de ces chatons afin qu'il ne s'éloigne pas trop","Oui les chats ont de bien meilleurs reins que les nôtres","Que ce soit chez le chat ou chez le chien il s'agit de la superfécondation"]

window.onload=setUplistener()
