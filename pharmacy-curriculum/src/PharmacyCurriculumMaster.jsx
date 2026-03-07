import React, { useMemo, useState } from "react";

const curriculum = [
  {
    phase: 1,
    title: "Mathematics Foundation",
    subtitle: "Review the math that powers chemistry, pharmacokinetics, biostatistics, and dosing calculations.",
    color: "#64748b",
    duration: "4–8 weeks",
    priority: "Review",
    subjects: [
      {
        name: "Algebra & Precalculus",
        weeks: "1–2",
        why: "Pharmacy calculations rely constantly on ratios, logs, exponents, conversions, and dimensional analysis.",
        topics: [
          "Fractions, ratios, proportions, and percentages",
          "Scientific notation and significant figures",
          "Logarithms and exponentials",
          "Solving linear and quadratic equations",
          "Systems of equations",
          "Basic function behavior and graph interpretation",
          "Unit conversions across metric, household, and apothecary systems",
          "Dimensional analysis / factor-label method"
        ],
        books: [
          "Schaum's Outline of College Algebra",
          "Khan Academy Algebra and Precalculus"
        ],
        free: [
          "Khan Academy Algebra I/II and Precalculus",
          "Professor Leonard Precalculus playlist"
        ],
        examRelevance: "Directly relevant to pharmacy math, concentration calculations, dosing, and kinetics."
      },
      {
        name: "Calculus I & II",
        weeks: "3–5",
        why: "PK uses derivatives, integrals, exponential decay, and differential equation thinking.",
        topics: [
          "Limits and continuity",
          "Derivatives and core rules",
          "Applications of derivatives",
          "Definite and indefinite integrals",
          "Area Under the Curve (AUC)",
          "Fundamental Theorem of Calculus",
          "Substitution and integration by parts",
          "Exponential growth and decay",
          "Introductory differential equations"
        ],
        books: [
          "Calculus: Early Transcendentals — James Stewart",
          "Calculus Made Easy — Silvanus Thompson"
        ],
        free: [
          "Professor Leonard Calculus I/II",
          "MIT OpenCourseWare 18.01"
        ],
        examRelevance: "Supports pharmacokinetics, rate equations, elimination models, and prerequisite admissions coursework."
      },
      {
        name: "Statistics & Biostatistics",
        weeks: "6–8",
        why: "Evidence-based pharmacy depends on understanding studies, risk, confidence, and statistical meaning.",
        topics: [
          "Descriptive statistics",
          "Probability distributions",
          "Normal distribution and z-scores",
          "t-tests, chi-square, ANOVA",
          "Confidence intervals",
          "P-values and hypothesis testing",
          "Type I and Type II errors",
          "Relative risk, ARR, RRR, NNT, NNH",
          "Sensitivity, specificity, PPV, NPV",
          "Odds ratio vs relative risk",
          "Kaplan-Meier curves",
          "Regression basics",
          "Systematic reviews and meta-analysis"
        ],
        books: [
          "Intuitive Biostatistics — Harvey Motulsky",
          "Statistics for the Health Sciences"
        ],
        free: [
          "StatQuest with Josh Starmer",
          "Khan Academy Statistics & Probability"
        ],
        examRelevance: "Critical for literature evaluation, therapeutics, and board-style interpretation of clinical evidence."
      }
    ]
  },
  {
    phase: 2,
    title: "General Chemistry I & II",
    subtitle: "The atomic, molecular, thermodynamic, and solution chemistry that underlies all drug behavior.",
    color: "#0ea5e9",
    duration: "16–20 weeks",
    priority: "Critical",
    subjects: [
      {
        name: "Gen Chem I — Atomic Structure, Bonding & Stoichiometry",
        weeks: "1–5",
        why: "Drugs are molecules. Bonding, polarity, geometry, and stoichiometry explain how they are built and how they behave.",
        topics: [
          "Atomic structure and isotopes",
          "Electron configuration and periodic trends",
          "Lewis structures",
          "Ionic vs covalent bonding",
          "VSEPR geometry",
          "Hybridization",
          "Polarity and dipole moments",
          "Intermolecular forces",
          "Solubility principles",
          "Moles, molar mass, Avogadro's number",
          "Balancing equations",
          "Limiting reagent and percent yield",
          "Empirical vs molecular formula",
          "Solutions, molarity, dilutions",
          "Net ionic equations"
        ],
        books: [
          "Chemistry: The Central Science",
          "Chemistry: A Molecular Approach — Tro"
        ],
        free: [
          "Khan Academy Chemistry",
          "Professor Dave Explains Chemistry",
          "Crash Course Chemistry"
        ],
        examRelevance: "Foundation for organic chemistry, pharmaceutics, medicinal chemistry, and admission exams."
      },
      {
        name: "Gen Chem II — Thermodynamics, Kinetics, Equilibrium, Acids & Bases",
        weeks: "6–11",
        why: "Acid-base chemistry and kinetics are among the most important chemistry concepts in all of pharmacy.",
        topics: [
          "Enthalpy, entropy, Gibbs free energy",
          "Hess's Law",
          "Rate laws and reaction order",
          "First-order kinetics and half-life",
          "Arrhenius equation",
          "Chemical equilibrium and Le Chatelier's principle",
          "Acid/base definitions",
          "Strong vs weak acids and bases",
          "Ka, Kb, pKa, pH, pOH",
          "Henderson-Hasselbalch equation",
          "Buffers",
          "Titration curves",
          "Solubility product and Ksp",
          "Colligative properties",
          "Electrochemistry",
          "Nuclear chemistry"
        ],
        books: [
          "Chemistry: The Central Science",
          "Physical Chemistry for the Chemical and Biological Sciences"
        ],
        free: [
          "Professor Leonard General Chemistry II",
          "MIT OpenCourseWare 5.111"
        ],
        examRelevance: "Ionization, absorption, distribution, formulation, and elimination all lean on these concepts."
      },
      {
        name: "Analytical Chemistry",
        weeks: "12–16",
        why: "Quality control, assay development, and lab testing depend on analytical chemistry.",
        topics: [
          "Accuracy vs precision",
          "Calibration curves",
          "Beer-Lambert Law",
          "UV-Vis spectroscopy",
          "IR spectroscopy",
          "1H NMR basics",
          "Mass spectrometry",
          "Gas chromatography",
          "HPLC fundamentals",
          "LC-MS/MS overview",
          "Method validation",
          "LOD and LOQ",
          "USP chromatography concepts",
          "Statistical treatment of analytical data"
        ],
        books: [
          "Quantitative Chemical Analysis — Harris",
          "Principles of Instrumental Analysis — Skoog"
        ],
        free: [
          "LibreTexts Analytical Chemistry",
          "RSC spectroscopy resources"
        ],
        examRelevance: "Highly relevant to drug analysis, compounding QC, manufacturing, and pharmaceutical testing."
      },
      {
        name: "Physical Chemistry for Pharmacy",
        weeks: "17–20",
        why: "Solubility, diffusion, partitioning, and polymorphism are direct pharmaceutics concepts.",
        topics: [
          "Ideal and real gases",
          "Phase diagrams",
          "Osmolarity and tonicity",
          "Fick's Law of Diffusion",
          "logP and logD",
          "Surface tension and surfactants",
          "Micelles and liposomes",
          "Viscosity and rheology",
          "Crystal polymorphism",
          "Amorphous vs crystalline forms",
          "Dissolution rate and Noyes-Whitney",
          "Activity and nonideality"
        ],
        books: [
          "Physical Pharmacy and Pharmaceutical Sciences — Martin",
          "Atkins' Physical Chemistry"
        ],
        free: [
          "LibreTexts Physical Chemistry",
          "Khan Academy selected physical chemistry topics"
        ],
        examRelevance: "This is direct preparation for pharmaceutics and dosage-form design."
      }
    ]
  },
  {
    phase: 3,
    title: "Biology, Genetics & Anatomy/Physiology",
    subtitle: "Cell biology, molecular biology, and full-system physiology that explain how drugs and disease work.",
    color: "#22c55e",
    duration: "18–24 weeks",
    priority: "Critical",
    subjects: [
      {
        name: "Cell Biology — Membranes, Organelles & Signaling",
        weeks: "1–6",
        why: "Drug targets are usually receptors, enzymes, ion channels, transporters, or signaling pathways inside cells.",
        topics: [
          "Prokaryotic vs eukaryotic cells",
          "Cell membrane structure",
          "Transport mechanisms",
          "Nucleus, ER, Golgi, mitochondria, lysosomes, peroxisomes",
          "Cytoskeleton",
          "Cell junctions",
          "Extracellular matrix",
          "GPCR signaling",
          "Gs, Gi, Gq pathways",
          "Receptor tyrosine kinases",
          "Nuclear receptors",
          "Ion channel receptors",
          "Second messengers",
          "Cell cycle",
          "Apoptosis and caspases"
        ],
        books: [
          "Molecular Biology of the Cell — Alberts",
          "Cell and Molecular Biology — Karp"
        ],
        free: [
          "HHMI BioInteractive",
          "Ninja Nerd Cell Biology",
          "Khan Academy AP Biology"
        ],
        examRelevance: "Foundational for pharmacology, endocrinology, oncology, and receptor-level drug action."
      },
      {
        name: "Genetics & Molecular Biology",
        weeks: "7–12",
        why: "Pharmacogenomics changes dosing, safety, and drug selection in modern practice.",
        topics: [
          "DNA structure and replication",
          "Chromatin and histones",
          "Transcription and RNA processing",
          "Translation and ribosome function",
          "Mutations and protein consequences",
          "Mendelian inheritance",
          "Pedigree analysis",
          "Chromosomal abnormalities",
          "Epigenetics",
          "PCR and recombinant DNA tools",
          "Pharmacogenomics of CYP2D6, CYP2C19, CYP2C9",
          "HLA associations",
          "TPMT, UGT1A1 and toxicity risk"
        ],
        books: [
          "Molecular Biology of the Gene",
          "Genetics: From Genes to Genomes"
        ],
        free: [
          "Khan Academy Genetics",
          "Amoeba Sisters",
          "MIT OpenCourseWare Intro Biology"
        ],
        examRelevance: "Important for oncology, psychiatry, pain, anticoagulation, and individualized medicine."
      },
      {
        name: "Anatomy & Physiology — Full Organ Systems",
        weeks: "13–24",
        why: "Therapeutics only makes sense when you understand normal physiology first.",
        topics: [
          "Anatomical terminology",
          "Tissue types",
          "Autonomic nervous system",
          "Neurotransmitters and receptors",
          "Action potentials and synaptic transmission",
          "Blood-brain barrier",
          "Brain regions",
          "Cardiovascular physiology",
          "RAAS",
          "Respiratory physiology",
          "Acid-base physiology",
          "Renal physiology and nephron function",
          "GI physiology and first-pass metabolism",
          "Hepatic metabolism and CYP450 overview",
          "Endocrine axes",
          "Reproductive physiology",
          "Immune system basics",
          "Coagulation and fibrinolysis"
        ],
        books: [
          "Human Anatomy & Physiology — Marieb & Hoehn",
          "Costanzo Physiology"
        ],
        free: [
          "Ninja Nerd A&P",
          "Osmosis",
          "Armando Hasudungan"
        ],
        examRelevance: "Absolutely central for therapeutics, disease-state management, and clinical reasoning."
      }
    ]
  },
  {
    phase: 4,
    title: "Organic Chemistry I & II",
    subtitle: "The language of drug structures, mechanisms, stereochemistry, and medicinal chemistry logic.",
    color: "#f59e0b",
    duration: "20–26 weeks",
    priority: "Critical",
    subjects: [
      {
        name: "Organic Chemistry I — Structure, Stereochemistry & Mechanisms",
        weeks: "1–8",
        why: "Drug molecules are organic molecules, and stereochemistry often determines efficacy and toxicity.",
        topics: [
          "Hybridization and geometry",
          "IUPAC nomenclature",
          "Recognizing all major functional groups",
          "Skeletal structures",
          "Constitutional and conformational isomers",
          "Newman projections",
          "Cyclohexane chair conformations",
          "Chirality, enantiomers, diastereomers, meso compounds",
          "R/S configuration",
          "Acids and bases in orgo",
          "Resonance and inductive effects",
          "Nucleophiles vs electrophiles",
          "SN1, SN2, E1, E2",
          "Carbocation stability",
          "Alkenes and alkynes",
          "Markovnikov and anti-Markovnikov addition",
          "Syn vs anti addition",
          "Radical reactions"
        ],
        books: [
          "Organic Chemistry — Clayden",
          "Organic Chemistry — McMurry",
          "Organic Chemistry as a Second Language — Klein"
        ],
        free: [
          "Khan Academy Organic Chemistry",
          "Leah4sci",
          "Master Organic Chemistry"
        ],
        examRelevance: "Prepares directly for medicinal chemistry and reading drug structures accurately."
      },
      {
        name: "Organic Chemistry II — Carbonyls, Aromatics & Biomolecules",
        weeks: "9–16",
        why: "Most important drug scaffolds involve aromatic systems, heterocycles, carbonyls, amines, and biologically derived motifs.",
        topics: [
          "Aromaticity and Hückel's rule",
          "Electrophilic aromatic substitution",
          "Directing effects",
          "Phenols and aromatic heterocycles",
          "Aldehydes and ketones",
          "Carboxylic acids and derivatives",
          "Ester and amide chemistry",
          "Nucleophilic acyl substitution",
          "Enols and enolates",
          "Amines and protonation",
          "Amino acids and peptides",
          "Carbohydrates",
          "Lipids",
          "Steroids and steroid hormones",
          "Spectroscopy-based structure determination"
        ],
        books: [
          "Organic Chemistry — Clayden",
          "Organic Chemistry as a Second Language — Klein"
        ],
        free: [
          "Organic Chemistry Tutor",
          "Master Organic Chemistry",
          "PubChem structure exploration"
        ],
        examRelevance: "Highly relevant to medicinal chemistry, metabolism, hormones, and structure-activity relationships."
      },
      {
        name: "Medicinal Chemistry — Drug Design & Metabolism",
        weeks: "17–20",
        why: "This is where organic chemistry becomes pharmacy.",
        topics: [
          "Structure-Activity Relationships",
          "Bioisosteres",
          "Lipinski's Rule of Five",
          "Drug lipophilicity",
          "Phase I metabolism",
          "Phase II metabolism",
          "Major CYP450 isoforms",
          "CYP inhibitors and inducers",
          "Reactive metabolites",
          "Prodrugs",
          "Drug stability and degradation",
          "Chirality in drug design",
          "Container and compatibility concepts"
        ],
        books: [
          "Foye's Principles of Medicinal Chemistry",
          "Wilson and Gisvold's Textbook of Organic Medicinal and Pharmaceutical Chemistry"
        ],
        free: [
          "DrugBank",
          "PubChem",
          "FDA package inserts"
        ],
        examRelevance: "Direct support for drug interactions, adverse effects, prodrugs, and medicinal chemistry courses."
      }
    ]
  },
  {
    phase: 5,
    title: "Biochemistry",
    subtitle: "Enzymes, metabolism, cellular energetics, and biochemical logic behind therapeutics.",
    color: "#a855f7",
    duration: "16–20 weeks",
    priority: "Critical",
    subjects: [
      {
        name: "Proteins, Enzymes & Enzyme Kinetics",
        weeks: "1–6",
        why: "Most drug targets are proteins, and enzyme inhibition is a huge part of pharmacology.",
        topics: [
          "Amino acid structures and properties",
          "Protein structure levels",
          "Protein folding and denaturation",
          "Hemoglobin and allostery",
          "Bohr effect and 2,3-BPG",
          "Enzyme classification",
          "Catalytic mechanisms",
          "Michaelis-Menten kinetics",
          "Km, Vmax, kcat",
          "Lineweaver-Burk plots",
          "Competitive inhibition",
          "Uncompetitive inhibition",
          "Noncompetitive inhibition",
          "Irreversible inhibition",
          "Allosteric enzymes",
          "Feedback inhibition"
        ],
        books: [
          "Biochemistry — Stryer",
          "Lippincott's Illustrated Reviews: Biochemistry"
        ],
        free: [
          "Khan Academy Biochemistry",
          "Ninja Nerd Biochemistry",
          "Biochemistry Free and Easy"
        ],
        examRelevance: "Supports pharmacodynamics, metabolism, drug interactions, and biochemical therapeutics."
      },
      {
        name: "Metabolic Pathways — Energy, Biosynthesis & Regulation",
        weeks: "7–12",
        why: "Major chronic diseases and their therapies are rooted in metabolism.",
        topics: [
          "Glycolysis",
          "Pyruvate dehydrogenase",
          "Citric acid cycle",
          "Electron transport chain and ATP synthase",
          "Pentose phosphate pathway",
          "Glycogen synthesis and breakdown",
          "Gluconeogenesis",
          "Insulin signaling",
          "Beta-oxidation",
          "Ketogenesis",
          "Fatty acid synthesis",
          "Cholesterol synthesis",
          "Lipoproteins",
          "Urea cycle",
          "Folate and B12 metabolism",
          "Fat-soluble vitamins"
        ],
        books: [
          "Biochemistry — Stryer",
          "Harper's Illustrated Biochemistry"
        ],
        free: [
          "Ninja Nerd Metabolism",
          "Osmosis Metabolism",
          "Khan Academy Cellular Respiration"
        ],
        examRelevance: "Essential for diabetes, lipid management, nutrition, hepatology, and toxicology."
      },
      {
        name: "Molecular Pharmacology & Biochemical Disease Links",
        weeks: "13–16",
        why: "This bridges biochemistry to therapeutics and pathology.",
        topics: [
          "Oxidative stress and antioxidants",
          "Glutathione and detoxification",
          "Mitochondrial dysfunction",
          "Inborn errors of metabolism overview",
          "Biochemical basis of diabetes",
          "Biochemical basis of hyperlipidemia",
          "Biochemical basis of gout",
          "Folate antagonism and cancer therapy",
          "Vitamin K cycle and anticoagulation",
          "Acid-base disturbances in metabolism"
        ],
        books: [
          "Lippincott's Illustrated Reviews: Biochemistry",
          "Clinical Biochemistry references"
        ],
        free: [
          "Osmosis biochemical disease content",
          "Ninja Nerd clinical biochemistry videos"
        ],
        examRelevance: "Strengthens clinical integration and case-based reasoning."
      }
    ]
  },
  {
    phase: 6,
    title: "Microbiology & Immunology",
    subtitle: "The organisms, host responses, and antimicrobial logic that drive infectious-disease practice.",
    color: "#ef4444",
    duration: "12–16 weeks",
    priority: "Critical",
    subjects: [
      {
        name: "Bacteriology & Antibiotic Pharmacology",
        weeks: "1–6",
        why: "Infectious disease is one of the highest-yield pharmacy domains.",
        topics: [
          "Gram-positive vs gram-negative structure",
          "Gram stain interpretation",
          "Major pathogens and disease associations",
          "Virulence factors",
          "Atypical bacteria",
          "Anaerobes",
          "Mycobacteria",
          "Beta-lactams",
          "Vancomycin",
          "Aminoglycosides",
          "Fluoroquinolones",
          "Macrolides",
          "Resistance mechanisms",
          "Antimicrobial stewardship"
        ],
        books: [
          "Medical Microbiology — Murray",
          "Sanford Guide to Antimicrobial Therapy"
        ],
        free: [
          "Ninja Nerd Microbiology",
          "IDSA guidelines",
          "CDC stewardship resources"
        ],
        examRelevance: "Extremely high-yield for NAPLEX and clinical therapeutics."
      },
      {
        name: "Virology, Mycology & Immunopharmacology",
        weeks: "7–12",
        why: "HIV, hepatitis, antifungals, vaccines, and biologics are central to modern pharmacy practice.",
        topics: [
          "Virus structure and replication",
          "HIV life cycle and antiretrovirals",
          "Hepatitis B and C treatment",
          "Influenza and antivirals",
          "Herpes viruses and anti-herpetics",
          "Fungal structure and antifungal targets",
          "Azoles, polyenes, echinocandins",
          "Innate vs adaptive immunity",
          "Immunosuppressants",
          "Biologics for autoimmune disease",
          "Checkpoint inhibitors"
        ],
        books: [
          "Medical Microbiology — Murray",
          "Immunobiology — Janeway"
        ],
        free: [
          "NIH HIV guidelines",
          "Osmosis Immunology",
          "Ninja Nerd Immunopharmacology"
        ],
        examRelevance: "Critical for specialty pharmacy, ambulatory care, hospital pharmacy, and therapeutics."
      },
      {
        name: "Clinical Infectious Disease Integration",
        weeks: "13–16",
        why: "Knowing the bug or drug alone is not enough; pharmacists must match syndrome, coverage, site penetration, and host factors.",
        topics: [
          "Pneumonia treatment logic",
          "UTI and pyelonephritis treatment logic",
          "Skin/soft tissue infections",
          "Endocarditis basics",
          "Meningitis basics",
          "Sepsis fundamentals",
          "C. difficile management",
          "Renal dose adjustment",
          "Culture interpretation",
          "Allergy assessment",
          "IV-to-PO conversion",
          "De-escalation and stewardship workflow"
        ],
        books: [
          "Sanford Guide",
          "DiPiro Infectious Disease chapters"
        ],
        free: [
          "IDSA disease-specific guidelines",
          "UCSF antimicrobial stewardship resources"
        ],
        examRelevance: "High-value integration phase for real clinical reasoning."
      }
    ]
  },
  {
    phase: 7,
    title: "Pharmaceutics & Pharmacokinetics",
    subtitle: "How dosage forms are made and how drugs move through the body.",
    color: "#06b6d4",
    duration: "14–18 weeks",
    priority: "Core Pharmacy",
    subjects: [
      {
        name: "Pharmacokinetics — Full Foundations",
        weeks: "1–7",
        why: "PK is the math and physiology of dosing.",
        topics: [
          "ADME overview",
          "Bioavailability",
          "Volume of distribution",
          "Protein binding",
          "Clearance",
          "Half-life",
          "One-compartment models",
          "AUC",
          "Steady state and accumulation",
          "Loading vs maintenance dose",
          "Renal elimination",
          "Cockcroft-Gault",
          "Hepatic extraction ratio",
          "Nonlinear pharmacokinetics",
          "Therapeutic drug monitoring",
          "Vancomycin and aminoglycoside dosing basics"
        ],
        books: [
          "Applied Biopharmaceutics & Pharmacokinetics — Shargel",
          "Basic Clinical Pharmacokinetics — Winter"
        ],
        free: [
          "OU College of Pharmacy PK materials",
          "Khan Academy PK basics"
        ],
        examRelevance: "Directly tested and fundamental for safe dosing."
      },
      {
        name: "Pharmaceutics & Dosage Form Design",
        weeks: "8–14",
        why: "Formulation determines stability, administration, release, and ultimately clinical success.",
        topics: [
          "Solubility enhancement methods",
          "Dissolution rate",
          "BCS classification",
          "Tablet manufacturing methods",
          "Excipients",
          "Modified-release systems",
          "Enteric coating",
          "Dissolution testing",
          "Injectable formulations",
          "Depot injections",
          "Isotonicity",
          "Buffers",
          "Preservatives",
          "Lyophilization",
          "USP <795>, <797>, <800>",
          "Sterility, endotoxins, particulate matter",
          "Stability testing"
        ],
        books: [
          "Ansel's Pharmaceutical Dosage Forms",
          "The Theory and Practice of Industrial Pharmacy"
        ],
        free: [
          "USP educational resources",
          "FDA pharmaceutical quality guidance",
          "ICH guidelines"
        ],
        examRelevance: "Core compounding, formulation, manufacturing, and sterile preparation content."
      }
    ]
  },
  {
    phase: 8,
    title: "Pharmacology & Therapeutics",
    subtitle: "Major drug classes, disease-state treatment logic, adverse effects, monitoring, and clinical decision-making.",
    color: "#10b981",
    duration: "28–36 weeks",
    priority: "Core Pharmacy",
    subjects: [
      {
        name: "Pharmacodynamics, Autonomic & Cardiovascular Pharmacology",
        weeks: "1–10",
        why: "Cardiovascular therapy is one of the biggest and most important areas in all of pharmacy.",
        topics: [
          "Agonists, antagonists, potency, efficacy",
          "Therapeutic index",
          "Tolerance and tachyphylaxis",
          "Cholinergic pharmacology",
          "Adrenergic pharmacology",
          "Beta-blockers",
          "RAAS pharmacology",
          "Calcium channel blockers",
          "Diuretics",
          "Heart failure pharmacology",
          "Antiarrhythmics",
          "Anticoagulation",
          "Lipid-lowering therapy"
        ],
        books: [
          "Goodman & Gilman",
          "Katzung's Basic & Clinical Pharmacology",
          "DiPiro's Pharmacotherapy"
        ],
        free: [
          "Ninja Nerd cardiovascular pharmacology",
          "Osmosis cardiovascular content",
          "AHA/ACC guidelines"
        ],
        examRelevance: "One of the single most important domains for school and boards."
      },
      {
        name: "CNS, Endocrine, Pulmonary & Oncology Pharmacology",
        weeks: "11–22",
        why: "This covers major chronic disease, symptom control, mental health, and specialty therapy areas.",
        topics: [
          "Opioids and pain management",
          "NSAIDs and acetaminophen",
          "Gout pharmacology",
          "Antidepressants",
          "Antipsychotics",
          "Mood stabilizers",
          "Antiepileptics",
          "Parkinson's drugs",
          "Testosterone pharmacology",
          "Diabetes pharmacology",
          "Thyroid pharmacology",
          "Asthma and COPD drugs",
          "Cancer pharmacology overview",
          "Supportive oncology care"
        ],
        books: [
          "DiPiro's Pharmacotherapy",
          "Goodman & Gilman"
        ],
        free: [
          "Ninja Nerd pharmacology",
          "Osmosis disease-drug videos",
          "NCCN resources"
        ],
        examRelevance: "High-yield across inpatient, outpatient, and specialty practice."
      },
      {
        name: "Anti-infective Pharmacotherapy in Depth",
        weeks: "23–28",
        why: "Real antimicrobial management requires spectrum memory plus clinical logic.",
        topics: [
          "Penicillins and cephalosporins by generation",
          "Carbapenems and monobactams",
          "Beta-lactamase inhibitors",
          "Tetracyclines",
          "TMP-SMX",
          "Linezolid",
          "Daptomycin",
          "Metronidazole",
          "Nitrofurantoin",
          "Fosfomycin",
          "Polymyxins",
          "Coverage frameworks for MSSA, MRSA, Enterococcus, Pseudomonas",
          "CAP, HAP, UTI, meningitis, endocarditis, C. diff treatment logic",
          "TDM and renal dosing"
        ],
        books: [
          "Sanford Guide",
          "DiPiro Infectious Disease chapters"
        ],
        free: [
          "IDSA guidelines",
          "CDC stewardship resources",
          "Stanford and UCSF antimicrobial resources"
        ],
        examRelevance: "One of the most tested and most clinically relevant sections."
      },
      {
        name: "Pharmacy Law, Ethics & Practice Foundations",
        weeks: "29–32",
        why: "Pharmacy expertise must operate within legal, ethical, and professional standards.",
        topics: [
          "Controlled substance schedules",
          "DEA fundamentals",
          "Prescription requirements",
          "Controlled-substance refill and transfer basics",
          "HIPAA basics",
          "OBRA-90 counseling",
          "Medication safety and error reduction",
          "REMS",
          "FDA vs DEA vs USP vs Boards of Pharmacy",
          "Compounding categories",
          "Practice calculations",
          "Ethical principles",
          "Documentation standards",
          "MedWatch, VAERS, ISMP"
        ],
        books: [
          "Guide to Federal Pharmacy Law",
          "Pharmacy Law Digest"
        ],
        free: [
          "DEA manuals",
          "FDA guidance",
          "State board resources"
        ],
        examRelevance: "Important for school, practice, law exams, and professional readiness."
      },
      {
        name: "NAPLEX / PCOA / Clinical Integration Review",
        weeks: "33–36",
        why: "This turns all prior knowledge into efficient board-style recall and case-solving.",
        topics: [
          "Disease-state summary sheets",
          "Drug class comparison tables",
          "High-yield calculations",
          "Top chronic and acute disease states",
          "Case workflow",
          "Monitoring plans",
          "Counseling scripts",
          "Mixed timed blocks",
          "Error review notebook system"
        ],
        books: [
          "RxPrep Course Book",
          "APhA Complete Review for Pharmacy"
        ],
        free: [
          "Competency statements",
          "Guideline summaries"
        ],
        examRelevance: "Capstone preparation for board-style thinking."
      }
    ]
  },
  {
    phase: 9,
    title: "Drug Information, Evidence-Based Practice & Clinical Skills",
    subtitle: "How pharmacists evaluate evidence, assess patients, communicate, and think clinically.",
    color: "#8b5cf6",
    duration: "10–14 weeks",
    priority: "Core Pharmacy",
    subjects: [
      {
        name: "Drug Information & Literature Evaluation",
        weeks: "1–4",
        why: "A pharmacist must answer questions with evidence, not intuition.",
        topics: [
          "Tertiary, secondary, and primary literature",
          "PubMed and database searching",
          "Hierarchy of evidence",
          "Study design types",
          "Bias and confounding",
          "Internal vs external validity",
          "Clinical vs surrogate endpoints",
          "Risk ratios, odds ratios, hazard ratios",
          "ARR, RRR, NNT, NNH",
          "Forest plots and funnel plots",
          "Guideline appraisal",
          "Writing formal drug information responses"
        ],
        books: [
          "Drug Information: A Guide for Pharmacists",
          "Basic Skills in Interpreting Laboratory Data"
        ],
        free: [
          "PubMed tutorials",
          "Cochrane educational materials",
          "FDA package inserts"
        ],
        examRelevance: "Central for therapeutics, journal clubs, case discussions, and evidence-based practice."
      },
      {
        name: "Patient Assessment & Clinical Skills",
        weeks: "5–8",
        why: "Pharmacists increasingly assess patients directly and need to interpret clinical information efficiently.",
        topics: [
          "Vital signs",
          "Chief complaint and HPI",
          "Medication reconciliation",
          "Past medical and social history",
          "Review of systems basics",
          "Basic physical assessment ideas",
          "Point-of-care testing",
          "CBC, BMP/CMP, coagulation, LFT, thyroid and lipid interpretation",
          "Renal function interpretation",
          "ABG/VBG basics",
          "Red flags requiring referral",
          "Intervention documentation",
          "SOAP note writing"
        ],
        books: [
          "Patient Assessment in Pharmacy Practice",
          "Pharmacotherapy Principles and Practice"
        ],
        free: [
          "CDC BP resources",
          "Intro clinical-assessment videos"
        ],
        examRelevance: "Important for OSCEs, rotations, and clinical readiness."
      },
      {
        name: "Communication, Counseling & OSCE Preparation",
        weeks: "9–10",
        why: "Knowing the answer is not enough; pharmacists must explain it clearly and compassionately.",
        topics: [
          "Patient-centered communication",
          "Motivational interviewing",
          "Teach-back method",
          "Counseling structure",
          "Low health literacy adaptation",
          "Sensitive-topic counseling",
          "Difficult conversations",
          "Interprofessional communication",
          "SBAR",
          "OSCE practice strategy"
        ],
        books: [
          "Communication Skills in Pharmacy Practice"
        ],
        free: [
          "AHRQ communication tools",
          "CDC counseling resources"
        ],
        examRelevance: "Essential for practical exams, live patient interaction, and clinical rotations."
      }
    ]
  },
  {
    phase: 10,
    title: "Public Health, Immunization & Preventive Care",
    subtitle: "The pharmacist as a frontline public-health professional.",
    color: "#14b8a6",
    duration: "8–10 weeks",
    priority: "Core Pharmacy",
    subjects: [
      {
        name: "Immunology Applied to Vaccines",
        weeks: "1–3",
        why: "Understanding vaccine immunology makes schedules and recommendations much easier to reason through.",
        topics: [
          "Innate vs adaptive immunity in vaccination",
          "Humoral vs cellular immunity",
          "Live vs inactivated vaccines",
          "Subunit, toxoid, conjugate, recombinant, vector, and mRNA vaccines",
          "Primary response and boosters",
          "Adjuvants",
          "Cold chain basics",
          "Contraindications vs precautions",
          "Herd immunity"
        ],
        books: [
          "APhA Immunization Handbook"
        ],
        free: [
          "CDC Pink Book",
          "CDC storage and handling toolkit"
        ],
        examRelevance: "Important for immunization practice and preventive care."
      },
      {
        name: "Vaccine Schedules, Administration & Counseling",
        weeks: "4–6",
        why: "Pharmacists administer and recommend vaccines routinely.",
        topics: [
          "Adult and pediatric schedule structure",
          "Influenza, COVID, pneumococcal, shingles, RSV, Tdap/Td, hepatitis, HPV, MMR, varicella, meningococcal vaccines",
          "Catch-up schedules",
          "Special populations",
          "Pregnancy vaccination",
          "Travel vaccine considerations",
          "IM vs SC administration",
          "Syncope and anaphylaxis management",
          "Epinephrine for vaccine reactions",
          "VAERS reporting",
          "Documentation and registries"
        ],
        books: [
          "APhA Pharmacy-Based Immunization Delivery"
        ],
        free: [
          "CDC schedules",
          "Immunize.org"
        ],
        examRelevance: "Directly practical and common in community and ambulatory settings."
      },
      {
        name: "Public Health, Screening & Prevention",
        weeks: "7–8",
        why: "Community pharmacy is often the most accessible point of care.",
        topics: [
          "Screening services",
          "Smoking cessation pharmacotherapy",
          "Preventive guidelines overview",
          "Health disparities",
          "Social determinants of health",
          "Medication access and adherence barriers",
          "Naloxone and harm reduction",
          "Community antimicrobial stewardship",
          "Emergency preparedness"
        ],
        books: [
          "Public health pharmacy references"
        ],
        free: [
          "USPSTF recommendations",
          "CDC public-health materials"
        ],
        examRelevance: "Supports modern community and ambulatory pharmacy roles."
      }
    ]
  },
  {
    phase: 11,
    title: "Pharmacoeconomics, Managed Care & Health Systems",
    subtitle: "How pharmacy decisions, formularies, payment systems, and medication-use systems work at scale.",
    color: "#f97316",
    duration: "8–12 weeks",
    priority: "Advanced Pharmacy",
    subjects: [
      {
        name: "Pharmacoeconomics",
        weeks: "1–4",
        why: "Clinical effectiveness and economic value are both part of real-world therapy decisions.",
        topics: [
          "Cost-minimization analysis",
          "Cost-effectiveness analysis",
          "Cost-utility analysis",
          "Cost-benefit analysis",
          "QALYs and ICERs",
          "Direct, indirect, and intangible costs",
          "Budget impact models",
          "Formulary decision concepts",
          "Value-based care"
        ],
        books: [
          "Essentials of Pharmacoeconomics"
        ],
        free: [
          "ISPOR educational resources"
        ],
        examRelevance: "Important for managed care, formulary, and systems-level thinking."
      },
      {
        name: "Managed Care & Pharmacy Benefit Design",
        weeks: "5–8",
        why: "Much of pharmacy access is shaped by payers, prior authorizations, and formulary decisions.",
        topics: [
          "P&T committees",
          "Formularies and tiers",
          "Prior authorization",
          "Step therapy",
          "Rebates and contracting basics",
          "Specialty pharmacy model",
          "Quality metrics and Star ratings",
          "PBM basics",
          "Transitions of care",
          "340B overview"
        ],
        books: [
          "Managed Care Pharmacy Practice references"
        ],
        free: [
          "AMCP resources",
          "CMS quality resources"
        ],
        examRelevance: "Useful for administrative, ambulatory, and managed-care paths."
      },
      {
        name: "Health Systems, Informatics & Medication Use Process",
        weeks: "9–12",
        why: "Medication safety and system design are central to hospital practice.",
        topics: [
          "Medication-use process",
          "CPOE and clinical decision support",
          "Barcode administration",
          "Smart pumps",
          "Automated dispensing cabinets",
          "Order verification",
          "High-alert medications",
          "ISMP principles",
          "Inventory and shortages",
          "Basics of pharmacy informatics"
        ],
        books: [
          "Introduction to Health-System Pharmacy Practice"
        ],
        free: [
          "ISMP resources",
          "AHRQ patient safety materials"
        ],
        examRelevance: "Very relevant for hospital, informatics, and leadership roles."
      }
    ]
  },
  {
    phase: 12,
    title: "Advanced Clinical Therapeutics by System",
    subtitle: "A disease-state-driven, capstone pass through full clinical pharmacy practice.",
    color: "#0f766e",
    duration: "24–36 weeks",
    priority: "Capstone Clinical Mastery",
    subjects: [
      {
        name: "Cardiology & Nephrology Therapeutics",
        weeks: "1–8",
        why: "These are among the most complex and highest-yield areas in practice and exams.",
        topics: [
          "Hypertension",
          "Heart failure",
          "ACS",
          "Stable ischemic heart disease",
          "Atrial fibrillation",
          "DVT/PE",
          "Dyslipidemia",
          "AKI",
          "CKD",
          "Electrolyte disorders",
          "Dialysis overview"
        ],
        books: [
          "DiPiro's Pharmacotherapy",
          "Applied Therapeutics"
        ],
        free: [
          "ACC/AHA guidelines",
          "KDIGO resources"
        ],
        examRelevance: "Top-tier disease-state mastery area."
      },
      {
        name: "Endocrine, GI & Nutrition Therapeutics",
        weeks: "9–14",
        why: "These conditions dominate outpatient chronic disease management.",
        topics: [
          "Diabetes comprehensive care",
          "Thyroid disorders",
          "Adrenal disorders",
          "Osteoporosis",
          "GERD and PUD",
          "H. pylori",
          "IBD vs IBS",
          "Liver disease basics",
          "Pancreatitis",
          "Enteral and parenteral nutrition",
          "Obesity pharmacotherapy"
        ],
        books: [
          "DiPiro's Pharmacotherapy"
        ],
        free: [
          "ADA Standards of Care",
          "AACE resources"
        ],
        examRelevance: "Very high-yield for ambulatory care and board prep."
      },
      {
        name: "Pulmonary, Infectious Disease & Critical Care Therapeutics",
        weeks: "15–20",
        why: "These conditions test fast clinical reasoning and system integration.",
        topics: [
          "Asthma and COPD guideline therapy",
          "Pneumonia",
          "Meningitis",
          "Endocarditis",
          "Sepsis",
          "UTI and intra-abdominal infection",
          "HIV and hepatitis care",
          "Shock overview",
          "ICU sedation and analgesia basics",
          "Stress-ulcer and VTE prophylaxis",
          "Rapid antimicrobial de-escalation"
        ],
        books: [
          "DiPiro",
          "Sanford Guide"
        ],
        free: [
          "IDSA guidelines",
          "ATS/IDSA pneumonia guidelines"
        ],
        examRelevance: "Acute-care and high-priority case content."
      },
      {
        name: "Neurology, Psychiatry, Pain & Oncology Therapeutics",
        weeks: "21–28",
        why: "These are safety-heavy, monitoring-heavy, and counseling-heavy areas.",
        topics: [
          "Depression and anxiety",
          "Bipolar disorder",
          "Schizophrenia",
          "Epilepsy",
          "Parkinson's disease",
          "Migraine",
          "Pain management",
          "Substance use disorders",
          "Cancer supportive care",
          "Core antineoplastic mechanisms",
          "Antiemetics",
          "Growth factors",
          "Tumor lysis overview"
        ],
        books: [
          "DiPiro's Pharmacotherapy"
        ],
        free: [
          "NCCN summaries",
          "Psychiatry and neurology guideline resources"
        ],
        examRelevance: "Important for clinical practice and board-style cases."
      }
    ]
  },
  {
    phase: 13,
    title: "Experiential Readiness, Boards & Professional Transition",
    subtitle: "Rotation readiness, board preparation, and professional launch.",
    color: "#334155",
    duration: "8–12 weeks",
    priority: "Final Integration",
    subjects: [
      {
        name: "IPPE / APPE / Clinical Rotation Readiness",
        weeks: "1–4",
        why: "This phase turns content knowledge into day-to-day student pharmacist performance.",
        topics: [
          "How to pre-round",
          "How to present a patient",
          "Building intervention plans",
          "Monitoring recommendations",
          "Preceptor expectations",
          "Daily topic discussion strategy",
          "Professionalism and accountability"
        ],
        books: [
          "Clinical rotation survival guides",
          "APhA practice materials"
        ],
        free: [
          "Institutional rounding guides",
          "Rotation-prep resources"
        ],
        examRelevance: "Direct practice-readiness content."
      },
      {
        name: "Board Preparation",
        weeks: "5–8",
        why: "Boards reward fast recall, pattern recognition, and disciplined calculation skills.",
        topics: [
          "NAPLEX-style prioritization",
          "Calculation drills",
          "Top 200/300 drug mastery",
          "Brand-generic-class mapping",
          "Monitoring parameter recall",
          "Adverse-effect pattern recognition",
          "Mixed case blocks",
          "Law/MPJE review structure"
        ],
        books: [
          "RxPrep",
          "APhA Complete Review for Pharmacy"
        ],
        free: [
          "Competency statements",
          "School review packets"
        ],
        examRelevance: "Direct licensure preparation."
      },
      {
        name: "Career Development & Professional Identity",
        weeks: "9–12",
        why: "The final goal is becoming a capable pharmacist with direction, professionalism, and sustainability.",
        topics: [
          "CV and resume building",
          "Residency vs fellowship vs direct practice",
          "Interview prep",
          "Personal statements",
          "Networking and mentorship",
          "Specialty certification overview",
          "Lifelong learning systems",
          "Burnout prevention"
        ],
        books: [
          "Professional development resources from pharmacy organizations"
        ],
        free: [
          "ASHP, APhA, ACCP, AMCP career resources"
        ],
        examRelevance: "Career-launch and long-term professional growth."
      }
    ]
  }
];

const phaseOrderSummary = [
  "Phase 1–2: Math + Chemistry foundation",
  "Phase 3–5: Biology, A&P, Organic Chemistry, Biochemistry",
  "Phase 6–8: Microbiology, Pharmaceutics, Pharmacology, Therapeutics",
  "Phase 9–11: Clinical skills, public health, managed care, health systems",
  "Phase 12–13: Advanced therapeutics, boards, experiential readiness, career launch"
];

function Pill({ children, bg = "#e2e8f0", color = "#0f172a" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 10px",
        borderRadius: 999,
        background: bg,
        color,
        fontSize: 12,
        fontWeight: 700
      }}
    >
      {children}
    </span>
  );
}

export default function PharmacyCurriculumMaster() {
  const [selectedPhase, setSelectedPhase] = useState(curriculum[0].phase);
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [completedSubjects, setCompletedSubjects] = useState({});
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentPhase = useMemo(
    () => curriculum.find((p) => p.phase === selectedPhase) ?? curriculum[0],
    [selectedPhase]
  );

  const toggleExpanded = (key) => {
    setExpandedSubjects((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCompleted = (key) => {
    setCompletedSubjects((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSubjects = useMemo(
    () => curriculum.reduce((acc, phase) => acc + phase.subjects.length, 0),
    []
  );

  const totalCompleted = useMemo(
    () => Object.values(completedSubjects).filter(Boolean).length,
    [completedSubjects]
  );

  const totalProgressPercent = Math.round((totalCompleted / totalSubjects) * 100);

  const phaseProgress = useMemo(() => {
    const total = currentPhase.subjects.length;
    const done = currentPhase.subjects.filter((_, i) => completedSubjects[`p${currentPhase.phase}-s${i}`]).length;
    return {
      total,
      done,
      percent: total ? Math.round((done / total) * 100) : 0
    };
  }, [currentPhase, completedSubjects]);

  const filteredSubjects = currentPhase.subjects.filter((subject, index) => {
    const key = `p${currentPhase.phase}-s${index}`;
    const matchesIncomplete = showOnlyIncomplete ? !completedSubjects[key] : true;
    const haystack = [
      subject.name,
      subject.why,
      subject.examRelevance,
      ...subject.topics,
      ...subject.books,
      ...subject.free
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = haystack.includes(searchTerm.toLowerCase());
    return matchesIncomplete && matchesSearch;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: 24,
        fontFamily: "Arial, sans-serif",
        color: "#0f172a"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            marginBottom: 20
          }}
        >
          <h1 style={{ margin: "0 0 8px 0", fontSize: 34 }}>
            Pharmacy School + PharmD Master Curriculum
          </h1>
          <p style={{ margin: "0 0 16px 0", color: "#475569", fontSize: 16, lineHeight: 1.6 }}>
            A complete, self-study roadmap that starts with pharmacy prerequisites and continues
            through core PharmD sciences, therapeutics, clinical skills, public health, law,
            health systems, advanced therapeutics, board prep, and professional transition.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
            <Pill bg="#dbeafe" color="#1d4ed8">13 Phases</Pill>
            <Pill bg="#dcfce7" color="#166534">{totalSubjects} Subject Blocks</Pill>
            <Pill bg="#ede9fe" color="#6d28d9">{totalProgressPercent}% Overall Progress</Pill>
            <Pill bg="#fee2e2" color="#991b1b">Prereqs + PharmD Core + Boards</Pill>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Roadmap Structure</div>
            <div style={{ display: "grid", gap: 10 }}>
              {phaseOrderSummary.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    color: "#334155"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Overall Progress</div>
            <div
              style={{
                width: "100%",
                height: 14,
                background: "#e2e8f0",
                borderRadius: 999,
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: `${totalProgressPercent}%`,
                  height: "100%",
                  background: "#10b981",
                  transition: "width 0.25s ease"
                }}
              />
            </div>
            <div style={{ marginTop: 8, color: "#475569", fontSize: 14 }}>
              {totalCompleted} of {totalSubjects} subject blocks completed
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 20,
            alignItems: "start"
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 16,
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
              position: "sticky",
              top: 20
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: 22 }}>Phases</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {curriculum.map((phase) => {
                const phaseDone = phase.subjects.filter((_, i) => completedSubjects[`p${phase.phase}-s${i}`]).length;
                const phasePercent = Math.round((phaseDone / phase.subjects.length) * 100);

                return (
                  <button
                    key={phase.phase}
                    onClick={() => setSelectedPhase(phase.phase)}
                    style={{
                      textAlign: "left",
                      width: "100%",
                      border: selectedPhase === phase.phase ? `2px solid ${phase.color}` : "1px solid #e2e8f0",
                      background: selectedPhase === phase.phase ? "#f8fafc" : "white",
                      borderRadius: 14,
                      padding: 14,
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontWeight: 700, color: "#0f172a" }}>
                        Phase {phase.phase}
                      </div>
                      <Pill bg={phase.color} color="white">{phasePercent}%</Pill>
                    </div>
                    <div style={{ marginTop: 4, fontWeight: 700 }}>{phase.title}</div>
                    <div style={{ marginTop: 4, color: "#475569", fontSize: 13, lineHeight: 1.4 }}>
                      {phase.duration} • {phase.priority}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)"
            }}
          >
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <Pill bg={currentPhase.color} color="white">Phase {currentPhase.phase}</Pill>
                <Pill>{currentPhase.duration}</Pill>
                <Pill bg="#fef3c7" color="#92400e">{currentPhase.priority}</Pill>
                <Pill bg="#dcfce7" color="#166534">
                  {phaseProgress.done}/{phaseProgress.total} completed
                </Pill>
              </div>

              <h2 style={{ margin: "14px 0 8px 0", fontSize: 30 }}>{currentPhase.title}</h2>
              <p style={{ margin: 0, color: "#475569", fontSize: 16, lineHeight: 1.6 }}>
                {currentPhase.subtitle}
              </p>
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Phase Progress</div>
              <div
                style={{
                  width: "100%",
                  height: 12,
                  background: "#e2e8f0",
                  borderRadius: 999,
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    width: `${phaseProgress.percent}%`,
                    height: "100%",
                    background: currentPhase.color,
                    transition: "width 0.25s ease"
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 12,
                marginBottom: 20,
                alignItems: "center"
              }}
            >
              <input
                type="text"
                placeholder="Search topics, books, resources, or subject names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #cbd5e1",
                  borderRadius: 12,
                  padding: "12px 14px",
                  fontSize: 14
                }}
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                  color: "#334155",
                  fontSize: 14
                }}
              >
                <input
                  type="checkbox"
                  checked={showOnlyIncomplete}
                  onChange={() => setShowOnlyIncomplete((v) => !v)}
                />
                Show only incomplete
              </label>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              {filteredSubjects.map((subject, index) => {
                const originalIndex = currentPhase.subjects.findIndex((s) => s.name === subject.name);
                const key = `p${currentPhase.phase}-s${originalIndex}`;
                const expanded = !!expandedSubjects[key];
                const completed = !!completedSubjects[key];

                return (
                  <div
                    key={key}
                    style={{
                      border: completed ? "2px solid #10b981" : "1px solid #e2e8f0",
                      borderRadius: 18,
                      overflow: "hidden",
                      background: completed ? "#f0fdf4" : "#f8fafc"
                    }}
                  >
                    <div style={{ padding: 18 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 16,
                          alignItems: "start",
                          flexWrap: "wrap"
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 260 }}>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                            <Pill bg="#e2e8f0" color="#0f172a">Weeks: {subject.weeks}</Pill>
                            {completed ? (
                              <Pill bg="#10b981" color="white">Completed</Pill>
                            ) : (
                              <Pill bg="#e2e8f0" color="#475569">In Progress / Not Started</Pill>
                            )}
                          </div>
                          <h3 style={{ margin: "0 0 8px 0", fontSize: 22 }}>{subject.name}</h3>
                          <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>
                            <strong>Why it matters:</strong> {subject.why}
                          </p>
                        </div>

                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                          <button
                            onClick={() => toggleCompleted(key)}
                            style={{
                              border: "none",
                              background: completed ? "#dcfce7" : "#e2e8f0",
                              color: completed ? "#166534" : "#0f172a",
                              padding: "10px 14px",
                              borderRadius: 12,
                              cursor: "pointer",
                              fontWeight: 700
                            }}
                          >
                            {completed ? "Mark Incomplete" : "Mark Complete"}
                          </button>
                          <button
                            onClick={() => toggleExpanded(key)}
                            style={{
                              border: "none",
                              background: currentPhase.color,
                              color: "white",
                              padding: "10px 14px",
                              borderRadius: 12,
                              cursor: "pointer",
                              fontWeight: 700
                            }}
                          >
                            {expanded ? "Collapse" : "Expand"}
                          </button>
                        </div>
                      </div>

                      {expanded && (
                        <div style={{ marginTop: 18, display: "grid", gap: 16 }}>
                          <div>
                            <div style={{ fontWeight: 700, marginBottom: 8 }}>Core Topics</div>
                            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, color: "#334155" }}>
                              {subject.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div style={{ fontWeight: 700, marginBottom: 8 }}>Recommended Books</div>
                            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, color: "#334155" }}>
                              {subject.books.map((book, i) => (
                                <li key={i}>{book}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div style={{ fontWeight: 700, marginBottom: 8 }}>Free Resources</div>
                            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, color: "#334155" }}>
                              {subject.free.map((resource, i) => (
                                <li key={i}>{resource}</li>
                              ))}
                            </ul>
                          </div>

                          <div
                            style={{
                              background: "#ffffff",
                              border: "1px solid #e2e8f0",
                              borderRadius: 14,
                              padding: 14
                            }}
                          >
                            <div style={{ fontWeight: 700, marginBottom: 6 }}>Exam / Practice Relevance</div>
                            <div style={{ color: "#334155", lineHeight: 1.6 }}>{subject.examRelevance}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredSubjects.length === 0 && (
              <div
                style={{
                  marginTop: 10,
                  padding: 20,
                  border: "1px dashed #cbd5e1",
                  borderRadius: 14,
                  color: "#475569"
                }}
              >
                No subject blocks matched your current search/filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}