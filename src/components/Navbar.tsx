/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { PageId } from "../types";
import { microAudio, interstellarMusic } from "../utils/audio";

interface NavbarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ activePage, onPageChange, darkMode, onToggleDarkMode }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    setIsPlayingMusic(interstellarMusic.getIsPlaying());

    // Synchronize play state periodically
    const interval = setInterval(() => {
      setIsPlayingMusic(interstellarMusic.getIsPlaying());
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const handleToggleMusic = () => {
    const nextState = interstellarMusic.toggle();
    setIsPlayingMusic(nextState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "work", label: "Selected Work" },
    { id: "music-docs", label: "Music Documentaries" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: PageId) => {
    microAudio.playClick();
    onPageChange(id);
    setIsMobileMenuOpen(false);
    // Smooth scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0B0B0B]/95 border-b border-brand-border dark:border-neutral-800/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-white dark:bg-[#0B0B0B] border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center space-x-3 focus:outline-none select-none text-left"
          aria-label="Aura Cinematic Home"
        >
          <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-black font-serif italic text-lg font-bold">A</span>
          </div>
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-brand-text dark:text-neutral-100">
            Aura Cinematic
          </span>
        </button>

        {/* Desktop Navigation Links & Action Controls */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium py-1.5 focus:outline-none transition-all duration-300 ${
                    activePage === item.id
                      ? "text-black dark:text-white font-semibold"
                      : "text-brand-muted hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black dark:bg-white" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Tactile Audio SFX Mode Toggle */}
          <button
            onClick={() => {
              handleToggleMusic();
            }}
            className="p-2 border border-brand-border dark:border-neutral-800 hover:bg-brand-secondary dark:hover:bg-neutral-900 text-brand-text dark:text-neutral-100 transition-all focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white flex items-center justify-center"
            id="interstellar-music-toggle"
            aria-label={isPlayingMusic ? "Pause Interstellar soundtrack" : "Play Interstellar soundtrack"}
            title={isPlayingMusic ? "Pause Interstellar Soundtrack" : "Play Interstellar Soundtrack"}
          >
            {isPlayingMusic ? <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              microAudio.playClick();
              onToggleDarkMode();
            }}
            className="p-2 border border-brand-border dark:border-neutral-800 hover:bg-brand-secondary dark:hover:bg-neutral-900 text-brand-text dark:text-neutral-100 transition-all focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Control Bar */}
        <div className="flex md:hidden items-center gap-3">
          {/* Audio SFX Toggle for Mobile */}
          <button
            onClick={handleToggleMusic}
            className="p-2 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-100 transition-all flex items-center justify-center"
            aria-label={isPlayingMusic ? "Pause Interstellar soundtrack" : "Play Interstellar soundtrack"}
          >
            {isPlayingMusic ? <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => {
              microAudio.playClick();
              onToggleDarkMode();
            }}
            className="p-2 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-100 transition-all"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => {
              microAudio.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 text-brand-text dark:text-neutral-100 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0E0E0E] shadow-2xl z-50 p-8 flex flex-col justify-between border-l border-brand-border dark:border-neutral-800 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between pb-4 border-b border-brand-border dark:border-neutral-800">
            <span className="font-serif text-sm tracking-widest text-neutral-400">NAVIGATION</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 dark:text-white" />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm uppercase tracking-[0.2em] font-medium py-1.5 text-left w-full ${
                    activePage === item.id
                      ? "text-black dark:text-white font-bold pl-2 border-l-2 border-black dark:border-white"
                      : "text-brand-muted dark:text-neutral-400"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 border-t border-brand-border dark:border-neutral-800 text-center">
          <p className="font-serif text-sm tracking-widest mb-2 dark:text-white">AURA CINEMATIC</p>
          <p className="text-[10px] text-brand-muted tracking-wider uppercase">
            London &mdash; Tokyo &copy; 2026
          </p>
        </div>
      </div>

      {/* Backdrop when Mobile Menu Open */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </nav>
  );
}
