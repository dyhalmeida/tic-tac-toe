import { PlayerTypeEnum } from "../PlayerType";

export class Cell {
  constructor(
    readonly row: number,
    readonly col: number,
    readonly type: PlayerTypeEnum | null = null
  ) {}

  markWith(type: PlayerTypeEnum): Cell {
    if (this.type !== null) return this;
    return new Cell(this.row, this.col, type);
  }

  isEmpty(): boolean {
    return this.type === null;
  }

  isMarked(): boolean {
    return !this.isEmpty();
  }
}
