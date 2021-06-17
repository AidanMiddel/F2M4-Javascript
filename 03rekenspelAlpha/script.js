let getalA,getalB,antwoord,jouwAntwoord,goedFout;

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');
const antwoordenblad = document.getElementById('antwoordenblad');

maakOpgave();

function maakOpgave(){
    getalA = Math.floor(Math.random()*10)+1;
    getalB = Math.floor(Math.random()*10)+1;
    antwoord = getalA*getalB; 

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

execButton.addEventListener('click',checkAntwoord);

function checkAntwoord(){
    jouwAntwoord = input1.value;
    if(antwoord == jouwAntwoord){
        goedFout = true;
        container.style.background = "green";
        opgaveblad.style.background = "green";
        opgaveblad.innerHTML = "Heel Goed";
        antwoordenblad.style.background = "green";

    } else {
        goedFout = false;
        container.style.background = "red";
        opgaveblad.style.background = "red";
        opgaveblad.innerHTML = "Dat is helaas fout";
        antwoordenblad.style.background = "red";
    }
    setTimeout(wachten,2000);
}

function wachten(){
    container.style.background = "aliceblue";
    opgaveblad.style.background = "orange";
    antwoordenblad.style.background = "yellow";
    input1.value = "";
    input1.focus();
    maakOpgave()
}