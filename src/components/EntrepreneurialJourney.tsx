'use client';

import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faRocket, faLightbulb, faArrowRight, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function EntrepreneurialJourney() {
  // Data Produk
  const product = {
    name: "Bahagia Space",
    role: "Founder & Product Engineer",
    prevName: "Mengundanganda.com",
    period: "2021 - Present",
    tagline: "Building a 'Warm Digital Home' for Life Celebrations",
    summary: "A holistic digital platform that evolved from a functional wedding invitation tool into a mental well-being ecosystem. We normalize the journey of happiness through storytelling and elegant digital services.",
    link: "https://bahagia.space", // Ganti dengan link aslimu
  };

  // Data Timeline Pivot
  const milestones = [
    {
      year: "Sept 2025 - Present",
      title: "The Rebirth: Bahagia Space",
      description: "Strategic pivot to becoming a 'Library of Feelings'. Introduced Story Room (Ruang Suara), Wall of Gratitude, and anxiety-relief resources alongside the core invitation engine.",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Vercel"]
    },
    {
      year: "2021 - 2023",
      title: "Inception: Mengundanganda.com",
      description: "Launched MVP for digital wedding invitations. Validated market demand, built the initial generator engine, and gathered user psychology insights.",
      tech: ["Legacy Stack", "Monolith Architecture"]
    }
  ];

  return (
    <section id="startup" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            Founder Mode
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange mb-4 tracking-tight">Entrepreneurial Journey</h2>
          <p className="text-ubuntu-grey max-w-2xl mx-auto">
            Beyond coding for others, I build my own products to solve real human problems.
          </p>
        </div>

        {/* Main Card */}
        <div className="ubuntu-card rounded-3xl p-8 md:p-10 shadow-2xl relative group transition-all duration-500">

          {/* Background Decoration (Watermark) */}
          <div className="absolute -top-10 -right-10 opacity-[0.06] rotate-12 group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none">
            <FontAwesomeIcon icon={faRocket} className="text-[200px] text-ubuntu-orange" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 relative z-10">

            {/* LEFT COLUMN: Brand & Vision */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass-icon-tile p-3 rounded-2xl">
                    <FontAwesomeIcon icon={faLightbulb} className="text-ubuntu-orange text-2xl" />
                  </div>
                  <span className="text-ubuntu-grey text-xs font-mono tracking-[0.2em] uppercase">From Zero to One</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{product.name}</h3>
                <p className="text-gray-400 italic text-sm mb-4">Previously {product.prevName}</p>

                <div className="inline-block bg-ubuntu-orange font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
                  {product.role}
                </div>

                <blockquote className="text-lg text-gray-200 leading-relaxed border-l-2 border-ubuntu-orange/60 pl-6 mb-6">
                  &ldquo;{product.summary}&rdquo;
                </blockquote>
              </div>

              {/* Call to Action / Link */}
              <div className="mt-4">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-pill-neutral rounded-full px-5 py-2.5 text-ubuntu-orange font-semibold hover:bg-white/10 transition-all group/link"
                >
                  Visit Platform
                  <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Timeline & Tech */}
            <div className="lg:col-span-7 rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} className="text-ubuntu-orange" />
                The Evolution
              </h4>

              <div className="space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-white/10 last:border-l-0 last:pb-0">
                    {/* Dot Indicator */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ${idx === 0 ? 'bg-ubuntu-orange ring-ubuntu-orange/25 animate-pulse' : 'bg-white/40 ring-white/10'}`}></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h5 className="text-lg font-bold text-white">{item.title}</h5>
                      <span className="text-xs font-mono glass-pill rounded-full px-3 py-1 w-fit">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-ubuntu-grey text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((stack, i) => (
                        <span key={i} className="glass-pill-neutral text-[10px] uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-md">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}