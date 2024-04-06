"use client";
import { useContext } from "react";
import { Player, PlayerTypeEnum } from "core";
import { IconCircle, IconReload, IconX } from "@/libs/icons";
import { GameContext } from "@/context/GameContext";
import Button from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

type CurrentPlayerPropsType = {
  currentPlayer: Player;
};
function CurrentPlayer({ currentPlayer }: CurrentPlayerPropsType) {
  return (
    <Card color="dark">
      <div className="flex justify-center items-center gap-2 h-10 w-32 text-light-500">
        {currentPlayer.type === PlayerTypeEnum.X && (
          <IconX size={30} stroke={6} />
        )}
        {currentPlayer.type === PlayerTypeEnum.O && (
          <IconCircle size={30} stroke={6} />
        )}
        <span className="text-xl">JOGA</span>
      </div>
    </Card>
  );
}

export function MenuArea() {
  const { currentPlayer, restart } = useContext(GameContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 w-32">
        <IconX size={40} stroke={6} className="text-primary-500" />
        <IconCircle size={35} stroke={6} className="text-secondary-500" />
      </div>
      <CurrentPlayer currentPlayer={currentPlayer} />
      <div className="flex justify-end w-32">
        <Button onClick={restart}>
          <IconReload stroke={2} className="text-dark-400 my-1 mx-2" />
        </Button>
      </div>
    </div>
  );
}
