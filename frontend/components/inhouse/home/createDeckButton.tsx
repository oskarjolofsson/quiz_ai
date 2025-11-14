import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateDeckButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" className="h-12 w-12 rounded-full">
            <Plus className="h-6 w-6" />
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom" className="text-sm text-muted-foreground">
          Create new deck
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
