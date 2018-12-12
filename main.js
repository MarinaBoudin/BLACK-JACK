var list = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,5,0,0,0,0,
            0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,1,6,1,1,1,0,0,0,0,
            0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,6,1,1,1,0,0,0,1,0,0,0,0,6,0,
            0,0,0,0,6,0,0,0,0,5,0,0,0,6,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,
            0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,5,0,0,0,0,
            0,0,0,0,1,0,0,0,0,0,0,6,0,0,0,0,0,1,1,5,1,1,1,1,6,1,1,0,0,0,0,
            0,0,0,0,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
            0,0,0,0,1,1,1,5,1,1,1,1,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

for (var k of list){
  var newDiv = document.createElement("canvas");
  if (k===0){
    newDiv.style.backgroundColor="white";
  }
  else if (k===1) {
    newDiv.style.backgroundColor="black";
  }
  else if (k===2) {
    newDiv.style.backgroundColor="#0099ff";
  }
  else if (k===3) {
    newDiv.style.backgroundColor="#7300e6";
  }
  else if (k==4){
    newDiv.style.backgroundColor="#cc0000";
  }
  else if (k==5){
    newDiv.style.backgroundColor="#4c4c34";
  }
  else if (k==6){
    newDiv.style.backgroundColor="#3d3d29";
  }
  newDiv.style.width="50px";
  newDiv.style.height="50px";
  document.body.appendChild(newDiv);
}
