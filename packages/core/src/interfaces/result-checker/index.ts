import { Board, GameResult } from "../..";

export interface IResultChecker {
  check(board: Board): GameResult;
}
