/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ZoomIn, Disc, Award, Calendar, Clock, Play } from "lucide-react";
import { musicDocs } from "../data";
import { MusicDocumentary } from "../types";
import Lightbox from "../components/Lightbox";
import ImageWithFallback from "../components/ImageWithFallback";

interface MusicDocsProps {
  onOpenVideoModal: (videoId: string, title: string, source?: "vimeo" | "youtube") => void;
}

export default function MusicDocs({ onOpenVideoModal }: MusicDocsProps) {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightboxImage(imageUrl);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-12 transition-colors duration-500">
      
      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-16 border-b border-brand-border dark:border-neutral-800">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-medium">
            Sound &amp; Vision Chronicles
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-text dark:text-neutral-100 select-none">
            Music Documentaries
          </h1>
          <p className="text-base md:text-lg text-brand-muted dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
            Exploring the sonic revolutions, artistic struggles, and legendary archives of cultural icons. These films are crafted with sound design that mirrors the depth of the performances.
          </p>
        </div>
      </header>

      {/* Alternate Layout Editorial List */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-32 md:space-y-48">
        {musicDocs.map((doc: MusicDocumentary, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={doc.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center"
              aria-label={`Music Documentary: ${doc.title}`}
            >
              {/* Image Column - Alternates Left / Right */}
              <div
                className={`lg:col-span-7 space-y-3 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border dark:border-neutral-850 group cursor-pointer"
                  onClick={() => handleOpenLightbox(doc.image, doc.title)}
                  title={`View high-res cinematic still for ${doc.title}`}
                >
                  <ImageWithFallback
                    src={doc.image}
                    alt={`${doc.title} Film Still`}
                    className="w-full h-full object-cover"
                    type="music"
                    title={doc.title}
                  />
                  {/* Hover visual cue */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-black/80 text-white text-xs uppercase tracking-widest rounded-none">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Expand Still</span>
                    </div>
                  </div>

                  {/* Year marker top-left */}
                  <div className="absolute top-4 left-4 bg-black/85 text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium">
                    {doc.year}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-brand-muted dark:text-neutral-500 uppercase tracking-widest font-mono">
                  <span>Photo Still &bull; {doc.title} Production</span>
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Text / Content Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-muted dark:text-neutral-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{doc.year}</span>
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700 select-none">|</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{doc.duration}</span>
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700 select-none">|</span>
                  <span className="text-black dark:text-white font-semibold">
                    {doc.format}
                  </span>
                </div>

                {/* Project Title and Subject Artist */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold">
                    <Disc className="w-3.5 h-3.5" />
                    <span>Artist Subject: {doc.artist}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-brand-text dark:text-neutral-100 leading-tight">
                    {doc.title}
                  </h2>
                </div>

                {/* Synopsis */}
                <p className="text-sm md:text-base text-brand-muted dark:text-neutral-300 font-light leading-relaxed">
                  {doc.synopsis}
                </p>

                {/* Review Block */}
                <div className="bg-brand-secondary dark:bg-[#121212]/50 border border-brand-border dark:border-neutral-850 p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-yellow-500 dark:text-yellow-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{doc.reviewQuote.rating || "★★★★★"}</span>
                  </div>
                  <blockquote className="font-serif text-sm text-neutral-800 dark:text-neutral-300 italic leading-relaxed">
                    &ldquo;{doc.reviewQuote.quote}&rdquo;
                  </blockquote>
                  <cite className="block text-[10px] uppercase tracking-widest font-mono text-brand-muted dark:text-neutral-500 font-bold not-italic">
                    &mdash; {doc.reviewQuote.source}
                  </cite>
                </div>

                <div className="pt-6 border-t border-brand-border dark:border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-brand-muted dark:text-neutral-500 uppercase tracking-widest font-mono">
                    * Interactive YouTube Archive Stream
                  </span>
                  <button
                    onClick={() => onOpenVideoModal(doc.youtubeId || "L_8t2Vig_nY", doc.title, "youtube")}
                    className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Play Documentary</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </main>

      {/* Lightbox Component */}
      <Lightbox
        imageUrl={lightboxImage}
        title={lightboxTitle}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

    </div>
  );
}
