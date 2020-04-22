var outcome;

window.alert("one day you wake up and the world as you know has ended. The dead come to life and pray on the living. There is no hope, no cure, only survuval. Welcome to the zombie apocalypse.");

var beginningSenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

function randNum(range) {
  "use strict";
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}
window.alert(beginningSenario[randNum(beginningSenario.length - 1)]);

var character = {
  health: 5,
  strenght: 0,
  stealth: 0,
  name: window.prompt("What is your name?"),
  characterClass: window.prompt("These times test the strenghts of our character. What were you before the war? ( Choose from: soldier, doctor, or artist)").toLowerCase()

};

if (!character.name) {
  character.name = window.prompt("I don't know what to call you if you don't enter a name. if you don't answer I name you myself hahaha....., what is your name???");
  if (!character.name) {
    window.alert(" Well I did try to warn you. Gunther Piddles it is then.");
    character.name = " Gunther Piddles ";
  }
}

if (character.characterClass === "soldier") {
  character.strenght = 5;
}
if (character.characterClass === "doctor") {
  character.health = 7;
}
if (character.characterClass === "artist") {
  character.stealth = 5;
}

var choice = window.prompt("The breave adventurer and former " + character.characterClass + " " + character.name + "enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?").toLowerCase();

if (choice === "attack") {
  if (character.strenght === 5) {
    window.alert("Using only uour bear hands, you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and three can of Beanie Weenies.");
    outcome = "win";
    character.strenght++;
  } else if (character.strenght <= 5) {
    window.alert("You fearlessly charge zombie with all your strenght. Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
    window.alert("Just kidding. you are immediately bitten by the zombie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for ever. The end. yohohahahaha");
    outcome = "lose";
  }
}
if (choice === "sneak" || choice === "sneak by the zombie") {
  if (character.stealth === 5) {
    window.alert("You sneak by the zombie, you clever bastard.")
  }
  if (character.strenght < 5) {
    window.alert(" You try to slip by the zombie, but accidentally stumble over a can of Beanie Weenies, alerting the zombie. It slowly turns its head and shuffles towards you.");
    if (character.strenght === 5) {
      window.alert("Although you have alerted the zombie, but you are able to crush its skull with your bare hands.");
      outcome = "win";
    } else {
      window.alert("Weaponless and weak the zombie chomps down on an arm as you fail widly in its general direction.");
      outcome = "lose";
    }
  }
}
if (outcome === "lose") {
  window.alert("You lose!.....");
} else if (outcome === "win") {
  window.alert("You win, HORAY!!!");
}
/*
 var weaponList = ["shovel" , "toothbrush","axe", "crossbow","Rubber chicken"];

 var weapon = weaponList[ randNum(weaponList.length -1)];
 alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon+ ".")

 alert("Suddenly a zombie burts through the door! You ready your " + weapon + " and advance towards the zombie");

 var survival = randNum(2);
if (survival === 0) {
 alert("The zombie bites you. You lose!!!")
 } else if (survival > 0) {
  alert("You kill the zombie with your " + weapon + ". You win!!!")
 }
 */
