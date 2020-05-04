function soldierProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "A brave soldier as you are, attacking the zombie with your bare hand "+ playerName.pName +", you slay that zombie!Victory! you just picked up a big axe and  off to kill them all.";
    outcome ='win';
    character.strength++;

  
 

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No no no " + playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
    }, 2000);
    outcome ='lose';
    character.stealth++;

   
  }
}