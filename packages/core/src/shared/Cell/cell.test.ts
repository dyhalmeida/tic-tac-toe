import { Cell, PlayerTypeEnum } from "../..";

it("should create a filled cell", () => {
  const cell = new Cell(0, 2, PlayerTypeEnum.X);
  expect(cell.row).toBe(0);
  expect(cell.col).toBe(2);
  expect(cell.type).toBe(PlayerTypeEnum.X);
  expect(cell.isEmpty()).toBeFalsy();
  expect(cell.isMarked()).toBeTruthy();
});

it("should create an empty cell", () => {
  const cell = new Cell(0, 2);
  expect(cell.row).toBe(0);
  expect(cell.col).toBe(2);
  expect(cell.type).toBeNull();
  expect(cell.isEmpty()).toBeTruthy();
  expect(cell.isMarked()).toBeFalsy();
});

it("should turn an empty cell into filled", () => {
  const emptyCell = new Cell(0, 2);
  expect(emptyCell.type).toBeNull();

  const cell = emptyCell.markWith(PlayerTypeEnum.O);
  expect(cell.type).toBe(PlayerTypeEnum.O);
});

it("should ignore marking on an already marked cell", () => {
  const cell = new Cell(0, 2).markWith(PlayerTypeEnum.O);
  const sameCell = cell.markWith(PlayerTypeEnum.X);
  expect(cell === sameCell).toBeTruthy();
});
