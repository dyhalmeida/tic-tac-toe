import { Board, GameResult, IResultChecker } from "..";

export class TieChecker implements IResultChecker {
  check(board: Board): GameResult {
    return board.isFullBoard() ? new GameResult([], true) : new GameResult();
  }
}
