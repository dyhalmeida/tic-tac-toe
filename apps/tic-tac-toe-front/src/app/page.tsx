import { BoardArea } from "@/components/BoardArea";
import { Scoreboard } from "@/components/ScoreArea";

export default function Home() {
  return (
    <main className="flex flex-col gap-7">
      <BoardArea />
      <Scoreboard />
    </main>
  );
}
