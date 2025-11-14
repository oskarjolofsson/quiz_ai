"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/inhouse/layouts/sidebar";
import Card from "./_components/card";

export default function CreateDeckPage() {
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState([{ question: "", answer: "" }]);
  const [error, setError] = useState("");

  const addCard = () => {
    setCards((prev) => [...prev, { question: "", answer: "" }]);
  };

  const deleteCard = (index: number) => {
    setCards((prev) => prev.filter((card, i) => i !== index));
  };

  const updateCard = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, [field]: value } : card))
    );
  };

  const saveDeck = () => {
    if (!deckName.trim()) {
      setError("Please enter a deck name.");
      return;
    }

    const hasContent = cards.some(
      (c) => c.question.trim() !== "" && c.answer.trim() !== ""
    );

    if (!hasContent) {
      setError("Add at least one card with a question and answer.");
      return;
    }

    setError("");

    console.log("Saving deck:", { deckName, cards });
    // TODO: POST to API
  };

  return (
    <div
      className="landing-theme flex min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <SideBar />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Create a New Deck</h1>

        {/* Deck name */}
        <div className="max-w-xl mb-10">
          <label className="block mb-2 font-medium">Deck Name</label>
          <Input
            placeholder="e.g. Math Basics"
            value={deckName}
            onChange={(e) => setDeckName(e.target.value)}
          />
        </div>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Cards</h2>

        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              card={card}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-6 flex items-center gap-2"
          onClick={addCard}
        >
          <Plus className="h-4 w-4" />
          Add Card
        </Button>

        {error && <p className="mt-6 text-red-500 font-medium">{error}</p>}

        <Button className="mt-5 px-8" onClick={saveDeck}>
          Save Deck
        </Button>
      </main>
    </div>
  );
}
