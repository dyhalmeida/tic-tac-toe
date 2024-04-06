import { Board, PlayerTypeEnum, TieChecker } from "..";

it("should return the game in progress", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.O)
    .markBoardWith(1, 1, PlayerTypeEnum.O)
    .markBoardWith(2, 2, PlayerTypeEnum.O);
  const result = new TieChecker().check(board);
  expect(result.finished).toBeFalsy();
  expect(result.tied).toBeFalsy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});

it("should return game as tied", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.O)
    .markBoardWith(0, 1, PlayerTypeEnum.X)
    .markBoardWith(0, 2, PlayerTypeEnum.O)
    .markBoardWith(1, 0, PlayerTypeEnum.O)
    .markBoardWith(1, 1, PlayerTypeEnum.X)
    .markBoardWith(1, 2, PlayerTypeEnum.O)
    .markBoardWith(2, 0, PlayerTypeEnum.X)
    .markBoardWith(2, 1, PlayerTypeEnum.O)
    .markBoardWith(2, 2, PlayerTypeEnum.X);
  const result = new TieChecker().check(board);
  expect(result.finished).toBeTruthy();
  expect(result.tied).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
