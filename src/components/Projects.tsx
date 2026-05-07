'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange tracking-tight">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div key={index} className="ubuntu-card rounded-3xl overflow-hidden shadow-xl hover-lift flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={192}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                <p className="text-ubuntu-grey mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="glass-pill px-2.5 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ubuntu-purple hover:bg-purple-700 text-white px-4 py-2.5 rounded-xl transition-all font-medium"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="w-4 h-4" />
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