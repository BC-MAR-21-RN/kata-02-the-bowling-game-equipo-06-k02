describe('BowlingGame', function () {
  let BowlingGame = require('../lib/BowlingGame');
  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can game be a instance of BowlingGame', function () {
    expect(game).toBeInstanceOf(BowlingGame);
  })
})