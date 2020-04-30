// function showMessage(message) {
//   document.getElementById('message').textContent = message;
// }





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

//  var weaponList = ["shovel" , "toothbrush","axe", "crossbow","Rubber chicken"];

//  var weapon = weaponList[ randNum(weaponList.length -1)];
//  alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon+ ".")

//  alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie");

//  var survival = randNum(2);
// if (survival === 0) {
//  alert("The zombie bites you. You lose!!!")
//  } else if (survival > 0) {
//   alert("You kill the zombie with your " + weapon + ". You win!!!")
//  }