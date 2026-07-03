/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Home, Compass } from "lucide-react";
import { PageId } from "../types";

interface NotFoundProps {
  onPageChange: (page: PageId) => void;
}

export default function NotFound({ onPageChange }: NotFoundProps) {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[75vh] transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Big Bold Editorial Error */}
        <div className="lg:col-span-7 space-y-8 lg:pr-12 lg:border-r lg:border-brand-border lg:dark:border-neutral-800">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 italic">
              Error Code 404 / Missing Sequence
            </span>
            <h1 className="font-serif text-[60px] sm:text-[80px] md:text-[100px] leading-[0.9] font-bold tracking-tighter uppercase text-brand-text dark:text-neutral-100">
              SCENE <br/> NOT <br/> <span className="italic font-light text-neutral-500 dark:text-neutral-400">FOUND.</span>
            </h1>
          </div>
          
          <p className="text-lg text-brand-muted dark:text-neutral-400 max-w-md leading-relaxed font-light">
            The narrative reel or sequence you are attempting to project has either been cut in editing, renamed, or does not exist in this cut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                window.location.hash = "";
                onPageChange("home");
              }}
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
            <button
              onClick={() => {
                window.location.hash = "work";
                onPageChange("work");
              }}
              className="px-8 py-4 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-100 hover:bg-brand-secondary dark:hover:bg-neutral-900 font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Works</span>
            </button>
          </div>
        </div>

        {/* Right Column: Decorative Editorial Slate */}
        <div className="lg:col-span-5 bg-brand-secondary dark:bg-[#121212]/30 p-10 border border-brand-border dark:border-neutral-800 flex flex-col justify-between h-full min-h-[320px]">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">Director's Slate</span>
            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">ROLL 404 &bull; SCENE 1</span>
          </div>

          <div className="my-auto space-y-4 py-8">
            <div className="w-16 h-[1px] bg-black dark:bg-white"></div>
            <p className="font-serif italic text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
              "Every edit is a lie that tells a deeper truth. But sometimes, a scene is just lost to the cutting room floor."
            </p>
          </div>

          <div className="flex justify-between items-end border-t border-brand-border dark:border-neutral-800 pt-6">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Camera / Alexa LF</span>
            <span className="text-[10px] font-bold text-brand-text dark:text-neutral-200">AURA STUDIOS</span>
          </div>
        </div>

      </div>
    </div>
  );
}
