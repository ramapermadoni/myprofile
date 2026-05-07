'use client';

import {
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFrappe,
  SiFlutter,
  SiGo,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  Icon: IconType;
  name: string;
  description?: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { Icon: SiPhp, name: "PHP", description: "CI4, Laravel" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiBootstrap, name: "Bootstrap" },
    { Icon: SiFrappe, name: "Frappe" },
    { Icon: SiFlutter, name: "Flutter", description: "GetX" },
    { Icon: SiGo, name: "Golang" },
    { Icon: SiDocker, name: "Docker" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            Toolkit
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange tracking-tight">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map(({ Icon, name, description }) => (
            <div key={name} className="ubuntu-card rounded-2xl p-6 text-center hover-lift">
              <div className="relative z-10 flex flex-col items-center">
                <div className="glass-icon-tile rounded-2xl p-3 mb-3 inline-flex items-center justify-center">
                  <Icon className="w-7 h-7 text-ubuntu-orange" aria-hidden="true" />
                </div>
                <p className="font-semibold text-white">{name}</p>
                {description && (
                  <p className="text-sm text-ubuntu-grey mt-1">{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
