var tens = 00;
var seconds = 00;
var minutes = 00;

var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");

var Interval;
buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
}

function startTimer(){
    tens++;
    if(tens < 9)
        appendTens.innerHTML =   "0" + tens;
    if(tens > 9)
        appendTens.innerHTML = tens;
    if(tens > 99){
        tens = 0;
        appendTens.innerHTML = "0" + tens;
        seconds ++;
        appendSeconds.innerHTML =  "0" + seconds;
    }
    if(seconds > 9 ){
        appendSeconds.innerHTML =  seconds;
    }
    if(seconds > 59 && tens === 0){
        alert(" 1 minuto!");
        seconds = 0;
        tens = 0;
        appendSeconds.innerHTML = "0" + seconds;


    }    
}
