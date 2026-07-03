/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  imageUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, title, isOpen, onClose }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/98 p-4 sm:p-10 select-none transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image Lightbox: ${title}`}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 text-white z-10 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-2 text-neutral-300 text-xs tracking-widest uppercase">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Cinematic Still &mdash; {title}</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-neutral-400 hover:text-white uppercase text-xs tracking-widest focus:outline-none focus:ring-1 focus:ring-white p-2"
          aria-label="Close Lightbox"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Image container */}
      <div 
        className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain border border-neutral-800 shadow-2xl transition-transform duration-300 ease-out"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Title block at the bottom */}
      <div className="mt-4 text-center text-neutral-400 text-xs uppercase tracking-[0.25em] font-light">
        {title} Still Photography &copy; Aura Cinematic
      </div>
    </div>
  );
}
