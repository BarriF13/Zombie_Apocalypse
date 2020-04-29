// window.onload = function(){  alert('test'); } 

//--- start of the game
const startButton = document.getElementById("start");
    startButton.addEventListener('click', function(){
      const openingMessage = document.getElementById('openingMSG');
      if(openingMessage.classList.contains('d-none')){
        openingMessage.classList.remove('d-none');
        startButton.textContent = 'Back?';
      } else {
        openingMessage.classList.add('d-none');
        startButton.textContent= 'Too scared?! , you are back to the beginning';
      }
      document.getElementById('userName').style.display = 'none';
      document.getElementById('name').style.display = 'none';

      document.getElementById('userCharacter').style.display = 'none';
      document.getElementById('character').style.display =  'none';
});

//--going to stage two of the game
 document.getElementById("gameStart").addEventListener('click', function (){
    var beginningScenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];
    function randNum(range) {
      "use strict";
      if (typeof range === "number") {
        return Math.round(Math.random() * range);
      }
    }
    //I need to print this in a specific html add
   document.getElementById('secondMsg').textContent =(beginningScenario[randNum(beginningScenario.length - 1)]);
   
   document.getElementById('intro').style.display = 'none';
   document.getElementById('gameStart').style.display = 'none';
  //  document.getElementById('userName').style.display = 'block';
  //  document.getElementById('name').style.display = 'block';
  })

  document.getElementById('gameStart').addEventListener('click' , function(){

    setTimeout( function(){
      document.getElementById('userName').style.display = 'block';
      document.getElementById('name').style.display = 'block';
    },2000);
  
  })


document.getElementById('userName').addEventListener('click', function(){
  var charName = document.getElementById('name').value;
  document.getElementById('name').style.display = 'none';
  document.getElementById('userName').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'block';
  document.getElementById('character').style.display = 'block';
  console.log(charName);
})


document.getElementById('userCharacter').addEventListener('click', function(){
  
  var userCharacter = document.getElementById('character').value;
  console.log(userCharacter);

  
})


var outcome;
var character = {
  health: 5,
  strength: 0,
  stealth: 0,
  // name:  charName
  // characterClass: document.write("These times test the strengths of our character. What were you before the war? ( Choose from: soldier, doctor, or artist)").toLowerCase()
 
};

  console.log(character.name);
// if (!character.name) {
//   character.name = document.write("I don't know what to call you if you don't enter a name. if you don't answer I name you myself hahaha....., what is your name???");
//   if (!character.name) {
//     document.write(" Well I did try to warn you. Gunther Piddles it is then.");
//     character.name = " Gunther Piddles ";
//   }
// }

// if (character.characterClass === "soldier") {
//   character.strength = 5;
// }
// if (character.characterClass === "doctor") {
//   character.health = 7;
// }
// if (character.characterClass === "artist") {
//   character.stealth = 5;
// }

// var choice = document.write("The brave adventurer and former " + character.characterClass + " " + character.name + "enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?").toLowerCase();

// if (choice === "attack") {
//   if (character.strength === 5) {
//     document.write("Using only your bear hands, you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and three can of Beanie Weenies.");
//     outcome = "win";
//     character.strength++;
//   } else if (character.strength <= 5) {
//     document.write("You fearlessly charge zombie with all your strength. Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
//     document.write("Just kidding. you are immediately bitten by the zombie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for ever. The end.YOHO  HAHAHAHA...");
//     outcome = "lose";
//   }
// }
// if (choice === "sneak" || choice === "sneak by the zombie") {
//   if (character.stealth === 5) {
//     document.write("You sneak by the zombie, you clever bastard.")
//   }
//   if (character.strength < 5) {
//     document.write(" You try to slip by the zombie, but accidentally stumble over a can of Beanie Weenies, alerting the zombie. It slowly turns its head and shuffles towards you.");
//     if (character.strength === 5) {
//       document.write("Although you have alerted the zombie, but you are able to crush its skull with your bare hands.");
//       outcome = "win";
//     } else {
//       document.write("Weaponless and weak the zombie chomps down on an arm as you fail widely in its general direction.");
//       outcome = "lose";
//     }
//   }
// }
// if (outcome === "lose") {
//   document.write("You lose!.....");
// } else if (outcome === "win") {
//   document.write("You win, HOORAY!!!");
// }
/*
 var weaponList = ["shovel" , "toothbrush","axe", "crossbow","Rubber chicken"];

 var weapon = weaponList[ randNum(weaponList.length -1)];
 alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon+ ".")

 alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie");

 var survival = randNum(2);
if (survival === 0) {
 alert("The zombie bites you. You lose!!!")
 } else if (survival > 0) {
  alert("You kill the zombie with your " + weapon + ". You win!!!")
 }
 */
