import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Layers,
  PenTool,
  Settings as SettingsIcon,
  Plus,
} from "lucide-react";

export default function SideBar() {
  return (
    <aside
      className="w-56 border-r flex flex-col"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Quiz AI</h2>

        <nav className="flex flex-col gap-2">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <Link href="/home">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <Link href="/home">
              <Layers className="h-4 w-4" />
              My Decks
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <Link href="/practice">
              <PenTool className="h-4 w-4" />
              Practice
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <Link href="/settings">
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </Button>
        </nav>

        <Separator className="my-6" />

        <Button className="w-full rounded-full">
          <Link href="/create" className="flex items-center">
            Create New Deck
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
