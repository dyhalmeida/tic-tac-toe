import { Board, CellsChecker, GameResult, IResultChecker } from "..";

export class DiagonalChecker implements IResultChecker {
  check(board: Board): GameResult {
    const d1 = new CellsChecker([
      [0, 0],
      [1, 1],
      [2, 2],
    ]).check(board);
    const d2 = new CellsChecker([
      [0, 2],
      [1, 1],
      [2, 0],
    ]).check(board);
    return d1.finished ? d1 : d2;
  }
}
