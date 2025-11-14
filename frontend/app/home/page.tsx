"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import SideBar from "@/components/inhouse/layouts/sidebar";
import { Plus } from "lucide-react";
import CreateDeckButton from "@/components/inhouse/home/createDeckButton";

export default function HomePage() {
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
        <div className="flex items-center mb-6 justify-between">
          <h1 className="text-3xl font-bold">Your Card Decks</h1>
          <CreateDeckButton />
        </div>

        <ScrollArea className="h-[calc(100vh-150px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <Card
                key={n}
                className="hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--card-foreground)",
                }}
              >
                <Link href={`/decks/${n}`}>
                  <CardHeader>
                    <CardTitle>Deck #{n}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4">
                    <p
                      className="text-sm"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      40 flashcards · Last practiced 2 days ago
                    </p>

                    <Button className="w-full">Practice</Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
