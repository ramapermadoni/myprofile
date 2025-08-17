'use client';

import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faGraduationCap, faBriefcase, faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  tags?: string[];
  icon?: JSX.Element;
}

export default function Experience() {
  const education: TimelineItem[] = [
    {
      id: 1,
      title: "Bachelor's Degree in Informatics Engineering",
      institution: "Nurtanio University Bandung",
      period: "2013 - 2017",
      description: "Graduated with 3.00 GPA. Developed award-winning Brainstorming Information System as final project (Best Thesis Award).",
      tags: ["GPA: 3.00", "Best Thesis", "Information Systems"],
      icon: <FontAwesomeIcon icon={faGraduationCap} />
    },
    {
      id: 2,
      title: "Software Engineering Vocational Program",
      institution: "SMK PGRI 1 Cimahi",
      period: "2010 - 2013",
      description: "Formal introduction to programming and web development fundamentals.",
      tags: ["Basic Programming", "Web Development", "Database"],
      icon: <FontAwesomeIcon icon={faCode} />
    },
    {
      id: 3,
      title: "Early Tech Passion",
      institution: "SMP Negeri 2 Cimahi",
      period: "2007 - 2010",
      description: "Discovered programming through ICT class, learning basic coding, photo/video editing. Inspired by Friendster customization and Facebook's creation story to pursue tech career.",
      tags: ["First Code", "Digital Creativity", "TIK Class"],
      icon: <FontAwesomeIcon icon={faHeart} />
    }
  ];


  const workExperience: TimelineItem[] = [
    {
      id: 1,
      title: "Mobile Application Developer",
      institution: "NXSYS Professional Solutions",
      period: "Jun 2023 - Present",
      description: "Developing cross-platform mobile applications using Flutter with SQL database integration.",
      tags: ["Flutter", "MySQL", "PostgreSQL", "Mobile Development"]
    },
    {
      id: 2,
      title: "Web & Mobile Developer",
      institution: "DT Peduli",
      period: "Jun 2023 - Present",
      description: "Building web and mobile applications for social platforms with PHP and Flutter.",
      tags: ["Flutter", "PHP", "CodeIgniter", "REST APIs"]
    },
    {
      id: 3,
      title: "Full-time Mobile Developer",
      institution: "DT Peduli",
      period: "Apr 2021 - Jun 2023",
      description: "Developed production-ready mobile applications using Flutter framework.",
      tags: ["Flutter", "Dart", "Firebase", "State Management"]
    },
    {
      id: 4,
      title: "Web Developer",
      institution: "DT Peduli",
      period: "Jan 2020 - Jun 2023",
      description: "Built enterprise web applications using PHP CodeIgniter framework.",
      tags: ["PHP", "CodeIgniter", "MySQL", "jQuery"]
    },
    {
      id: 5,
      title: "Creative Designer",
      institution: "Freelance",
      period: "Jan 2019 - Jan 2020",
      description: "Provided photography, video editing and digital design services for various clients.",
      tags: ["Photoshop", "Sony Vegas Pro", "Corel Draw", "Digital Photography"]
    },
    {
      id: 6,
      title: "Web Developer",
      institution: "DIGITAL CABINET™",
      period: "Sep 2013 - May 2018",
      description: "Developed custom web solutions and information systems for business clients.",
      tags: ["PHP", "MySQL", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">Education & Work Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <FontAwesomeIcon 
                icon={faGraduationCap} 
                className="text-ubuntu-orange text-3xl mr-4" 
              />
              <h3 className="text-2xl font-bold text-white">Education & Beginnings</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item) => (
                <div key={`edu-${item.id}`} className="relative pl-8 border-l-2 border-ubuntu-orange/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-ubuntu-orange rounded-full"></div>
                  <div className="flex items-start">
                    {item.icon && (
                      <span className="text-ubuntu-orange mr-3 mt-1">
                        {item.icon}
                      </span>
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <p className="text-ubuntu-orange font-medium">{item.institution}</p>
                      <p className="text-ubuntu-grey text-sm mb-2">{item.period}</p>
                      <p className="text-ubuntu-grey mb-3">{item.description}</p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="bg-ubuntu-orange/20 text-ubuntu-orange px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Work Experience Section */}
          <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <FontAwesomeIcon 
                icon={faBriefcase} 
                className="text-ubuntu-orange text-3xl mr-4" 
              />
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((item) => (
                <div key={`work-${item.id}`} className="relative pl-8 border-l-2 border-ubuntu-orange/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-ubuntu-orange rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-ubuntu-orange font-medium">{item.institution}</p>
                  <p className="text-ubuntu-grey text-sm mb-2">{item.period}</p>
                  <p className="text-ubuntu-grey mb-3">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-ubuntu-orange/20 text-ubuntu-orange px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}