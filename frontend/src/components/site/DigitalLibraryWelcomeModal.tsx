import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, Sparkles, X, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "getsetai_diglib_welcome_seen";

export function DigitalLibraryWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show only the first time a user opens the page
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        // Short delay for smooth entrance after initial page load
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // In case localStorage is blocked in private browsing
      console.warn("Storage check skipped:", e);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (e) {
      console.warn("Storage write skipped:", e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur & Dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black p-6 sm:p-8 text-foreground shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
          >
            {/* Glowing Accent Orbs */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:bg-white/15 hover:text-white"
              aria-label="Close welcome popup"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Icon & Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 shadow-inner">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono font-medium text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                New Release
              </span>
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-snug">
              Welcome to the Digital Library of GetSetAI
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Explore fantastic peer-reviewed research papers in Artificial Intelligence, Machine
              Learning, Resume Screening, and Autonomous Exam Assistance, published with full academic rigor.
            </p>

            {/* Highlights List */}
            <div className="space-y-2.5 mb-6 text-xs text-neutral-300/90 font-medium bg-white/[0.03] border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Peer-reviewed B.Tech and enterprise research publications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Instant keyword, ID, title, and author semantic search</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                <span>Read papers inline or download full PDF documentation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/digital-library"
                onClick={handleClose}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-lg"
              >
                <FileText className="h-4 w-4" />
                Explore Research Papers
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
