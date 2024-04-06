"use client";
import { useContext } from "react";
import { Card } from "@/components/shared/Card";
import { GameContext } from "@/context/GameContext";

type ScorePropsType = {
  label: string;
  value: number;
  color: "primary" | "secondary" | "light";
};

function Score({ label, value, color }: ScorePropsType) {
  return (
    <Card color={color as any} noBorder>
      <div className="flex justify-center items-center text-dark-500 w-32 h-18">
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase">{label}</span>
          <span className="text-3xl font-black">{value}</span>
        </div>
      </div>
    </Card>
  );
}

export function Scoreboard() {
  const { player1, player2, ties } = useContext(GameContext);

  return (
    <div className="flex gap-7">
      <Score
        label={`${player1.type} (${player1.name})`}
        value={player1.score}
        color="primary"
      />
      <Score label="Empates" value={ties} color="light" />
      <Score
        label={`${player2.type} (${player2.name})`}
        value={player2.score}
        color="secondary"
      />
    </div>
  );
}
