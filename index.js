window.onload=function(){
initi();
var c;
var h1;
var h2;
var v;
var glo;
var player;
function initi(){
     c=0;
     h1=0;
     h2=0;
     v=false;
     glo='q1s';
     player='player1';
     document.getElementById('sq1').innerText='player1';
     document.getElementById('sq2').innerText='player2';
     document.getElementById('player1h').innerText='0';
     document.getElementById('player2h').innerText='0';
     document.getElementById('player1').innerText='0';
     document.getElementById('player2').innerText='0'
}

document.getElementById("throw").addEventListener("click",btn);
document.getElementById("hold").addEventListener("click",hold);
document.getElementById('aa1').style.backgroundColor="#B7AEAE";
document.getElementById("new").addEventListener("click",function(){
    initi();
});
function btn(){
    var a=Math.floor(Math.random()*6+1);
    document.getElementById('diceimg').src='img/dice-'+a+'.png';
   
    if(a!=1){
        c=c+a;
        document.getElementById(player).innerText=c;
    }else{
        swing1();
}
}
function swing1(){
    document.getElementById(player).innerText=0;
    if(player=='player1'){
        document.getElementById('aa1').style.backgroundColor="beige";
        document.getElementById('aa2').style.backgroundColor="#B7AEAE";
             if(v) {
                 h1=h1+c;
                    document.getElementById(player+'h').innerText=h1;
                    if(h1>100){
                        document.getElementById('sq1').innerText='Winner';
                    }
                }else{
                    h1=0;
                    document.getElementById(player+'h').innerText=h1;
                }
        player='player2';
    }
    else if(player=='player2'){
        document.getElementById('aa2').style.backgroundColor="beige";
        document.getElementById('aa1').style.backgroundColor="#B7AEAE";
        if(v) {
            h2=h2+c;
               document.getElementById(player+'h').innerText=h2;
               if(h2>100){
                document.getElementById('sq2').innerText='Winner';
            }
           }
           else{
               h2=0;
               document.getElementById(player+'h').innerText=h2;
           }
        player='player1';
    }
    c=0;
    
 }
function hold(){
    document.getElementById('diceimg').src="img/dice-0.jpg"
    v=true;
    swing1();
    v=false;
}
}

