/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from "../types";
import { Film, Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-4 h-4" /> },
    { label: "Vimeo", href: "https://vimeo.com", icon: <Film className="w-4 h-4" /> },
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-4 h-4" /> },
    { label: "Email", href: "mailto:hello@auracinematic.com", icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-brand-secondary dark:bg-[#0B0B0B] border-t border-brand-border dark:border-neutral-800/80 transition-colors duration-500 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main upper footer block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Logo & Manifesto Column */}
          <div className="md:col-span-2 space-y-6">
            <button
              onClick={() => handleNavClick("home")}
              className="font-serif text-xl font-semibold tracking-[0.35em] text-brand-text dark:text-neutral-100 hover:opacity-80 transition-all text-left focus:outline-none"
            >
              AURA CINEMATIC
            </button>
            <p className="text-sm text-brand-muted dark:text-neutral-400 max-w-sm leading-relaxed font-light">
              Producing award-winning non-fiction cinema with absolute visual precision, editorial integrity, and deep artistic empathy.
            </p>
          </div>

          {/* Quick links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-text dark:text-neutral-200">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted dark:text-neutral-400">
              <li>
                <button 
                  onClick={() => handleNavClick("home")} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("work")} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("music-docs")} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Music Documentaries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("about")} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  About Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("contact")} 
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Location details Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-text dark:text-neutral-200">
              Locations
            </h4>
            <div className="space-y-4 text-sm text-brand-muted dark:text-neutral-400 font-light leading-relaxed">
              <div>
                <p className="font-semibold text-brand-text dark:text-neutral-200">London Studio</p>
                <p>12 Golden Square, Soho, W1F 9JE</p>
              </div>
              <div>
                <p className="font-semibold text-brand-text dark:text-neutral-200">Tokyo Studio</p>
                <p>5-chōme-2 Shibuya, Tokyo 150-0002</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer block */}
        <div className="pt-8 border-t border-brand-border dark:border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-brand-muted dark:text-neutral-400 font-light">
            &copy; {currentYear} AURA CINEMATIC Ltd. All rights reserved. &bull; Registered in England &amp; Wales.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-brand-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium tracking-wider uppercase group"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
