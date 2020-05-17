function unknownProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = " You didn't choose the right character but hey Attacking the zombie with your axe "+ playerName.pName +", you smash zombie's head !WOW! you are now getting ready for more....";
    document.getElementById('unknownWin1').style.display='block';
 
    setTimeout(() => {
      document.getElementById('unknownWin1').style.display='none';
      document.getElementById('unknownWin2').style.display='block';
      document.getElementById('charMsg').textContent = "but you just didn't noticed that you are bitten ";
  }, 15000);
    outcome ='lose';
    character.strength++;


  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No character ?" + playerName.pName + " , No sneaking out of the zombies... HA HA HA HA ";
    document.getElementById('unknownLoose1').style.display='block';
  
    setTimeout(() => {
      document.getElementById('charMsg').textContent = " and now 5 zombies are dancing around you while they are coming towards you...";
      document.getElementById('unknownLoose1').style.display='none';
      document.getElementById('unknownLoose2').style.display='block';
    }, 15000);
    outcome ='lose';
    character.stealth++;
  }
}