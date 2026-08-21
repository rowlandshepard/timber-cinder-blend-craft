import { createFileRoute } from "@tanstack/react-router";
import { DeckApp } from "@/components/deck-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-dvh bg-bg text-fg">
      <DeckApp />
    </main>
  );
}
