/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Calendar, Award, Globe, Quote, Library } from "lucide-react";
import { companyBio, timeline, awards, teamMembers, clientLogos } from "../data";
import ImageWithFallback from "../components/ImageWithFallback";

export default function About() {
  return (
    <div className="pt-24 pb-12 transition-colors duration-500">
      
      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-16 border-b border-brand-border dark:border-neutral-800">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-medium">
            Our Story &amp; Vision
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-text dark:text-neutral-100 select-none">
            About the Studio
          </h1>
          <p className="text-base md:text-lg text-brand-muted dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
            Crafting non-fiction films with artistic vision, technical precision, and meticulous narrative flow since 2012.
          </p>
        </div>
      </header>

      {/* Large Creative Portrait & Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Cinematic Backdrop Image */}
        <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border dark:border-neutral-850">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
            alt="Cinematographer on field with professional cinematic camera setup"
            className="w-full h-full object-cover dark:brightness-90"
            type="film"
            title="Aura On Set"
          />
          <div className="absolute bottom-4 left-4 bg-black/85 text-white px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] font-medium font-mono">
            Aura On Set &bull; Kyoto, Japan
          </div>
        </div>

        {/* Biography & Philosophy Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium flex items-center gap-2">
              <Library className="w-3.5 h-3.5" />
              <span>Core Mission</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-text dark:text-neutral-200 leading-tight">
              Honoring the truth of our subjects through the meticulous grammar of cinema.
            </h2>
          </div>
          <div className="text-sm md:text-base text-brand-muted dark:text-neutral-300 font-light leading-relaxed space-y-4">
            <p>{companyBio}</p>
            <p>
              We believe that independent documentary filmmaking holds a sacred space in global culture. Our workflows prioritize physical immersion, lingering research cycles, and highly collaborative composer pairings to yield films that live as archives of human survival.
            </p>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="bg-brand-secondary dark:bg-[#0B0B0B]/40 py-20 md:py-32 border-y border-brand-border dark:border-neutral-800/85">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="space-y-4 max-w-xl mb-16">
            <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>Leadership</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-text dark:text-neutral-200">
              Creative Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#121212] border border-brand-border dark:border-neutral-850 p-8 flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border dark:border-neutral-800">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    type="general"
                    title={member.name}
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-brand-text dark:text-neutral-100">
                      {member.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-brand-muted dark:text-neutral-400 mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-brand-muted dark:text-neutral-300 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Styled Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-4 max-w-xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>Milestones</span>
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text dark:text-neutral-200">
            Chronological Timeline
          </h2>
        </div>

        <div className="relative border-l border-brand-border dark:border-neutral-800 pl-6 md:pl-12 max-w-3xl space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Vertical timeline dot indicator */}
              <span className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center w-4 h-4 bg-white dark:bg-[#0B0B0B] border-2 border-black dark:border-white transition-all group-hover:bg-black dark:group-hover:bg-white" />
              
              <div className="space-y-2">
                <span className="font-serif text-lg md:text-xl font-bold text-neutral-400 dark:text-neutral-500">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl text-brand-text dark:text-neutral-100 font-medium">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-muted dark:text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards and Laurels Board */}
      <section className="bg-brand-secondary dark:bg-[#0B0B0B]/40 py-20 md:py-32 border-y border-brand-border dark:border-neutral-800/85">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="space-y-4 max-w-xl mb-16">
            <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>International Recognition</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-text dark:text-neutral-200">
              Awards &amp; Nominations
            </h2>
          </div>

          {/* Awards Table Grid */}
          <div className="border border-brand-border dark:border-neutral-800 divide-y divide-brand-border dark:divide-neutral-800 bg-white dark:bg-[#121212]">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-5 text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500 font-mono hidden sm:grid">
              <div className="col-span-2">Year</div>
              <div className="col-span-3">Festival / Institution</div>
              <div className="col-span-4">Category / Laurel</div>
              <div className="col-span-3 text-right">Project Film</div>
            </div>

            {awards.map((award, index) => (
              <div 
                key={index} 
                className="grid grid-cols-12 gap-4 p-5 text-sm items-center hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors"
              >
                {/* Year */}
                <div className="col-span-12 sm:col-span-2 font-serif font-bold text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm">
                  {award.year}
                </div>
                {/* Festival */}
                <div className="col-span-12 sm:col-span-3 font-semibold text-brand-text dark:text-neutral-100 text-xs sm:text-sm">
                  {award.festival}
                </div>
                {/* Category */}
                <div className="col-span-12 sm:col-span-4 text-brand-muted dark:text-neutral-300 font-light text-xs sm:text-sm">
                  {award.category}
                </div>
                {/* Project Title */}
                <div className="col-span-12 sm:col-span-3 font-serif font-medium sm:text-right text-brand-text dark:text-neutral-100 text-xs sm:text-sm">
                  &ldquo;{award.project}&rdquo;
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Distributors / Broadcasters logo layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center space-y-12">
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium flex items-center justify-center gap-1.5">
            <Globe className="w-4 h-4" />
            <span>Distribution Network</span>
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-text dark:text-neutral-100">
            Clients &amp; Broadcasting Networks
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {clientLogos.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center p-6 border border-brand-border dark:border-neutral-800 font-serif font-semibold text-xs tracking-wider uppercase text-brand-muted dark:text-neutral-400 select-none bg-white dark:bg-[#121212]"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
