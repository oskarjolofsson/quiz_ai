"use client";

import { useState, useEffect, use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SideBar from "@/components/inhouse/layouts/sidebar";
import FlashCard from "@/components/inhouse/decks/flashcard";

export default function DeckPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: deckId } = use(params);

  const cards = [
    { front: "What is 2 + 2?", back: "4" },
    { front: "Capital of France?", back: "Paris" },
    { front: "Largest planet?", back: "Jupiter" },
  ];

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const current = cards[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const nextCard = () => {
    setAnswer("");
    if (index < cards.length - 1) setIndex(index + 1);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar />

      <main className="flex-1 p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Deck #{deckId}</h1>

        <p className="text-sm mb-10 text-muted-foreground">
          Card {index + 1} / {cards.length}
        </p>

        <FlashCard frontText={current.front} backText={current.back} />

        <p className="mt-3 text-sm text-muted-foreground">
          Press <span className="font-medium">Space</span> to flip the card
        </p>

        <div className="mt-8 flex flex-col gap-4 w-[500px]">
          <Input
            placeholder="Type your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full"
          />

          <Button
            className="w-full"
            onClick={nextCard}
            disabled={index === cards.length - 1}
          >
            Next Card
          </Button>
        </div>
      </main>
    </div>
  );
}
