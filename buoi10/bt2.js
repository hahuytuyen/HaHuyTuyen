
ListImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
index=0;
function ControlImage(x){
  index=index+x;
  if (index==ListImg.length){
    index=0;
  }
  if (index<0) {
    index=ListImg.length-1;
  }
  SrcImg.src=ListImg[index];
  changeOpacity();
}
function AutoControl(){
  changeOpacity();
  if (index==ListImg.length){
    index=0;
  }
  SrcImg.src=ListImg[index]
  setTimeout("AutoControl()",10000);
  index++;
}
function ShowOneImg(index){
  index=index;
  changeOpacity();
  SrcImg.src=ListImg[index];
}

function changeOpacity(){

    if(index==0)  document.getElementById("0").style.opacity=0.8;
    else document.getElementById("0").style.opacity=0.4;

    if(index==1)  document.getElementById("1").style.opacity=0.8;
    else document.getElementById("1").style.opacity=0.4;

    if(index==2)  document.getElementById("2").style.opacity=0.8;
    else document.getElementById("2").style.opacity=0.4;

    if(index==3)  document.getElementById("3").style.opacity=0.8;
    else document.getElementById("3").style.opacity=0.4;

    if(index==4)  document.getElementById("4").style.opacity=0.8;
    else document.getElementById("4").style.opacity=0.4;

    if(index==5)  document.getElementById("5").style.opacity=0.8;
    else document.getElementById("5").style.opacity=0.4;

    if(index==6)  document.getElementById("6").style.opacity=0.8;
    else document.getElementById("6").style.opacity=0.4;

    if(index==7)  document.getElementById("7").style.opacity=0.8;
    else document.getElementById("7").style.opacity=0.4;

    if(index==8)  document.getElementById("8").style.opacity=0.8;
    else document.getElementById("8").style.opacity=0.4;

    if(index==9)  document.getElementById("9").style.opacity=0.8;
    else document.getElementById("9").style.opacity=0.4;

}
