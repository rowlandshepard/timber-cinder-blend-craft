import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as RotateCcw, o as ChevronLeft, r as Shuffle, s as Check, t as Undo2 } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cr2fzsSx.js
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
	"Overview",
	"Junctions",
	"Growth",
	"Death",
	"Anatomy",
	"Organelles",
	"Cytoskeleton",
	"Clinical",
	"Dogma",
	"Cell cycle",
	"Summary"
];
var CARDS = [
	{
		id: "ov1",
		topic: "Overview",
		question: "How does cell shape relate to function? Name examples from different body regions.",
		answer: "Structure determines function. Skin cells form flat sheets; respiratory cells are tall with cilia; skeletal muscle is striated; neurons are long; sperm have flagella. Each shape matches its job.",
		image: "/slides/image2.jpg",
		imageAlt: "Lecture slide: many cell types from the body"
	},
	{
		id: "ov2",
		topic: "Overview",
		question: "Which image shows cells from the skin, and why?",
		answer: "Sheets of flat cells that line a surface. Skin epithelium is a barrier of stacked flattened cells (not ciliated columns, not striated muscle).",
		image: "/slides/image4.jpg",
		imageAlt: "Sheets of flat cells lining a surface"
	},
	{
		id: "ov3",
		topic: "Overview",
		question: "Which image shows cells from the respiratory tract, and why?",
		answer: "Tall cells with cilia. Airway epithelium uses beating cilia to move mucus and debris out of the tract.",
		image: "/slides/image3.jpg",
		imageAlt: "Tall ciliated cells from the respiratory tract"
	},
	{
		id: "ov4",
		topic: "Overview",
		question: "Which image shows cells from skeletal muscle, and why?",
		answer: "Striated cells. Skeletal muscle fibers are long, striped cells built to contract.",
		image: "/slides/image5.jpg",
		imageAlt: "Striated skeletal muscle cells"
	},
	{
		id: "j1",
		topic: "Junctions",
		question: "Name the three types of intercellular junctions and their main roles.",
		answer: "Tight junctions seal (no paracellular leak). Desmosomes give mechanical strength. Gap junctions form channels so molecules and signals can pass between cells.",
		image: "/slides/image6.jpg",
		imageAlt: "Lecture diagram of tight junctions, desmosomes, and gap junctions"
	},
	{
		id: "j2",
		topic: "Junctions",
		question: "What do tight junctions do?",
		answer: "They completely fuse neighboring membranes, block substances from slipping between cells, and force material to travel through the cells.",
		image: "/slides/image6.jpg",
		imageAlt: "Tight junction region of the lecture diagram"
	},
	{
		id: "j3",
		topic: "Junctions",
		question: "What do desmosomes do?",
		answer: "They do not fully fuse cells. They are the strongest mechanical attachments, holding tissues together under stress.",
		image: "/slides/image6.jpg",
		imageAlt: "Desmosome region of the lecture diagram"
	},
	{
		id: "j4",
		topic: "Junctions",
		question: "What do gap junctions do?",
		answer: "They open a passageway between cells so small molecules can flow freely and coordinate activity (for example in heart muscle).",
		image: "/slides/image6.jpg",
		imageAlt: "Gap junction region of the lecture diagram"
	},
	{
		id: "g1",
		topic: "Growth",
		question: "Define hypertrophy versus hyperplasia.",
		answer: "Hypertrophy = cells get larger. Hyperplasia = more cells. Weight training is a classic hypertrophy example.",
		image: "/slides/hypertrophy.svg",
		imageAlt: "Diagram comparing normal cells to larger hypertrophic cells"
	},
	{
		id: "g2",
		topic: "Growth",
		question: "Which pattern is hyperplasia?",
		answer: "An increase in the number of cells in an area, not just their size.",
		image: "/slides/hyperplasia.svg",
		imageAlt: "Diagram of increased cell number"
	},
	{
		id: "g3",
		topic: "Growth",
		question: "What is atrophy?",
		answer: "Shrinkage of tissue by a decrease in cell size or cell number (for example unused muscle).",
		image: "/slides/atrophy.svg",
		imageAlt: "Diagram of smaller or fewer cells"
	},
	{
		id: "g4",
		topic: "Growth",
		question: "What is metaplasia?",
		answer: "One mature cell type changes into another — a switch, not just more of the same cells.",
		image: "/slides/metaplasia.svg",
		imageAlt: "Diagram of one cell type changing into another"
	},
	{
		id: "g5",
		topic: "Growth",
		question: "What are neoplasia and dysplasia?",
		answer: "Neoplasia is out-of-control growth that forms a tumor. Dysplasia is the disordered, pre-neoplastic change that can come first.",
		image: "/slides/neoplasia.svg",
		imageAlt: "Diagram of disordered uncontrolled growth"
	},
	{
		id: "d1",
		topic: "Death",
		question: "How does necrosis differ from apoptosis?",
		answer: "Necrosis is death after severe damage: contents spill and trigger inflammation. Apoptosis is programmed suicide: lysosomes digest contents inside, so nothing spills and there is no immune flare.",
		image: "/slides/image7.jpg",
		imageAlt: "Lecture image of embryonic paddle apoptosis forming digits"
	},
	{
		id: "d2",
		topic: "Death",
		question: "Give the embryonic example of apoptosis from lecture.",
		answer: "Apoptosis of the embryonic paddle carves out the spaces between digits so fingers and toes form. If it fails, digits stay webbed.",
		image: "/slides/image7.jpg",
		imageAlt: "Embryonic paddle with digits forming by apoptosis"
	},
	{
		id: "a1",
		topic: "Anatomy",
		question: "What are the three basic parts of a eukaryotic cell?",
		answer: "Plasma membrane, nucleus, and cytoplasm. Cytoplasm = cytosol + organelles.",
		image: "/slides/image2.jpg",
		imageAlt: "Standard eukaryotic cell with membrane, nucleus, and cytoplasm"
	},
	{
		id: "a2",
		topic: "Anatomy",
		question: "What is cytosol?",
		answer: "The jelly-like intracellular fluid that fills the cell and holds dissolved nutrients. Together with organelles it makes cytoplasm.",
		image: "/slides/image2.jpg",
		imageAlt: "Cell diagram highlighting cytoplasm"
	},
	{
		id: "o1",
		topic: "Organelles",
		question: "What is the function of mitochondria?",
		answer: "ATP production — the powerhouse. Folded inner membranes increase surface area so energy-making is more efficient.",
		image: "/slides/image8.jpg",
		imageAlt: "Lecture drawing of a mitochondrion with folded membranes"
	},
	{
		id: "o2",
		topic: "Organelles",
		question: "How do rough ER and smooth ER differ?",
		answer: "Rough ER has ribosomes and makes proteins for export, the membrane, or lysosomes. Smooth ER makes lipids and carbohydrates, stores calcium, and detoxifies (especially in liver).",
		image: "/slides/image9.jpg",
		imageAlt: "Lecture diagram of rough ER, smooth ER, nucleus, and ribosomes"
	},
	{
		id: "o3",
		topic: "Organelles",
		question: "What does the Golgi apparatus do?",
		answer: "It modifies, packages, and ships proteins in vesicles — “RER part II.” Cargo can enter the membrane, be secreted, or become lysosomes.",
		image: "/slides/image11.jpg",
		imageAlt: "Lecture pathway of protein synthesis, modification, and shipping"
	},
	{
		id: "o4",
		topic: "Organelles",
		question: "What do lysosomes do?",
		answer: "Digestion. Enzyme-filled vesicles from the RER break down food, bacteria, and worn-out organelles — the cell’s digestive system.",
		image: "/slides/image12.jpg",
		imageAlt: "Lecture drawing of a lysosome"
	},
	{
		id: "o5",
		topic: "Organelles",
		question: "What do peroxisomes do?",
		answer: "Protection. They break down hydrogen peroxide and limit oxygen free radicals — like a lymphatic/immune organelle.",
		image: "/slides/image13.jpg",
		imageAlt: "Lecture drawing of peroxisomes scavenging free radicals"
	},
	{
		id: "o6",
		topic: "Organelles",
		question: "Where are ribosomes found, and what do they make?",
		answer: "Free in cytosol → proteins for use inside the cell. On rough ER → proteins for export, membranes, or lysosomes. Bacterial ribosomes differ, which is why some antibiotics can spare human cells.",
		image: "/slides/image14.jpg",
		imageAlt: "Lecture diagram of ribosomal subunits"
	},
	{
		id: "o7",
		topic: "Organelles",
		question: "What does the nucleus do? Define chromatin.",
		answer: "It controls protein synthesis (the “brain”). Chromatin is DNA plus histones. The nucleolus makes ribosomes. Nuclear pores let mRNA leave.",
		image: "/slides/image21.jpg",
		imageAlt: "Lecture cartoon of the nucleus"
	},
	{
		id: "o8",
		topic: "Organelles",
		question: "What is the nuclear envelope, and how does mRNA leave?",
		answer: "A specialized double membrane with pores. mRNA exits through nuclear pores to reach ribosomes in the cytoplasm or on RER.",
		image: "/slides/image23.jpg",
		imageAlt: "Lecture diagram of nucleus, nucleolus, pores, and envelope"
	},
	{
		id: "c1",
		topic: "Cytoskeleton",
		question: "Name the three cytoskeleton fiber sizes.",
		answer: "Microfilaments (small), intermediate filaments (medium), microtubules (large). They provide structure and movement — the cell’s musculoskeletal system.",
		image: "/slides/image16.jpg",
		imageAlt: "Lecture diagram of centrosomes and microtubules"
	},
	{
		id: "c2",
		topic: "Cytoskeleton",
		question: "What do cilia, flagella, and microvilli do?",
		answer: "Cilia beat to clear mucus. Flagella drive directional movement (sperm). Microvilli increase surface area for absorption.",
		image: "/slides/image17.jpg",
		imageAlt: "Lecture figure of cilia power and return strokes"
	},
	{
		id: "c3",
		topic: "Cytoskeleton",
		question: "What is the mitotic spindle made of, and what does it do?",
		answer: "Microtubules plus centrosomes (pairs of centrioles). The spindle pulls sister chromatids so each daughter cell gets the right DNA.",
		image: "/slides/image16.jpg",
		imageAlt: "Mitotic spindle formed from microtubules and centrosomes"
	},
	{
		id: "cl1",
		topic: "Clinical",
		question: "Enrique has situs inversus and recurrent pneumonia but not cystic fibrosis. What disease is suspected?",
		answer: "Primary ciliary dyskinesia (PCD): cells make non-functional cilia, so mucus is not cleared.",
		image: "/slides/image19.jpg",
		imageAlt: "Lecture case-study figure for situs inversus and PCD"
	},
	{
		id: "cl2",
		topic: "Clinical",
		question: "How could non-functional cilia cause runny nose, cough, and pneumonia?",
		answer: "Without a working mucociliary escalator, mucus and microbes sit in the airways and sinuses, leading to chronic infection.",
		image: "/slides/image20.jpg",
		imageAlt: "Normal cilia versus Enrique’s disordered cilia"
	},
	{
		id: "cl3",
		topic: "Clinical",
		question: "Why do people with PCD have a 50% chance of situs inversus?",
		answer: "Embryonic cilia help place organs. If they do not beat, left–right placement is random — about half of PCD patients have reversed organs.",
		image: "/slides/image19.jpg",
		imageAlt: "Situs inversus case image from the lecture"
	},
	{
		id: "dg1",
		topic: "Dogma",
		question: "State the Central Dogma.",
		answer: "DNA is transcribed to mRNA in the nucleus. mRNA is translated into protein at a ribosome. True of all life.",
		image: "/slides/image24.jpg",
		imageAlt: "Lecture Central Dogma: DNA to RNA to protein"
	},
	{
		id: "dg2",
		topic: "Dogma",
		question: "Which part of the Central Dogma is the source of a genetic disease?",
		answer: "Faulty DNA. Mutations produce abnormal proteins (CFTR in cystic fibrosis, hemoglobin in sickle-cell anemia).",
		image: "/slides/image24.jpg",
		imageAlt: "Central Dogma diagram used to locate the source of genetic disease"
	},
	{
		id: "dg3",
		topic: "Dogma",
		question: "Give examples of proteins the nucleus ultimately controls.",
		answer: "Receptors (insulin, LDL), channels (CFTR), hemoglobin, histones, lysosomal and digestive enzymes, pigments for hair and eye color.",
		image: "/slides/image26.jpg",
		imageAlt: "Lecture figure of transcription"
	},
	{
		id: "cc1",
		topic: "Cell cycle",
		question: "What are the two big stages of the cell cycle?",
		answer: "Interphase (most of a cell’s life: activity and growth) and mitosis (division). All cells divide, including prokaryotes.",
		image: "/slides/image29.jpg",
		imageAlt: "Lecture cell-cycle wheel"
	},
	{
		id: "cc2",
		topic: "Cell cycle",
		question: "How do homologous chromosomes differ from sister chromatids?",
		answer: "Homologs are the two non-identical parental copies (23 pairs in humans). Sister chromatids are identical copies made in S phase, joined until anaphase.",
		image: "/slides/image33.jpg",
		imageAlt: "Lecture comparison of homologous pairs versus sisters"
	},
	{
		id: "cc3",
		topic: "Cell cycle",
		question: "What happens in G1, S, and G2 of interphase?",
		answer: "G1: growth and normal work. S: DNA replicates and sister chromatids form. G2: preparation for mitosis.",
		image: "/slides/image34.jpg",
		imageAlt: "Lecture interphase cell with chromatin and centrosomes"
	},
	{
		id: "cc4",
		topic: "Cell cycle",
		question: "Name the four phases of mitosis in order.",
		answer: "Prophase → metaphase → anaphase → telophase, then cytokinesis divides the cytoplasm.",
		image: "/slides/image36.jpg",
		imageAlt: "Cells in various phases of mitosis"
	},
	{
		id: "cc5",
		topic: "Cell cycle",
		question: "What occurs during prophase?",
		answer: "Chromosomes condense, the nuclear envelope disappears, and the mitotic spindle begins to form.",
		image: "/slides/image37.jpg",
		imageAlt: "Actual cell in prophase"
	},
	{
		id: "cc6",
		topic: "Cell cycle",
		question: "What occurs during metaphase?",
		answer: "The spindle lines sister chromatids up on the metaphase plate — the equator of the cell.",
		image: "/slides/image40.jpg",
		imageAlt: "Actual cell in metaphase"
	},
	{
		id: "cc7",
		topic: "Cell cycle",
		question: "What occurs during anaphase?",
		answer: "Sister chromatids separate and move to opposite poles — the actual division of genetic material. Non-disjunction can happen here.",
		image: "/slides/image42.jpg",
		imageAlt: "Actual cell in anaphase"
	},
	{
		id: "cc8",
		topic: "Cell cycle",
		question: "What happens in telophase, and what is cytokinesis?",
		answer: "Daughter nuclei form, the spindle fades, and the nuclear envelope reforms. Cytokinesis splits the cytoplasm (cleavage furrow in animal cells).",
		image: "/slides/image39.jpg",
		imageAlt: "Lecture figure of telophase and cleavage furrow"
	},
	{
		id: "s1",
		topic: "Summary",
		question: "What is the outcome of mitosis, and why does that matter?",
		answer: "One division → two genetically identical daughter cells. Mitosis carefully preserves genetic information for growth, healing, and maintenance.",
		image: "/slides/image45.jpg",
		imageAlt: "Mitosis summary from the lecture: identical daughter cells"
	},
	{
		id: "s2",
		topic: "Summary",
		question: "How do structure–function and clinical disease connect in this lecture?",
		answer: "Anatomy controls physiology from organelle to tissue. Many disorders (PCD, CF, sickle cell) map to a specific organelle, cytoskeletal, or DNA defect.",
		image: "/slides/image1.jpg",
		imageAlt: "Lecture title slide: The Cell and Cell Division"
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
						children: "The cell and cell division. Flip for the lecture image and answer."
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
				className: "mx-auto h-[28rem] w-full max-w-2xl sm:h-[34rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flip-card", flipped && "is-flipped"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flip-face flex flex-col border border-border bg-surface p-7 text-left shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-9",
						onClick: flip,
						"aria-label": "Show answer and lecture image",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage",
								children: "Question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-medium leading-snug text-fg sm:text-2xl",
								children: card.question
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-auto text-xs text-subtle",
								children: "Tap the card or Flip to see the lecture slide"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flip-face flip-back flex flex-col gap-3 overflow-hidden border border-border bg-surface-2 p-4 text-left shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-5",
						onClick: flip,
						"aria-label": "Show question",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage",
								children: "Lecture slide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-0 flex-[1.6] overflow-hidden rounded-lg border border-border bg-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: card.image,
									alt: card.imageAlt,
									className: "h-full w-full object-contain",
									draggable: false
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-h-[32%] overflow-y-auto text-sm leading-relaxed text-fg sm:text-base",
								children: card.answer
							})
						]
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
