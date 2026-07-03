/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Play, ZoomIn, Film, Award, Users, Tv, Youtube, ExternalLink, Eye, Clock } from "lucide-react";
import { selectedProjects, youtubeDocs } from "../data";
import { Project, YouTubeDoc } from "../types";
import Lightbox from "../components/Lightbox";
import ImageWithFallback from "../components/ImageWithFallback";

interface SelectedWorkProps {
  onOpenVideoModal: (videoId: string, title: string, source?: "vimeo" | "youtube") => void;
}

export default function SelectedWork({ onOpenVideoModal }: SelectedWorkProps) {
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
            2018 &mdash; 2026 Archive
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-text dark:text-neutral-100 select-none">
            Selected Work
          </h1>
          <p className="text-base md:text-lg text-brand-muted dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
            A curated portfolio of our long-form documentary features and co-productions, showcasing deep human exploration, visual perfection, and rigorous editorial standards.
          </p>
        </div>
      </header>

      {/* Alternate Layout Editorial List */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-32 md:space-y-48">
        {selectedProjects.map((project: Project, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center`}
              aria-label={`Documentary: ${project.title}`}
            >
              {/* Image Column - Alternates Left / Right */}
              <div
                className={`lg:col-span-7 space-y-3 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border dark:border-neutral-850 group cursor-pointer"
                  onClick={() => handleOpenLightbox(project.image, project.title)}
                  title={`View high-res cinematic still for ${project.title}`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} Cinematic Still`}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      project.title === "The Last Glacier" || project.id === "project-1"
                        ? "grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100"
                        : "group-hover:scale-105"
                    }`}
                    type="film"
                    title={project.title}
                  />
                  {/* Subtle Image Hover overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-black/80 text-white text-xs uppercase tracking-widest rounded-none shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Still</span>
                    </div>
                  </div>

                  {/* Year marker top-left */}
                  <div className="absolute top-4 left-4 bg-black/85 text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Caption / Photo metadata */}
                <div className="flex justify-between items-center text-[10px] text-brand-muted dark:text-neutral-500 uppercase tracking-widest font-mono">
                  <span>Photo Still &bull; {project.title} Set</span>
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Text / Content Column */}
              <div
                className={`lg:col-span-5 space-y-8 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Meta details bar */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest bg-brand-secondary dark:bg-neutral-900 border border-brand-border dark:border-neutral-800 px-2.5 py-1 text-brand-text dark:text-neutral-300 font-medium">
                    {project.format}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700 select-none">|</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted dark:text-neutral-400 font-medium">
                    {project.duration}
                  </span>
                </div>

                {/* Project Title */}
                <div className="space-y-3">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-brand-text dark:text-neutral-100 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-neutral-400 dark:text-neutral-500">
                    Role &mdash; <span className="text-brand-text dark:text-neutral-200">{project.role}</span>
                  </p>
                </div>

                {/* Synopsis */}
                <p className="text-sm md:text-base text-brand-muted dark:text-neutral-300 font-light leading-relaxed">
                  {project.synopsis}
                </p>

                {/* Technical Credits List */}
                <div className="border-t border-brand-border dark:border-neutral-800/80 pt-6">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] font-bold text-neutral-400 dark:text-neutral-500 mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>Key Crew Credits</span>
                  </div>
                  <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                    {project.crew.map((member, index) => (
                      <div key={index} className="space-y-0.5">
                        <dt className="text-[10px] uppercase tracking-wider text-brand-muted dark:text-neutral-500">
                          {member.label}
                        </dt>
                        <dd className="font-serif font-light text-brand-text dark:text-neutral-200 text-sm">
                          {member.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Review Block */}
                <div className="bg-brand-secondary dark:bg-[#121212]/50 border border-brand-border dark:border-neutral-850 p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-yellow-500 dark:text-yellow-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{project.reviewQuote.rating}</span>
                  </div>
                  <blockquote className="font-serif text-sm text-neutral-800 dark:text-neutral-300 italic leading-relaxed">
                    &ldquo;{project.reviewQuote.quote}&rdquo;
                  </blockquote>
                  <cite className="block text-[10px] uppercase tracking-widest font-mono text-brand-muted dark:text-neutral-500 font-bold not-italic">
                    &mdash; {project.reviewQuote.source}
                  </cite>
                </div>

                {/* Network Partners Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                    <Tv className="w-3.5 h-3.5" />
                    <span>Release Partners</span>
                  </div>
                  <p className="text-[11px] text-brand-muted dark:text-neutral-400 leading-relaxed">
                    Broadcasted on <span className="font-semibold text-brand-text dark:text-neutral-200">{project.broadcasters.join(", ")}</span>. Streaming on <span className="font-semibold text-brand-text dark:text-neutral-200">{project.platforms.join(", ")}</span>.
                  </p>
                </div>

                {/* Watch Trailer Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenVideoModal(project.youtubeId || project.vimeoId, project.title, project.youtubeId ? "youtube" : "vimeo")}
                    className="group px-6 py-3.5 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 w-full sm:w-auto justify-center"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Trailer</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </main>

      {/* Curated YouTube Masterpieces Section */}
      <section className="border-t border-brand-border dark:border-neutral-800/80 pt-24 pb-16 max-w-7xl mx-auto px-6 md:px-12 bg-neutral-50/30 dark:bg-neutral-950/20 transition-colors duration-500">
        <div className="space-y-4 max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red-600 dark:text-red-400 font-bold flex items-center gap-1.5">
            <Youtube className="w-4 h-4 fill-current animate-pulse" />
            <span>Curated Masterpieces</span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text dark:text-neutral-100 select-none">
            Top Documentaries on YouTube
          </h2>
          <p className="text-sm md:text-base text-brand-muted dark:text-neutral-400 font-light leading-relaxed">
            A handpicked, curated collection of the world's most influential, high-end non-fiction films, documentary experiments, and filmmaking masterclasses available legally and free-to-watch on YouTube. These works represent the peak of cinematic honesty, environmental power, and visual poetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {youtubeDocs.map((doc: YouTubeDoc) => (
            <article 
              key={doc.id}
              className="group bg-white dark:bg-[#0E0E0E] border border-brand-border dark:border-neutral-850 p-6 flex flex-col justify-between transition-all duration-300 hover:border-red-500/45 dark:hover:border-red-500/40 shadow-sm"
              aria-label={`Curated YouTube Documentary: ${doc.title}`}
            >
              <div className="space-y-5">
                {/* Visual Cover aspect-video */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border dark:border-neutral-800 cursor-pointer group/cover"
                  onClick={() => onOpenVideoModal(doc.id, doc.title, "youtube")}
                  title={`Play ${doc.title} in our cinema player`}
                >
                  <ImageWithFallback
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover"
                    type="film"
                    title={doc.title}
                  />
                  {/* Subtle YouTube branding red hover overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover/cover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover/cover:scale-110">
                      <Play className="w-6 h-6 fill-white ml-1 text-white" />
                    </div>
                  </div>
                  {/* Category marker top-left */}
                  <div className="absolute top-4 left-4 bg-black/85 text-white px-3 py-1 text-[9px] uppercase tracking-widest font-semibold font-mono">
                    {doc.category}
                  </div>
                </div>

                {/* Metadata & Stats Row */}
                <div className="flex items-center gap-3.5 text-[10px] text-brand-muted dark:text-neutral-400 font-mono uppercase tracking-widest flex-wrap">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{doc.duration}</span>
                  </span>
                  <span>&bull;</span>
                  <span>{doc.year}</span>
                  {doc.views && (
                    <>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                        <Eye className="w-3 h-3" />
                        <span>{doc.views} Views</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Title & Director */}
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl tracking-tight text-brand-text dark:text-neutral-100 group-hover:italic transition-all">
                    {doc.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                    Directed by <span className="text-brand-text dark:text-neutral-300">{doc.director}</span>
                  </p>
                </div>

                {/* Synopsis */}
                <p className="text-sm text-brand-muted dark:text-neutral-400 leading-relaxed font-light">
                  {doc.synopsis}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-brand-border dark:border-neutral-800/60 grid grid-cols-2 gap-4">
                <button
                  onClick={() => onOpenVideoModal(doc.id, doc.title, "youtube")}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3 h-3 fill-white text-white" />
                  <span>Cinema Play</span>
                </button>
                <a
                  href={doc.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-200 hover:bg-brand-secondary dark:hover:bg-neutral-900 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>On YouTube</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

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
