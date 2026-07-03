/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, ArrowRight, Video, Sparkles } from "lucide-react";
import { companyTagline, companyBio, stats, selectedProjects, broadcasterLogos, testimonials } from "../data";
import { PageId } from "../types";
import CountUp from "../components/CountUp";
import ImageWithFallback from "../components/ImageWithFallback";

interface HomeProps {
  onPageChange: (page: PageId) => void;
  onOpenVideoModal: (videoId: string, title: string, source?: "vimeo" | "youtube") => void;
}

export default function Home({ onPageChange, onOpenVideoModal }: HomeProps) {
  // Use first 3 projects as featured previews
  const featuredProjects = selectedProjects.slice(0, 3);

  return (
    <div className="pt-24 pb-12 transition-colors duration-500">
      
      {/* Editorial Grid Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-12 pb-16 border-b border-brand-border dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* HERO LEFT: Bold Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pr-12 lg:border-r lg:border-brand-border lg:dark:border-neutral-800 py-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 italic">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Award-Winning Documentary Production</span>
              </div>
              <h1 className="font-serif text-[45px] sm:text-[60px] md:text-[80px] leading-[0.95] md:leading-[0.9] font-bold tracking-tighter uppercase text-brand-text dark:text-neutral-100 select-none">
                STORIES <br/> THAT <br/> <span className="italic font-light text-neutral-500 dark:text-neutral-300">LINGER.</span>
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-brand-muted dark:text-neutral-400 max-w-md leading-relaxed font-light">
              {companyBio.split(". ")[0]}. We produce premium non-fiction films, docu-series, and music chronicles that resonate globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onPageChange("work")}
                className="group px-8 py-4 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => onOpenVideoModal("L_8t2Vig_nY", "Aura Cinematic Showreel", "youtube")}
                className="px-8 py-4 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-100 hover:bg-brand-secondary dark:hover:bg-neutral-900 font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Showreel</span>
              </button>
            </div>
          </div>

          {/* HERO RIGHT: Featured Interactive Showreel Frame & Testimonial */}
          <div className="lg:col-span-5 bg-brand-secondary dark:bg-[#121212]/30 flex flex-col justify-between p-8 md:p-10 border border-brand-border dark:border-neutral-800">
            <div className="flex justify-between items-end mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-400 dark:text-neutral-500">Featured Production</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-semibold">Est. 2012</span>
            </div>

            {/* Interactive Vimeo Frame Card */}
            <div className="flex-grow relative aspect-video overflow-hidden bg-neutral-900 shadow-sm border border-brand-border dark:border-neutral-800 group">
              {/* Vimeo iframe background */}
              <iframe
                src="https://player.vimeo.com/video/240328229?autoplay=0&background=1&mute=1&loop=1&color=ffffff&title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none scale-105 opacity-80"
                allow="autoplay; fullscreen"
                title="Aura Cinematic Showreel Background"
                referrerPolicy="no-referrer"
              ></iframe>

              {/* Click trigger play button */}
              <button
                onClick={() => onOpenVideoModal("L_8t2Vig_nY", "Aura Cinematic Showreel", "youtube")}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors focus:outline-none"
                aria-label="Play Showreel Full-Screen"
              >
                <div className="w-14 h-14 bg-white text-black rounded-none shadow-md hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-300">
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </div>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10">
                <h3 className="font-serif text-lg md:text-xl text-white font-bold">The Silent Depths</h3>
                <p className="text-[10px] uppercase tracking-widest mt-0.5 text-neutral-300 font-light">Showreel &bull; 16 Countries</p>
              </div>
            </div>

            {/* TESTIMONIAL MINI */}
            <div className="mt-8 border-t border-brand-border dark:border-neutral-800 pt-6">
              <p className="font-serif italic text-base md:text-lg leading-snug text-neutral-800 dark:text-neutral-200">
                "Aura Cinematic doesn't just record history; they capture the soul of it. A masterpiece in modern filmmaking."
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-3 font-bold text-brand-text dark:text-neutral-300">— The New York Times Editorial</p>
            </div>
          </div>

        </div>
      </section>

      {/* Company Introduction & Statistics */}
      <section id="introduction" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium">
            Who We Are
          </span>
          <p className="font-serif text-3xl md:text-4xl leading-snug text-brand-text dark:text-neutral-200">
            We operate on the boundary of cinema and journalism, capturing the delicate patterns of human resilience.
          </p>
          <p className="text-sm md:text-base text-brand-muted dark:text-neutral-400 font-light leading-relaxed max-w-xl">
            {companyBio}
          </p>
        </div>

        {/* Dynamic Animated Statistics */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 border-l border-brand-border dark:border-neutral-800 pl-6">
              <div className="text-4xl md:text-5xl text-brand-text dark:text-white font-serif tracking-tight font-light">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase tracking-widest text-brand-muted dark:text-neutral-400 font-light leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Productions Preview */}
      <section id="featured-work" className="bg-brand-secondary dark:bg-[#0B0B0B]/40 py-20 md:py-32 border-y border-brand-border dark:border-neutral-800/60 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium">
                Curated Selection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-text dark:text-neutral-200">
                Featured Documentaries
              </h2>
            </div>
            <button
              onClick={() => onPageChange("work")}
              className="group text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 transition-colors w-max"
            >
              <span>See all selected works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-white dark:bg-[#121212] border border-brand-border dark:border-neutral-800 overflow-hidden shadow-sm transition-all duration-300 hover:border-black dark:hover:border-neutral-400"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                        project.title === "The Last Glacier" || project.id === "project-1"
                          ? "grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100"
                          : "group-hover:scale-105"
                      }`}
                      type="film"
                      title={project.title}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-text dark:text-neutral-200 font-medium">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="text-[10px] uppercase tracking-widest text-brand-muted dark:text-neutral-400">
                      {project.format} &bull; {project.duration}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-brand-text dark:text-neutral-100 group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-brand-muted dark:text-neutral-400 font-light line-clamp-3 leading-relaxed">
                      {project.synopsis}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <button
                    onClick={() => onOpenVideoModal(project.youtubeId || project.vimeoId, project.title, project.youtubeId ? "youtube" : "vimeo")}
                    className="w-full py-3 border border-brand-border dark:border-neutral-800 text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Trailer</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-brand-border dark:border-neutral-800/60">
        <div className="space-y-4 text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium">
            Acclaim &amp; Collaboration
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text dark:text-neutral-100">
            Trust of Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((t, index) => (
            <div key={index} className="space-y-6 md:space-y-8 flex flex-col justify-between">
              <p className="font-serif text-lg md:text-xl text-neutral-800 dark:text-neutral-300 leading-relaxed italic relative">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-brand-border dark:border-neutral-800 pt-4 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-text dark:text-neutral-100">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-brand-muted dark:text-neutral-400 uppercase tracking-wider mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Broadcasters & Client Grid */}
      <section id="broadcasters" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-semibold mb-12 select-none">
          Co-Production &amp; Broadcast Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center opacity-60 dark:opacity-50">
          {broadcasterLogos.map((brand) => (
            <div
              key={brand.name}
              className="text-center font-serif text-sm sm:text-base font-bold text-brand-text dark:text-neutral-100 py-3 tracking-widest border border-brand-border dark:border-neutral-800 hover:opacity-100 transition-opacity uppercase select-none cursor-default"
              title={brand.name}
            >
              {brand.logoText}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
