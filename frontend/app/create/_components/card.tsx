import {
  Card as UICard,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

type Card = {
  question: string;
  answer: string;
};

type UpdateCard = (index: number, field: keyof Card, value: string) => void;

type DeleteCard = (index: number) => void;

type Props = {
  index: number;
  card: Card;
  updateCard: UpdateCard;
  deleteCard: DeleteCard;
};

export default function Card({ index, card, updateCard, deleteCard }: Props) {
  return (
    <UICard
      key={index}
      className="w-full gap-2"
      style={{
        backgroundColor: "var(--card)",
        color: "var(--card-foreground)",
        borderColor: "var(--border)",
      }}
    >
      <CardHeader className="pb-0 flex items-center justify-between">
        <CardTitle className="text-base flex items-center justify-between">
          <span>Card {index + 1}</span>
        </CardTitle>
        <Trash2
          className="cursor-pointer"
          style={{
            color: "var(--muted)",
          }}
          onClick={() => deleteCard(index)}
        />
      </CardHeader>

      <CardContent className="pt-0 flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium">Question</label>
          <Input
            placeholder="Enter question..."
            value={card.question}
            style={{
              borderColor: "var(--primary)",
            }}
            onChange={(e) => updateCard(index, "question", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium">Answer</label>
          <Input
            placeholder="Enter answer..."
            value={card.answer}
            style={{
              borderColor: "var(--primary)",
            }}
            onChange={(e) => updateCard(index, "answer", e.target.value)}
          />
        </div>
      </CardContent>
    </UICard>
  );
}
