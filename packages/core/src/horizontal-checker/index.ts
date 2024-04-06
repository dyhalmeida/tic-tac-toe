import { Board, CellsChecker, GameResult, IResultChecker } from "..";

export class HorizontalChecker implements IResultChecker {
  check(board: Board): GameResult {
    const result = [
      new CellsChecker([
        [0, 0],
        [0, 1],
        [0, 2],
      ]).check(board),
      new CellsChecker([
        [1, 0],
        [1, 1],
        [1, 2],
      ]).check(board),
      new CellsChecker([
        [2, 0],
        [2, 1],
        [2, 2],
      ]).check(board),
    ].find((r) => r.finished);
    return result ?? new GameResult();
  }
}
