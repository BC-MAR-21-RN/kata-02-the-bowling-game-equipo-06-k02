describe('BowlingGame', function () {
  let BowlingGame = require('../lib/BowlingGame');
  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can game be a instance of BowlingGame', function () {
    expect(game).toBeInstanceOf(BowlingGame);
  })

  it('can not throw any pine', function () {
    rounds(0, 20)
    expect(game.score()).toBe(0)
  })

  it('can round all ones', function () {
    rounds(1, 20)
    expect(game.score()).toBe(20)
  })
  
  it('can have a spare', function () {
    game.round(6)
    game.round(4)
    game.round(3)
    rounds(0, 17)
    expect(game.score()).toBe(16)
  })

  it('can have a strike', function () {
    game.round(10)
    game.round(4)
    game.round(3)
    rounds(0, 16)
    expect(game.score()).toBe(24)
  })

  it('can have a perfect game', function () {
    rounds(10, 12)
    expect(game.score()).toBe(300)
  })

  let rounds = function (pines, rounds) {
    for (let index = 0; index < rounds; index++) {
      game.round(pines);
    }
  }
})