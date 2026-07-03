import React, { useState } from "react";
import { Film, Music, Image as ImageIcon } from "lucide-react";
import { motion, HTMLMotionProps } from "motion/react";

interface ImageWithFallbackProps extends HTMLMotionProps<"img"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  type?: "film" | "music" | "general";
  title?: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  type = "film",
  title,
  className = "",
  loading = "lazy",
  decoding = "async",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [retryWithFallback, setRetryWithFallback] = useState(false);

  // High-quality, guaranteed-to-load fallback images from public domains / reliable Unsplash IDs
  const defaultFallbackImage = type === "music"
    ? "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" // reliable concert/music light
    : "https://images.unsplash.com/photo-1445445290250-18a3ef0a8fc4?q=80&w=600&auto=format&fit=crop"; // reliable landscape/nature

  const handleFirstError = () => {
    if (!retryWithFallback) {
      setRetryWithFallback(true);
    } else {
      setError(true);
    }
  };

  const currentSrc = retryWithFallback
    ? (fallbackSrc || defaultFallbackImage)
    : src;

  if (error) {
    return (
      <div 
        className={`relative flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 p-6 text-center select-none ${className}`}
        style={{ minHeight: "100%" }}
      >
        {/* Abstract design elements matching editorial/minimalist vibe */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/5 dark:to-black/30 pointer-events-none" />
        
        {type === "music" ? (
          <Music className="w-8 h-8 text-neutral-400 dark:text-neutral-600 mb-3 animate-pulse" />
        ) : type === "film" ? (
          <Film className="w-8 h-8 text-neutral-400 dark:text-neutral-600 mb-3 animate-pulse" />
        ) : (
          <ImageIcon className="w-8 h-8 text-neutral-400 dark:text-neutral-600 mb-3 animate-pulse" />
        )}
        
        {title && (
          <h4 className="font-serif text-xs font-semibold text-brand-text dark:text-neutral-300 max-w-xs leading-snug">
            {title}
          </h4>
        )}
        <span className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-mono mt-1">
          Visual Archive Preview
        </span>
      </div>
    );
  }

  return (
    <motion.img
      src={currentSrc}
      alt={alt}
      onError={handleFirstError}
      className={className}
      referrerPolicy="no-referrer"
      loading={loading}
      decoding={decoding}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    />
  );
}
