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
          <h2 className="text-4xl font-bold text-ubuntu-orange mb-4">Entrepreneurial Journey</h2>
          <p className="text-ubuntu-grey max-w-2xl mx-auto">
            Beyond coding for others, I build my own products to solve real human problems.
          </p>
        </div>

        {/* Main Card */}
        <div className="ubuntu-card rounded-3xl p-8 md:p-10 shadow-2xl border border-ubuntu-orange/20 relative overflow-hidden group hover:border-ubuntu-orange/40 transition-all duration-500">
          
          {/* Background Decoration (Watermark) */}
          <div className="absolute -top-10 -right-10 opacity-5 rotate-12 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <FontAwesomeIcon icon={faRocket} className="text-[200px] text-ubuntu-orange" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 relative z-10">
            
            {/* LEFT COLUMN: Brand & Vision (4 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-ubuntu-orange/20 p-3 rounded-xl">
                    <FontAwesomeIcon icon={faLightbulb} className="text-ubuntu-orange text-2xl" />
                  </div>
                  <span className="text-ubuntu-grey text-sm font-mono tracking-wider uppercase">From Zero to One</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-500 italic text-sm mb-4">Previously {product.prevName}</p>
                
                <div className="inline-block bg-gradient-to-r from-ubuntu-orange to-orange-600 text-black font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                  {product.role}
                </div>

                <blockquote className="text-lg text-gray-300 leading-relaxed border-l-4 border-ubuntu-orange pl-6 mb-6">
                  "{product.summary}"
                </blockquote>
              </div>

              {/* Call to Action / Link */}
              <div className="mt-4">
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ubuntu-orange font-semibold hover:text-white transition-colors group/link"
                >
                  Visit Platform 
                  <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Timeline & Tech (8 Columns) */}
            <div className="lg:col-span-7 bg-black/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/5">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} className="text-ubuntu-orange" />
                The Evolution
              </h4>

              <div className="space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-700 last:border-l-0 last:pb-0">
                    {/* Dot Indicator */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gray-800 ${idx === 0 ? 'bg-ubuntu-orange animate-pulse' : 'bg-gray-600'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h5 className="text-lg font-bold text-white">{item.title}</h5>
                        <span className="text-xs font-mono text-ubuntu-orange bg-ubuntu-orange/10 px-2 py-1 rounded w-fit mt-1 sm:mt-0">
                        {item.year}
                        </span>
                    </div>
                    
                    <p className="text-ubuntu-grey text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((stack, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
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