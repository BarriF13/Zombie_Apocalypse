function soldierProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "A brave soldier as you are, attacking the zombie with your machine gun "+ playerName.pName +", you slay that zombie!Victory! you just picked up a big axe and  off to kill them all.";
    document.getElementById('soldierWin').style.display='block';
    outcome ='win';
    character.strength++; 

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "A soldier and sneaking? no no no " + playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    document.getElementById('soldierLoose1').style.display='block';
  
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
      document.getElementById('soldierLoose1').style.display='none';
      document.getElementById('soldierLoose2').style.display='block';
    }, 15000);
    outcome ='lose';
    character.stealth++;

  }
}