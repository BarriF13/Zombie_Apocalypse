function artistProfile() {
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your with paint brush? really? " + playerName.pName + ". But who knew !Amazing! Now you find a big color spray and ready to paint the town RED.";
    document.getElementById('artistWin').style.display='block';
    outcome = 'win';
    character.strength++;

  } else if (choice.playerChoice === "sneak" || choice.playerChoice === "sneak by the zombie") {
    document.getElementById('charMsg').textContent = "Clever " + playerName.pName + " , hiding behind the big canvases in the shop. Trying to sneak out  but you just dropped a paint pot on the floor";
    document.getElementById('artistLoose1').style.display='block';
    setTimeout(() => {
      document.getElementById('artistLoose1').style.display='none';
      document.getElementById('artistLoose2').style.display='block';
      document.getElementById('charMsg').textContent = "When you lift your head up a zombie is smiling at you. OOPS ...But this is your lucky day" + playerName.pName + " because this game is written by another artist \"Barri\" so she let you live...";
    },15000);

    outcome = 'win';
    character.stealth++;
  }
}