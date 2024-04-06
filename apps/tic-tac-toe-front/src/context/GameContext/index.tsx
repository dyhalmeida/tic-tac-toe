"use client";

import { createContext, useState } from "react";
import { Board, Game, GameResult, Player, PlayerTypeEnum } from "core";

type GameContextPropsType = {
  ties: number;
  player1: Player;
  player2: Player;
  currentPlayer: Player;
  board: Board;
  result: GameResult;
  addMove: (row: number, col: number) => void;
  restart: () => void;
  clear: () => void;
};

export const GameContext = createContext<GameContextPropsType>({} as any);

export function GameProvider(props: any) {
  const [game, setGame] = useState<Game>(
    Game.create(
      new Player("P1", PlayerTypeEnum.X),
      new Player("P2", PlayerTypeEnum.O)
    )
  );

  function addMove(row: number, col: number) {
    setGame(game.addMove(row, col));
  }

  function restart() {
    setGame(game.nextRound());
  }

  function clear() {
    setGame(game.clear());
  }

  return (
    <GameContext.Provider
      value={{
        ties: game.ties,
        player1: game.player1,
        player2: game.player2,
        currentPlayer: game.currentPlayer,
        board: game.board,
        result: game.result,
        addMove,
        restart,
        clear,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
