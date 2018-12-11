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
    }
}

function addImgInDiv() {
    if(id.length!==52){
	if(this.id==="Card"){
	    idxJ=random();
	    var pathJ = carte[idxJ];
	    var newImgJ = createImg(pathJ);
	    var divJ = document.getElementById("Joueur");
	    var scorej=document.getElementById("score_joueur");
	    divJ.appendChild(newImgJ);
	    score=Score(idxJ,score);
	    scorej.textContent=score;
	    nbCardJ++;
	}
	idxD=random();
	var pathC = "Img/cat.png";
	var newImgC = createImg(pathC);
	var divC = document.getElementById("Croupier");
	var scored=document.getElementById("score_croupier");
	divC.appendChild(newImgC);
	scoreD=Score(idxD,scoreD);
	nbCardD++;
    	if(nbCardD>=6){
	    scored.textContent=scoreD;
	}
    }
    else{
	window.alert("Plus de cartes");
    }
}


function croupcard(){
    for(var i=0;nbCardD<6;i++){
	addImgInDiv()
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
    stay.addEventListener("click",croupcard);
    var start=document.getElementById("Start again");
}


var carte=["Img/AK1.BMP","Img/AP1.BMP","Img/AT1.BMP","Img/AC1.BMP","Img/C2.BMP","Img/C6.BMP","Img/C7.BMP","Img/C8.BMP","Img/C9.BMP","Img/C10.BMP","Img/C3.BMP","Img/C4.BMP"
	   ,"Img/C5.BMP","Img/DC10.BMP","Img/DK10.BMP","Img/DP10.BMP","Img/DT10.BMP","Img/K2.BMP","Img/K3.BMP","Img/K4.BMP","Img/K5.BMP","Img/K6.BMP","Img/K7.BMP","Img/K8.BMP",
	   "Img/K9.BMP","Img/K10.BMP","Img/P2.BMP","Img/P3.BMP","Img/P4.BMP","Img/P5.BMP","Img/P6.BMP","Img/P7.BMP","Img/P8.BMP","Img/P9.BMP","Img/P10.BMP","Img/RC10.BMP","Img/RK10.BMP",
	   "Img/RP10.BMP","Img/RT10.BMP","Img/T2.BMP","Img/T3.BMP","Img/T4.BMP","Img/T6.BMP","Img/T7.BMP","Img/T8.BMP","Img/T9.BMP","Img/T10.BMP","Img/VC10.BMP","Img/VK10.BMP","Img/VP10.BMP",
	   "Img/VT10.BMP","Img/T5.BMP"]

var id=[];
var min=0;
var max=carte.length-1;
var score=0;
var scoreD=0;
var value=0;
var nbCardD=0;
var nbCardJ=0;


window.onload=setUplistener()
