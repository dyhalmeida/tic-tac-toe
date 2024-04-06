import { Board, DiagonalChecker, PlayerTypeEnum } from "..";

it("should finish with the player O victory", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.O)
    .markBoardWith(1, 1, PlayerTypeEnum.O)
    .markBoardWith(2, 2, PlayerTypeEnum.O);
  const result = new DiagonalChecker().check(board);
  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeTruthy();
});

it("should finish with the player X victory", () => {
  const board = Board.create()
    .markBoardWith(0, 2, PlayerTypeEnum.X)
    .markBoardWith(1, 1, PlayerTypeEnum.X)
    .markBoardWith(2, 0, PlayerTypeEnum.X);
  const result = new DiagonalChecker().check(board);
  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy();
});

it("should continue in progress without victory", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.X)
    .markBoardWith(1, 1, PlayerTypeEnum.X)
    .markBoardWith(2, 2, PlayerTypeEnum.O);
  const result = new DiagonalChecker().check(board);
  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
