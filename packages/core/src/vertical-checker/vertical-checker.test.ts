import { Board, PlayerTypeEnum, VerticalChecker } from "..";

it("should finish with the player's O victory", () => {
  const board = Board.create()
    .markBoardWith(0, 1, PlayerTypeEnum.O)
    .markBoardWith(1, 1, PlayerTypeEnum.O)
    .markBoardWith(2, 1, PlayerTypeEnum.O);
  const result = new VerticalChecker().check(board);
  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeTruthy();
});

it("should continue in progress without victory", () => {
  const board = Board.create()
    .markBoardWith(0, 2, PlayerTypeEnum.X)
    .markBoardWith(1, 2, PlayerTypeEnum.X)
    .markBoardWith(2, 2, PlayerTypeEnum.O);
  const result = new VerticalChecker().check(board);
  expect(result.inProgress).toBeTruthy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
