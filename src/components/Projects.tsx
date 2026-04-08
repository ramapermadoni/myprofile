'use client';

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      image: "/assets/images/featured-projects/mitra-qurban.png",
      alt: "DT Peduli Qurban mobile application interface",
      title: "DT Peduli Qurban",
      description: "Mobile application for Qurban (sacrifice) donation management with payment integration",
      tags: ["Flutter", "REST API"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dtpeduli.qurban&hl=id"
    },
    {
      image: "/assets/images/featured-projects/dtpeduli.png",
      alt: "DT Peduli official mobile application interface",
      title: "DT Peduli Official",
      description: "Official charity and donation platform mobile application",
      tags: ["Flutter", "Payment Gateway", "REST API"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dtpeduli.official&hl=id"
    },
    {
      image: "/assets/images/featured-projects/hrdt.png",
      alt: "NXSYSPRO HRDT mobile application interface",
      title: "NXSYSPRO HRDT",
      description: "Human Resources mobile application for employee management",
      tags: ["Flutter", "REST API", "CI4"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.nxsyspro.hrd&hl=id"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <div className="h-1.5 w-24 bg-apple-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card group flex flex-col h-full animate-in fade-in slide-in-from-bottom duration-700" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={192}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors cursor-default">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-apple-primary text-center text-sm"
                >
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}