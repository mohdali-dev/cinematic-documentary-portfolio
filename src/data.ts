/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, MusicDocumentary, TimelineItem, AwardItem, YouTubeDoc } from './types';

export const companyName = "AURA CINEMATIC";
export const companyTagline = "We capture the raw truth and human essence of a changing world.";
export const companyBio = "Founded in 2012, AURA CINEMATIC is an award-winning independent documentary production company. With offices in London and Tokyo, we produce premium non-fiction films, docu-series, and music chronicles that resonate globally. Our films explore the intersections of environment, art, music, and deep human struggles, styled with high-end cinematic vision and journalistic integrity.";

export const stats = [
  { id: "stat-1", value: 24, suffix: "+", label: "Documentaries Completed" },
  { id: "stat-2", value: 16, suffix: "", label: "Countries Filmed" },
  { id: "stat-3", value: 12, suffix: "+", label: "International Awards" },
  { id: "stat-4", value: 35, suffix: "+", label: "Broadcast & Streaming Partners" }
];

export const broadcasterLogos = [
  { name: "BBC", logoText: "B B C" },
  { name: "PBS", logoText: "P B S" },
  { name: "ARTE", logoText: "arte" },
  { name: "ZDF", logoText: "2DF" },
  { name: "NHK", logoText: "NHK WORLD" },
  { name: "Netflix", logoText: "NETFLIX" },
  { name: "HBO", logoText: "HBO" },
  { name: "Apple TV+", logoText: "Apple TV+" }
];

// Approximately 10 editorial productions with alternating layouts
export const selectedProjects: Project[] = [
  {
    id: "project-1",
    title: "The Last Glacier",
    year: "2025",
    duration: "94 min",
    format: "Cinematic Feature",
    role: "Co-Production & Editorial Delivery",
    broadcasters: ["BBC Storyville", "ARTE"],
    platforms: ["Netflix", "Apple TV"],
    reviewQuote: {
      quote: "An epoch-defining work of immense visual power and heartbreaking urgency. AURA has crafted a masterpiece.",
      source: "The Guardian",
      rating: "★★★★★"
    },
    image: "https://plus.unsplash.com/premium_photo-1732030991295-129f59903664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vimeoId: "240328229", // Cinematic mountain drone/exploration style
    youtubeId: "I1fQ_0s_EPM", // "HOME" by Yann Arthus-Bertrand
    synopsis: "An intimate, multi-year chronicle documenting the final scientific expeditions into the melting crevasses of the Karakoram range, revealing pristine landscapes on the verge of irreversible transformation.",
    crew: [
      { label: "Director", value: "Elena Rostova" },
      { label: "Cinematography", value: "Marcus Thorne, ASC" },
      { label: "Producer", value: "Kenji Tanaka" },
      { label: "Original Score", value: "Hildur Guðnadóttir" }
    ]
  },
  {
    id: "project-2",
    title: "Echoes of the Canyon",
    year: "2024",
    duration: "88 min",
    format: "Acoustic Documentary",
    role: "Full Production",
    broadcasters: ["PBS POV", "NHK"],
    platforms: ["Amazon Prime", "Criterion Channel"],
    reviewQuote: {
      quote: "Beautiful, meditative, and sonically staggering. It changes how you look at geography and music.",
      source: "Sight & Sound",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "141258169",
    youtubeId: "L_8t2Vig_nY", // "The Sound of Interstellar" (Official Hans Zimmer featurette)
    synopsis: "Exploring the natural acoustics of the Southwest canyons and the musicians who travel there to record songs using raw ambient echoes as their primary backing orchestra.",
    crew: [
      { label: "Director", value: "Julian Vance" },
      { label: "Sound Design", value: "Oliver Sterling" },
      { label: "Executive Producer", value: "Sarah Jenkins" },
      { label: "Editor", value: "Clara Dupont" }
    ]
  },
  {
    id: "project-3",
    title: "Shadows of Tokyo",
    year: "2024",
    duration: "105 min",
    format: "Subcultural Portrait",
    role: "Co-Production & Direction",
    broadcasters: ["NHK", "ZDF Info"],
    platforms: ["MUBI", "Netflix"],
    reviewQuote: {
      quote: "A dizzying neon journey into the souls of Tokyo's nighttime outcasts. Gorgeous editing.",
      source: "The New York Times",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "101683411",
    youtubeId: "vGsS782db8o", // "Life in a Day 2020" by Kevin Macdonald
    synopsis: "An immersive look inside Tokyo's underground night scenes—from jazz cafe preservationists to midnight alley racers, documenting the rich subcultures fighting against modern municipal homogenization.",
    crew: [
      { label: "Director", value: "Kenji Tanaka" },
      { label: "Associate Director", value: "Sora Takahashi" },
      { label: "Cinematography", value: "Sora Takahashi" },
      { label: "Producer", value: "Elena Rostova" }
    ]
  },
  {
    id: "project-4",
    title: "The Silent Deep",
    year: "2023",
    duration: "112 min",
    format: "Nature & Science Special",
    role: "Under-water Production Specialists",
    broadcasters: ["National Geographic", "BBC Natural History"],
    platforms: ["Disney+", "Apple TV"],
    reviewQuote: {
      quote: "Underwater photography like you have never seen before. A triumph of technical skill and patience.",
      source: "Variety",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "347119393",
    youtubeId: "I1fQ_0s_EPM", // "HOME"
    synopsis: "Following oceanographers into the Mariana Trench's twilight zone, revealing bioluminescent species never before captured on 8K digital cameras.",
    crew: [
      { label: "Director", value: "Alistair Cooke" },
      { label: "Deep-Sea Cam", value: "Jean-Yves Cousteau III" },
      { label: "Producers", value: "Marcus Thorne, Kenji Tanaka" },
      { label: "Scientific Advisor", value: "Dr. Sylvia Earle" }
    ]
  },
  {
    id: "project-5",
    title: "Dust & Gold",
    year: "2023",
    duration: "76 min",
    format: "Historical Essay",
    role: "Full Development & Production",
    broadcasters: ["PBS POV", "CBC"],
    platforms: ["Criterion Channel"],
    reviewQuote: {
      quote: "A hauntingly beautiful examination of greed, soil, and the ghosts of the American gold rushes.",
      source: "IndieWire",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1519074069444-1ba4e6663104?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "172551085",
    youtubeId: "eJ3RzGoQC4s", // "The Century of the Self" (BBC)
    synopsis: "Weaving together 19th-century letters and breathtaking modern footage, this film visits the forgotten ghost towns of California to tell the story of the dreamers who died in search of dust.",
    crew: [
      { label: "Director", value: "Sarah Jenkins" },
      { label: "Writer", value: "Gore Vidal Jr." },
      { label: "Editor", value: "Nils Frahm" },
      { label: "Narrator", value: "Willem Dafoe" }
    ]
  },
  {
    id: "project-6",
    title: "Concrete Symphony",
    year: "2022",
    duration: "82 min",
    format: "Architectural Chronicle",
    role: "Full Production",
    broadcasters: ["ARTE", "ZDF", "NHK"],
    platforms: ["MUBI"],
    reviewQuote: {
      quote: "A visual poem about the hard angles of Brutalism and the soft lives lived within them.",
      source: "Le Monde",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "278833923",
    youtubeId: "L_8t2Vig_nY", // "The Sound of Interstellar" (Organ/Music doc)
    synopsis: "A study of five legendary Brutalist housing complexes in London, Paris, Belgrade, and Tokyo, capturing the stories of their original architects and current residents.",
    crew: [
      { label: "Director", value: "Clara Dupont" },
      { label: "Director of Photography", value: "Stefan Pavlović" },
      { label: "Executive Producer", value: "Elena Rostova" },
      { label: "Original Music", value: "Max Richter" }
    ]
  },
  {
    id: "project-7",
    title: "Voices of the Tundra",
    year: "2022",
    duration: "98 min",
    format: "Ethnographic Study",
    role: "Field Production & Co-Financing",
    broadcasters: ["BBC Storyville", "ZDF"],
    platforms: ["Amazon Prime"],
    reviewQuote: {
      quote: "Immersive, deeply respectful, and essential watching for anyone caring about language extinction.",
      source: "The Times",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "512534571",
    youtubeId: "I1fQ_0s_EPM", // "HOME"
    synopsis: "A profound portrait of reindeer herders in the Nenets Autonomous Okrug, focusing on three elders who are the last native speakers of their tribal dialect.",
    crew: [
      { label: "Director", value: "Andrei Sokolov" },
      { label: "Sound Recordist", value: "Dmitry Volkov" },
      { label: "Producer", value: "Elena Rostova" },
      { label: "Translator", value: "Nadezhda Laptander" }
    ]
  },
  {
    id: "project-8",
    title: "Code & Conquest",
    year: "2021",
    duration: "110 min",
    format: "Investigative Tech Feature",
    role: "Lead Production Agency",
    broadcasters: ["HBO Documentary Films", "BBC"],
    platforms: ["Max", "BBC iPlayer"],
    reviewQuote: {
      quote: "Chilling, comprehensive, and paced like a psychological thriller. Simply magnificent.",
      source: "Wired",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "502013890",
    youtubeId: "eJ3RzGoQC4s", // "The Century of the Self"
    synopsis: "An in-depth historical review of the high-stakes cyber espionage wars between nation-states in the early 2000s, featuring anonymous interviews with former defense intelligence hackers.",
    crew: [
      { label: "Director", value: "Julian Vance" },
      { label: "Lead Researcher", value: "Dr. Rebecca Chen" },
      { label: "Producer", value: "Marcus Thorne" },
      { label: "Composer", value: "Trent Reznor & Atticus Ross" }
    ]
  },
  {
    id: "project-9",
    title: "Stolen Canvas",
    year: "2021",
    duration: "85 min",
    format: "Crime & Art Essay",
    role: "Full Development & Production",
    broadcasters: ["ARTE", "PBS POV"],
    platforms: ["Apple TV", "Curzon Home Cinema"],
    reviewQuote: {
      quote: "Part detective story, part philosophy seminar. A beautifully framed intellectual thriller.",
      source: "The New Yorker",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "443717208",
    youtubeId: "eJ3RzGoQC4s", // "The Century of the Self"
    synopsis: "The unsolved mystery of three Caravaggio masterpieces stolen from a secluded Sicilian chapel in 1969, tracing the pathways of black-market antiquities smugglers.",
    crew: [
      { label: "Director", value: "Elena Rostova" },
      { label: "Consultant Art Historian", value: "Prof. Alberto Angela" },
      { label: "Cinematography", value: "Sandro Di Giusto" },
      { label: "Editor", value: "Clara Dupont" }
    ]
  },
  {
    id: "project-10",
    title: "Rhythm of the Loom",
    year: "2020",
    duration: "90 min",
    format: "Cultural Heritage Feature",
    role: "Full Co-Production",
    broadcasters: ["NHK World", "Doordarshan"],
    platforms: ["Criterion Channel", "MUBI"],
    reviewQuote: {
      quote: "Sensory, colorful, and deeply moving. It captures the rhythm of human survival in every thread.",
      source: "The Hindu",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1200&auto=format&fit=crop",
    vimeoId: "431603525",
    youtubeId: "I1fQ_0s_EPM", // "HOME"
    synopsis: "Documenting the master silk weavers of Varanasi as they confront industrial modernization, preserving a 500-year-old weaving pattern that mirrors Indian mythology.",
    crew: [
      { label: "Director", value: "Rajesh Shrivastava" },
      { label: "Producer", value: "Sarah Jenkins" },
      { label: "Cinematography", value: "Anil Mehta" },
      { label: "Soundtrack", value: "Ravi Shankar Ensemble" }
    ]
  }
];

// Music Documentaries (approximately 6 works)
export const musicDocs: MusicDocumentary[] = [
  {
    id: "music-1",
    title: "Ascension: The Coltrane Legacy",
    artist: "John Coltrane Quintet",
    year: "2024",
    duration: "115 min",
    format: "Jazz Biographical Film",
    reviewQuote: {
      quote: "A sublime sonic document. It captures the spiritual density of jazz's ultimate prophet.",
      source: "DownBeat",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "2KotK_YIu7g", // John Coltrane documentary
    synopsis: "Focusing on the late period of John Coltrane's free jazz exploration, detailing the spiritual awakening that birthed 'A Love Supreme' through archival audio and raw rehearsal takes."
  },
  {
    id: "music-2",
    title: "After the Beat Drops",
    artist: "Berlin Techno Pioneers",
    year: "2023",
    duration: "96 min",
    format: "Electronic Music Archive",
    reviewQuote: {
      quote: "Hypnotic, pulsing, and historically vital. The definitive account of Berlin's sonic reunification.",
      source: "Resident Advisor",
      rating: "★★AA☆"
    },
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "qXzT_8vH6Sg", // Berlin Electronic/Techno documentary
    synopsis: "Detailing the rise of electronic music in the ruins of the Berlin Wall, exploring how abandoned power stations and industrial basements became the laboratories of a global club culture."
  },
  {
    id: "music-3",
    title: "Songs of the Soil",
    artist: "Appalachian Roots Revivalists",
    year: "2022",
    duration: "84 min",
    format: "Folk Music Exploration",
    reviewQuote: {
      quote: "Intimate and deeply comforting. It feels like sitting by a fireplace with the ancestors of folk.",
      source: "Pitchfork",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1445445290250-18a3ef0a8fc4?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "w_B68fI_C24", // American Folk Music Roots documentary
    synopsis: "Following acoustic songwriters through remote mountain communities in West Virginia, documenting oral histories and traditional ballads preserved entirely without digital notation."
  },
  {
    id: "music-4",
    title: "Amplified Rebellion",
    artist: "The Clash & London Punk Scene",
    year: "2022",
    duration: "90 min",
    format: "Punk Rock Retrospective",
    reviewQuote: {
      quote: "Raw energy captured on celluloid. A masterclass in musical defiance and social critique.",
      source: "Rolling Stone",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "wX_vWl7R6oI", // The Clash & Punk rock documentary
    synopsis: "Looking back at the explosive UK punk wave of 1976-1979, detailing how working-class disillusionment collided with standard electric guitars to create an anti-establishment legacy."
  },
  {
    id: "music-5",
    title: "The Lyricist's Solitude",
    artist: "Chopin's Modern Interpretations",
    year: "2021",
    duration: "78 min",
    format: "Classical Interpretation",
    reviewQuote: {
      quote: "Quiet, devastatingly elegant, and full of intense pianistic passion.",
      source: "Gramophone",
      rating: "★★★★☆"
    },
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "L_8t2Vig_nY", // "The Sound of Interstellar" (Matches classical piano/organ and contains Roger Sayer organ recordings)
    synopsis: "Three world-renowned modern pianists lock themselves in a medieval monastery to record Chopin's Nocturnes in complete isolation, exploring the bounds between creative solitude and mental strain."
  },
  {
    id: "music-6",
    title: "Sub-Bass Culture",
    artist: "Kingston Soundsystem Masters",
    year: "2020",
    duration: "92 min",
    format: "Reggae & Dub Chronicle",
    reviewQuote: {
      quote: "Bass that rattles the chest and stories that shake the mind. Essential reggae history.",
      source: "The Wire",
      rating: "★★★★★"
    },
    image: "https://images.unsplash.com/photo-1484755560693-a4074577af3a?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "_7zMPlfW_4o", // Reggae & Dub culture documentary
    synopsis: "A study of Kingston's massive street soundsystems, exploring how custom-built bass cabinets and community micro-economics gave birth to modern Dub, Ska, and Dancehall."
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2012",
    title: "Founding & First Feature",
    description: "Elena Rostova and Kenji Tanaka establish AURA in London. Their debut documentary, 'Shadows in the Mist', wins the Best Documentary Award at the London Independent Film Festival."
  },
  {
    year: "2015",
    title: "Expansion to Tokyo",
    description: "AURA opens its Far East branch in Tokyo, fostering deep relationships with NHK and independent Japanese cinematographers, specializing in high-fidelity ethnographic storytelling."
  },
  {
    year: "2018",
    title: "First Major Broadcaster Deal",
    description: "BBC Storyville and ARTE secure co-production rights for 'The Quiet Giants', marking a transition to major television network distributions with international audience access."
  },
  {
    year: "2021",
    title: "BAFTA and Peabody Nominations",
    description: "The historical chronicle 'Stolen Canvas' and music documentary 'The Lyricist's Solitude' receive critical acclaim, earning dual BAFTA nominations for Direction and Sound Editing."
  },
  {
    year: "2024",
    title: "Cannes Official Selection",
    description: "'The Last Glacier' is selected for the Special Screenings section at the Cannes Film Festival, praised for its technical and artistic boundary-pushing deep-glacier footage."
  }
];

export const awards: AwardItem[] = [
  { year: "2024", category: "Best Documentary Feature", project: "The Last Glacier", festival: "Cannes Film Festival (Special Mention)" },
  { year: "2023", category: "Grand Jury Prize", project: "Echoes of the Canyon", festival: "Sundance Film Festival" },
  { year: "2023", category: "Best Cinematography", project: "The Silent Deep", festival: "International Documentary Association (IDA)" },
  { year: "2022", category: "Best Historical Film", project: "Concrete Symphony", festival: "Biografilm Festival" },
  { year: "2021", category: "Peabody Award Winner", project: "Stolen Canvas", festival: "Peabody Awards Committee" },
  { year: "2020", category: "Best Music Chronicle", project: "Sub-Bass Culture", festival: "Rotterdam Film Festival" }
];

export const teamMembers = [
  {
    name: "Elena Rostova",
    role: "Co-Founder & Artistic Director",
    bio: "Elena is a documentary filmmaker and photographer whose work focuses on cultural preservation and ecological crisis. Previously with BBC Storyville, her films have been screened at Cannes, Berlinale, and Venice.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Kenji Tanaka",
    role: "Co-Founder & Lead Producer",
    bio: "Kenji began his career as an investigative reporter in Tokyo. Over the past 20 years, he has produced dozens of acclaimed documentaries exploring human resilience, modern subcultures, and geopolitical themes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

export const clientLogos = [
  "BBC Storyville",
  "PBS POV",
  "National Geographic",
  "ARTE France",
  "NHK World",
  "ZDF Germany",
  "Netflix Originals",
  "HBO Documentary Films",
  "Apple TV+",
  "MUBI",
  "Sundance Institute",
  "BFI"
];

export const testimonials = [
  {
    quote: "AURA Cinematic represent the pinnacle of independent filmmaking. Their visual craftsmanship and absolute commitment to their subjects is unparalleled.",
    author: "Charlotte Moore",
    title: "Director of Content, BBC"
  },
  {
    quote: "Working with the team at AURA was a revelation. They don't just capture stories; they find the breathing poetry beneath the surface of reality.",
    author: "Nils Frahm",
    title: "Composer & Collaborator"
  }
];

export const youtubeDocs: YouTubeDoc[] = [
  {
    id: "I1fQ_0s_EPM",
    title: "HOME",
    director: "Yann Arthus-Bertrand",
    year: "2009",
    duration: "118 min",
    category: "Ecological / Aerial Essay",
    synopsis: "An exquisite visual symphony composed entirely of aerial footage from over fifty countries. Yann Arthus-Bertrand chronicles the state of our planet, the damage we have inflicted, and the delicate balance we must urgently restore to protect our common home.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=I1fQ_0s_EPM",
    views: "45 Million+"
  },
  {
    id: "vGsS782db8o",
    title: "Life in a Day 2020",
    director: "Kevin Macdonald",
    year: "2021",
    duration: "84 min",
    category: "Global Crowdsourced Archive",
    synopsis: "Produced by Ridley Scott, this historic documentary weaves together thousands of raw video submissions recorded by everyday people on a single day: July 25, 2020. It forms a breathtaking time capsule of human joy, grief, and connection during a global crisis.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=vGsS782db8o",
    views: "20 Million+"
  },
  {
    id: "eJ3RzGoQC4s",
    title: "The Century of the Self",
    director: "Adam Curtis (BBC)",
    year: "2002",
    duration: "59 min",
    category: "Sociopolitical History",
    synopsis: "Adam Curtis's legendary, mind-expanding BBC documentary series exploring how Sigmund Freud's theories of the unconscious mind were used by corporations and governments to control public behavior, birth public relations, and design the modern consumer state.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=eJ3RzGoQC4s",
    views: "5 Million+"
  },
  {
    id: "L_8t2Vig_nY",
    title: "The Sound of Interstellar",
    director: "Warner Bros. Archive",
    year: "2014",
    duration: "13 min",
    category: "Cinematic Score Featurette",
    synopsis: "An official cinematic featurette going inside London's Temple Church to capture Hans Zimmer, director Christopher Nolan, and master organist Roger Sayer creating the breathtaking, majestic church-organ score that serves as the heartbeat of Interstellar.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=L_8t2Vig_nY",
    views: "8 Million+"
  }
];
