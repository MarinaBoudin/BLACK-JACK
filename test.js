function answer(){
    if(this.value==="Oui"){
	var img=document.getElementById("omnia")
	img.src="Img/bonne.gif"
    }
    else if(this.value==="Non"){
	var img=document.getElementById("omnia")
	img.src="Img/mauvaise.gif"
    }
}

function setUplistener(){
    var radio=document.getElementsByClassName("test");
    console.log(radio);
    for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', answer);
    }
}

window.onload=setUplistener()
