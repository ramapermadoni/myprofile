'use client';

import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      icon: "https://cdn.simpleicons.org/php/777BB4",
      name: "PHP",
      description: "CI4, Laravel"
    },
    {
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
      name: "MySQL"
    },
    {
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      name: "PostgreSQL"
    },
    {
      icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      name: "Next.js"
    },
    {
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      name: "Tailwind"
    },
    {
      icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
      name: "Bootstrap"
    },
    {
      // Frappe logo is not in simpleicons, using a placeholder or searching for a direct link
      icon: "https://raw.githubusercontent.com/frappe/frappe/develop/frappe/public/images/frappe-framework-logo.png",
      name: "Frappe"
    },
    {
      icon: "https://cdn.simpleicons.org/flutter/02569B",
      name: "Flutter",
      description: "GetX"
    },
    {
      icon: "https://cdn.simpleicons.org/go/00ADD8",
      name: "Golang"
    },
    {
      icon: "https://cdn.simpleicons.org/docker/2496ED",
      name: "Docker"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Tech Stack</h2>
          <div className="h-1.5 w-24 bg-apple-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center animate-in fade-in zoom-in duration-700 group cursor-default h-full flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 relative mb-6 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Image 
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-contain"
                  unoptimized // CDN images often need this if not configured in next.config.js
                />
              </div>
              <p className="font-bold text-lg mb-1">{skill.name}</p>
              {skill.description && (
                <p className="text-sm text-muted-foreground font-medium">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}