function entryHiddenObjects() {
  let toMakeNone = ['userName',  'name',
  'userCharacter',  'character',
  'userChoice',  'uChoice',  'startA',
  'N1',  'Chars',  'move',  'showLoser',  'showPoints',
  'doctorImgWin1',  'doctorImgWin2',  'doctorImgLoose1',  'doctorImgLoose2',
  'artistWin',  'artistLoose1',  'artistLoose2',
  'soldierWin',  'soldierLoose1',  'soldierLoose2',
  'debuggerWin',  'debuggerLoose1',  'debuggerLoose2',
  'unknownWin1',  'unknownWin2',  'unknownLoose1',  'unknownLoose2', 'instruct'];
  let toMakeBlock = [];
  toggle(toMakeNone, toMakeBlock);
  
}

function gameStartHide() {
  let toMakeNone = ['Z1', 'intro', 'gameStart'];
  let toMakeBlock = [];
  toggle(toMakeNone, toMakeBlock);
 
}

function gameStartShow() {
  let toMakeNone = [];
  let toMakeBlock = [ 'userName', 'name', 'N1'];
  toggle(toMakeNone, toMakeBlock);
 
}

function addNameToggle() {
  let toMakeNone = ['secondMsg','name','userName','N1'];
  let toMakeBlock = [ 'userCharacter', 'character', 'Chars'];
  toggle(toMakeNone, toMakeBlock);

}

function addCharacterToggle() {
  let toMakeNone = ['userCharacter',  'character',  'Chars'];
  let toMakeBlock = ['userChoice', 'uChoice', 'move'];
  toggle(toMakeNone, toMakeBlock);
 
}

function addChoiceToggle() {
  let toMakeNone = ['userChoice',  'uChoice',  'move'];
  let toMakeBlock = [];
  toggle(toMakeNone, toMakeBlock);
  
}
function looseToggle() {

  let toMakeBlock = [  'showLoser',  'startA'];
  let toMakeNone = [ 'doctorImgWin1',  'doctorImgWin2',  'doctorImgLoose1',  'doctorImgLoose2',  'artistWin',  'artistLoose1',  'artistLoose2',  'soldierWin',  'soldierLoose1',  'soldierLoose2',  'debuggerWin',  'debuggerLoose1',  'debuggerLoose2',  'unknownWin1',  'unknownWin2',  'unknownLoose1',  'unknownLoose2'];
  toggle(toMakeNone, toMakeBlock);
 
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