function random(x){
  var idx=Math.floor(Math.random() * (x));
  return idx;
}
function createImg(path) {
  var img = document.createElement('img');
  img.src = "Img/memory/cat.png";
  img.style.width="15%";
  img.onclick=function(){
    memory(path);
    verif();
  };
  return img;
}
var retourner=function(){
  var txt = document.getElementById("res");
  if(list[0].src.slice(59,62)!=list[1].src.slice(59,62)){
    console.log(list[0].src.slice(59,62),list[1].src.slice(59,62))
    for (var i of list){
      i.id=i.src.slice(48,);
      i.src="Img/memory/cat.png";
    }
    txt.textContent="Wrong";
  }
  else{
    list[0].id="good";
    list[1].id="good";
    txt.textContent="Good";
  }
  list=[];
}
var restart=function(){
  var div= document.getElementById("cat");
  var longueur = div.childNodes.length;
  for (var k = 0; k<longueur;k++){
    div.removeChild(div.childNodes[0]);
  }
  chats=["Img/memory/bal1.png","Img/memory/ben1.png","Img/memory/bir1.png","Img/memory/cha1.png","Img/memory/cor1.png","Img/memory/mai1.png","Img/memory/mun1.png",
    "Img/memory/per1.png","Img/memory/sco1.png","Img/memory/sia1.png","Img/memory/sph1.png","Img/memory/ton1.png","Img/memory/bal2.png","Img/memory/ben2.png",
    "Img/memory/bir2.png","Img/memory/cha2.png","Img/memory/cor2.png","Img/memory/mai2.png","Img/memory/mun2.png","Img/memory/per2.png","Img/memory/sco2.png",
    "Img/memory/sia2.png","Img/memory/sph2.png","Img/memory/ton2.png"];
  let order=set(chats);
  var div = document.getElementById("cat");
  let di = 1;
  for (var k of order){
    var newi = createImg(k);
    newi.id=`${k}`;
    newi.className="card";
    div.appendChild(newi);
    di++;
  }
  var un = document.getElementById("un");
  un.src="Img/memory/cat.png";
  un.style.width="50%";
  var deux = document.getElementById("deux");
  deux.src="Img/memory/cat.png";
  deux.style.width="50%";
  var txt = document.getElementById("res");
  txt.textContent="?";
}
var verif=function(){
  var cards=document.getElementsByClassName("card");
  card=0;
  good=0;
  for (var k of cards){
    if(k.id=="retourner"){
      card++;
    }
  }
  if (card==1){
    var un = document.getElementById("un");
    un.src=list[0].src;
    un.style.width="50%";
    var deux =document.getElementById("deux");
    deux.src="Img/memory/cat.png";
    deux.style.width="50%";
    var txt = document.getElementById("res");
    txt.textContent="?";
  }
  if(card===2){
    var deux = document.getElementById("deux");
    deux.src=list[1].src;
    deux.style.width="50%";
    retourner();
  }
  for (var k of cards){
    if (k.id=="good"){
      good++;
    }
  }
  if (good===24){
    restart();
  }
}
var set = function(img){
  L=[];
  let b=img.length;
  let c=img.length;
  for (let k = 0; k<c; k++){
    a=random(b);
    L.push(img.splice(a,1));
    b--;
  }
  return L;
}
var memory = function(id){
  console.log(id);
  var img = document.getElementById(`${id}`);
  img.src=id;
  img.id="retourner";
  list.push(img);
}
var meowmory=function(){
  let order=set(chats);
  var div = document.getElementById("cat");
  let di = 1;
  for (var k of order){
    var newi = createImg(k);
    newi.id=`${k}`;
    newi.className="card";
    div.appendChild(newi);
    di++;
  }
}
list=[];
chats=["Img/memory/bal1.png","Img/memory/ben1.png","Img/memory/bir1.png","Img/memory/cha1.png","Img/memory/cor1.png","Img/memory/mai1.png","Img/memory/mun1.png",
  "Img/memory/per1.png","Img/memory/sco1.png","Img/memory/sia1.png","Img/memory/sph1.png","Img/memory/ton1.png","Img/memory/bal2.png","Img/memory/ben2.png",
  "Img/memory/bir2.png","Img/memory/cha2.png","Img/memory/cor2.png","Img/memory/mai2.png","Img/memory/mun2.png","Img/memory/per2.png","Img/memory/sco2.png",
  "Img/memory/sia2.png","Img/memory/sph2.png","Img/memory/ton2.png"];
window.addEventListener("load",setupListener);
