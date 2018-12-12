function answer(){
    var img=document.getElementById("omnia");
    var rep=document.getElementById("rep");
    if(this.value==="Oui"){
	img.src="Img/bonne.JPG"
    }
    else if(this.value==="Non"){
	img.src="Img/mauvaise.JPG"
	rep.textContent="Mais ... mais ...elle est trop chou non ???"
    }
    else{
	img.src="Img/idk.gif"
	rep.textContent="Je suis sûre que vous savez !!"
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
