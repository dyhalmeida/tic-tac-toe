"use client";
import { useContext } from "react";
import { IconCircle, IconX } from "@/libs/icons";
import { GameContext } from "@/context/GameContext";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";

function WhoWon() {
  const { result } = useContext(GameContext);
  return (
    <>
      <span className="uppercase font-bold text-light-500 text-xl">
        Parabéns
      </span>
      <div
        className={`flex items-center gap-5 ${
          result.xWins ? "text-primary-500" : "text-secondary-500"
        }`}
      >
        {result.xWins ? (
          <IconX size={80} stroke={6} />
        ) : (
          <IconCircle size={70} stroke={6} />
        )}
        <span className="uppercase text-6xl font-bold">ganhou a rodada</span>
      </div>
    </>
  );
}

export function ResultArea() {
  const { result, restart, clear } = useContext(GameContext);
  return (
    <Modal visible={result.finished}>
      {result.tied ? (
        <span className="uppercase font-bold text-light-500 text-5xl mb-5">
          Terminou empatado
        </span>
      ) : (
        <WhoWon />
      )}
      <div className="flex gap-5">
        <Button onClick={clear}>
          <div className="font-bold uppercase text-dark-400 text-xl px-4 py-2">
            Zerar
          </div>
        </Button>
        <Button color="secondary" onClick={restart}>
          <div className="font-bold uppercase text-dark-400 text-xl px-4 py-2">
            Próxima Rodada
          </div>
        </Button>
      </div>
    </Modal>
  );
}
