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
	location.reload();
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
	    scored.textContent=scoreD;
	    if(scoreD<42 && score<42){
		if(scoreD<score){
		    window.alert("Congratulations");
		}
		else if(score===scoreD){
		    window.alert("Congratulations");
		}
		else{
		    window.alert("Defaite");
		    }
		}
	    else if(scoreD>42 && score<42){
		window.alert("Défaite du Croupier \n Vous avez gagné")
	    }
	    else{
		window.alert("Défaite du Croupier")
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
	    }
	    else if(score>42){
		window.alert("Defaite");
	    }
	}
    }
}

function setUplistener(){
    var imgD=document.getElementById("dealer");
    var imgJ=document.getElementById("your");
    idxD=random();
    imgD.src=carte[idxD];
    scoreD=Score(idxD,scoreD);
    idxJ=random();
    imgJ.src=carte[idxJ];
    score=Score(idxJ,score);
    var newcard=document.getElementById("Card");
    newcard.addEventListener("click",addImgInDiv);
    var stay=document.getElementById("Stay");
    stay.addEventListener("click",addImgInDiv);
    var start=document.getElementById("Start again");
    start.addEventListener("click",function(){location.reload()});
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


window.onload=setUplistener
