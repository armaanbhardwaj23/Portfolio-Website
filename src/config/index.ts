import type { SiteConfig, SiteContent } from "../types";

const GITHUB_URL = "https://github.com/armaanbhardwaj23";

export const SITE_CONFIG: SiteConfig = {
  title: "Armaan Bhardwaj — AI/ML Engineer",
  author: "Armaan Bhardwaj",
  description:
    "AI/ML Engineer and MScAC (AI) student at the University of Toronto. Ex-JPMorgan Chase. I build production ML and GenAI systems.",
  lang: "en",
  siteLogo: "/armaan-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: GITHUB_URL },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/armaan-bhardwaj-08717018a",
    },
  ],
  socialImage: "/og-placeholder.png",
  canonicalURL: "https://portfolio-website-nine-rho-13.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Armaan Bhardwaj",
    specialty: "AI/ML Engineer",
    summary:
      "MScAC (AI) student at the University of Toronto, based in the Greater Toronto Area. Formerly at JPMorgan Chase, I build production ML and GenAI systems that are scalable, reliable and observable.",
    email: "armaanbhardwaj23@gmail.com",
  },
  experience: [
    {
      company: "University of Toronto",
      position: "Undergraduate Teaching Assistant",
      startDate: "Sep 2026",
      endDate: "Present",
      summary:
        "Run tutorial lab sessions for second-year undergraduates in CSC207 (Software Design).",
    },
    {
      company: "JPMorgan Chase",
      position: "Software Engineer II (AI/ML)",
      startDate: "Jul 2025",
      endDate: "Aug 2026",
      summary: [
        "Built an AI/ML observability pipeline with Seldon Alibi for explainable inference and drift detection, reducing false drift alerts by 35%.",
        "Optimized PySpark inference pipelines on Databricks using asynchronous Isolation Forest and KSDrift prediction, cutting end-to-end latency from 120s to about 30s.",
        "Led experimentation with Arize Phoenix on LLM and agentic AI proofs-of-concept, covering hallucination detection, trace evaluation and performance explainability.",
        "Built Python/FastAPI backend APIs for a Databricks onboarding platform on AWS EKS, automating multi-step tenant provisioning and reducing manual onboarding time by about 70%.",
        "Led the migration of the platform's persistence layer from DynamoDB to PostgreSQL (Amazon RDS), including redesigned schemas, refactored FastAPI microservices and data migration pipelines.",
      ],
    },
    {
      company: "JPMorgan Chase",
      position: "Software Engineer I",
      startDate: "Jul 2023",
      endDate: "Jun 2025",
      summary: [
        "Delivered a full-stack Force for Good CSR solution with Angular, TypeScript, Spring Boot and Java, earning internal recognition for ownership and impact.",
        "Implemented asynchronous Java batch-processing modules for document-payment workflows, cutting processing time by about 65%.",
        "Built and deployed Kafka-based data ingestion services for transaction streaming, increasing system throughput by 25%.",
        "Enhanced an observability platform used by operations teams to monitor high-value payments, generating 150K+ payment records with better reporting performance.",
        "Built cross-border payment connectors integrating FORM3 and JPMC APIs, and designed C24 data transformation pipelines feeding downstream Java services.",
      ],
    },
    {
      company: "JPMorgan Chase",
      position: "Software Engineer Intern",
      startDate: "Jan 2023",
      endDate: "Jun 2023",
      summary: [
        "Built an interactive Splunk dashboard for analyzing high-value payment flows and real-time monitoring.",
        "Expanded JUnit and Mockito unit and integration tests, raising coverage by more than 40% and reducing post-release defects.",
      ],
    },
    {
      company: "GoKwik",
      position: "Data Science Intern",
      startDate: "Nov 2021",
      endDate: "Feb 2022",
      summary: [
        "Built Python pipelines with Selenium and Beautiful Soup to scrape e-commerce data from 50+ client sites for the RTO reduction model.",
        "Validated and monitored model features for the deployed RTO prediction pipeline.",
        "Built Pandas/NumPy programs to verify RTO scores across time intervals, reducing manual validation effort by about 40%.",
      ],
    },
  ],
  projects: [
    {
      name: "RetrievalLab",
      summary:
        "Hybrid retrieval and RAG evaluation platform for comparing dense, BM25 and Reciprocal Rank Fusion retrieval. On a 30-question labeled set, hybrid reached Recall@5 of 1.000 and MRR of 0.950.",
      linkSource: `${GITHUB_URL}/RetrievalLab---Hybrid-Retrieval-RAG-Evaluation-Platform`,
      image: "/project-1-placeholder.svg",
    },
    {
      name: "CacheMind",
      summary: "A semantic caching layer for LLM APIs.",
      linkSource: `${GITHUB_URL}/CacheMind-Semantic-Caching-Layer-for-LLM-APIs`,
      image: "/project-2-placeholder.svg",
    },
    {
      name: "Multimodal Driver Behaviour Analysis",
      summary:
        "Research project on driver drowsiness estimation from EEG, ECG and GSR signals. Compared CNN, Transformer and Autoencoder fusion models, and lifted accuracy from 60% to 70% with ensemble and soft-voting strategies.",
      linkSource: GITHUB_URL,
      image: "/project-3-placeholder.svg",
    },
    {
      name: "HawkAI Deepvision",
      summary:
        "Deep learning surveillance system using YOLOv5 and custom CNNs to identify people and objects in images and video at about 85% detection accuracy, with automated real-time feature extraction and classification.",
      linkSource: GITHUB_URL,
      image: "/project-4-placeholder.svg",
    },
    {
      name: "Spashtam",
      summary:
        "Learning management system built for JPMorgan's Force for Good initiative with Angular, TypeScript, Spring Boot and Java, connected end-to-end through REST APIs.",
      linkPreview: "https://spashtam.swfn.org/login?returnUrl=%2F",
      image: "/project-5-placeholder.svg",
    },
  ],
  about: {
    description: `
      Hi, I'm Armaan, an AI/ML engineer with a strong software engineering foundation. I'm currently pursuing the MScAC (AI) at the University of Toronto, after three years at JPMorgan Chase, where I moved from Payments Technology into AI/ML Solutions.

      I work across the AI lifecycle, from developing and evaluating models and LLM systems to building the infrastructure, APIs, pipelines and tooling that deploy and operate them. I'm particularly interested in GenAI, LLM applications, agentic systems, RAG, ML inference and optimization, and multimodal AI. I'm AWS Certified (Developer Associate), and I hold a B.E. in Computer Engineering from Thapar Institute of Engineering and Technology (GPA 9.63/10).
    `,
    image: "/armaan-big.jpg",
  },
};
