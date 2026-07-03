/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  vimeoId?: string; // backward compatibility
  videoId?: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  source?: "vimeo" | "youtube";
}

export default function VideoModal({ vimeoId, videoId, isOpen, onClose, title, source }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  const activeId = videoId || vimeoId || "";
  const isYouTube = source === "youtube" || (activeId && isNaN(Number(activeId)));
  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${activeId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`;

  // Lock scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="video-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-5xl aspect-video bg-black border border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with title and close button */}
        <div className="absolute -top-12 left-0 right-0 flex items-center justify-between text-white">
          <h3 id="modal-title" className="font-serif text-lg tracking-wider text-neutral-200">
            {title} <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-sans ml-3">{isYouTube ? "Feature Film" : "Trailer"}</span>
          </h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white uppercase text-xs tracking-widest focus:outline-none focus:ring-1 focus:ring-white p-1"
            aria-label="Close modal"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="w-full h-full relative bg-neutral-950">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            title={`${title} Player`}
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
