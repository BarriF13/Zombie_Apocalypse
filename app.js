var beginningSenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

function randNum(range) {
 return Math.round(Math.random() * range);
}
alert(beginningSenario[randNum(beginningSenario.length -1)]);


// var weapon = prompt("You search around frantically for a weapon. What do you choose? A bow and arrow, an axe , or a rubber chicken?");

// var rand = Math.round(Math.random());

// alert("You attack the zombie with your " + weapon);

// if (rand === 0) {
//   alert("The zombie bites you. You lose!!!")
// } else if (rand === 1) {
//   alert("You kill the zombie with your " + weapon + ". You win!!!")
// }