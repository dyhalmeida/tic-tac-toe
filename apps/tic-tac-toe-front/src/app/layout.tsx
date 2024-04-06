import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GameProvider } from "@/context/GameContext";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "A game to challenge your friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <div className="flex justify-center items-center h-screen bg-zinc-900">
          <GameProvider>{children}</GameProvider>
        </div>
      </body>
    </html>
  );
}
