import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SideBar() {
  return (
    <aside
      className="w-56 border-r flex flex-col"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>

        <nav className="flex flex-col gap-2">
          <Link href="/home" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/home" className="hover:underline">
            My Decks
          </Link>
          <Link href="#" className="hover:underline">
            Practice
          </Link>
          <Link href="#" className="hover:underline">
            Settings
          </Link>
        </nav>

        <Separator className="my-6" />

        <Button className="w-full">Create New Deck</Button>
      </div>
    </aside>
  );
}
