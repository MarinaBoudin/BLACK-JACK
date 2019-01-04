function random_pfc(m){
    var idx=Math.floor(Math.random()*(m));
    var choose=choix[idx];
    choix.splice(idx,1);
    return choose;
}

function createImg(path) {
  var img = document.createElement('img');
  img.src = path;
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
    if(score<2&&pc<2){
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
	    else{
		choix.push("../Img/PFC/human.png");
		max=max+1;
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
	    else{
		choix.push("../Img/PFC/chat.png");
		max=max+1;
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
	    else{
		choix.push("../Img/PFC/mulot.png");
		max=max+1;
	    }
	}
	
    }
    else if(score===2){
	window.alert("Gagné")
    }
    else if(pc===2){
	window.alert("Défaite")
    }
    else if(pc===1 && score===1){
	window.alert("Egalité")
    }
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



		      
