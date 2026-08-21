export type Topic =
  | "Junctions"
  | "Growth"
  | "Death"
  | "Organelles"
  | "Cytoskeleton"
  | "Clinical"
  | "Dogma"
  | "Cell cycle";

export type Flashcard = {
  id: string;
  topic: Topic;
  question: string;
  answer: string;
};

export const TOPICS: Topic[] = [
  "Junctions",
  "Growth",
  "Death",
  "Organelles",
  "Cytoskeleton",
  "Clinical",
  "Dogma",
  "Cell cycle",
];

export const CARDS: Flashcard[] = [
  {
    id: "j1",
    topic: "Junctions",
    question:
      "What are the three types of intercellular junctions and their main roles?",
    answer:
      "Tight junctions seal cells so substances cannot pass between them. Desmosomes give mechanical strength. Gap junctions form channels so molecules can flow and cells can coordinate.",
  },
  {
    id: "g1",
    topic: "Growth",
    question: "Define hypertrophy versus hyperplasia.",
    answer:
      "Hypertrophy is an increase in cell size. Hyperplasia is an increase in cell number.",
  },
  {
    id: "g2",
    topic: "Growth",
    question:
      "What do atrophy, metaplasia, and neoplasia mean?",
    answer:
      "Atrophy: shrinkage by smaller or fewer cells. Metaplasia: one cell type changes into another. Neoplasia: uncontrolled growth that forms a tumor. Dysplasia is a pre-neoplastic change.",
  },
  {
    id: "d1",
    topic: "Death",
    question: "How does necrosis differ from apoptosis?",
    answer:
      "Necrosis follows severe damage: contents spill out and trigger inflammation. Apoptosis is programmed death: lysosomes digest contents inside the cell, so there is no spill and no inflammatory response.",
  },
  {
    id: "o1",
    topic: "Organelles",
    question: "What is cytoplasm?",
    answer: "Cytoplasm is cytosol plus organelles. Cytosol is the jelly-like intracellular fluid that holds dissolved nutrients.",
  },
  {
    id: "o2",
    topic: "Organelles",
    question: "What is the function of mitochondria?",
    answer:
      "They produce ATP — the powerhouse of the cell. Folded inner membranes increase surface area so energy production is more efficient.",
  },
  {
    id: "o3",
    topic: "Organelles",
    question: "How do rough ER and smooth ER differ?",
    answer:
      "Rough ER is studded with ribosomes and makes proteins for export, the plasma membrane, or lysosomes. Smooth ER makes lipids and carbohydrates, stores calcium, and detoxifies — it is especially well developed in the liver.",
  },
  {
    id: "o4",
    topic: "Organelles",
    question: "What does the Golgi apparatus do?",
    answer:
      "It modifies, packages, and ships proteins in vesicles. Material from the rough ER is received, processed (for example, adding carbohydrate), then sent to the membrane, secreted, or stored as lysosomes.",
  },
  {
    id: "o5",
    topic: "Organelles",
    question: "How do lysosomes differ from peroxisomes?",
    answer:
      "Lysosomes digest food, bacteria, and worn-out organelles. Peroxisomes break down hydrogen peroxide and help prevent oxygen free-radical damage.",
  },
  {
    id: "o6",
    topic: "Organelles",
    question: "Where are ribosomes found, and what do they make?",
    answer:
      "Free ribosomes in the cytosol make proteins used inside the cell. Ribosomes on the rough ER make proteins for export, membranes, or lysosomes. Bacterial ribosomes differ from ours, which is why some antibiotics can kill bacteria without harming human cells.",
  },
  {
    id: "o7",
    topic: "Organelles",
    question: "What is the nucleus’s job, and what is chromatin?",
    answer:
      "The nucleus controls protein synthesis via DNA. Chromatin is DNA wrapped around histone proteins. The nucleolus makes ribosomes. Nuclear pores let mRNA leave the nucleus.",
  },
  {
    id: "c1",
    topic: "Cytoskeleton",
    question: "Name the three cytoskeleton fiber sizes.",
    answer:
      "Microfilaments (small), intermediate filaments (medium), and microtubules (large). Together they give the cell structure and movement — like a musculoskeletal system.",
  },
  {
    id: "c2",
    topic: "Cytoskeleton",
    question: "What do cilia, flagella, and microvilli do?",
    answer:
      "Cilia beat to move mucus and debris. Flagella produce directional movement (for example sperm). Microvilli increase surface area for absorption.",
  },
  {
    id: "c3",
    topic: "Cytoskeleton",
    question: "What is the mitotic spindle made of?",
    answer:
      "Microtubules plus centrosomes. Each centrosome is a pair of centrioles. The spindle attaches to chromosomes and pulls sister chromatids apart so each daughter cell gets the right DNA.",
  },
  {
    id: "cl1",
    topic: "Clinical",
    question: "What happens in primary ciliary dyskinesia (PCD)?",
    answer:
      "Cells make non-functional cilia, so mucus is not cleared — chronic runny nose, cough, ear infections, and pneumonia. Embryonic cilia also help place organs, so people with PCD have about a 50% chance of situs inversus. It is not cystic fibrosis (a membrane-channel disease).",
  },
  {
    id: "dg1",
    topic: "Dogma",
    question: "What is the Central Dogma sequence?",
    answer:
      "DNA is transcribed to mRNA in the nucleus. mRNA is translated into protein at a ribosome. This is true of all life.",
  },
  {
    id: "dg2",
    topic: "Dogma",
    question:
      "Which part of the Central Dogma is the source of a genetic disease?",
    answer:
      "Faulty DNA. Mutations produce abnormal proteins — for example CFTR in cystic fibrosis or hemoglobin in sickle-cell anemia.",
  },
  {
    id: "cc1",
    topic: "Cell cycle",
    question: "What happens in S phase of interphase?",
    answer:
      "DNA is replicated. Each chromosome becomes two identical sister chromatids. G1 is growth; G2 prepares for mitosis. Most of a cell’s life is interphase.",
  },
  {
    id: "cc2",
    topic: "Cell cycle",
    question: "Name the four phases of mitosis in order.",
    answer:
      "Prophase, metaphase, anaphase, telophase — followed by cytokinesis, the division of the cytoplasm.",
  },
  {
    id: "cc3",
    topic: "Cell cycle",
    question: "What occurs during prophase?",
    answer:
      "Chromosomes condense, the nuclear envelope disappears so they are accessible, and the mitotic spindle begins to form.",
  },
  {
    id: "cc4",
    topic: "Cell cycle",
    question: "What occurs during metaphase?",
    answer:
      "The spindle lines chromosomes up along the metaphase plate — the equator of the cell.",
  },
  {
    id: "cc5",
    topic: "Cell cycle",
    question: "What occurs during anaphase?",
    answer:
      "Sister chromatids separate and migrate to opposite poles. This is the actual division of genetic material. Non-disjunction can happen here.",
  },
  {
    id: "cc6",
    topic: "Cell cycle",
    question: "What happens in telophase, and what is cytokinesis?",
    answer:
      "Daughter nuclei form, the spindle disappears, and the nuclear envelope reforms. Cytokinesis is the division of everything in the cytoplasm, producing two cells.",
  },
  {
    id: "cc7",
    topic: "Cell cycle",
    question: "What is the outcome of mitosis?",
    answer:
      "One division produces two genetically identical daughter cells. Mitosis preserves the original genetic information.",
  },
  {
    id: "cc8",
    topic: "Cell cycle",
    question:
      "How do homologous chromosomes differ from sister chromatids?",
    answer:
      "Homologous chromosomes are the two non-identical copies of each chromosome (one from each parent) — humans have 23 pairs, 46 total. Sister chromatids are identical copies created when DNA replicates in S phase, joined until anaphase.",
  },
];
