/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ReviewQuote {
  quote: string;
  source: string;
  rating?: string;
}

export interface CrewMember {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  duration: string;
  format: string;
  role: string;
  broadcasters: string[];
  platforms: string[];
  reviewQuote: ReviewQuote;
  image: string;
  vimeoId: string; // Vimeo video ID for embedded showreel & trailer modals
  youtubeId?: string; // Optional YouTube ID for relevant music documentaries
  synopsis: string;
  crew: CrewMember[];
}

export interface MusicDocumentary {
  id: string;
  title: string;
  artist: string;
  year: string;
  duration: string;
  format: string;
  reviewQuote: ReviewQuote;
  image: string;
  youtubeId?: string; // Optional YouTube ID for music video trailer
  synopsis: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AwardItem {
  year: string;
  category: string;
  project: string;
  festival: string;
}

export interface YouTubeDoc {
  id: string;
  title: string;
  director: string;
  year: string;
  duration: string;
  category: string;
  synopsis: string;
  image: string;
  youtubeUrl: string;
  views?: string;
}

export type PageId = 'home' | 'work' | 'music-docs' | 'about' | 'contact' | '404';
