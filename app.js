// window.onload = function(){  alert('test'); } 

//--- start of the game
var outcome;
var playerName = {};
var character = {};
var choice = {};

const startButton = document.getElementById("start");
startButton.addEventListener('click', function () {
  const openingMessage = document.getElementById('openingMSG');
  if (openingMessage.classList.contains('d-none')) {
    openingMessage.classList.remove('d-none');
    startButton.textContent = 'Back?';
  } else {
    openingMessage.classList.add('d-none');
    startButton.textContent = 'Too scared?! , you are back to the beginning';
  }
  document.getElementById('userName').style.display = 'none';
  document.getElementById('name').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'none';
  document.getElementById('character').style.display = 'none';

  document.getElementById('userChoice').style.display = 'none';
  document.getElementById('uChoice').style.display = 'none';
});

//--going to stage two of the game
document.getElementById("gameStart").addEventListener('click', function () {
  var beginningScenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out....who are you?", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here....what is your name?", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods....what shall I call you?"];
  function randNum(range) {
    "use strict";
    if (typeof range === "number") {
      return Math.round(Math.random() * range);
    }
  }
  //I need to print this in a specific html add
  document.getElementById('secondMsg').textContent = (beginningScenario[randNum(beginningScenario.length - 1)]);

  document.getElementById('intro').style.display = 'none';
  document.getElementById('gameStart').style.display = 'none';
  //  document.getElementById('userName').style.display = 'block';
  //  document.getElementById('name').style.display = 'block';
})

document.getElementById('gameStart').addEventListener('click', function () {

  setTimeout(function () {
    document.getElementById('userName').style.display = 'block';
    document.getElementById('name').style.display = 'block';
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
  document.getElementById('charMsg').textContent =
    "These times test the strengths of our character. What were you before the war? ( Choose from: soldier, doctor, artist or debugger)";
  document.getElementById('secondMsg').style.display = 'none';
  document.getElementById('name').style.display = 'none';
  document.getElementById('userName').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'block';
  document.getElementById('character').style.display = 'block';
  console.log(playerName.pName);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userName').addEventListener('click', addName);
});

const addCharacter = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  character = {
    health: 5,
    strength: 0,
    stealth: 0,
    charClass: document.getElementById('character').value.toLowerCase()
  }
  //---make random character --how can I see the input is match to input
  if (!character.charClass ) {
    character.charClass = "doctor ";
  }
  document.getElementById('userCharacter').style.display = 'none';
  document.getElementById('character').style.display = 'none';

  document.getElementById('userChoice').style.display = 'block';
  document.getElementById('uChoice').style.display = 'block';
  document.getElementById('charMsg').textContent = "The brave adventurer and former " + character.charClass + ", " + playerName.pName + " enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?";
  console.log(character.charClass);
  // powerUp();
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userCharacter').addEventListener('click', addCharacter);
});


const addChoice = (ev) => {
  ev.preventDefault();
  choice = {
    playerChoice: document.getElementById('uChoice').value.toLowerCase()
  }
  console.log(choice.playerChoice);
  //run a function here --
  game();
  result();
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userChoice').addEventListener('click', addChoice);
});
// --write the conditional for all the choices
function game() {
  if (character.charClass === 'debugger') {
    if (choice.playerChoice === 'attack') {
      document.getElementById('charMsg').textContent = "Using only your bear hands " + playerName.pName + ", you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and five can of Diet cokes.";
      outcome = 'win';
      character.strength++;
    } else if (character.strength <= 5) {
      document.getElementById('charMsg').textContent = "You fearlessly charge zombie with all your strength. Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.";
      setTimeout(function () {
        document.getElementById('charMsg').textContent = "Just kidding. you are immediately bitten by the zombie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for ever. The end.YOHO  HAHAHAHA...";
        outcome = "lose";
      }, 3000);
    }
  }
  if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie") {
    if (character.stealth === 5) {
      document.getElementById('charMsg').textContent = "You sneak by the zombie, you clever b*****d."
    }
    if (character.stealth < 5) {
      document.getElementById('charMsg').textContent = " You try to slip by the zombie, but accidentally stumble over a can of Diet coke, alerting the zombie. It slowly turns its head and shuffles towards you.";
      if (character.strength === 5) {
        document.getElementById('charMsg').textContent ="Although you have alerted the zombie, but you are able to crush its skull with your bare hands.";
        outcome = "win";
      } else {
        document.getElementById('charMsg').textContent = "Weaponless and weak the zombie chomps down on an arm as you fail widely in its general direction.";
        outcome = "lose";
      }
    }
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
function result (){
  setTimeout( function () {
  if (outcome === "lose") {
    
    document.getElementById('charMsg').textContent = "You lose!.....";
    } else if (outcome === "win") {
      document.getElementById('charMsg').textContent = "You win, HOORAY!!!";
      document.getElementById('userChoice').style.display = 'none';
  document.getElementById('uChoice').style.display = 'none';
    }
  }, 3000);
}

