'use client';

import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { 
  faPhp,
  
  faReact,
  faCss3Alt,
  faBootstrap,
  faGoogle,
  faGolang,
  faDocker
} from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skills = [
    {
      icon: <FontAwesomeIcon icon={faPhp} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "PHP",
      description: "CI4, Laravel"
    },
    {
      icon: (
        <svg className="svg-inline--fa fa-database w-10 h-10 text-ubuntu-orange mb-3 text-4xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
        </svg>
      ),
      name: "MySQL"
    },
    {
      
      icon: (
        <svg className="svg-inline--fa fa-database w-10 h-10 text-ubuntu-orange mb-3 text-4xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
        </svg>
      ),
      name: "PostgreSQL"
    },
    {
      icon: <FontAwesomeIcon icon={faReact} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Next.js"
    },
    {
      icon: <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Tailwind"
    },
    {
      icon: <FontAwesomeIcon icon={faBootstrap} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Bootstrap"
    },
    {
      icon: <FontAwesomeIcon icon={faGears} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Frappe"
    },
    {
      icon: <FontAwesomeIcon icon={faGoogle} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Flutter",
      description: "GetX"
    },
    {
      icon: <FontAwesomeIcon icon={faGolang} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Golang"
    },
    {
      icon: <FontAwesomeIcon icon={faDocker} className="w-10 h-10 text-ubuntu-orange mb-3 text-4xl" />,
      name: "Docker"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="ubuntu-card rounded-xl p-6 text-center hover-lift">
              {skill.icon}
              <p className="font-semibold">{skill.name}</p>
              {skill.description && (
                <p className="text-sm text-ubuntu-grey">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}