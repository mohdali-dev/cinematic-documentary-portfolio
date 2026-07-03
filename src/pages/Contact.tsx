/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Film, Twitter, CheckCircle2, ArrowRight, Sliders, Settings, Sparkles, ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { microAudio } from "../utils/audio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration Proposal",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Stateful Film Project Planner
  const [docType, setDocType] = useState<"portrait" | "music" | "history">("music");
  const [format, setFormat] = useState<"super35" | "anamorphic" | "large">("anamorphic");
  const [duration, setDuration] = useState<number>(45);
  const [licensing, setLicensing] = useState<"festival" | "streaming" | "global">("streaming");

  const baseCost = 5000;
  const durationCost = duration * 150;
  
  const formatCostMap = {
    super35: 1500,
    anamorphic: 3000,
    large: 6000
  };
  const formatLabelMap = {
    super35: "Super35 Rig (Arri Alexa Mini)",
    anamorphic: "Anamorphic Cinematic Lens (Cooke Special)",
    large: "6K Large Format Rig (Sony Venice 2)"
  };

  const licensingCostMap = {
    festival: 1000,
    streaming: 3500,
    global: 6000
  };
  const licensingLabelMap = {
    festival: "Film Festival Distribution Only",
    streaming: "Subscription VoD (Netflix, HBO Max, etc.)",
    global: "Worldwide Theatrical & Broadcast Rights"
  };

  const docTypeLabelMap = {
    portrait: "Fine Arts / Artist Portrait Documentary",
    music: "Soundscape / Music History Feature",
    history: "Social History & Archival Documentary"
  };

  const currentFormatCost = formatCostMap[format];
  const currentLicensingCost = licensingCostMap[licensing];
  const totalEstimatedCost = baseCost + durationCost + currentFormatCost + currentLicensingCost;

  const handleInjectBlueprint = () => {
    microAudio.playSuccess();
    const blueprintText = `PROPOSED FILM PROJECT PLANNER BLUEPRINT:\n` +
      `========================================\n` +
      `• Focus Genre: ${docTypeLabelMap[docType]}\n` +
      `• Target Runtime: ${duration} minutes\n` +
      `• Visual Acquisition Format: ${formatLabelMap[format]}\n` +
      `• Music & Broadcast Licensing: ${licensingLabelMap[licensing]}\n` +
      `• Projected Base Investment: $${totalEstimatedCost.toLocaleString()} USD\n` +
      `========================================\n\n` +
      `Greetings Aura Studios, we would love to schedule an editorial session to explore financing options, narrative treatment, and production schedule coordinates for this project outline.`;
    
    setFormData(prev => ({
      ...prev,
      subject: "Collaboration Proposal",
      message: blueprintText
    }));

    setErrors(prev => ({
      ...prev,
      subject: "",
      message: ""
    }));
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject Validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject category.";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Please share your story or inquiry details.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      microAudio.playClick();
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("Establishing secure studio uplink...");
    
    // Simulate realistic progress steps for a highly polished feel
    const t1 = setTimeout(() => {
      setSubmissionStatus("Encrypting narrative assets and metadata...");
    }, 800);

    const t2 = setTimeout(() => {
      setSubmissionStatus("Transmitting payload coordinates to board...");
    }, 1600);

    const t3 = setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmissionStatus("");
      setFormData({ name: "", email: "", subject: "Collaboration Proposal", message: "" });
      setErrors({ name: "", email: "", subject: "", message: "" });
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
    { label: "Vimeo", href: "https://vimeo.com", icon: <Film className="w-5 h-5" /> },
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 transition-colors duration-500">
      
      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 md:pt-20 pb-10 sm:pb-16 border-b border-brand-border dark:border-neutral-800">
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-medium">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-text dark:text-neutral-100 select-none leading-tight">
            Let's Co-Create
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-muted dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
            Whether you represent a broadcasting network, a streaming platform, a fellow filmmaker, or have a story that demands to be told, we are ready to listen.
          </p>
        </div>
      </header>

      {/* Interactive Production Planner & Budget Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 border-b border-brand-border dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 dark:text-neutral-500 font-bold flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 animate-spin-slow text-black dark:text-white" />
                <span>Interactive Configuration Console</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-text dark:text-neutral-100 font-bold leading-tight">
                Design Your Film Project Blueprint
              </h2>
              <p className="text-xs text-brand-muted dark:text-neutral-400 max-w-xl font-light">
                Configure your creative objectives. Adjust the parameters below to calculate a baseline investment blueprint instantly.
              </p>
            </div>

            <div className="space-y-6">
              {/* Parameter 1: Documentary Category */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                  Step 1: Focus Genre
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { id: "portrait", label: "Artist Portrait", desc: "Intimate character study & gallery aesthetics" },
                    { id: "music", label: "Sound & Music", desc: "High-fidelity audio features & score design" },
                    { id: "history", label: "Social History", desc: "Complex archival compilation & journalism" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        microAudio.playClick();
                        setDocType(t.id as any);
                      }}
                      className={`p-3.5 sm:p-4 border text-left transition-all relative ${
                        docType === t.id
                          ? "border-black dark:border-white bg-neutral-50 dark:bg-neutral-900/60"
                          : "border-brand-border dark:border-neutral-800 hover:border-black/50 dark:hover:border-white/50"
                      }`}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text dark:text-white">{t.label}</h4>
                      <p className="text-[10px] text-brand-muted dark:text-neutral-400 font-light leading-snug mt-1">{t.desc}</p>
                      {docType === t.id && (
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-black dark:bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Cinematography Format */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                  Step 2: Visual Acquisition Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { id: "super35", label: "Super35 Rig", desc: "Arri Alexa Mini Classic Look" },
                    { id: "anamorphic", label: "Anamorphic Glass", desc: "Cooke Cinematic Scope" },
                    { id: "large", label: "6K Large Format", desc: "Sony Venice Dual-Base ISO" }
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => {
                        microAudio.playClick();
                        setFormat(f.id as any);
                      }}
                      className={`p-3.5 sm:p-4 border text-left transition-all relative ${
                        format === f.id
                          ? "border-black dark:border-white bg-neutral-50 dark:bg-neutral-900/60"
                          : "border-brand-border dark:border-neutral-800 hover:border-black/50 dark:hover:border-white/50"
                      }`}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text dark:text-white">{f.label}</h4>
                      <p className="text-[10px] text-brand-muted dark:text-neutral-400 font-light leading-snug mt-1">{f.desc}</p>
                      {format === f.id && (
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-black dark:bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Runtime Duration Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="duration-slider" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                    Step 3: Target Film Runtime
                  </label>
                  <span className="text-xs font-mono font-bold text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1">
                    {duration} Minutes
                  </span>
                </div>
                <div className="p-4 border border-brand-border dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#121212]/20 space-y-2">
                  <input
                    id="duration-slider"
                    type="range"
                    min="10"
                    max="120"
                    step="5"
                    value={duration}
                    onChange={(e) => {
                      setDuration(Number(e.target.value));
                      if (Number(e.target.value) % 15 === 0) {
                        microAudio.playClick();
                      }
                    }}
                    className="w-full accent-black dark:accent-white cursor-pointer h-1"
                  />
                  <div className="flex justify-between text-[9px] text-brand-muted font-mono tracking-wider">
                    <span>10m (Short Feature)</span>
                    <span>60m (Mid-Feature)</span>
                    <span>120m (Full Theatrical)</span>
                  </div>
                </div>
              </div>

              {/* Parameter 4: Music & Broadcast Licensing */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                  Step 4: Music & Audio Synchronization Rights
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { id: "festival", label: "Festival Tier", desc: "Non-theatrical screenings & panels" },
                    { id: "streaming", label: "Streaming Tier", desc: "SVoD Netflix/Amazon distribution" },
                    { id: "global", label: "Worldwide Tier", desc: "Universal theatrical & linear broadcast" }
                  ].map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        microAudio.playClick();
                        setLicensing(l.id as any);
                      }}
                      className={`p-3.5 sm:p-4 border text-left transition-all relative ${
                        licensing === l.id
                          ? "border-black dark:border-white bg-neutral-50 dark:bg-neutral-900/60"
                          : "border-brand-border dark:border-neutral-800 hover:border-black/50 dark:hover:border-white/50"
                      }`}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text dark:text-white">{l.label}</h4>
                      <p className="text-[10px] text-brand-muted dark:text-neutral-400 font-light leading-snug mt-1">{l.desc}</p>
                      {licensing === l.id && (
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-black dark:bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: live Ledger Breakdown / Invoice Display */}
          <div className="lg:col-span-5 bg-neutral-50 dark:bg-[#121212]/30 p-5 sm:p-8 border border-brand-border dark:border-neutral-800 space-y-6">
            <div className="flex justify-between items-center border-b border-brand-border dark:border-neutral-800 pb-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500 font-mono">Projected Ledger</span>
              <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 font-bold uppercase tracking-widest">
                Active Estimate
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between items-center text-brand-muted">
                <span>Base Creative Direction</span>
                <span>${baseCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center text-brand-muted">
                <span>Editorial Cut ({duration}m)</span>
                <span>${durationCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center text-brand-muted">
                <span>Gear Selection Allocation</span>
                <span>${currentFormatCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center text-brand-muted">
                <span>Synchronized Audio Rights</span>
                <span>${currentLicensingCost.toLocaleString()}.00</span>
              </div>

              <div className="border-t border-dashed border-brand-border dark:border-neutral-850 my-2 pt-4">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-text dark:text-white">PROJECTED INVESTMENT</span>
                  <span className="text-xl font-bold font-serif text-black dark:text-white">
                    ${totalEstimatedCost.toLocaleString()}.00
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                type="button"
                onClick={handleInjectBlueprint}
                className="w-full py-4 bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.99] font-bold tracking-widest uppercase text-[10px] transition-all flex items-center justify-center gap-2"
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Inject Blueprint into Form</span>
              </button>
              <p className="text-[9px] text-center text-brand-muted uppercase tracking-wider">
                Clicking injects this exact scope breakdown directly into the message form below!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid: Form Left, Info & Map Right */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Contact Form Column */}
        <section className="lg:col-span-6 space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-text dark:text-neutral-100">
              Submit an Inquiry
            </h2>
            <p className="text-xs text-brand-muted dark:text-neutral-500 uppercase tracking-wider">
              Response within 48 Business hours
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-5 sm:p-8 text-center space-y-8 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px]"
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* Concentric rotating film/aperture gear elements */}
                  <motion.div
                    className="absolute inset-0 border-t-2 border-b-2 border-neutral-300 dark:border-neutral-700 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 border-l-2 border-r-2 border-neutral-800 dark:border-neutral-200 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-5 border-t border-b border-red-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                  <Film className="w-5 h-5 text-neutral-800 dark:text-neutral-200 animate-pulse" />
                </div>
                <div className="space-y-3 text-center max-w-xs">
                  <p className="text-[10px] tracking-[0.3em] font-mono uppercase text-red-500 font-bold animate-pulse">
                    Transmission Active
                  </p>
                  <p className="text-xs font-mono text-brand-muted dark:text-neutral-400 min-h-[32px] transition-all duration-300 leading-relaxed uppercase tracking-wider">
                    {submissionStatus}
                  </p>
                </div>
              </motion.div>
            ) : submitSuccess ? (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-5 sm:p-8 text-center space-y-6 min-h-[380px] sm:min-h-[480px] flex flex-col justify-center"
              >
                <motion.div 
                  initial={{ scale: 0.5, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
                  className="w-16 h-16 bg-black text-white dark:bg-white dark:text-black rounded-none flex items-center justify-center mx-auto shadow-sm"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <div className="space-y-2">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="font-serif text-2xl text-brand-text dark:text-neutral-100"
                  >
                    Message Transmitted
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="text-sm text-brand-muted dark:text-neutral-400 max-w-md mx-auto font-light leading-relaxed"
                  >
                    Thank you for reaching out to AURA CINEMATIC. Our editorial board has securely received your submission and will contact you shortly.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="pt-4"
                >
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all text-xs uppercase tracking-widest font-medium border border-transparent hover:border-black dark:hover:border-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-transparent border p-3.5 sm:p-4 text-sm outline-none transition-colors text-brand-text dark:text-neutral-100 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 dark:border-red-500"
                          : "border-brand-border dark:border-neutral-800 focus:border-black dark:focus:border-white"
                      }`}
                      placeholder="e.g. Rowan Sterling"
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-[11px] text-red-500 font-mono tracking-wide mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-transparent border p-3.5 sm:p-4 text-sm outline-none transition-colors text-brand-text dark:text-neutral-100 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 dark:border-red-500"
                          : "border-brand-border dark:border-neutral-800 focus:border-black dark:focus:border-white"
                      }`}
                      placeholder="rowan@example.com"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-[11px] text-red-500 font-mono tracking-wide mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                    Subject Category
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-[#121212] border p-3.5 sm:p-4 text-sm outline-none transition-colors text-brand-text dark:text-neutral-100 ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500 dark:border-red-500"
                        : "border-brand-border dark:border-neutral-800 focus:border-black dark:focus:border-white"
                    }`}
                  >
                    <option value="Collaboration Proposal">Co-Production &amp; Financing</option>
                    <option value="Press Inquiry">Press &amp; Media Panel</option>
                    <option value="Festival Screening">Festival Screenings &amp; Laurels</option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                  {errors.subject && (
                    <p id="contact-subject-error" className="text-[11px] text-red-500 font-mono tracking-wide mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                    Your Story or Inquiry Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-transparent border p-3.5 sm:p-4 text-sm outline-none transition-colors text-brand-text dark:text-neutral-100 resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 dark:border-red-500"
                        : "border-brand-border dark:border-neutral-800 focus:border-black dark:focus:border-white"
                    }`}
                    placeholder="Outline your proposal, creative timeline, or questions here..."
                  ></textarea>
                  {errors.message && (
                    <p id="contact-message-error" className="text-[11px] text-red-500 font-mono tracking-wide mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.99] font-semibold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Transmitting Coordinates...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </section>

        {/* Info & Map Column */}
        <section className="lg:col-span-6 space-y-12">
          
          {/* Studio Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="p-5 sm:p-6 border border-brand-border dark:border-neutral-800 space-y-4 bg-brand-secondary/45 dark:bg-[#121212]/30">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Soho Office</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-semibold text-brand-text dark:text-neutral-200">London Studio</h4>
                <p className="text-xs text-brand-muted dark:text-neutral-400 font-light leading-relaxed">
                  12 Golden Square, Soho<br />
                  London, W1F 9JE, UK
                </p>
              </div>
              <p className="text-xs text-brand-text dark:text-neutral-200 font-medium">
                +44 20 7946 0192
              </p>
            </div>

            <div className="p-5 sm:p-6 border border-brand-border dark:border-neutral-800 space-y-4 bg-brand-secondary/45 dark:bg-[#121212]/30">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Shibuya Office</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-semibold text-brand-text dark:text-neutral-200">Tokyo Studio</h4>
                <p className="text-xs text-brand-muted dark:text-neutral-400 font-light leading-relaxed">
                  5-chōme-2 Shibuya, Shibuya City<br />
                  Tokyo, 150-0002, Japan
                </p>
              </div>
              <p className="text-xs text-brand-text dark:text-neutral-200 font-medium">
                +81 3 5555 0143
              </p>
            </div>
          </div>

          {/* Google Map Mock - Beautiful Editorial Visual Vector Map */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-brand-muted dark:text-neutral-500 uppercase tracking-widest font-mono">
              <span>Studio Locator (London / Tokyo)</span>
              <span>Vector Coordinates</span>
            </div>
            
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-[#111111] border border-brand-border dark:border-neutral-850 flex items-center justify-center p-4 sm:p-8 text-center select-none">
              
              {/* Aesthetic Grid overlay lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none" />
              
              {/* Artistic Vector Elements mapping pins */}
              <div className="relative z-10 space-y-6 max-w-sm">
                <div className="flex justify-center items-center gap-4 sm:gap-12">
                  {/* London Node */}
                  <div className="text-center space-y-1.5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-black dark:border-white bg-white dark:bg-black rounded-none flex items-center justify-center mx-auto shadow-sm animate-pulse">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">LONDON</p>
                      <p className="text-[8px] sm:text-[9px] text-brand-muted font-mono">51.5113&deg; N, 0.1368&deg; W</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="self-center flex flex-col items-center">
                    <span className="h-[1px] w-12 sm:w-20 bg-neutral-300 dark:bg-neutral-800 relative">
                      <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-black dark:bg-white -translate-x-1/2" />
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-neutral-400 mt-1">Core Fiber</span>
                  </div>

                  {/* Tokyo Node */}
                  <div className="text-center space-y-1.5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-black dark:border-white bg-white dark:bg-black rounded-none flex items-center justify-center mx-auto shadow-sm">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">TOKYO</p>
                      <p className="text-[8px] sm:text-[9px] text-brand-muted font-mono">35.6580&deg; N, 139.7016&deg; E</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-brand-text dark:text-neutral-300 leading-relaxed font-light">
                    Physical coordinates synchronized securely. Click below to launch standard GPS navigation maps.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Soho,London"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors pt-2 group"
                  >
                    <span>Launch Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Platforms Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold">
              Follow Our Broadcasts
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 sm:p-3 border border-brand-border dark:border-neutral-800 text-brand-text dark:text-neutral-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-[11px] sm:text-xs font-semibold uppercase tracking-widest"
                  aria-label={`Visit our ${item.label}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}
