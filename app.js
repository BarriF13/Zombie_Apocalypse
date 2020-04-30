// window.onload = function(){  alert('test'); } 

//--- start of the game
var outcome;

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
var character = {
  health: 5,
  strength: 0,
  stealth: 0,
  name: charName,
  charClass: userCharacter
};

document.getElementById('userName').addEventListener('click', function () {
  document.getElementById('charMsg').textContent =
    "These times test the strengths of our character. What were you before the war? ( Choose from: soldier, doctor, or artist)";

  var charName = document.getElementById('name').value;

  if (!character.name) {
    character.name = " Gunther Piddles ";
  }

  document.getElementById('secondMsg').style.display = 'none';
  document.getElementById('name').style.display = 'none';
  document.getElementById('userName').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'block';
  document.getElementById('character').style.display = 'block';

  document.getElementById('userCharacter').addEventListener('click', function () {

    document.getElementById('userCharacter').style.display = 'none';
    document.getElementById('character').style.display = 'none';

    document.getElementById('userChoice').style.display = 'block';
    document.getElementById('uChoice').style.display = 'block';

    var userCharacter = document.getElementById('character').value.toLowerCase();
    character['charClass'] = userCharacter;
    if (character.charClass === "soldier") {
          character.strength = 5;
      console.log(character.strength = 5);
    }
    if (character.charClass === "doctor") {
          character.health = 7;
      console.log(character.health = 7);
    }
    if (character.charClass === "artist") {
         character.stealth = 5;
      console.log(character.stealth = 5);
    }

    document.getElementById('charMsg').textContent = "The brave adventurer and former " + character.charClass + ", " + character.name + " enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?";

  })

  document.getElementById('userChoice').addEventListener('click', function () {

    var choice = document.getElementById('uChoice').value.toLowerCase();
    console.log(choice);
    if (choice === "attack") {
      if (character.strength === 5) {
      document.getElementById('charMsg').textContent = "Using only your bear hands, you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and three can of Beanie Weenies.";
      outcome = "win";
      character.strength++;
      console.log('am I empty'+ character.strength++)
      }
    }

  });

})
// if (choice === "attack") {
//   if (character.strength === 5) {
//     document.getElementById('charMsg').textContent ="Using only your bear hands, you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and three can of Beanie Weenies.";
    // outcome = "win";
    // character.strength++;
//   }
// }
// if (character.charClass === "soldier") {
//   character.strength = 5;
// }
// if (character.charClass === "doctor") {
//   character.health = 7;
// }
// if (character.charClass === "artist") {
//   character.stealth = 5;
// }

