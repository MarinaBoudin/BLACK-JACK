function random(img){
    var min=0;
    var max=carte.length-1;
    var id=[];
    idx=Math.floor(Math.random() * (max - min +1)) + min;
    if(idx in id){
	window.alert("test");
	idx=Math.floor(Math.random() * (max - min +1)) + min;
	}
    else{
	img.src=carte[idx];
	id.push(idx);
	}
}
    


function setUplistener(){
    imgD=document.getElementById("dealer");
    imgJ=document.getElementById("your");
    random(imgD);
    random(imgJ);
}


var carte=["Img/1.BMP","Img/2.BMP","Img/3.BMP","Img/4.BMP","Img/5.BMP","Img/6.BMP","Img/7.BMP","Img/8.BMP","Img/9.BMP","Img/10.BMP","Img/11.BMP","Img/12.BMP"
	   ,"Img/13.BMP","Img/14.BMP","Img/15.BMP","Img/16.BMP","Img/17.BMP","Img/18.BMP","Img/19.BMP","Img/20.BMP","Img/21.BMP","Img/22.BMP","Img/23.BMP","Img/24.BMP",
	   "Img/25.BMP","Img/26.BMP","Img/27.BMP","Img/28.BMP","Img/29.BMP","Img/30.BMP","Img/31.BMP","Img/32.BMP","Img/33.BMP","Img/34.BMP","Img/35.BMP","Img/36.BMP","Img/37.BMP",
	   "Img/38.BMP","Img/39.BMP","Img/40.BMP","Img/41.BMP","Img/42.BMP","Img/43.BMP","Img/44.BMP","Img/45.BMP","Img/46.BMP","Img/47.BMP","Img/48.BMP","Img/49.BMP","Img/50.BMP",
	   "Img/51.BMP","Img/52.BMP"]
window.onload=setUplistener()
