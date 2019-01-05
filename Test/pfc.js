function random_pfc(m){
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
	    if(comp==="../Img/PFC/chat.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="../Img/PFC/mulot.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="../Img/PFC/human.png"){
		window.alert("Même carte, remise en jeu");
		comp=random_pfc(max);
	    }
	}
	else if(this.id==="chat"){
	    var test="chat"
	    if(comp==="../Img/PFC/human.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="..Img/PFC/mulot.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="../Img/PFC/chat.png"){
		window.alert("Même carte, remise en jeu");
		comp=random_pfc(max);
	    }
	}
	else if(this.id==="mulot"){
	    var test="mulot"
	    if(comp==="../Img/PFC/human.png"){
		score=score+1;
		done(this,comp);
	    }
	    else if(comp==="../Img/PFC/chat.png"){
		pc=pc+1;
		done(this,comp);
	    }
	    else if(comp==="../Img/PFC/mulot.png"){
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
    var path="../Img/PFC/arriere.png";
    for(var k=0;k<3;k++){
	var newImg=createImg(path);
	var id=k+1
	newImg.id=id.toString();
	divC.appendChild(newImg);
    }
    var divJ=document.getElementById("Yc");
    var path1="../Img/PFC/chat.png";
    var path2="../Img/PFC/mulot.png";
    var path3="../Img/PFC/human.png";
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
    choix=["../Img/PFC/human.png","../Img/PFC/chat.png","../Img/PFC/mulot.png"]
    max=choix.length;
    x=3;
    score=0;
    pc=0;
    var sc=document.getElementById("score_joueur");
    sc.textContent=score;
    var sc2=document.getElementById("score_pc");
    sc2.textContent=pc;
}

function setUp(){
    var joueur=document.getElementsByClassName("Carte");
    joueur[0].addEventListener("click",action);
    joueur[1].addEventListener("click",action);
    joueur[2].addEventListener("click",action);
}

window.onload=setUp;

var choix=["../Img/PFC/human.png","../Img/PFC/chat.png","../Img/PFC/mulot.png"]
var max=choix.length;
var x=3;
var score=0;
var pc=0;



		      
