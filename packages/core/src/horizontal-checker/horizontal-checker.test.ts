import { Board, HorizontalChecker, PlayerTypeEnum } from "..";

it("should finish with player X victory", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.X)
    .markBoardWith(0, 1, PlayerTypeEnum.X)
    .markBoardWith(0, 2, PlayerTypeEnum.X);
  const result = new HorizontalChecker().check(board);
  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy;
});

it("should continue in progress without victory", () => {
  const board = Board.create()
    .markBoardWith(0, 0, PlayerTypeEnum.X)
    .markBoardWith(0, 1, PlayerTypeEnum.X)
    .markBoardWith(0, 2, PlayerTypeEnum.O);
  const result = new HorizontalChecker().check(board);
  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
