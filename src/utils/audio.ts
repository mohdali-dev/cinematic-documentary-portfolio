/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Simple lightweight Web Audio synthesizer for tactile, vintage-micro acoustic feedback.
// Ensures 0kb asset size & instant execution.

class MicroAudioController {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;

  constructor() {
    // Lazy-load to bypass early browser security bans on auto-sound
    if (typeof window !== "undefined") {
      const storedMute = localStorage.getItem("aura_sfx_mute");
      this.isMuted = storedMute !== "false"; // Default to muted for professional etiquette
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("aura_sfx_mute", String(this.isMuted));
    }
    if (!this.isMuted) {
      this.initCtx();
      this.playClick();
    }
    return this.isMuted;
  }

  public getMuteState(): boolean {
    return this.isMuted;
  }

  public playClick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      // Crisp vintage film-gear focus click frequency
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime); // Very quiet, unobtrusive tick
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {
      // Fail-safe
    }
  }

  public playSuccess() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      
      // Warm twin-tone harmonic chime
      [523.25, 659.25].forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.02, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.55);
      });
    } catch (e) {
      // Fail-safe
    }
  }

  public playSlide() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {
      // Fail-safe
    }
  }
}

export const microAudio = new MicroAudioController();

class AmbientDroneController {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.initCtx();
    if (!this.ctx) return;
    if (this.isPlaying) return;

    this.isPlaying = true;

    try {
      const now = this.ctx.currentTime;

      // Create Master Gain with zero volume for smooth fade-in
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, now);
      // Beautiful, ultra-gradual fade-in over 4 seconds to ease in the mood
      this.masterGain.gain.linearRampToValueAtTime(0.045, now + 4);

      // Resonant Lowpass Filter representing premium cinematic acoustics
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.Q.setValueAtTime(2.5, now);
      this.filter.frequency.setValueAtTime(180, now);

      // Slow moving dynamic LFO for filter sweep
      this.lfo = this.ctx.createOscillator();
      this.lfo.type = "sine";
      this.lfo.frequency.setValueAtTime(0.06, now); // Sweep cycle of ~16 seconds

      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(80, now); // Sweep range +/- 80Hz

      this.lfo.connect(this.lfoGain);
      this.lfoGain.connect(this.filter.frequency);

      // Deep cinematic chord stack: D2 (73.42 Hz), A2 (110.00 Hz), D3 (146.83 Hz), E3 (164.81 Hz - color note)
      const pitches = [73.42, 110.00, 146.83, 164.81];

      pitches.forEach((freq, idx) => {
        if (!this.ctx || !this.filter) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        // Blend rich textures
        osc.type = idx % 2 === 0 ? "triangle" : "sine";
        // Slight organic detune to create a lush, wide chorus effect
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.3 - 0.15), now);

        oscGain.gain.setValueAtTime(0.2, now);

        // Individual volume breath LFO so each voice drifts in and out on its own schedule
        const voiceLfo = this.ctx.createOscillator();
        const voiceLfoGain = this.ctx.createGain();
        voiceLfo.type = "sine";
        voiceLfo.frequency.setValueAtTime(0.04 + idx * 0.015, now);
        voiceLfoGain.gain.setValueAtTime(0.08, now);

        voiceLfo.connect(voiceLfoGain);
        voiceLfoGain.connect(oscGain.gain);

        osc.connect(oscGain);
        oscGain.connect(this.filter);

        osc.start(now);
        voiceLfo.start(now);

        this.oscillators.push({ osc, gain: oscGain });
        (osc as any)._voiceLfo = voiceLfo;
      });

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.lfo.start(now);

    } catch (e) {
      console.error("Failed to trigger cinematic drone soundscape:", e);
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      
      // Beautiful fade-out over 2 seconds to avoid clicks
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2);

      const activeOscs = [...this.oscillators];
      const activeLfo = this.lfo;
      const activeMaster = this.masterGain;

      this.oscillators = [];
      this.lfo = null;
      this.masterGain = null;
      this.filter = null;
      this.lfoGain = null;

      // Clean up sound nodes after the fade-out duration
      setTimeout(() => {
        try {
          activeOscs.forEach(({ osc }) => {
            osc.stop();
            if ((osc as any)._voiceLfo) {
              (osc as any)._voiceLfo.stop();
            }
          });
          if (activeLfo) {
            activeLfo.stop();
          }
          activeMaster.disconnect();
        } catch (e) {
          // Fail-safe
        }
      }, 2200);

    } catch (e) {
      console.error("Failed to fade out soundscape smoothly:", e);
    }
  }
}

export const ambientDrone = new AmbientDroneController();

class InterstellarMusicController {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private nextNoteTime: number = 0;
  private noteIndex: number = 0;
  private chordIndex: number = 0;
  private barCount: number = 0;
  private timerId: any = null;
  private masterGain: GainNode | null = null;
  private activeBassOsc: OscillatorNode[] = [];
  private activeBassGain: GainNode | null = null;

  // Chord progression definitions
  private chords = [
    { name: "Dm", freqs: [293.66, 349.23, 440.00, 587.33], bass: 73.42 },
    { name: "G/D", freqs: [293.66, 392.00, 493.88, 587.33], bass: 98.00 },
    { name: "C", freqs: [261.63, 329.63, 392.00, 523.25], bass: 65.41 },
    { name: "F", freqs: [261.63, 349.23, 440.00, 523.25], bass: 87.31 },
    { name: "Bb", freqs: [293.66, 349.23, 466.16, 587.33], bass: 58.27 },
    { name: "Gm", freqs: [293.66, 392.00, 466.16, 587.33], bass: 98.00 },
    { name: "Am", freqs: [329.63, 440.00, 523.25, 659.25], bass: 110.00 },
    { name: "A", freqs: [329.63, 440.00, 554.37, 659.25], bass: 110.00 }
  ];

  // Arpeggio note order indices: 0, 1, 2, 3, 2, 1
  private pattern = [0, 1, 2, 3, 2, 1];
  private stepDuration = 0.26; // 260ms per note (ideal majestic tempo matching Hans Zimmer's Cornfield Chase)

  constructor() {
    // Check if auto-play is enabled or saved.
    // Initialize isPlaying to false by default to prevent early return without setting up nodes.
    this.isPlaying = false;
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public start() {
    this.initCtx();
    if (!this.ctx) return;

    // If already playing correctly, do not double-schedule
    if (this.isPlaying && this.timerId && this.masterGain) {
      return;
    }

    this.isPlaying = true;
    if (typeof window !== "undefined") {
      localStorage.setItem("interstellar_autoplay", "true");
    }

    // Clean up any stale scheduler or master gain to guarantee a fresh start
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (!this.masterGain) {
      this.masterGain = this.ctx.createGain();
      // Beautiful, majestic, ultra-gradual fade-in over 3 seconds
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 3.0);
      this.masterGain.connect(this.ctx.destination);
    }

    this.nextNoteTime = this.ctx.currentTime + 0.05;
    this.noteIndex = 0;
    this.chordIndex = 0;
    this.barCount = 0;

    this.scheduler();
  }

  public stop() {
    this.isPlaying = false;
    if (typeof window !== "undefined") {
      localStorage.setItem("interstellar_autoplay", "false");
    }

    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      
      const prevGain = this.masterGain;
      setTimeout(() => {
        try {
          prevGain.disconnect();
        } catch (e) {}
      }, 1500);
      this.masterGain = null;
    }

    // Stop active bass pedals
    this.stopBassPedal();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private scheduler() {
    if (!this.isPlaying || !this.ctx) return;

    // Classic Web Audio scheduling fix: if nextNoteTime has fallen behind the Web Audio clock
    // (due to tab suspension, page loading lag, or initialization delay), reset it to the current time.
    // This absolutely prevents the "catch-up" storm where hundreds of notes are scheduled instantly!
    if (this.nextNoteTime < this.ctx.currentTime) {
      this.nextNoteTime = this.ctx.currentTime;
    }

    // Schedule any notes that should play before our next tick
    while (this.nextNoteTime < this.ctx.currentTime + 0.15) {
      this.scheduleNote(this.noteIndex, this.nextNoteTime);
      this.advanceNote();
    }

    this.timerId = setTimeout(() => this.scheduler(), 35);
  }

  private advanceNote() {
    if (!this.ctx) return;
    
    this.nextNoteTime += this.stepDuration;
    this.noteIndex = (this.noteIndex + 1) % this.pattern.length;

    // If we completed a full 6-note bar
    if (this.noteIndex === 0) {
      this.barCount++;
      // Switch chord after 4 bars
      if (this.barCount >= 4) {
        this.barCount = 0;
        this.chordIndex = (this.chordIndex + 1) % this.chords.length;
        // Trigger next bass pedal at the next note's exact time
        this.scheduleBassPedal(this.chords[this.chordIndex].bass, this.nextNoteTime);
      }
    }
  }

  private scheduleBassPedal(freq: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Fade out previous bass pedal
    this.stopBassPedal();

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const bassGain = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, time);
    
    // Sub-octave for true cinematic sub-woofer rumbling
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 0.5, time);

    bassGain.gain.setValueAtTime(0, time);
    // Smooth swelling entry
    bassGain.gain.linearRampToValueAtTime(0.25, time + 0.6);
    // Smooth transition out at the end of the chord duration
    const chordDuration = this.stepDuration * this.pattern.length * 4;
    bassGain.gain.setValueAtTime(0.25, time + chordDuration - 0.3);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, time + chordDuration);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(120, time);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(bassGain);
    bassGain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);

    const duration = chordDuration + 0.1;
    osc1.stop(time + duration);
    osc2.stop(time + duration);

    this.activeBassOsc = [osc1, osc2];
    this.activeBassGain = bassGain;
  }

  private stopBassPedal() {
    if (this.activeBassGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.activeBassGain.gain.cancelScheduledValues(now);
        this.activeBassGain.gain.setValueAtTime(this.activeBassGain.gain.value, now);
        this.activeBassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      } catch (e) {}
    }
    this.activeBassOsc = [];
    this.activeBassGain = null;
  }

  private scheduleNote(patternIdx: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    const chord = this.chords[this.chordIndex];
    const freqIdx = this.pattern[patternIdx];
    const baseFreq = chord.freqs[freqIdx];

    if (!baseFreq) return;

    // Create three parallel oscillators for a breathtaking pipe organ chorus
    const oscFundamental = this.ctx.createOscillator();
    const oscOctave = this.ctx.createOscillator();
    const oscFifth = this.ctx.createOscillator();
    const voiceGain = this.ctx.createGain();

    oscFundamental.type = "triangle";
    oscFundamental.frequency.setValueAtTime(baseFreq, time);
    // Slight organic detuning
    oscFundamental.detune.setValueAtTime(5, time);

    // High octave pure shine
    oscOctave.type = "sine";
    oscOctave.frequency.setValueAtTime(baseFreq * 2.0, time);
    oscOctave.detune.setValueAtTime(-5, time);

    // Perfect fifth sparkle
    oscFifth.type = "sine";
    oscFifth.frequency.setValueAtTime(baseFreq * 3.0, time);
    oscFifth.detune.setValueAtTime(2, time);

    // Warm, resonant lowpass filter representing wood pipes
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(950, time);
    filter.Q.setValueAtTime(1.2, time);

    // Volume Envelope matching Hans Zimmer's sustained cathedral performance
    voiceGain.gain.setValueAtTime(0, time);
    // Crisp attack
    voiceGain.gain.linearRampToValueAtTime(0.22, time + 0.03);
    // Sustained swell decay
    voiceGain.gain.exponentialRampToValueAtTime(0.08, time + this.stepDuration * 0.95);
    // Release
    voiceGain.gain.setValueAtTime(0.08, time + this.stepDuration);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, time + this.stepDuration + 0.15);

    oscFundamental.connect(filter);
    oscOctave.connect(filter);
    oscFifth.connect(filter);
    filter.connect(voiceGain);
    voiceGain.connect(this.masterGain);

    oscFundamental.start(time);
    oscOctave.start(time);
    oscFifth.start(time);

    const stopTime = time + this.stepDuration + 0.2;
    oscFundamental.stop(stopTime);
    oscOctave.stop(stopTime);
    oscFifth.stop(stopTime);
  }
}

export const interstellarMusic = new InterstellarMusicController();

