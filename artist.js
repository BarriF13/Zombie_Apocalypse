function artistProfile() {
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your with paint brush? really? " + playerName.pName + ". But who knew !Amazing! Now you find a big color spray and ready to paint the town RED.";
    outcome = 'win';
    character.strength++;

  } else if (choice.playerChoice === "sneak" || choice.playerChoice === "sneak by the zombie") {
    document.getElementById('charMsg').textContent = "Clever " + playerName.pName + " , hiding behind the big canvases. Trying to sneak out from the studio but you just dropped a paint pot on the floor";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "When you lift your head up a zombie is smiling at you. OOPS ...But this is your lucky day" + playerName.pName + " because this game is written by another artist \"Barri\" so she let you live...";
    }, 2000);

    outcome = 'win';
    character.stealth++;
  }
}