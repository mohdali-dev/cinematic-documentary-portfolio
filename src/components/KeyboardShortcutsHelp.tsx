import { useState, useEffect } from "react";
import { Keyboard, X, ArrowLeft, ArrowRight, CornerDownLeft } from "lucide-react";

interface KeyboardShortcutsHelpProps {
  onPageChange: (page: string) => void;
  activePage: string;
}

export default function KeyboardShortcutsHelp({ onPageChange, activePage }: KeyboardShortcutsHelpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle help with '?' key (Shift + /)
      if (e.key === "?") {
        // Only if not in input fields
        const isEditable =
          document.activeElement && (
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "TEXTAREA" ||
            document.activeElement.tagName === "SELECT" ||
            (document.activeElement as HTMLElement).isContentEditable
          );
        if (!isEditable) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }

      // Track key press for active feed back in UI
      const keysToTrack = ["ArrowLeft", "ArrowRight", "1", "2", "3", "4", "5", "Escape"];
      if (keysToTrack.includes(e.key)) {
        const isEditable =
          document.activeElement && (
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "TEXTAREA" ||
            document.activeElement.tagName === "SELECT" ||
            (document.activeElement as HTMLElement).isContentEditable
          );
        if (!isEditable) {
          let label = e.key;
          if (e.key === "ArrowLeft") label = "Left Arrow";
          if (e.key === "ArrowRight") label = "Right Arrow";
          if (e.key === "Escape") label = "ESC";
          
          setLastKeyPressed(label);
          const timer = setTimeout(() => {
            setLastKeyPressed(null);
          }, 1500);
          return () => clearTimeout(timer);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const shortcutItems = [
    { keys: ["➔", "ArrowRight"], desc: "Next Screen" },
    { keys: ["←", "ArrowLeft"], desc: "Previous Screen" },
    { keys: ["ESC"], desc: "Close Cinematic Player / Lightbox" },
    { keys: ["1"], desc: "Go to Home" },
    { keys: ["2"], desc: "Go to Selected Work" },
    { keys: ["3"], desc: "Go to Music Documentaries" },
    { keys: ["4"], desc: "Go to About Story" },
    { keys: ["5"], desc: "Go to Contact" },
    { keys: ["?"], desc: "Toggle this Keyboard Help Menu" },
  ];

  return (
    <>
      {/* Visual Indicator of key press (Toast) */}
      {lastKeyPressed && (
        <div className="fixed bottom-24 left-8 z-50 bg-black/90 dark:bg-neutral-900/90 text-white border border-neutral-800 px-4 py-2 text-[10px] uppercase tracking-widest font-mono animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Key Pressed: <span className="text-red-400 font-bold">{lastKeyPressed}</span></span>
        </div>
      )}

      {/* Floating Activator Button */}
      <button
        id="keyboard-shortcuts-btn"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-8 left-8 z-40 flex items-center justify-center w-12 h-12 bg-[#FAF9F6] dark:bg-[#121212] text-black dark:text-white border border-brand-border dark:border-neutral-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-neutral-400"
        aria-label="Toggle Keyboard Shortcuts Guide"
        title="Keyboard Shortcuts Guide (Press '?')"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Keyboard className="w-5 h-5" />}
      </button>

      {/* Overlay Help Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shortcuts-dialog-title"
        >
          <div
            className="w-full max-w-md bg-[#FAF9F6] dark:bg-[#121212] border border-neutral-300 dark:border-neutral-850 p-6 md:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border dark:border-neutral-850 pb-4">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-red-500" />
                <h3 id="shortcuts-dialog-title" className="font-serif text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
                  Keyboard Controls
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close Guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-2 font-mono text-[11px] leading-relaxed">
              {shortcutItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-900 pb-2">
                  <span className="text-neutral-500 dark:text-neutral-400 font-light font-sans">{item.desc}</span>
                  <div className="flex gap-1.5 shrink-0">
                    {item.keys.map((k, kidx) => {
                      // Hide long raw browser key identifiers in favor of nice visual characters
                      if (k === "ArrowRight" || k === "ArrowLeft") return null;
                      return (
                        <kbd
                          key={kidx}
                          className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold uppercase rounded shadow-xs"
                        >
                          {k}
                        </kbd>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Tip */}
            <div className="text-[10px] text-neutral-400 dark:text-neutral-500 tracking-wide font-light text-center font-sans border-t border-brand-border dark:border-neutral-850 pt-4 flex items-center justify-center gap-1">
              <span>Press</span>
              <kbd className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded text-[9px] font-mono font-bold">?</kbd>
              <span>anytime to toggle this guide</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
