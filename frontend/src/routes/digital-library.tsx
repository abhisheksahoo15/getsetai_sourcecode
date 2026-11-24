import { useState, useMemo, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  BookOpen,
  Download,
  FileText,
  Users,
  Building2,
  Tag,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Hash,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/digital-library")({
  head: () => ({
    meta: [
      { title: "Digital Library — GetSetAI Innovations" },
      {
        name: "description",
        content:
          "Browse and access peer-reviewed research papers published through GetSetAI Innovations' Digital Library. Search by paper ID, title, author, or domain.",
      },
      { property: "og:title", content: "Digital Library — GetSetAI Innovations" },
      {
        property: "og:description",
        content:
          "Explore AI & ML research papers published by students and researchers through GetSetAI Innovations.",
      },
    ],
  }),
  component: DigitalLibraryPage,
});

/* ─────────────────────────── DATA ─────────────────────────── */

interface Author {
  name: string;
  email: string;
  role: "Corresponding" | "Co-Author" | "Guide / Faculty";
  details?: string;
}

interface ResearchPaper {
  id: string;
  title: string;
  domain: string;
  institution: string;
  state: string;
  city: string;
  guide?: string;
  department?: string;
  submittedOn: string;
  publishedOn: string;
  authors: Author[];
  abstract: string;
  keywords: string[];
  pdfUrl: string;
}

const PAPERS: ResearchPaper[] = [
  {
    id: "GSA-2026-001",
    title: "AI-Powered Career and Placement Prediction System",
    domain: "Artificial Intelligence & Machine Learning",
    institution: "Shri Shankaracharya Technical Campus, Bhilai",
    state: "Chhattisgarh",
    city: "Bhilai",
    guide: "Nidhi Chandrakar (Assistant Professor & Project Guide)",
    department: "Computer Science and Engineering (AI & ML)",
    submittedOn: "November 22, 2026",
    publishedOn: "25th November 2026",
    authors: [
      {
        name: "Yashashwi Sahu",
        email: "yashashwisahu74@gmail.com",
        role: "Corresponding",
        details: "Roll No.: 301410923124 | Enrollment No.: CD7704",
      },
      {
        name: "Tanisha Yadav",
        email: "ty1830192@gmail.com",
        role: "Co-Author",
        details: "Roll No.: 301410923109 | Enrollment No.: CD7735",
      },
      {
        name: "Nidhi Chandrakar",
        email: "nidhichandrakar@sstc.ac.in",
        role: "Guide / Faculty",
        details: "Assistant Professor & Project Guide",
      },
    ],
    abstract:
      "In an increasingly competitive academic and professional environment, selecting an appropriate career path and understanding potential employment opportunities have become significant challenges for students. Students may find it difficult to assess how their academic performance, qualifications, technical competencies, and personal interests align with the requirements of different career domains and employers. This research paper proposes an AI-Powered Career and Placement Prediction System that applies Artificial Intelligence (AI) and Machine Learning (ML) techniques to support data-driven career guidance and placement assessment. The proposed platform is designed to collect and analyse student profile information, including academic records, cumulative grade point average (CGPA), qualifications, technical skills, and career interests. Based on the analysed information, the system aims to recommend relevant career options and estimate placement prospects through suitable machine learning models, subject to the availability, quality, and representativeness of historical placement data. In addition, the system is intended to help students recognise their strengths and identify skill gaps that may affect their career readiness. These insights can guide students in prioritising skill development and improving their employability. The proposed system seeks to provide a centralised, accessible, and personalised support platform for career planning and placement preparation.",
    keywords: [
      "Artificial Intelligence",
      "Machine Learning",
      "Career Guidance",
      "Placement Prediction",
      "Student Profile Analysis",
      "Career Recommendation",
      "Employability",
    ],
    pdfUrl: "https://drive.google.com/open?id=1xGwmoCKIRY3WistcI1q9JoadBNVmnXga",
  },
  {
    id: "GSA-2026-002",
    title: "STUDY MATE: AI-POWERED EXAM ASSISTANCE PLATFORM",
    domain: "Artificial Intelligence & Machine Learning",
    institution: "Shri Shankaracharya Technical Campus, Bhilai",
    state: "Chhattisgarh",
    city: "Raipur / Bhilai",
    guide: "Mrs. Monika Vishwakarma — Assistant Professor",
    department: "Computer Science and Engineering (AIML)",
    submittedOn: "November 22, 2026",
    publishedOn: "25th November 2026",
    authors: [
      {
        name: "Astha Chhablani",
        email: "asthachhablani05@gmail.com",
        role: "Corresponding",
      },
      {
        name: "Anushka Sharma",
        email: "anushka.sharma181004@gmail.com",
        role: "Co-Author",
      },
      {
        name: "Areen Pandey",
        email: "pandeyareen553@gmail.com",
        role: "Co-Author",
      },
      {
        name: "Noopur Deshmukh",
        email: "noopurskd0605@gmail.com",
        role: "Co-Author",
      },
      {
        name: "Mrs. Monika Vishwakarma",
        email: "monikavishwakarma@sstc.ac.in",
        role: "Guide / Faculty",
        details: "Assistant Professor",
      },
    ],
    abstract:
      "Students who are preparing for exams usually study from many places at once: textbooks, class notes, PDF files and their own summaries. Turning all of that into short notes, finding the important topics, making practice questions and planning revision takes a lot of time. Study Mate is an AI-based exam helper that brings all these jobs into one place. A student can upload their own files, and the system pulls out the text while remembering which page it came from. It can then write notes, answer questions about the file and show the page number for the answer, make quizzes and flashcards, explain topics, draw mind maps and build a revision plan. When a student asks a question, the system first finds the matching lines in their own file and gives those lines to the AI model, so the answer stays close to the student's own material. Quizzes make the student recall what they learnt, and flashcards bring topics back for review again and again. This paper explains why we built Study Mate, what it is meant to do, what its parts are, how it is built, how it handles documents, and which technologies were used.",
    keywords: [
      "AI study assistant",
      "exam preparation",
      "document processing",
      "retrieval-augmented generation",
      "question answering",
      "active recall",
      "spaced repetition",
      "personalized learning",
    ],
    pdfUrl: "https://drive.google.com/open?id=1hdJ7e07e3X65oL47RJ7xxowFqd1d12ty",
  },
  {
    id: "GSA-2026-003",
    title:
      "AI Resume Screening System: An Explainable NLP and Weighted Multi-Criteria Framework for Automated Candidate Shortlisting",
    domain: "Artificial Intelligence & Machine Learning",
    institution: "Shri Shankaracharya Technical Campus, Bhilai, Chhattisgarh (Affiliated to CSVTU Bhilai)",
    state: "Chhattisgarh",
    city: "Bhilai",
    guide: "Mr. Ankit Katakwar, Assistant Professor (AI & AIML)",
    department: "B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    submittedOn: "November 23, 2026",
    publishedOn: "25th November 2026",
    authors: [
      {
        name: "Mohammad Ismail Nizami",
        email: "mohammad.ismailnizami.work@gmail.com",
        role: "Corresponding",
        details: "Roll No.: 301410923062",
      },
      {
        name: "Aditya Sharma",
        email: "adityasharma@sspubhilai.com",
        role: "Co-Author",
        details: "Roll No.: 301410923008",
      },
      {
        name: "Sanju Chandrakar",
        email: "sanjuchandrakar@sspubhilai.com",
        role: "Co-Author",
        details: "Roll No.: 301410923092",
      },
      {
        name: "Tilok Dewangan",
        email: "tilokdewangan@sspubhilai.com",
        role: "Co-Author",
        details: "Roll No.: 301410923112",
      },
      {
        name: "Mr. Ankit Katakwar",
        email: "ankitkatakwar@sstc.ac.in",
        role: "Guide / Faculty",
        details: "Assistant Professor (AI & AIML)",
      },
    ],
    abstract:
      "Recruitment teams, staffing agencies, and campus placement cells routinely receive large numbers of applications for individual job openings. Reviewing every resume manually requires considerable time and frequently leads to inconsistent shortlisting when different evaluators interpret the same qualifications differently. Traditional Applicant Tracking Systems (ATS) attempt to streamline triage through rigid keyword searches, which overlook qualified candidates who express skills using synonyms and obscure why specific profiles rank above others. This paper presents the AI Resume Screening System, an explainable decision-support framework designed to assist preliminary candidate evaluation. The proposed architecture integrates a five-layer processing pipeline comprising a recruiter presentation interface, multi-format document text extraction, Natural Language Processing (NLP) text normalization and attribute extraction, a configurable weighted multi-criteria matching engine, and a relational data layer. Unlike opaque black-box classifiers, the scoring model computes a transparent relevance percentage while displaying criterion-level evidence of matched and missing qualifications. The system is designed around a Python and Flask web stack with spaCy/NLTK linguistic processing, scikit-learn similarity modeling, and SQLite/MySQL persistence.",
    keywords: [
      "artificial intelligence",
      "resume screening",
      "natural language processing",
      "applicant tracking system",
      "explainable matching",
      "TF-IDF",
      "weighted scoring",
      "recruitment decision support",
    ],
    pdfUrl: "https://drive.google.com/open?id=1WxaEixZJzrD6E2dqlkV7Z5TbVpyfAatQ",
  },
];

/* ──────────────────────── VIEW STATES ─────────────────────── */

type View = "list" | "detail" | "fullpaper";

/* ─────────────────────── HELPER COMPONENTS ────────────────── */

function Badge({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "domain" | "id" }) {
  const cls = {
    default: "bg-secondary text-secondary-foreground border border-border",
    domain: "bg-primary/10 text-primary border border-primary/20",
    id: "bg-muted text-muted-foreground border border-border font-mono",
  }[variant];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}

function AuthorTag({ author }: { author: Author }) {
  return (
    <div className="flex items-start gap-2.5 py-2.5 border-b border-border last:border-0">
      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-xs font-semibold text-foreground">{author.name.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-foreground truncate">{author.name}</p>
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
              author.role === "Corresponding"
                ? "bg-primary/10 text-primary border border-primary/20"
                : author.role === "Guide / Faculty"
                  ? "bg-secondary text-foreground/80 border border-border"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {author.role}
          </span>
        </div>
        {author.details && <p className="text-xs text-muted-foreground/80 mt-0.5">{author.details}</p>}
      </div>
    </div>
  );
}

/* ─────────────────────── PAPER LIST CARD ──────────────────── */

function PaperCard({
  paper,
  onViewDetail,
}: {
  paper: ResearchPaper;
  onViewDetail: (paper: ResearchPaper) => void;
}) {
  const correspondingAuthor = paper.authors.find((a) => a.role === "Corresponding")!;
  const coAuthors = paper.authors.filter((a) => a.role === "Co-Author");

  return (
    <article
      className="group relative border border-border rounded-xl bg-card p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_0_1px_oklch(0.99_0_0_/_8%)]"
      role="article"
    >
      {/* Header row */}
      <div className="flex flex-wrap items-start gap-2 mb-3">
        <Badge variant="id">
          <Hash className="w-3 h-3" />
          {paper.id}
        </Badge>
        <Badge variant="domain">
          <Tag className="w-3 h-3" />
          {paper.domain}
        </Badge>
      </div>

      {/* Title — IEEE style clickable link */}
      <button
        onClick={() => onViewDetail(paper)}
        className="text-left w-full group/title"
        aria-label={`View details for ${paper.title}`}
      >
        <h2 className="text-base font-semibold text-primary group-hover/title:underline underline-offset-2 decoration-primary/50 leading-snug mb-2 transition-colors">
          {paper.title}
        </h2>
      </button>

      {/* Authors */}
      <p className="text-sm text-muted-foreground mb-1">
        <span className="text-foreground font-medium">{correspondingAuthor.name}</span>
        {coAuthors.length > 0 && (
          <span>
            {" "}
            et al.{" "}
            <span className="text-xs">
              (+{coAuthors.length} co-author{coAuthors.length > 1 ? "s" : ""})
            </span>
          </span>
        )}
      </p>

      {/* Institution & date */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Building2 className="w-3 h-3" />
          {paper.institution}
        </span>
        <span className="flex items-center gap-1 text-foreground/90 font-medium">
          <Calendar className="w-3 h-3 text-primary" />
          Published: {paper.publishedOn}
        </span>
      </div>

      {/* Abstract excerpt */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{paper.abstract}</p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.keywords.slice(0, 4).map((kw) => (
          <span key={kw} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">
            {kw}
          </span>
        ))}
        {paper.keywords.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
            +{paper.keywords.length - 4} more
          </span>
        )}
      </div>

      {/* Action row */}
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <button
          onClick={() => onViewDetail(paper)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </button>
        <a
          href={paper.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          aria-label="Download PDF"
        >
          <Download className="w-3.5 h-3.5" />
          PDF
        </a>
      </div>
    </article>
  );
}

/* ──────────────────────── DETAIL VIEW ─────────────────────── */

function PaperDetail({
  paper,
  onBack,
  onReadMore,
}: {
  paper: ResearchPaper;
  onBack: () => void;
  onReadMore: (paper: ResearchPaper) => void;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Library
      </button>

      <div className="border border-border rounded-2xl bg-card overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

        <div className="p-6 md:p-10">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge variant="id">
              <Hash className="w-3 h-3" />
              {paper.id}
            </Badge>
            <Badge variant="domain">
              <Tag className="w-3 h-3" />
              {paper.domain}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold leading-tight text-foreground mb-6">
            {paper.title}
          </h1>

          {/* Two-column meta grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 p-5 rounded-xl bg-secondary/40 border border-border">
            {/* Authors */}
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Authors
              </p>
              <div>
                {paper.authors.map((a) => (
                  <AuthorTag key={a.email} author={a} />
                ))}
              </div>
            </div>

            {/* Publication info */}
            <div className="space-y-3">
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Institution
                </p>
                <p className="text-sm text-foreground">{paper.institution}</p>
                {paper.department && (
                  <p className="text-xs text-muted-foreground mt-0.5">{paper.department}</p>
                )}
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Location
                </p>
                <p className="text-sm text-foreground">
                  {paper.city}, {paper.state}
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  Published Date
                </p>
                <p className="text-sm font-semibold text-primary">{paper.publishedOn}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Submitted
                </p>
                <p className="text-sm text-foreground">{paper.submittedOn}</p>
              </div>
            </div>
          </div>

          {/* Abstract */}
          <section className="mb-8">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Abstract
            </h2>
            <p className="text-sm text-muted-foreground leading-7">{paper.abstract}</p>
          </section>

          {/* Keywords */}
          <section className="mb-8">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Keywords
            </h2>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground border border-border"
                >
                  {kw}
                </span>
              ))}
            </div>
          </section>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
            <button
              onClick={() => onReadMore(paper)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read Full Paper
            </button>
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── FULL PAPER VIEW ─────────────────── */

function FullPaperView({
  paper,
  onBack,
}: {
  paper: ResearchPaper;
  onBack: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Paper Details
      </button>

      {/* Paper header card */}
      <div className="border border-border rounded-2xl bg-card overflow-hidden mb-6">
        <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="id">
              <Hash className="w-3 h-3" />
              {paper.id}
            </Badge>
            <Badge variant="domain">
              <Tag className="w-3 h-3" />
              {paper.domain}
            </Badge>
          </div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-foreground mb-4">
            {paper.title}
          </h1>

          {/* Authors line */}
          <p className="text-sm text-muted-foreground mb-1">
            <span className="font-medium text-foreground">
              {paper.authors.map((a) => a.name).join(", ")}
            </span>
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
            <Building2 className="w-3 h-3" />
            {paper.institution}
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-primary" />
            <span className="font-semibold text-foreground">Published: {paper.publishedOn}</span>
            <span className="opacity-40">•</span>
            <span>Submitted: {paper.submittedOn}</span>
          </p>
        </div>
      </div>

      {/* Embedded PDF viewer */}
      <div className="border border-border rounded-2xl bg-card overflow-hidden mb-6">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <span className="text-sm font-medium text-foreground flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            Research Paper
          </span>
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in Drive
          </a>
        </div>

        {/* Google Drive embed — convert open link to preview/embed */}
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <iframe
            src={paper.pdfUrl.replace(
              "https://drive.google.com/open?id=",
              "https://drive.google.com/file/d/"
            ) + "/preview"}
            title={`Full paper: ${paper.title}`}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>

      {/* Download button */}
      <div className="flex justify-center">
        <a
          href={paper.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Full PDF
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────── MAIN PAGE ───────────────────────── */

function DigitalLibraryPage() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<View>("list");
  const [activePaper, setActivePaper] = useState<ResearchPaper | null>(null);

  /* Search logic: by ID, title, author name */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PAPERS;
    return PAPERS.filter(
      (p) =>
        p.id.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.authors.some((a) => a.name.toLowerCase().includes(q)) ||
        p.domain.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q)) ||
        p.publishedOn.toLowerCase().includes(q) ||
        (p.guide && p.guide.toLowerCase().includes(q))
    );
  }, [query]);

  const handleViewDetail = (paper: ResearchPaper) => {
    setActivePaper(paper);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadMore = (paper: ResearchPaper) => {
    setActivePaper(paper);
    setView("fullpaper");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setView("list");
    setActivePaper(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToDetail = () => {
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grid-field min-h-dvh px-5 pb-24 pt-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* ── HEADER ── */}
        <div className="mb-10 border-b border-border pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="w-3.5 h-3.5" />
              Digital Library
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Research Publications
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Peer-reviewed research papers published through GetSetAI Innovations. Browse, search, and
            download open-access publications in AI, Machine Learning, and emerging technologies.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <strong className="text-foreground">{PAPERS.length}</strong> Papers Published
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <strong className="text-foreground">
                {PAPERS.reduce((s, p) => s + p.authors.length, 0)}
              </strong>{" "}
              Contributing Authors
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <strong className="text-foreground">
                {[...new Set(PAPERS.map((p) => p.institution))].length}
              </strong>{" "}
              Institution
            </span>
          </div>
        </div>

        {/* ── SEARCH BAR (always visible) ── */}
        {view === "list" && (
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Paper ID, title, author name, or keyword…"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                aria-label="Search research papers"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search result count */}
            {query.trim() && (
              <p className="mt-3 text-sm text-muted-foreground">
                {results.length === 0 ? (
                  <span className="text-destructive">No papers matched "{query}"</span>
                ) : (
                  <span>
                    Showing <strong className="text-foreground">{results.length}</strong> result
                    {results.length > 1 ? "s" : ""} for "{query}"
                  </span>
                )}
              </p>
            )}
          </div>
        )}

        {/* ── VIEWS ── */}
        {view === "list" && (
          <section aria-label="Research paper results">
            {results.length > 0 ? (
              <div className="grid gap-5">
                {results.map((paper) => (
                  <PaperCard key={paper.id} paper={paper} onViewDetail={handleViewDetail} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <FileText className="w-12 h-12 text-muted-foreground/40 mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Results Found</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Try searching by a different Paper ID, author name, or keyword.
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </section>
        )}

        {view === "detail" && activePaper && (
          <PaperDetail
            paper={activePaper}
            onBack={handleBackToList}
            onReadMore={handleReadMore}
          />
        )}

        {view === "fullpaper" && activePaper && (
          <FullPaperView paper={activePaper} onBack={handleBackToDetail} />
        )}
      </div>
    </div>
  );
}
