function unknownProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = " You didn't choose the right character but hey Attacking the zombie with your axe "+ playerName.pName +", you smash zombie's head !WOW! you are now getting ready for more....";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "but you just didn't noticed that you are bitten ";
  }, 3000);
    outcome ='lose';
    character.strength++;


  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No character ?" + playerName.pName + " , well if you didn't make an effort to choose a character ... ";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = " and now 5 zombies are dancing around you while the are coming towards you...";
    }, 3000);
    outcome ='lose';
    character.stealth++;
  }
}