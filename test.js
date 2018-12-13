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
    clic=0;
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

function setUplistener(){
    var radio=document.getElementsByClassName("test");
    console.log(radio);
    for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', answer);
    }
    var quest=document.getElementById("Next");
    quest.addEventListener("click",Next);
}

var clic=0;
var idx=0;
var score=0;
var detail="C'était évident";
var image=["Img/Question/hiss.gif","Img/Question/tortue.jpg"]
var Question=["Quand un chat vous crache dessus, cela signifie ?","Le pelage écaille de tortue a une spécificité laquelle ?"]
var rep=[["Je t'aime bien","Non","Ne m'approche pas !!","Oui"],["Seules les femelles peuvent l'arborer","Oui","Seuls les mâles peuvent l'arborer","Non"]]
var exp=["En effet, cela signifie que le chat a peur ou se sent agressé.","Les coloris roux et noirs qui font la particularité de l’écaille de tortue se trouvent uniquement dans les chromosomes X. Néanmoins il existe des mâles écaille mais ceci est très rare de plus ils sont stériles"]

window.onload=setUplistener()
