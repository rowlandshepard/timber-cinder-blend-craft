import {
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Undo2,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CARDS, TOPICS, type Flashcard, type Topic } from "@/lib/cards";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "cell-division-cards-known";

function loadKnown(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id): id is string => typeof id === "string"));
  } catch {
    return new Set();
  }
}

function persistKnown(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

function shuffleIds(ids: string[]) {
  const next = [...ids];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i];
    const b = next[j];
    if (a === undefined || b === undefined) continue;
    next[i] = b;
    next[j] = a;
  }
  return next;
}

export function DeckApp() {
  const [topic, setTopic] = useState<Topic | "All">("All");
  const [order, setOrder] = useState<string[]>(() => CARDS.map((c) => c.id));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(() => new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setKnown(loadKnown());
    setHydrated(true);
  }, []);

  const deck = useMemo(() => {
    const byId = new Map(CARDS.map((c) => [c.id, c]));
    const filtered = order
      .map((id) => byId.get(id))
      .filter((c): c is Flashcard => Boolean(c))
      .filter((c) => topic === "All" || c.topic === topic);
    return filtered;
  }, [order, topic]);

  const card = deck[index] ?? deck[0];
  const total = deck.length;
  const safeIndex = total === 0 ? 0 : Math.min(index, total - 1);
  const progress = total === 0 ? 0 : ((safeIndex + 1) / total) * 100;
  const knownCount = CARDS.filter((c) => known.has(c.id)).length;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [topic]);

  useEffect(() => {
    if (index >= deck.length && deck.length > 0) {
      setIndex(0);
      setFlipped(false);
    }
  }, [deck.length, index]);

  const go = useCallback(
    (delta: number) => {
      if (total === 0) return;
      setIndex((i) => {
        const next = i + delta;
        if (next < 0 || next >= total) return i;
        return next;
      });
      setFlipped(false);
    },
    [total],
  );

  const flip = useCallback(() => setFlipped((f) => !f), []);

  const shuffleDeck = useCallback(() => {
    setOrder((prev) => shuffleIds(prev));
    setIndex(0);
    setFlipped(false);
  }, []);

  const reset = useCallback(() => {
    setOrder(CARDS.map((c) => c.id));
    setIndex(0);
    setFlipped(false);
    setTopic("All");
  }, []);

  const toggleKnown = useCallback(() => {
    if (!card) return;
    setKnown((prev) => {
      const next = new Set(prev);
      if (next.has(card.id)) next.delete(card.id);
      else next.add(card.id);
      persistKnown(next);
      return next;
    });
  }, [card]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flip();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "s" || e.key === "S") {
        shuffleDeck();
      } else if (e.key === "k" || e.key === "K") {
        toggleKnown();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, go, shuffleDeck, toggleKnown]);

  if (!card) {
    return (
      <p className="text-muted">No cards in this topic.</p>
    );
  }

  const isKnown = known.has(card.id);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Lecture 3
          </p>
          <h1 className="mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
            Cell Division Cards
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            The cell and cell division. Flip for the lecture image and answer.
          </p>
        </div>
        <p className="font-display text-sm tabular-nums text-muted">
          {hydrated ? knownCount : 0}
          <span className="text-subtle"> / {CARDS.length} known</span>
        </p>
      </header>

      <div
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Topics"
      >
        <TopicChip
          label="All"
          active={topic === "All"}
          onClick={() => setTopic("All")}
        />
        {TOPICS.map((t) => (
          <TopicChip
            key={t}
            label={t}
            active={topic === t}
            onClick={() => setTopic(t)}
          />
        ))}
      </div>

      <div>
        <div className="mb-3 flex items-baseline justify-between text-sm text-muted">
          <span className="tabular-nums">
            {safeIndex + 1} / {total}
          </span>
          <span>{card.topic}</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-sage transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mx-auto h-[28rem] w-full max-w-2xl sm:h-[34rem]">
        <div
          className={cn("flip-card", flipped && "is-flipped")}
        >
          <button
            type="button"
            className="flip-face flex flex-col border border-border bg-surface p-7 text-left shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-9"
            onClick={flip}
            aria-label="Show answer and lecture image"
          >
            <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage">
              Question
            </p>
            <p className="font-display text-xl font-medium leading-snug text-fg sm:text-2xl">
              {card.question}
            </p>
            <p className="mt-auto text-xs text-subtle">
              Tap the card or Flip to see the lecture slide
            </p>
          </button>
          <button
            type="button"
            className="flip-face flip-back flex flex-col gap-3 overflow-hidden border border-border bg-surface-2 p-4 text-left shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-5"
            onClick={flip}
            aria-label="Show question"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage">
              Lecture slide
            </p>
            <div className="min-h-0 flex-[1.6] overflow-hidden rounded-lg border border-border bg-bg">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
            <p className="max-h-[32%] overflow-y-auto text-sm leading-relaxed text-fg sm:text-base">
              {card.answer}
            </p>
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-2">
        <Button
          variant="secondary"
          onClick={() => go(-1)}
          disabled={safeIndex === 0}
          aria-label="Previous card"
        >
          <ChevronLeft />
          Prev
        </Button>
        <Button onClick={flip}>Flip</Button>
        <Button
          variant="secondary"
          onClick={() => go(1)}
          disabled={safeIndex >= total - 1}
          aria-label="Next card"
        >
          Next
          <ChevronRight />
        </Button>
        <Button
          variant={isKnown ? "default" : "outline"}
          onClick={toggleKnown}
          aria-pressed={isKnown}
        >
          {isKnown ? <Undo2 /> : <Check />}
          {isKnown ? "Unmark" : "I know this"}
        </Button>
        <Button variant="ghost" onClick={shuffleDeck}>
          <Shuffle />
          Shuffle
        </Button>
        <Button variant="ghost" onClick={reset}>
          <RotateCcw />
          Reset
        </Button>
      </div>

      <p className="text-center text-xs text-subtle">
        Keyboard: Space flip · arrows navigate · S shuffle · K mark known
      </p>
    </div>
  );
}

function TopicChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 rounded-full border px-3.5 text-sm font-medium transition-colors duration-[var(--motion-quick)]",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-surface text-muted hover:border-border-strong hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
