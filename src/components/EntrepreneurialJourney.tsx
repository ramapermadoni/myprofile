'use client';

import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faRocket, faLightbulb, faArrowRight, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function EntrepreneurialJourney() {
  const product = {
    name: "Bahagia Space",
    role: "Founder & Product Engineer",
    prevName: "Mengundanganda.com",
    period: "2021 - Present",
    tagline: "Building a 'Warm Digital Home' for Life Celebrations",
    summary: "A holistic digital platform that evolved from a functional wedding invitation tool into a mental well-being ecosystem. We normalize the journey of happiness through storytelling and elegant digital services.",
    link: "https://bahagia.space",
  };

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
    <section id="startup" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Entrepreneurial Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Beyond coding for others, I build my own products to solve real human problems.
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group animate-in fade-in zoom-in duration-1000">
          <div className="absolute -top-10 -right-10 opacity-5 rotate-12 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <FontAwesomeIcon icon={faRocket} className="text-[300px] text-primary" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 relative z-10">
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary text-2xl" />
                  </div>
                  <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">From Zero to One</span>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                  <span className="text-apple-gradient">{product.name}</span>
                </h3>
                <p className="text-muted-foreground italic text-sm mb-8 px-4 py-1 bg-muted/50 rounded-full w-fit">
                  Previously {product.prevName}
                </p>
                
                <div className="inline-block bg-linear-to-r from-apple-blue to-apple-purple text-white font-bold px-6 py-2 rounded-xl text-sm mb-10 shadow-lg shadow-primary/20">
                  {product.role}
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-linear-to-b from-primary to-transparent rounded-full"></div>
                  <p className="text-2xl text-foreground/80 leading-relaxed font-medium">
                    &ldquo;{product.summary}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-apple-primary inline-flex items-center gap-3 group/link"
                >
                  Visit Platform 
                  <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7 bg-black/5 dark:bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-border/50 shadow-inner">
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <FontAwesomeIcon icon={faLayerGroup} className="text-primary" />
                The Evolution
              </h4>

              <div className="space-y-12">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative pl-12 border-l-2 border-primary/20 last:border-l-0 pb-12 last:pb-0 group/milestone">
                    <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-background ${idx === 0 ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <h5 className="text-2xl font-bold group-hover/milestone:text-primary transition-colors">{item.title}</h5>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shrink-0">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((stack, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-primary/5 text-primary/70 rounded-lg border border-primary/10">
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