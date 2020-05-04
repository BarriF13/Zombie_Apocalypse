function doctorProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with Scalpels, Doctor "+ playerName.pName +", you cut that zombie in half! GROSS, but it worked .";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "you find a scissor and getting ready to walk into the dark street... ";
    }, 2000);
    outcome ='win';
    character.strength++;
   
  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "Oh Doctor " + playerName.pName + " , you are under the table , a cat passing you and you just sneezed ";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is hugging you...The End";
    }, 2000);
    outcome ='lose';
    character.stealth++;
  }
}