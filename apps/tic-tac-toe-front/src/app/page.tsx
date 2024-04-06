import { ResultArea } from "@/components/ResultArea";
import { MenuArea } from "@/components/MenuArea";
import { BoardArea } from "@/components/BoardArea";
import { Scoreboard } from "@/components/ScoreArea";

export default function Home() {
  return (
    <main className="flex flex-col gap-7">
      <ResultArea />
      <MenuArea />
      <BoardArea />
      <Scoreboard />
    </main>
  );
}
