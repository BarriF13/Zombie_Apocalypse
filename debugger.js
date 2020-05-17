function debuggerProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your keyboard "+ playerName.pName +", you slay that zombie! you now picked up a can of coke and a router and heading out...";
    document.getElementById('debuggerWin').style.display='block';
    outcome ='win';
    character.strength++;

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent =  playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    document.getElementById('debuggerLoose1').style.display='block';
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
      document.getElementById('debuggerLoose1').style.display='none';
document.getElementById('debuggerLoose2').style.display='block';
    }, 15000);
    outcome ='lose';
    character.stealth++;

  }
}

document.getElementById('debuggerLoose1').style.display='none';
document.getElementById('debuggerLoose2').style.display='none';