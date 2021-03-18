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
  let game = this;
  for (let frame = 0; frame < 10; frame++) {
    if(isStrike()) {
      sum += getStrike();
      position++;
    } else if(isSpare()){
      sum += getSpare();
      position += 2
    } else {
      sum += getSimple();
      position += 2
    }
    this.scoreSave[frame] = sum;
  }
  return sum;

  function isSpare() {
    return game.scoreBoard[position] + game.scoreBoard[position + 1] === 10;
  }

  function isStrike() {
    return game.scoreBoard[position] === 10;
  }

  function getSpare() {
    return game.scoreBoard[position] + game.scoreBoard[position + 1] + game.scoreBoard[position + 2];
  }

  function getStrike() {
    return game.scoreBoard[position] + game.scoreBoard[position + 1] + game.scoreBoard[position + 2];
  }

  function getSimple() {
    return game.scoreBoard[position] + game.scoreBoard[position + 1];
  }
}

module.exports = BowlingGame;
