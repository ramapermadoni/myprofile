'use client';

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      image: "/assets/images/dummy-1.png",
      alt: "modern web application dashboard interface, dark theme",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard",
      tags: ["Laravel", "MySQL", "Tailwind"],
    },
    {
      image: "/assets/images/dummy-2.png",
      alt: "mobile app interface design, flutter app, dark theme",
      title: "Task Management App",
      description: "Cross-platform mobile app for productivity",
      tags: ["Flutter", "GetX", "Firebase"],
    },
    {
      image: "/assets/images/dummy-3.png",
      alt: "api documentation interface, golang backend system",
      title: "API Gateway Service",
      description: "Microservices architecture with Go backend",
      tags: ["Golang", "Docker", "PostgreSQL"],
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
                <button className="bg-ubuntu-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}