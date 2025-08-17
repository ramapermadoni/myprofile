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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="ubuntu-card rounded-2xl overflow-hidden shadow-xl hover-lift">
              <Image
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.alt}
                width={400}
                height={192}
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-ubuntu-grey mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-ubuntu-orange/20 text-ubuntu-orange px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-ubuntu-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
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