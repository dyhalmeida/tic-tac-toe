import { Cell, PlayerTypeEnum } from "..";

export class Board {
  private constructor(readonly state: Cell[][]) {}

  static create(): Board {
    return new Board([
      [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
      [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
      [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)],
    ]);
  }

  get rows(): number {
    return this.state.length;
  }

  get cols(): number {
    return this.state[0]?.length ?? 0;
  }

  get cells(): Cell[] {
    return this.state.flat();
  }

  getCell(row: number, col: number): Cell | null {
    return this.state[row]?.[col] ?? null;
  }

  isEmptyCell(row: number, col: number): boolean {
    return this.getCell(row, col)?.isEmpty() ?? true;
  }

  isFullCell(row: number, col: number): boolean {
    return !this.isEmptyCell(row, col);
  }

  isFullBoard(): boolean {
    return this.cells.every((cell) => cell.type !== null);
  }

  markBoardWith(row: number, col: number, type: PlayerTypeEnum): Board {
    const cell = this.getCell(row, col);
    if (!cell || cell.isMarked()) return this;

    const newState = this.state.map((rowState, rowIndex) =>
      rowIndex === row
        ? rowState.map((colState, colIndex) =>
            colIndex === col ? colState?.markWith(type) : colState
          )
        : rowState
    );
    return new Board(newState);
  }
}
