var outcome;
var playerName = {};
var character = {};
var choice = {};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userName').addEventListener('click', addName);
  document.getElementById('userChoice').addEventListener('click', addChoice);
  document.getElementById('userCharacter').addEventListener('click', addCharacter);
});


const startButton = document.getElementById("start");
startButton.addEventListener('click', function () {
  const openingMessage = document.getElementById('openingMSG');
  if (openingMessage.classList.contains('d-none')) {
    openingMessage.classList.remove('d-none');
    startButton.textContent = 'Reset?';

  } else {
    openingMessage.classList.add('d-none');
    startButton.textContent = 'Too scared?!';
    setTimeout(function () {
      addEventListener('click', function () { location.reload(); })
    }, 10);

  }
  entryHiddenObjects();
});

function startAgain() { location.reload(); }
document.getElementById("gameStart").addEventListener('click', function () {
 var beginningScenario = [" You wake up in a dark. It is quiet. You tiptoe to the door and peek out....who are you?", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here....what is your name?", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods....what shall I call you?"];


  function randNum(range) {
    "use strict";
    if (typeof range === "number") {
      return Math.round(Math.random() * range);
    }
  }
  //I need to print this in a specific html add
  document.getElementById('secondMsg').textContent = (beginningScenario[randNum(beginningScenario.length - 1)]);
  gameStartHide();
})

document.getElementById('gameStart').addEventListener('click', function () {

  setTimeout(function () {
    gameStartShow();
  }, 1000);
})

const addName = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  playerName = {
    pName: document.getElementById('name').value.toLowerCase()
  }
  if (!playerName.pName) {
    playerName.pName = " Alice of Resident Evil ";
  }
  document.getElementById('charMsg').innerHTML =
    "These times test the strengths of our character. <br> Choose from: soldier, doctor, artist or debugger";
  addNameToggle();
}


document.getElementById("name").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('userName').click();
  }
})

document.getElementById("character").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('userCharacter').click();
  }
})
document.getElementById("uChoice").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('userChoice').click();
  }
})

const addCharacter = (ev) => {
  ev.preventDefault();
  character = {
    health: 5,
    strength: 0,
    stealth: 0,
    charClass: document.getElementById('character').value.toLowerCase()
  }
  //---make random character --how can I see the input is match to input
  if (!character.charClass) {
    character.charClass = "doctor ";
  }
  addCharacterToggle();
  document.getElementById('charMsg').textContent = "The brave adventurer and former " + character.charClass + ", " + playerName.pName + " enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?";
}
const addChoice = (ev) => {
  ev.preventDefault();
  choice = {
    playerChoice: document.getElementById('uChoice').value.toLowerCase()
  }
  if (!choice.playerChoice) {
    choice.playerChoice = "attack";
  }
  addChoiceToggle();
  game();
  setTimeout(() => {
    result();
  }, 3000);
}
function game() {
  if (character.charClass === 'soldier') {
    soldierProfile()
  } else if (character.charClass === 'artist') {
    artistProfile()
  } else if (character.charClass === 'doctor') {
    doctorProfile()
  } else if (character.charClass === 'debugger') {
    debuggerProfile()
  } else {
    unknownProfile()
  }
}


function powerUp() {
  if (character.charClass === "soldier") {
    character.strength = 5;
  }
  if (character.charClass === "doctor") {
    character.health = 7;
  }
  if (character.charClass === "artist") {
    character.stealth = 5;
  }
  if (character.charClass === "debugger") {
    character.stealth = 7;
    character.strength = 5;

  }
}

function result() {
  setTimeout(function () {
    if (outcome === "lose") {
      document.getElementById('charMsg').textContent = "You lost!.....";
      looseToggle();
    } else if (outcome === "win") {

      document.getElementById('charMsg').textContent = "You win, HOORAY!!!";
      winToggle();
    }
  }, 28000);
}

