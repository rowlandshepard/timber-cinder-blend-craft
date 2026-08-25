export type Topic =
  | "Overview"
  | "Junctions"
  | "Growth"
  | "Death"
  | "Anatomy"
  | "Organelles"
  | "Cytoskeleton"
  | "Clinical"
  | "Dogma"
  | "Cell cycle"
  | "Summary";

export type Flashcard = {
  id: string;
  topic: Topic;
  question: string;
  answer: string;
  image: string;
  imageAlt: string;
};

export const TOPICS: Topic[] = [
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
  "Summary",
];

export const CARDS: Flashcard[] = [
  {
    id: "ov1",
    topic: "Overview",
    question:
      "How does cell shape relate to function? Name examples from different body regions.",
    answer:
      "Structure determines function. Skin cells form flat sheets; respiratory cells are tall with cilia; skeletal muscle is striated; neurons are long; sperm have flagella. Each shape matches its job.",
    image: "/slides/image2.jpg",
    imageAlt: "Lecture slide: many cell types from the body",
  },
  {
    id: "ov2",
    topic: "Overview",
    question: "Which image shows cells from the skin, and why?",
    answer:
      "Sheets of flat cells that line a surface. Skin epithelium is a barrier of stacked flattened cells (not ciliated columns, not striated muscle).",
    image: "/slides/image4.jpg",
    imageAlt: "Sheets of flat cells lining a surface",
  },
  {
    id: "ov3",
    topic: "Overview",
    question: "Which image shows cells from the respiratory tract, and why?",
    answer:
      "Tall cells with cilia. Airway epithelium uses beating cilia to move mucus and debris out of the tract.",
    image: "/slides/image3.jpg",
    imageAlt: "Tall ciliated cells from the respiratory tract",
  },
  {
    id: "ov4",
    topic: "Overview",
    question: "Which image shows cells from skeletal muscle, and why?",
    answer:
      "Striated cells. Skeletal muscle fibers are long, striped cells built to contract.",
    image: "/slides/image5.jpg",
    imageAlt: "Striated skeletal muscle cells",
  },
  {
    id: "j1",
    topic: "Junctions",
    question:
      "Name the three types of intercellular junctions and their main roles.",
    answer:
      "Tight junctions seal (no paracellular leak). Desmosomes give mechanical strength. Gap junctions form channels so molecules and signals can pass between cells.",
    image: "/slides/image6.jpg",
    imageAlt: "Lecture diagram of tight junctions, desmosomes, and gap junctions",
  },
  {
    id: "j2",
    topic: "Junctions",
    question: "What do tight junctions do?",
    answer:
      "They completely fuse neighboring membranes, block substances from slipping between cells, and force material to travel through the cells.",
    image: "/slides/image6.jpg",
    imageAlt: "Tight junction region of the lecture diagram",
  },
  {
    id: "j3",
    topic: "Junctions",
    question: "What do desmosomes do?",
    answer:
      "They do not fully fuse cells. They are the strongest mechanical attachments, holding tissues together under stress.",
    image: "/slides/image6.jpg",
    imageAlt: "Desmosome region of the lecture diagram",
  },
  {
    id: "j4",
    topic: "Junctions",
    question: "What do gap junctions do?",
    answer:
      "They open a passageway between cells so small molecules can flow freely and coordinate activity (for example in heart muscle).",
    image: "/slides/image6.jpg",
    imageAlt: "Gap junction region of the lecture diagram",
  },
  {
    id: "g1",
    topic: "Growth",
    question: "Define hypertrophy versus hyperplasia.",
    answer:
      "Hypertrophy = cells get larger. Hyperplasia = more cells. Weight training is a classic hypertrophy example.",
    image: "/slides/hypertrophy.svg",
    imageAlt: "Diagram comparing normal cells to larger hypertrophic cells",
  },
  {
    id: "g2",
    topic: "Growth",
    question: "Which pattern is hyperplasia?",
    answer:
      "An increase in the number of cells in an area, not just their size.",
    image: "/slides/hyperplasia.svg",
    imageAlt: "Diagram of increased cell number",
  },
  {
    id: "g3",
    topic: "Growth",
    question: "What is atrophy?",
    answer:
      "Shrinkage of tissue by a decrease in cell size or cell number (for example unused muscle).",
    image: "/slides/atrophy.svg",
    imageAlt: "Diagram of smaller or fewer cells",
  },
  {
    id: "g4",
    topic: "Growth",
    question: "What is metaplasia?",
    answer:
      "One mature cell type changes into another — a switch, not just more of the same cells.",
    image: "/slides/metaplasia.svg",
    imageAlt: "Diagram of one cell type changing into another",
  },
  {
    id: "g5",
    topic: "Growth",
    question: "What are neoplasia and dysplasia?",
    answer:
      "Neoplasia is out-of-control growth that forms a tumor. Dysplasia is the disordered, pre-neoplastic change that can come first.",
    image: "/slides/neoplasia.svg",
    imageAlt: "Diagram of disordered uncontrolled growth",
  },
  {
    id: "d1",
    topic: "Death",
    question: "How does necrosis differ from apoptosis?",
    answer:
      "Necrosis is death after severe damage: contents spill and trigger inflammation. Apoptosis is programmed suicide: lysosomes digest contents inside, so nothing spills and there is no immune flare.",
    image: "/slides/image7.jpg",
    imageAlt: "Lecture image of embryonic paddle apoptosis forming digits",
  },
  {
    id: "d2",
    topic: "Death",
    question:
      "Give the embryonic example of apoptosis from lecture.",
    answer:
      "Apoptosis of the embryonic paddle carves out the spaces between digits so fingers and toes form. If it fails, digits stay webbed.",
    image: "/slides/image7.jpg",
    imageAlt: "Embryonic paddle with digits forming by apoptosis",
  },
  {
    id: "a1",
    topic: "Anatomy",
    question: "What are the three basic parts of a eukaryotic cell?",
    answer:
      "Plasma membrane, nucleus, and cytoplasm. Cytoplasm = cytosol + organelles.",
    image: "/slides/image2.jpg",
    imageAlt: "Standard eukaryotic cell with membrane, nucleus, and cytoplasm",
  },
  {
    id: "a2",
    topic: "Anatomy",
    question: "What is cytosol?",
    answer:
      "The jelly-like intracellular fluid that fills the cell and holds dissolved nutrients. Together with organelles it makes cytoplasm.",
    image: "/slides/image2.jpg",
    imageAlt: "Cell diagram highlighting cytoplasm",
  },
  {
    id: "o1",
    topic: "Organelles",
    question: "What is the function of mitochondria?",
    answer:
      "ATP production — the powerhouse. Folded inner membranes increase surface area so energy-making is more efficient.",
    image: "/slides/image8.jpg",
    imageAlt: "Lecture drawing of a mitochondrion with folded membranes",
  },
  {
    id: "o2",
    topic: "Organelles",
    question: "How do rough ER and smooth ER differ?",
    answer:
      "Rough ER has ribosomes and makes proteins for export, the membrane, or lysosomes. Smooth ER makes lipids and carbohydrates, stores calcium, and detoxifies (especially in liver).",
    image: "/slides/image9.jpg",
    imageAlt: "Lecture diagram of rough ER, smooth ER, nucleus, and ribosomes",
  },
  {
    id: "o3",
    topic: "Organelles",
    question: "What does the Golgi apparatus do?",
    answer:
      "It modifies, packages, and ships proteins in vesicles — “RER part II.” Cargo can enter the membrane, be secreted, or become lysosomes.",
    image: "/slides/image11.jpg",
    imageAlt: "Lecture pathway of protein synthesis, modification, and shipping",
  },
  {
    id: "o4",
    topic: "Organelles",
    question: "What do lysosomes do?",
    answer:
      "Digestion. Enzyme-filled vesicles from the RER break down food, bacteria, and worn-out organelles — the cell’s digestive system.",
    image: "/slides/image12.jpg",
    imageAlt: "Lecture drawing of a lysosome",
  },
  {
    id: "o5",
    topic: "Organelles",
    question: "What do peroxisomes do?",
    answer:
      "Protection. They break down hydrogen peroxide and limit oxygen free radicals — like a lymphatic/immune organelle.",
    image: "/slides/image13.jpg",
    imageAlt: "Lecture drawing of peroxisomes scavenging free radicals",
  },
  {
    id: "o6",
    topic: "Organelles",
    question: "Where are ribosomes found, and what do they make?",
    answer:
      "Free in cytosol → proteins for use inside the cell. On rough ER → proteins for export, membranes, or lysosomes. Bacterial ribosomes differ, which is why some antibiotics can spare human cells.",
    image: "/slides/image14.jpg",
    imageAlt: "Lecture diagram of ribosomal subunits",
  },
  {
    id: "o7",
    topic: "Organelles",
    question: "What does the nucleus do? Define chromatin.",
    answer:
      "It controls protein synthesis (the “brain”). Chromatin is DNA plus histones. The nucleolus makes ribosomes. Nuclear pores let mRNA leave.",
    image: "/slides/image21.jpg",
    imageAlt: "Lecture cartoon of the nucleus",
  },
  {
    id: "o8",
    topic: "Organelles",
    question:
      "What is the nuclear envelope, and how does mRNA leave?",
    answer:
      "A specialized double membrane with pores. mRNA exits through nuclear pores to reach ribosomes in the cytoplasm or on RER.",
    image: "/slides/image23.jpg",
    imageAlt: "Lecture diagram of nucleus, nucleolus, pores, and envelope",
  },
  {
    id: "c1",
    topic: "Cytoskeleton",
    question: "Name the three cytoskeleton fiber sizes.",
    answer:
      "Microfilaments (small), intermediate filaments (medium), microtubules (large). They provide structure and movement — the cell’s musculoskeletal system.",
    image: "/slides/image16.jpg",
    imageAlt: "Lecture diagram of centrosomes and microtubules",
  },
  {
    id: "c2",
    topic: "Cytoskeleton",
    question: "What do cilia, flagella, and microvilli do?",
    answer:
      "Cilia beat to clear mucus. Flagella drive directional movement (sperm). Microvilli increase surface area for absorption.",
    image: "/slides/image17.jpg",
    imageAlt: "Lecture figure of cilia power and return strokes",
  },
  {
    id: "c3",
    topic: "Cytoskeleton",
    question: "What is the mitotic spindle made of, and what does it do?",
    answer:
      "Microtubules plus centrosomes (pairs of centrioles). The spindle pulls sister chromatids so each daughter cell gets the right DNA.",
    image: "/slides/image16.jpg",
    imageAlt: "Mitotic spindle formed from microtubules and centrosomes",
  },
  {
    id: "cl1",
    topic: "Clinical",
    question:
      "Enrique has situs inversus and recurrent pneumonia but not cystic fibrosis. What disease is suspected?",
    answer:
      "Primary ciliary dyskinesia (PCD): cells make non-functional cilia, so mucus is not cleared.",
    image: "/slides/image19.jpg",
    imageAlt: "Lecture case-study figure for situs inversus and PCD",
  },
  {
    id: "cl2",
    topic: "Clinical",
    question:
      "How could non-functional cilia cause runny nose, cough, and pneumonia?",
    answer:
      "Without a working mucociliary escalator, mucus and microbes sit in the airways and sinuses, leading to chronic infection.",
    image: "/slides/image20.jpg",
    imageAlt: "Normal cilia versus Enrique’s disordered cilia",
  },
  {
    id: "cl3",
    topic: "Clinical",
    question: "Why do people with PCD have a 50% chance of situs inversus?",
    answer:
      "Embryonic cilia help place organs. If they do not beat, left–right placement is random — about half of PCD patients have reversed organs.",
    image: "/slides/image19.jpg",
    imageAlt: "Situs inversus case image from the lecture",
  },
  {
    id: "dg1",
    topic: "Dogma",
    question: "State the Central Dogma.",
    answer:
      "DNA is transcribed to mRNA in the nucleus. mRNA is translated into protein at a ribosome. True of all life.",
    image: "/slides/image24.jpg",
    imageAlt: "Lecture Central Dogma: DNA to RNA to protein",
  },
  {
    id: "dg2",
    topic: "Dogma",
    question:
      "Which part of the Central Dogma is the source of a genetic disease?",
    answer:
      "Faulty DNA. Mutations produce abnormal proteins (CFTR in cystic fibrosis, hemoglobin in sickle-cell anemia).",
    image: "/slides/image24.jpg",
    imageAlt: "Central Dogma diagram used to locate the source of genetic disease",
  },
  {
    id: "dg3",
    topic: "Dogma",
    question: "Give examples of proteins the nucleus ultimately controls.",
    answer:
      "Receptors (insulin, LDL), channels (CFTR), hemoglobin, histones, lysosomal and digestive enzymes, pigments for hair and eye color.",
    image: "/slides/image26.jpg",
    imageAlt: "Lecture figure of transcription",
  },
  {
    id: "cc1",
    topic: "Cell cycle",
    question: "What are the two big stages of the cell cycle?",
    answer:
      "Interphase (most of a cell’s life: activity and growth) and mitosis (division). All cells divide, including prokaryotes.",
    image: "/slides/image29.jpg",
    imageAlt: "Lecture cell-cycle wheel",
  },
  {
    id: "cc2",
    topic: "Cell cycle",
    question:
      "How do homologous chromosomes differ from sister chromatids?",
    answer:
      "Homologs are the two non-identical parental copies (23 pairs in humans). Sister chromatids are identical copies made in S phase, joined until anaphase.",
    image: "/slides/image33.jpg",
    imageAlt: "Lecture comparison of homologous pairs versus sisters",
  },
  {
    id: "cc3",
    topic: "Cell cycle",
    question: "What happens in G1, S, and G2 of interphase?",
    answer:
      "G1: growth and normal work. S: DNA replicates and sister chromatids form. G2: preparation for mitosis.",
    image: "/slides/image34.jpg",
    imageAlt: "Lecture interphase cell with chromatin and centrosomes",
  },
  {
    id: "cc4",
    topic: "Cell cycle",
    question: "Name the four phases of mitosis in order.",
    answer:
      "Prophase → metaphase → anaphase → telophase, then cytokinesis divides the cytoplasm.",
    image: "/slides/image36.jpg",
    imageAlt: "Cells in various phases of mitosis",
  },
  {
    id: "cc5",
    topic: "Cell cycle",
    question: "What occurs during prophase?",
    answer:
      "Chromosomes condense, the nuclear envelope disappears, and the mitotic spindle begins to form.",
    image: "/slides/image37.jpg",
    imageAlt: "Actual cell in prophase",
  },
  {
    id: "cc6",
    topic: "Cell cycle",
    question: "What occurs during metaphase?",
    answer:
      "The spindle lines sister chromatids up on the metaphase plate — the equator of the cell.",
    image: "/slides/image40.jpg",
    imageAlt: "Actual cell in metaphase",
  },
  {
    id: "cc7",
    topic: "Cell cycle",
    question: "What occurs during anaphase?",
    answer:
      "Sister chromatids separate and move to opposite poles — the actual division of genetic material. Non-disjunction can happen here.",
    image: "/slides/image42.jpg",
    imageAlt: "Actual cell in anaphase",
  },
  {
    id: "cc8",
    topic: "Cell cycle",
    question: "What happens in telophase, and what is cytokinesis?",
    answer:
      "Daughter nuclei form, the spindle fades, and the nuclear envelope reforms. Cytokinesis splits the cytoplasm (cleavage furrow in animal cells).",
    image: "/slides/image39.jpg",
    imageAlt: "Lecture figure of telophase and cleavage furrow",
  },
  {
    id: "s1",
    topic: "Summary",
    question: "What is the outcome of mitosis, and why does that matter?",
    answer:
      "One division → two genetically identical daughter cells. Mitosis carefully preserves genetic information for growth, healing, and maintenance.",
    image: "/slides/image45.jpg",
    imageAlt: "Mitosis summary from the lecture: identical daughter cells",
  },
  {
    id: "s2",
    topic: "Summary",
    question:
      "How do structure–function and clinical disease connect in this lecture?",
    answer:
      "Anatomy controls physiology from organelle to tissue. Many disorders (PCD, CF, sickle cell) map to a specific organelle, cytoskeletal, or DNA defect.",
    image: "/slides/image1.jpg",
    imageAlt: "Lecture title slide: The Cell and Cell Division",
  },
];
