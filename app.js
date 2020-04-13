var beginningSenario = [" You wake up in a hospital. It is quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

function randNum(range) {
 return Math.round(Math.random() * range);
}
alert(beginningSenario[randNum(beginningSenario.length -1)]);


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