export interface Interview {
  /** ISO date (yyyy-mm-dd) — used for sorting and display */
  date: string;
  title: string;
  /** podcast, publication, or event name */
  venue: string;
  url?: string;
}

// Dates below are placeholders — set them to the real publication dates
// so the list sorts chronologically (newest first).
export const interviews: Interview[] = [
  {
    date: "2026-02-01",
    title: "The Bitwig Community Talk, Episode #6",
    venue: "Jürgen Moßgraber and Odo Sendaidokai",
    url: "https://www.youtube.com/watch?v=BZlqXefJW8E&t=3023s",
  },
  {
    date: "2026-11-01",
    title:
      "Episode 40 — The Art of Virtual Synth Design II: Surge XT, Open-Source Powerhouse",
    venue: "The DawBench Podcast",
    url: "https://dawbench.libsyn.com/episode-40-the-art-of-virtual-synth-design-ii-surge-xt-open-source-powerhouse",
  },
  {
    date: "2025-02-01",
    title: "baconpaul from the Surge Synthesizer Team",
    venue: "Made with JUCE Developer Series",
    url: "https://juce.com/made-with-juce/baconpaul-from-the-surge-synthesizer-team/",
  },
  {
    date: "2026-12-01",
    title: "Linux Audio Developers Spotlight: baconpaul / Paul Walker",
    venue: "linuxaudio.dev",
    url: "https://linuxaudio.dev/linux-audio-developers-spotlight/baconpaul-paul-walker",
  },
    {
    date: "2022-06-21",
    title: "Introduction to the CLAP Standard with Paul Walker and Alexandre Bique",
    venue: "The Audio Programmer",
    url: "https://www.youtube.com/watch?v=H_03JJ7Ca5g",
  },
];
