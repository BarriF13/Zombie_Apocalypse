alert("It is zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You search around frantically for a weapon. What do you choose? A bow and arrow, an axe , or a rubber chicken?");

var rand = Math.round( Math.random());

alert("You attack the zombie with your "+ weapon);

if (rand === 0 ){
  alert("The zombie bites you. You lose!!!")
} else if(rand ===1) {
  alert("You kill the zombie with your "+ weapon + ". You win!!!")
}