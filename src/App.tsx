/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { PageId } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { interstellarMusic } from "./utils/audio";

// Page Components
import Home from "./pages/Home";
import SelectedWork from "./pages/SelectedWork";
import MusicDocs from "./pages/MusicDocs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Reusable UI Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import VideoModal from "./components/VideoModal";
import KeyboardShortcutsHelp from "./components/KeyboardShortcutsHelp";

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("home");
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_dark_mode");
      if (saved !== null) {
        return saved === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(true);

  // Video Modal State
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoId: "",
    title: "",
    source: "vimeo" as "vimeo" | "youtube"
  });

  // Handle first load cinematic spinner/line animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play the Hans Zimmer Interstellar soundtrack on load or on first user click
  useEffect(() => {
    if (!isLoading) {
      const savedAutoplay = localStorage.getItem("interstellar_autoplay");
      if (savedAutoplay !== "false") {
        interstellarMusic.start();
      }
    }

    const startAudioOnInteraction = () => {
      const savedAutoplay = localStorage.getItem("interstellar_autoplay");
      if (savedAutoplay !== "false") {
        interstellarMusic.start();
      }
      // Remove listeners once gesture is captured
      window.removeEventListener("click", startAudioOnInteraction);
      window.removeEventListener("pointerdown", startAudioOnInteraction);
    };

    window.addEventListener("click", startAudioOnInteraction);
    window.addEventListener("pointerdown", startAudioOnInteraction);

    return () => {
      window.removeEventListener("click", startAudioOnInteraction);
      window.removeEventListener("pointerdown", startAudioOnInteraction);
    };
  }, [isLoading]);

  // Synchronize state with URL hash (Routing support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setActivePage("home");
        return;
      }
      
      const validPages: PageId[] = ["home", "work", "music-docs", "about", "contact"];
      if (validPages.includes(hash as PageId)) {
        setActivePage(hash as PageId);
      } else {
        setActivePage("404");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (!isLoading) {
      handleHashChange();
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [isLoading]);

  const handlePageChange = (page: PageId) => {
    if (page === "home") {
      window.location.hash = "";
    } else if (page === "404") {
      window.location.hash = "not-found";
    } else {
      window.location.hash = page;
    }
    setActivePage(page);
  };

  // Update dark class on <html> element for Tailwind support
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("aura_dark_mode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("aura_dark_mode", "false");
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Global Keyboard Shortcuts for Arrow keys and Page Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Ignore if typing in an input/textarea/select or contentEditable element
      const isEditable =
        document.activeElement && (
          document.activeElement.tagName === "INPUT" ||
          document.activeElement.tagName === "TEXTAREA" ||
          document.activeElement.tagName === "SELECT" ||
          (document.activeElement as HTMLElement).isContentEditable
        );

      if (isEditable) return;

      // 2. Ignore if a modal/lightbox is currently active (where overflow is set to hidden)
      if (videoModal.isOpen || document.body.style.overflow === "hidden") {
        return;
      }

      const navigationPages: PageId[] = ["home", "work", "music-docs", "about", "contact"];
      const currentIndex = navigationPages.indexOf(activePage);

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + navigationPages.length) % navigationPages.length;
        handlePageChange(navigationPages[prevIndex]);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % navigationPages.length;
        handlePageChange(navigationPages[nextIndex]);
      } else if (e.key === "1") {
        e.preventDefault();
        handlePageChange("home");
      } else if (e.key === "2") {
        e.preventDefault();
        handlePageChange("work");
      } else if (e.key === "3") {
        e.preventDefault();
        handlePageChange("music-docs");
      } else if (e.key === "4") {
        e.preventDefault();
        handlePageChange("about");
      } else if (e.key === "5") {
        e.preventDefault();
        handlePageChange("contact");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePage, videoModal.isOpen]);

  const handleOpenVideoModal = (videoId: string, title: string, source: "vimeo" | "youtube" = "vimeo") => {
    setVideoModal({
      isOpen: true,
      videoId,
      title,
      source,
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home
            onPageChange={handlePageChange}
            onOpenVideoModal={handleOpenVideoModal}
          />
        );
      case "work":
        return <SelectedWork onOpenVideoModal={handleOpenVideoModal} />;
      case "music-docs":
        return <MusicDocs onOpenVideoModal={handleOpenVideoModal} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "404":
        return <NotFound onPageChange={handlePageChange} />;
      default:
        return (
          <Home
            onPageChange={handlePageChange}
            onOpenVideoModal={handleOpenVideoModal}
          />
        );
    }
  };

  // Cinematic Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0B0B0B] transition-colors duration-500">
        <div className="space-y-6 text-center select-none">
          {/* Logo brand mark fading up */}
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-[0.45em] text-neutral-900 dark:text-neutral-100 animate-pulse">
            AURA
          </h1>
          <div className="w-24 h-[1px] bg-neutral-200 dark:bg-neutral-800 mx-auto overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-12 bg-black dark:bg-white animate-[shimmer_1s_infinite_linear]" 
                 style={{
                   animationName: 'loading-bar-anim',
                   animationDuration: '1.2s',
                   animationIterationCount: 'infinite',
                   animationTimingFunction: 'ease-in-out'
                 }}
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
            Cinema &amp; Truth
          </p>
        </div>
        {/* Simple style inject to support keyframe shimmer in app shell */}
        <style>{`
          @keyframes loading-bar-anim {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0B0B0B] text-brand-text dark:text-neutral-100 transition-colors duration-500">
      
      {/* Scroll indicator for premium feel */}
      <ScrollProgress />

      {/* Sticky Top Navigation */}
      <Navbar
        activePage={activePage}
        onPageChange={handlePageChange}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Content Area with elegant fade-in transition */}
      <main className="grow overflow-hidden">
        <AnimatePresence mode="wait">
          <div key={activePage} className="w-full">
            <CinematicPageWrapper pageKey={activePage}>
              {renderActivePage()}
            </CinematicPageWrapper>
          </div>
        </AnimatePresence>
      </main>

      {/* Sticky bottom floating indicators */}
      <ScrollToTop />
      <KeyboardShortcutsHelp onPageChange={handlePageChange} activePage={activePage} />

      {/* Shared Footer across screens */}
      <Footer onPageChange={handlePageChange} />

      {/* Shared Cinema Video Popup Overlay */}
      <VideoModal
        isOpen={videoModal.isOpen}
        videoId={videoModal.videoId}
        title={videoModal.title}
        source={videoModal.source}
        onClose={handleCloseVideoModal}
      />

      {/* Style overrides for custom entry animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// Cinematic Film Lens Shutter transition wrapper representing real optical movement
interface CinematicPageWrapperProps {
  children: ReactNode;
  pageKey: string;
}

function CinematicPageWrapper({ children, pageKey }: CinematicPageWrapperProps) {
  const blades = [0, 1, 2];
  const filterId = `cinematic-blur-${pageKey}`;
  
  return (
    <div className="relative w-full">
      {/* Hidden SVG helper defining the dynamic directional vertical motion blur */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id={filterId} x="-10%" y="-50%" width="120%" height="200%">
            <motion.feGaussianBlur
              initial={{ stdDeviation: "0, 12" }}
              animate={{ stdDeviation: "0, 0" }}
              exit={{ stdDeviation: "0, 12" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
          </filter>
        </defs>
      </svg>

      {/* Animated content layer with hardware-accelerated dynamic vertical blur and stretching */}
      <motion.div
        initial={{ opacity: 0, y: 24, scaleY: 1.015 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        exit={{ opacity: 0, y: -24, scaleY: 1.015 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: `url(#${filterId})` }}
      >
        {children}
      </motion.div>

      {/* Camera Aperture / Shutter Blades overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 flex flex-col md:flex-row">
        {blades.map((i) => (
          <motion.div
            key={i}
            className="flex-1 bg-[#FAF9F6] dark:bg-[#0E0E0E] border-b md:border-b-0 md:border-r border-neutral-200/40 dark:border-neutral-900/60 relative"
            style={{ originY: 0 }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.08,
            }}
          >
            {/* Center blade focal measurement stamp */}
            {i === 1 && (
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.4em] uppercase opacity-40 text-black dark:text-neutral-400 select-none">
                AURA T1.5 / 35MM
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
