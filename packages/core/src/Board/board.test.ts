import { Board, PlayerTypeEnum } from "..";

it("should create an empty board", () => {
  const board = Board.create();
  expect(board.cols).toBe(3);
  expect(board.rows).toBe(3);
  expect(board.isFullBoard()).toBeFalsy();
});

it("should return all the tray cells", () => {
  const board = Board.create();
  expect(board.cells.length).toBe(9);
});

it("should mark a cell by line and column", () => {
  const board = Board.create().markBoardWith(1, 1, PlayerTypeEnum.X);
  expect(board.isFullCell(1, 1)).toBeTruthy();
  expect(board.isEmptyCell(1, 1)).toBeFalsy();
});

it("should return with empty for non-existent cell", () => {
  const board = Board.create();
  expect(board.isEmptyCell(10, 1)).toBeTruthy();
  expect(board.isFullCell(10, 1)).toBeFalsy();
});

it("should ignore mark non-existent cell", () => {
  const board = Board.create();
  const sameBoard = board.markBoardWith(10, 1, PlayerTypeEnum.X);
  expect(board === sameBoard).toBeTruthy();
});
