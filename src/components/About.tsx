export default function About() {
  return (
    <section className="py-24 px-6 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="neomorph-raised p-4 rounded-3xl bg-background rotate-[-2deg]">
            <img
              className="rounded-2xl w-full aspect-square object-cover"
              alt="A close-up shot of a high-end DJ controller with glowing purple and indigo LED indicators. The background shows a beautifully decorated Indian wedding hall with soft bokeh lighting in gold and violet. The overall mood is sophisticated and premium, highlighting the professional equipment used for elite celebrations. The lighting is low-key with sharp, vibrant accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCYnHWnSuvrrgfMEzYL5VUpz1EzUSq7xLwwVNpWKNyJM_qBmBoIaHDHd8cyyyJ0Kv01ar1VOvAlOeZEHUSW4Td-OE2wf9UzjVnshmAZxtFY6nh8m1lK4s6aGhA1d6tFLQ0Crgxb1b2GGc0EGMv5wa707sIX2Jb6uHByyMT5vUr4ozTFJzJz4R2zjFsKhX30B3v1VMcdJpXID_QU1JkiPMD3w-ELzaHEIxnSsxup-sztAc4rCoXejoJ2HUiP1_8MnT_8W6L_1IUjPL9"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 neomorph-raised rounded-3xl bg-background p-3 hidden md:block rotate-[6deg]">
            <img
              className="rounded-2xl w-full h-full object-cover"
              alt="A vibrant shot of a professional audio speaker system set up in an outdoor evening party setting. The environment is lit with warm decorative lights and cool blue accent lights on the speakers. The focus is on the sleek design of the sound equipment, blending perfectly into a high-end luxury event space. The mood is energetic yet refined."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMy5SV_JGryN2tHueIevGUxCVOdDKpml32599QVCjkimwy9O228j-fW_Eew4iShRtM64ca1p3ZsdqPasvnIs7gda8Pb794NRXt82TFhNFQ_-n2ok4jRSXS68jpwBJX_0ZTEZ3rkwe-K9x0NM5RH5eQ61leiZRRDWrt-RghR3a0_14bFc-3fQFkeA2ADi84d9DvUVBvakzNd5GGgH0WGyltJgQ0oqqxPsHnyfrvUWwuzlmAEVcaTPiU4lxwG7cArdWWEbpDqkiY5qs"
            />
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Premium Audio Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            Crafting Unforgettable Sonic Experiences
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            With over a decade of expertise in the heart of Indian wedding
            entertainment, Sonic India DJ brings world-class sound engineering
            to your most precious moments. We don&apos;t just play music; we
            orchestrate atmosphere.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            From traditional Sangeet nights to modern reception parties, our
            high-fidelity equipment and curated playlists ensure that every beat
            resonates with perfection. We specialize in premium audio setups
            that fill the room without overwhelming the conversation.
          </p>
          <div className="pt-4">
            <button className="neomorph-raised px-8 py-4 bg-background text-primary font-bold rounded-xl hover:translate-y-[-2px] transition-transform active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06)]">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
