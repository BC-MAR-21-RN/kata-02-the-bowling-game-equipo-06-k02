function play() {
  let game = new BowlingGame()
  document.getElementById('game').innerHTML = html(game);
}

function html(game) {
  let board = '<div><table cellpadding="1" cellspacing="1"><tr class="points">';
  for(let i = 0; i < 10; i++) {
    board += roundsValues(game, i);
    game.score();
  }
  board += scoresValues(game);
  return board;
}

function getNumber(value) {
  return Math.floor(Math.random()*value + 1);
}

function roundsValues(game, i) {
  let a = getNumber(10);
  let b = getNumber(10);
  let c = getNumber(10);
  let board = ''
  if(i === 9) board += isEqualNine(game, a, b, c);
  else board += isLessNine(game, a, b);
  return board;
}

function scoresValues(game) {
  let board = '</tr><tr class="score">';
  for (let index = 0; index < game.scoreSave.length; index++) board += '<td colspan="6">' + game.scoreSave[index] + '</td>';
  board += '</tr></table>';
  return board;
}

function isLessNine(game, a, b) {
  let board = '';
  if(isSpareOrIsSimply(a, b)) {
    board += '<td colspan="3">'+ game.round(a) +'</td><td colspan="3">' + game.round(b) + '</td>';
  } else if(isOneEqualTen(a, b)) {
    if (a == 10) board += '<td colspan="3"></td><td colspan="3">'+ game.round(a) +'</td>';
    else  board += '<td colspan="3"></td><td colspan="3">'+ game.round(b) +'</td>';
  } else if(isMoreThanTen(a, b)) {
    board += '<td colspan="3">'+ game.round(a) +'</td><td colspan="3">' + game.round(getNumber(10 - a)) + '</td>';
  }
  return board;
}

function isEqualNine(game, a, b, c) {
  let board = '';
  if(isSpareOrIsSimply(a, b)) {
    board += '<td colspan="2">'+ game.round(a) +'</td><td colspan="2">' + game.round(b) + '</td><td colspan="2">' + game.round(c) + '</td>';
  } else if(isOneEqualTen(a, b)) {
    if (a == 10) board += '<td colspan="2"></td><td colspan="2">'+ game.round(a) +'</td><td colspan="2">' + game.round(c) + '</td>';
    else board += '<td colspan="2"></td><td colspan="2">'+ game.round(b) +'</td><td colspan="2">' + game.round(c) + '</td>';
  } else if(isMoreThanTen(a, b)) {
    board += '<td colspan="2">'+ game.round(a) +'</td><td colspan="2">' + game.round(getNumber(10 - a)) + '</td><td colspan="2">' + game.round(c) + '</td>';
  }
  return board;
}

function isSpareOrIsSimply(a, b) {
  return (a + b === 10) || (a + b) < 10
}

function isOneEqualTen(a, b) {
  return a === 10 || b === 10
}

function isMoreThanTen(a, b) {
  return (a + b) > 10
}
