import { Board, Cell, GameResult, IResultChecker } from "..";

export class CellsChecker implements IResultChecker {
  constructor(private readonly cells: [number, number][]) {}

  check(board: Board): GameResult {
    const cells = this.cells.map(([row, col]) => board.getCell(row, col));
    const types = cells.map((c) => c!.type);
    return types.every((type) => type != null && type === types[0])
      ? new GameResult(cells as Cell[])
      : new GameResult();
  }
}
