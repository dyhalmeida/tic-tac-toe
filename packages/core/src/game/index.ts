import {
  Board,
  DiagonalChecker,
  GameResult,
  HorizontalChecker,
  Player,
  PlayerTypeEnum,
  TieChecker,
  VerticalChecker,
} from "..";

export class Game {
  private constructor(
    readonly player1: Player,
    readonly player2: Player,
    readonly board: Board,
    readonly firstPlayer: Player,
    readonly currentPlayer: Player,
    readonly ties: number = 0,
    readonly result: GameResult = new GameResult()
  ) {}

  static create(player1: Player, player2: Player): Game {
    return new Game(player1, player2, Board.create(), player1, player1);
  }

  nextRound(): Game {
    const newFirst =
      this.firstPlayer.type === this.player1.type ? this.player2 : this.player1;
    return new Game(
      this.player1,
      this.player2,
      Board.create(),
      newFirst,
      newFirst,
      this.ties
    );
  }

  clear(): Game {
    const newFirst =
      this.firstPlayer.type === this.player1.type ? this.player2 : this.player1;
    return new Game(
      this.player1.clear(),
      this.player2.clear(),
      Board.create(),
      newFirst,
      newFirst,
      0
    );
  }

  addMove(row: number, col: number): Game {
    if (this.board.isFullCell(row, col)) return this;
    if (!this.result.inProgress) return this;

    const board = this.board.markBoardWith(row, col, this.currentPlayer.type);
    const result = this.calculateResult(board);
    const [player1, player2] = this.players(result);

    return new Game(
      player1!,
      player2!,
      board,
      this.firstPlayer,
      this.currentPlayer,
      result.tied ? this.ties + 1 : this.ties,
      result
    ).switchPlayer();
  }

  private switchPlayer(): Game {
    if (!this.result.inProgress) return this;
    const newCurrent =
      this.currentPlayer.type === this.player1.type
        ? this.player2
        : this.player1;
    return new Game(
      this.player1,
      this.player2,
      this.board,
      this.firstPlayer,
      newCurrent,
      this.ties,
      this.result
    );
  }

  private calculateResult(board: Board): GameResult {
    const results = [
      new VerticalChecker().check(board),
      new HorizontalChecker().check(board),
      new DiagonalChecker().check(board),
    ];
    return results.find((r) => r.finished) ?? new TieChecker().check(board);
  }

  private players(result: GameResult): Player[] {
    if (result.xWins) {
      return this.player1.type === PlayerTypeEnum.X
        ? [this.player1.addScore(1), this.player2]
        : [this.player1, this.player2.addScore(1)];
    }

    if (result.oWins) {
      return this.player1.type === PlayerTypeEnum.O
        ? [this.player1.addScore(1), this.player2]
        : [this.player1, this.player2.addScore(1)];
    }

    return [this.player1, this.player2];
  }
}
