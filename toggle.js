function entryHiddenObjects() {
  document.getElementById('userName').style.display = 'none';
  document.getElementById('name').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'none';
  document.getElementById('character').style.display = 'none';

  document.getElementById('userChoice').style.display = 'none';
  document.getElementById('uChoice').style.display = 'none';
  document.getElementById('startA').style.display = 'none';

  document.getElementById('N1').style.display = 'none';
  document.getElementById('Chars').style.display = 'none';
  document.getElementById('move').style.display = 'none';
  document.getElementById('showLoser').style.display = 'none';
  document.getElementById('showPoints').style.display = 'none';

  document.getElementById('doctorImgWin1').style.display = 'none';
  document.getElementById('doctorImgWin2').style.display = 'none';
  document.getElementById('doctorImgLoose1').style.display = 'none';
  document.getElementById('doctorImgLoose2').style.display = 'none';

  document.getElementById('artistWin').style.display = 'none';
  document.getElementById('artistLoose1').style.display = 'none';
  document.getElementById('artistLoose2').style.display = 'none';

  document.getElementById('soldierWin').style.display = 'none';
  document.getElementById('soldierLoose1').style.display = 'none';
  document.getElementById('soldierLoose2').style.display = 'none';

  document.getElementById('debuggerWin').style.display = 'none';
  document.getElementById('debuggerLoose1').style.display = 'none';
  document.getElementById('debuggerLoose2').style.display = 'none';

  document.getElementById('unknownWin1').style.display = 'none';
  document.getElementById('unknownWin2').style.display = 'none';
  document.getElementById('unknownLoose1').style.display = 'none';
  document.getElementById('unknownLoose2').style.display = 'none';

  document.getElementById('instruct').style.display = 'none';
}

function gameStartHide() {
  document.getElementById('Z1').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
  document.getElementById('gameStart').style.display = 'none';
}

function gameStartShow() {
  document.getElementById('userName').style.display = 'block';
  document.getElementById('name').style.display = 'block';
  document.getElementById('N1').style.display = 'block';
}

function addNameToggle() {
  document.getElementById('secondMsg').style.display = 'none';
  document.getElementById('name').style.display = 'none';
  document.getElementById('userName').style.display = 'none';
  document.getElementById('N1').style.display = 'none';

  document.getElementById('userCharacter').style.display = 'block';
  document.getElementById('character').style.display = 'block';
  document.getElementById('Chars').style.display = 'block';
}

function addCharacterToggle() {
  document.getElementById('userCharacter').style.display = 'none';
  document.getElementById('character').style.display = 'none';
  document.getElementById('Chars').style.display = 'none';

  document.getElementById('userChoice').style.display = 'block';
  document.getElementById('uChoice').style.display = 'block';
  document.getElementById('move').style.display = 'block';
}

function addChoiceToggle() {
  document.getElementById('userChoice').style.display = 'none';
  document.getElementById('uChoice').style.display = 'none';
  document.getElementById('move').style.display = 'none';

}
function looseToggle() {
  document.getElementById('showLoser').style.display = 'block';
  document.getElementById('startA').style.display = 'block';
  document.getElementById('doctorImgWin1').style.display = 'none';
  document.getElementById('doctorImgWin2').style.display = 'none';
  document.getElementById('doctorImgLoose1').style.display = 'none';
  document.getElementById('doctorImgLoose2').style.display = 'none';
  document.getElementById('artistWin').style.display = 'none';
  document.getElementById('artistLoose1').style.display = 'none';
  document.getElementById('artistLoose2').style.display = 'none';
  document.getElementById('soldierWin').style.display = 'none';
  document.getElementById('soldierLoose1').style.display = 'none';
  document.getElementById('soldierLoose2').style.display = 'none';
  document.getElementById('debuggerWin').style.display = 'none';
  document.getElementById('debuggerLoose1').style.display = 'none';
  document.getElementById('debuggerLoose2').style.display = 'none';
  document.getElementById('unknownWin1').style.display = 'none';
  document.getElementById('unknownWin2').style.display = 'none';
  document.getElementById('unknownLoose1').style.display = 'none';
  document.getElementById('unknownLoose2').style.display = 'none';
}

function winToggle() {

  let toMakeBlock = ['showPoints', 'startA']
  let toMakeNone = ['doctorImgWin1', 'doctorImgWin2', 'doctorImgWin1', 'doctorImgLoose1', 'doctorImgLoose2', 'artistWin', 'artistLoose1', 'artistLoose2', 'soldierWin', 'soldierLoose1', 'soldierLoose2', 'debuggerWin', 'debuggerLoose1', 'debuggerLoose2', 'unknownWin1', 'unknownWin2', 'unknownLoose1', 'unknownLoose2']
  toggle(toMakeNone, toMakeBlock);
}
function toggle(toHide, toShow) {
  for (let i = 0; i < toShow.length; i++) {
    document.getElementById(toShow[i]).style.display = 'block';
  }
  for (let i = 0; i < toHide.length; i++) {
    document.getElementById(toHide[i]).style.display = 'none';
  }
}