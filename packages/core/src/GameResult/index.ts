import { Cell, PlayerTypeEnum } from "..";

export class GameResult {
  constructor(
    readonly winningMove: Cell[] = [],
    private _tied: boolean = false
  ) {}

  get xWins(): boolean {
    return this.winningMove[0]?.type === PlayerTypeEnum.X;
  }

  get oWins(): boolean {
    return this.winningMove[0]?.type === PlayerTypeEnum.O;
  }

  get tied(): boolean {
    const playerXDidNotWin = !this.xWins;
    const playerODidNotWin = !this.oWins;
    return playerXDidNotWin && playerODidNotWin && this._tied;
  }

  get inProgress(): boolean {
    return this.winningMove.length === 0 && !this.tied;
  }

  get finished(): boolean {
    return !this.inProgress;
  }

  hasCell(row: number, col: number): boolean {
    return (
      this.winningMove.find((cell) => cell.row === row && cell.col === col) !==
      undefined
    );
  }
}
