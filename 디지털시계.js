var hand=0;
var h1=document.getElementById("time");
var go=document.getElementById("go");
var stop=document.getElementById("stop");

function getTime(){
   var date=new Date();
   var hour=date.getHours();
   var minutes=date.getMinutes();
   var seconds=date.getSeconds();
   var time=`${hour}:${minutes}:${seconds}`
   h1.textContent=time;
}

go.onclick=function(){
   if(hand==0){
      handleId=setInterval(getTime,1000);
   }
}

stop.onclick=function(){
   clearInterval(handleId);
   handleId=0;
}
