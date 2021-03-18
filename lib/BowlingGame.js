let BowlingGame = function () {
  this.scoreBoard = [];
  this.scoreSave = [];
}

BowlingGame.prototype.round = function (pines) {
  this.scoreBoard.push(pines);
  return pines;
}

BowlingGame.prototype.score = function () {
  let sum = 0;
  let position = 0;
  for (let frame = 0; frame < 10; frame++) {
    if(isStrike(this, position)) {
      sum += getScore(this, position);
      position++;
    } else if(isSpare(this, position)){
      sum += getScore(this, position);
      position += 2
    } else {
      sum += getSimple(this, position);
      position += 2
    }
    this.scoreSave[frame] = sum;
  }
  return sum;
}

function isSpare(game, position) {
  return game.scoreBoard[position] + game.scoreBoard[position + 1] === 10;
}

function isStrike(game, position) {
  return game.scoreBoard[position] === 10;
}

function getScore(game, position) {
  return game.scoreBoard[position] + game.scoreBoard[position + 1] + game.scoreBoard[position + 2];
}

function getSimple(game, position) {
  return game.scoreBoard[position] + game.scoreBoard[position + 1];
}

module.exports = BowlingGame;
