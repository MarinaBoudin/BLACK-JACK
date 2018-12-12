var list = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

for (var k of list){
  var newDiv = document.createElement("canvas");
  if (k===0){
    newDiv.style.backgroundColor="white";
  }
  else if (k===1) {
    newDiv.style.backgroundColor="black";
  }
  newDiv.style.width="100px";
  newDiv.style.height="100px";
  document.body.appendChild(newDiv);
}
