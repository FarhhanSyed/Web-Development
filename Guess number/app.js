let randomNumber=Math.floor(Math.random()*100)+1;

const userInput=document.querySelector("#guessField");
const submit=document.querySelector("#subt");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const loworHi=document.querySelector(".loworHi");
const startOver=document.querySelector(".resultPara");

const p=document.createElement("p");

let prevGuess = [];
let numGuess=1;

let playGame=true;

if(playGame)
{
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=userInput.value;
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess))
    {
        alert("Enter a valid number");
    }
    else if(guess<1)
    {
        alert("Enter number more than 1");
    }
    else if(guess>100)
    {
        alert("Enter number less 100");
    }
    else{
        prevGuess.push(guess);

        if(numGuess==11)
        {
            displayGuess(guess);
            displayMessage(`Game Over .Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess==randomNumber)
    {
        displayMessage(`Guessed it right`);
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number is LOWW`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number is HIGH`);
    }
}

function displayGuess(guess){
    userInput.value=" ";
    guessSlot.innerHTML+=`${guess}`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(msg){
    loworHi.innerHTML=`<h2>${msg}</h2>`;
}

function endGame(){
    userInput.value=" ";
    userInput.setAttribute('disabled',' ');
    p.innerHTML=`<button id="newGame">Start a new game</button>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newgame=document.querySelector("#newGame");
    newgame.addEventListener("click",function(){
        randomNumber=Math.floor(Math.random()*100)+1;
        prevGuess=[];
        numGuess=1;

        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}