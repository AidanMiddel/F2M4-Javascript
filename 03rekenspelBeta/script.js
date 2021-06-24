let getalA,getalB,antwoord,jouwAntwoord,goedFout;

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');
const antwoordenblad = document.getElementById('antwoordenblad');

mySound = new Audio();

maakOpgave();

function maakOpgave(){
    getalA = Math.floor(Math.random()*10)+1;
    getalB = Math.floor(Math.random()*10)+1;
    antwoord = getalA*getalB; 

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

execButton.addEventListener('click',checkAntwoord);
input1.addEventListener("keydown", (event)=> {
    //console.log(event.code)
    if (event.key == "Enter") { 
        jouwAntwoord = input1.value;
        if(antwoord == jouwAntwoord){
            goedFout = true;
            container.style.background = "green";
            opgaveblad.style.background = "green";
            opgaveblad.innerHTML = "Heel Goed";
            antwoordenblad.style.background = "green";
            mySound.src = "sound/good.mp3";
            mySound.play();
    
        } else {
            goedFout = false;
            container.style.background = "red";
            opgaveblad.style.background = "red";
            opgaveblad.innerHTML = "Dat is helaas fout";
            antwoordenblad.style.background = "red";
            mySound.src = "sound/wrong.mp3";
            mySound.play();
        }
        setTimeout(wachten,2000);
    }
     
    }
  );

function checkAntwoord(){
    //jouwAntwoord = input1.value;
    //if(antwoord == jouwAntwoord){
    //    goedFout = true;
    //    container.style.background = "green";
    //    opgaveblad.style.background = "green";
    //    opgaveblad.innerHTML = "Heel Goed";
    //    antwoordenblad.style.background = "green";
    //    mySound.src = "sound/good.mp3";
    //    mySound.play();
//
    //} else {
    //    goedFout = false;
    //    container.style.background = "red";
    //    opgaveblad.style.background = "red";
    //    opgaveblad.innerHTML = "Dat is helaas fout";
    //    antwoordenblad.style.background = "red";
    //    mySound.src = "sound/wrong.mp3";
    //    mySound.play();
    //}
    //setTimeout(wachten,2000);
}

function wachten(){
    container.style.background = "aliceblue";
    opgaveblad.style.background = "orange";
    antwoordenblad.style.background = "yellow";
    input1.value = "";
    input1.focus();
    maakOpgave()
}