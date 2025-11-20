"use client";

import { useState, useEffect, use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SideBar from "@/components/inhouse/layouts/sidebar";
import FlashCard from "@/components/inhouse/decks/flashcard";
import { ArrowUp } from "lucide-react";

type Chat = {
  own: boolean;
  msg: string;
};

export default function DeckPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: deckId } = use(params);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const cards = [
    { front: "What is 2 + 2?", back: "4" },
    { front: "Capital of France?", back: "Paris" },
    { front: "Largest planet?", back: "Jupiter" },
  ];

  const [index, setIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>([]);
  const [promptLoading, setPromptLoading] = useState<boolean>(false);

  const current = cards[index];

  const nextCard = () => {
    setAnswer("");
    setChats([]);
    if (index < cards.length - 1) setIndex(index + 1);
  };

  const compareAnswer = async () => {
    if (!answer) return;

    setPromptLoading(true);
    setChats((prev) => [...prev, { own: true, msg: answer }]);
    let localAnswer = answer;
    setAnswer("");

    const res = await fetch(apiUrl + "compare/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: localAnswer,
        solution: cards[index].back,
      }),
    });

    if (!res.ok) {
      console.error("Error", res.status);
    }

    const data = await res.json();
    setPromptLoading(false);
    setChats((prev) => [
      ...prev,
      {
        own: false,
        msg: "Svar: " + cards[index].back + " feedback: " + data.feedback,
      },
    ]);
  };

  const sendPrompt = async () => {
    if (!prompt) return;

    setPromptLoading(true);
    setChats((prev) => [...prev, { own: true, msg: prompt }]);
    setPrompt("");

    const res = await fetch(apiUrl + "prompt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    if (!res.ok) {
      console.error("Error", res.status);
    }

    const data = await res.json();
    setPromptLoading(false);
    setChats((prev) => [...prev, { own: false, msg: data.feedback }]);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar />

      <main className="w-full grid grid-cols-[2fr_1fr] gap-4">
        <div className="flex-1 p-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Deck #{deckId}</h1>

          <p className="text-sm mb-10 text-muted-foreground">
            Card {index + 1} / {cards.length}
          </p>

          <FlashCard frontText={current.front} backText={current.back} />

          <p className="mt-3 text-sm text-muted-foreground">
            Press <span className="font-medium">Space</span> to flip the card
          </p>

          <div className="mt-8 flex flex-col gap-4 w-[500px]">
            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                compareAnswer();
              }}
            >
              <Input
                placeholder="Type your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full"
              />
              <Button type="submit">Answer</Button>
            </form>
            <Button
              className="w-full rounded-full"
              onClick={nextCard}
              disabled={index === cards.length - 1}
            >
              Next Card
            </Button>
          </div>
        </div>
        <div className="bg-card rounded-4xl flex flex-col items-center justify-between p-5 m-5">
          <div className="w-full text-left">
            {chats.map((chat) => {
              return (
                <p
                  key={chat.msg}
                  className={`${chat.own ? "text-right" : "text-left"}`}
                >
                  {chat.msg}
                </p>
              );
            })}
            <p className="text-left">{promptLoading && "Laddar svar"}</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendPrompt();
            }}
            className="flex justify-between bg-secondary rounded-full w-full p-5"
          >
            <input
              className="focus:outline-none focus:ring-0 focus:border-transparent"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask ChatGPT about the topic"
            />
            <button type="submit">
              <ArrowUp />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
