import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as RotateCcw, o as ChevronLeft, r as Shuffle, s as Check, t as Undo2 } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-slmi-Jod.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,border-color,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent-hover",
			secondary: "bg-surface text-fg border border-border hover:border-border-strong hover:bg-surface-2",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-surface",
			outline: "bg-transparent text-fg border border-border hover:border-border-strong"
		},
		size: {
			default: "h-11 min-h-11 rounded-lg px-4 text-sm",
			sm: "h-9 min-h-9 rounded-md px-3 text-sm",
			icon: "size-11 min-h-11 min-w-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var TOPICS = [
	"Junctions",
	"Growth",
	"Death",
	"Organelles",
	"Cytoskeleton",
	"Clinical",
	"Dogma",
	"Cell cycle"
];
var CARDS = [
	{
		id: "j1",
		topic: "Junctions",
		question: "What are the three types of intercellular junctions and their main roles?",
		answer: "Tight junctions seal cells so substances cannot pass between them. Desmosomes give mechanical strength. Gap junctions form channels so molecules can flow and cells can coordinate."
	},
	{
		id: "g1",
		topic: "Growth",
		question: "Define hypertrophy versus hyperplasia.",
		answer: "Hypertrophy is an increase in cell size. Hyperplasia is an increase in cell number."
	},
	{
		id: "g2",
		topic: "Growth",
		question: "What do atrophy, metaplasia, and neoplasia mean?",
		answer: "Atrophy: shrinkage by smaller or fewer cells. Metaplasia: one cell type changes into another. Neoplasia: uncontrolled growth that forms a tumor. Dysplasia is a pre-neoplastic change."
	},
	{
		id: "d1",
		topic: "Death",
		question: "How does necrosis differ from apoptosis?",
		answer: "Necrosis follows severe damage: contents spill out and trigger inflammation. Apoptosis is programmed death: lysosomes digest contents inside the cell, so there is no spill and no inflammatory response."
	},
	{
		id: "o1",
		topic: "Organelles",
		question: "What is cytoplasm?",
		answer: "Cytoplasm is cytosol plus organelles. Cytosol is the jelly-like intracellular fluid that holds dissolved nutrients."
	},
	{
		id: "o2",
		topic: "Organelles",
		question: "What is the function of mitochondria?",
		answer: "They produce ATP — the powerhouse of the cell. Folded inner membranes increase surface area so energy production is more efficient."
	},
	{
		id: "o3",
		topic: "Organelles",
		question: "How do rough ER and smooth ER differ?",
		answer: "Rough ER is studded with ribosomes and makes proteins for export, the plasma membrane, or lysosomes. Smooth ER makes lipids and carbohydrates, stores calcium, and detoxifies — it is especially well developed in the liver."
	},
	{
		id: "o4",
		topic: "Organelles",
		question: "What does the Golgi apparatus do?",
		answer: "It modifies, packages, and ships proteins in vesicles. Material from the rough ER is received, processed (for example, adding carbohydrate), then sent to the membrane, secreted, or stored as lysosomes."
	},
	{
		id: "o5",
		topic: "Organelles",
		question: "How do lysosomes differ from peroxisomes?",
		answer: "Lysosomes digest food, bacteria, and worn-out organelles. Peroxisomes break down hydrogen peroxide and help prevent oxygen free-radical damage."
	},
	{
		id: "o6",
		topic: "Organelles",
		question: "Where are ribosomes found, and what do they make?",
		answer: "Free ribosomes in the cytosol make proteins used inside the cell. Ribosomes on the rough ER make proteins for export, membranes, or lysosomes. Bacterial ribosomes differ from ours, which is why some antibiotics can kill bacteria without harming human cells."
	},
	{
		id: "o7",
		topic: "Organelles",
		question: "What is the nucleus’s job, and what is chromatin?",
		answer: "The nucleus controls protein synthesis via DNA. Chromatin is DNA wrapped around histone proteins. The nucleolus makes ribosomes. Nuclear pores let mRNA leave the nucleus."
	},
	{
		id: "c1",
		topic: "Cytoskeleton",
		question: "Name the three cytoskeleton fiber sizes.",
		answer: "Microfilaments (small), intermediate filaments (medium), and microtubules (large). Together they give the cell structure and movement — like a musculoskeletal system."
	},
	{
		id: "c2",
		topic: "Cytoskeleton",
		question: "What do cilia, flagella, and microvilli do?",
		answer: "Cilia beat to move mucus and debris. Flagella produce directional movement (for example sperm). Microvilli increase surface area for absorption."
	},
	{
		id: "c3",
		topic: "Cytoskeleton",
		question: "What is the mitotic spindle made of?",
		answer: "Microtubules plus centrosomes. Each centrosome is a pair of centrioles. The spindle attaches to chromosomes and pulls sister chromatids apart so each daughter cell gets the right DNA."
	},
	{
		id: "cl1",
		topic: "Clinical",
		question: "What happens in primary ciliary dyskinesia (PCD)?",
		answer: "Cells make non-functional cilia, so mucus is not cleared — chronic runny nose, cough, ear infections, and pneumonia. Embryonic cilia also help place organs, so people with PCD have about a 50% chance of situs inversus. It is not cystic fibrosis (a membrane-channel disease)."
	},
	{
		id: "dg1",
		topic: "Dogma",
		question: "What is the Central Dogma sequence?",
		answer: "DNA is transcribed to mRNA in the nucleus. mRNA is translated into protein at a ribosome. This is true of all life."
	},
	{
		id: "dg2",
		topic: "Dogma",
		question: "Which part of the Central Dogma is the source of a genetic disease?",
		answer: "Faulty DNA. Mutations produce abnormal proteins — for example CFTR in cystic fibrosis or hemoglobin in sickle-cell anemia."
	},
	{
		id: "cc1",
		topic: "Cell cycle",
		question: "What happens in S phase of interphase?",
		answer: "DNA is replicated. Each chromosome becomes two identical sister chromatids. G1 is growth; G2 prepares for mitosis. Most of a cell’s life is interphase."
	},
	{
		id: "cc2",
		topic: "Cell cycle",
		question: "Name the four phases of mitosis in order.",
		answer: "Prophase, metaphase, anaphase, telophase — followed by cytokinesis, the division of the cytoplasm."
	},
	{
		id: "cc3",
		topic: "Cell cycle",
		question: "What occurs during prophase?",
		answer: "Chromosomes condense, the nuclear envelope disappears so they are accessible, and the mitotic spindle begins to form."
	},
	{
		id: "cc4",
		topic: "Cell cycle",
		question: "What occurs during metaphase?",
		answer: "The spindle lines chromosomes up along the metaphase plate — the equator of the cell."
	},
	{
		id: "cc5",
		topic: "Cell cycle",
		question: "What occurs during anaphase?",
		answer: "Sister chromatids separate and migrate to opposite poles. This is the actual division of genetic material. Non-disjunction can happen here."
	},
	{
		id: "cc6",
		topic: "Cell cycle",
		question: "What happens in telophase, and what is cytokinesis?",
		answer: "Daughter nuclei form, the spindle disappears, and the nuclear envelope reforms. Cytokinesis is the division of everything in the cytoplasm, producing two cells."
	},
	{
		id: "cc7",
		topic: "Cell cycle",
		question: "What is the outcome of mitosis?",
		answer: "One division produces two genetically identical daughter cells. Mitosis preserves the original genetic information."
	},
	{
		id: "cc8",
		topic: "Cell cycle",
		question: "How do homologous chromosomes differ from sister chromatids?",
		answer: "Homologous chromosomes are the two non-identical copies of each chromosome (one from each parent) — humans have 23 pairs, 46 total. Sister chromatids are identical copies created when DNA replicates in S phase, joined until anaphase."
	}
];
var STORAGE_KEY = "cell-division-cards-known";
function loadKnown() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return /* @__PURE__ */ new Set();
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return /* @__PURE__ */ new Set();
		return new Set(parsed.filter((id) => typeof id === "string"));
	} catch {
		return /* @__PURE__ */ new Set();
	}
}
function persistKnown(ids) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}
function shuffleIds(ids) {
	const next = [...ids];
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		const b = next[j];
		if (a === void 0 || b === void 0) continue;
		next[i] = b;
		next[j] = a;
	}
	return next;
}
function DeckApp() {
	const [topic, setTopic] = (0, import_react.useState)("All");
	const [order, setOrder] = (0, import_react.useState)(() => CARDS.map((c) => c.id));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [known, setKnown] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setKnown(loadKnown());
		setHydrated(true);
	}, []);
	const deck = (0, import_react.useMemo)(() => {
		const byId = new Map(CARDS.map((c) => [c.id, c]));
		return order.map((id) => byId.get(id)).filter((c) => Boolean(c)).filter((c) => topic === "All" || c.topic === topic);
	}, [order, topic]);
	const card = deck[index] ?? deck[0];
	const total = deck.length;
	const safeIndex = total === 0 ? 0 : Math.min(index, total - 1);
	const progress = total === 0 ? 0 : (safeIndex + 1) / total * 100;
	const knownCount = CARDS.filter((c) => known.has(c.id)).length;
	(0, import_react.useEffect)(() => {
		setIndex(0);
		setFlipped(false);
	}, [topic]);
	(0, import_react.useEffect)(() => {
		if (index >= deck.length && deck.length > 0) {
			setIndex(0);
			setFlipped(false);
		}
	}, [deck.length, index]);
	const go = (0, import_react.useCallback)((delta) => {
		if (total === 0) return;
		setIndex((i) => {
			const next = i + delta;
			if (next < 0 || next >= total) return i;
			return next;
		});
		setFlipped(false);
	}, [total]);
	const flip = (0, import_react.useCallback)(() => setFlipped((f) => !f), []);
	const shuffleDeck = (0, import_react.useCallback)(() => {
		setOrder((prev) => shuffleIds(prev));
		setIndex(0);
		setFlipped(false);
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		setOrder(CARDS.map((c) => c.id));
		setIndex(0);
		setFlipped(false);
		setTopic("All");
	}, []);
	const toggleKnown = (0, import_react.useCallback)(() => {
		if (!card) return;
		setKnown((prev) => {
			const next = new Set(prev);
			if (next.has(card.id)) next.delete(card.id);
			else next.add(card.id);
			persistKnown(next);
			return next;
		});
	}, [card]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
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
			} else if (e.key === "s" || e.key === "S") shuffleDeck();
			else if (e.key === "k" || e.key === "K") toggleKnown();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		flip,
		go,
		shuffleDeck,
		toggleKnown
	]);
	if (!card) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "No cards in this topic."
	});
	const isKnown = known.has(card.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-sage",
						children: "Lecture 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl",
						children: "Cell Division Cards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: "The cell and cell division. Flip a card, then mark what you know."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm tabular-nums text-muted",
					children: [hydrated ? knownCount : 0, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [
							" / ",
							CARDS.length,
							" known"
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				role: "tablist",
				"aria-label": "Topics",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicChip, {
					label: "All",
					active: topic === "All",
					onClick: () => setTopic("All")
				}), TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicChip, {
					label: t,
					active: topic === t,
					onClick: () => setTopic(t)
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-baseline justify-between text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						safeIndex + 1,
						" / ",
						total
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: card.topic })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 overflow-hidden rounded-full bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-sage transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
					style: { width: `${progress}%` }
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scene mx-auto h-[22rem] w-full max-w-xl sm:h-[24rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("flip-card", flipped && "is-flipped"),
					onClick: flip,
					"aria-label": flipped ? "Show question" : "Show answer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flip-face border border-border bg-surface p-8 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage",
								children: "Question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-medium leading-snug text-fg sm:text-2xl",
								children: card.question
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute bottom-6 left-8 right-8 text-xs text-subtle",
								children: "Tap or press Space to flip"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flip-face flip-back border border-border bg-surface-2 p-8 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage",
							children: "Answer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-fg sm:text-lg",
							children: card.answer
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => go(-1),
						disabled: safeIndex === 0,
						"aria-label": "Previous card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), "Prev"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: flip,
						children: "Flip"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => go(1),
						disabled: safeIndex >= total - 1,
						"aria-label": "Next card",
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: isKnown ? "default" : "outline",
						onClick: toggleKnown,
						"aria-pressed": isKnown,
						children: [isKnown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), isKnown ? "Unmark" : "I know this"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: shuffleDeck,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {}), "Shuffle"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: reset,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Reset"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-subtle",
				children: "Keyboard: Space flip · arrows navigate · S shuffle · K mark known"
			})
		]
	});
}
function TopicChip({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "tab",
		"aria-selected": active,
		onClick,
		className: cn("h-9 shrink-0 rounded-full border px-3.5 text-sm font-medium transition-colors duration-[var(--motion-quick)]", active ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface text-muted hover:border-border-strong hover:text-fg"),
		children: label
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckApp, {})
	});
}
//#endregion
export { Home as component };
