import { Cell, GameResult, PlayerTypeEnum } from "..";

it("should create a result with tied", () => {
  const tied = new GameResult([], true);
  expect(tied.finished).toBeTruthy();
  expect(tied.tied).toBeTruthy();
  expect(tied.inProgress).toBeFalsy();
});

it("should create a result with victory", () => {
  const c1 = new Cell(0, 0, PlayerTypeEnum.X);
  const c2 = new Cell(0, 1, PlayerTypeEnum.X);
  const c3 = new Cell(0, 2, PlayerTypeEnum.X);
  const victory = new GameResult([c1, c2, c3]);

  expect(victory.finished).toBeTruthy();
  expect(victory.tied).toBeFalsy();
  expect(victory.hasCell(0, 0)).toBeTruthy();
  expect(victory.hasCell(1, 1)).toBeFalsy();
});
