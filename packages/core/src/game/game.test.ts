import { Game, Player, PlayerTypeEnum } from "..";

test("should return the next player", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.O),
    new Player("P2", PlayerTypeEnum.X)
  );
  expect(game.currentPlayer.type).toBe(PlayerTypeEnum.O);
  expect(game.nextRound().currentPlayer.type).toBe(PlayerTypeEnum.X);
});

test("should finish the game with victory #1", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.O),
    new Player("P2", PlayerTypeEnum.X)
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.xWins).toBeFalsy();
  expect(game.result.oWins).toBeTruthy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
});

test("should finish the game with victory #2", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.O),
    new Player("P2", PlayerTypeEnum.X)
  )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.oWins).toBeFalsy();
  expect(game.result.xWins).toBeTruthy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(1);
});

test("should clean the game after a victory", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .clear();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(0);
});

test("should go to the next round of the game after a victory", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  )
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .nextRound();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
  expect(game.currentPlayer.type).toBe(game.player2.type);
});

test("should switch player when cleaning game", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  ).clear();
  expect(game.currentPlayer.type).toBe(game.player2.type);

  const newGame = game.clear();
  expect(newGame.currentPlayer.type).toBe(game.player1.type);
});

test("should switch player when going to the next round", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  ).nextRound();
  expect(game.currentPlayer.type).toBe(game.player2.type);

  const newGame = game.nextRound();
  expect(newGame.currentPlayer.type).toBe(game.player1.type);
});

test("should ignore repeated play", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  ).addMove(0, 0);

  const newGame = game.addMove(0, 0);
  expect(game === newGame).toBeTruthy();
});

test("should ignore game movement gain", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  const newGame = game.addMove(2, 2);
  expect(game === newGame).toBeTruthy();
});

test("should generate a tied game", () => {
  const game = Game.create(
    new Player("P1", PlayerTypeEnum.X),
    new Player("P2", PlayerTypeEnum.O)
  )
    .addMove(0, 0)
    .addMove(0, 1)
    .addMove(0, 2)
    .addMove(1, 1)
    .addMove(1, 0)
    .addMove(1, 2)
    .addMove(2, 1)
    .addMove(2, 0)
    .addMove(2, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.tied).toBeTruthy();
});
