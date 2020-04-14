var outcome;

window.alert("one day you wake up and the world as you know has ended. The dead come to life and pray on the living. There is no hope, no cure, only survuval. Welcome to the zombie apocalypse.");

var beginningSenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

function randNum(range) {
  "use strict";
  if (typeof range === "number"){
    return Math.round(Math.random() * range);
  }
}
window.alert(beginningSenario[randNum(beginningSenario.length -1)]);

  var character = {
    health: 5,
    strenght: 0,
    stealth: 0,
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("These times test the strenghts of our character. What were you before the war? ( Choose from: soldier, doctor, or artist)").toLowerCase()

  };

  if(!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. if you don't answer I name you myself hahaha....., what is your name???");
    if (!character.name) {
       window.alert(" Well I did try to warn you. Gunther Piddles it is then.");
       character.name = " Gunther Piddles ";
    }
  }
  
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