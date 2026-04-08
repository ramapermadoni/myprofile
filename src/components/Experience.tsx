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
      institution: "DT Peduli",
      period: "Jan 2019 - Jan 2020",
      description: "Provided photography, video editing and digital design services.",
      tags: ["Photoshop", "Sony Vegas Pro", "Corel Draw", "Digital Photography"]
    },
    {
      id: 6,
      title: "Volunteer & Freelancer",
      institution: "Daarut Tauhiid Foundation",
      period: "May 2018 - Jan 2019",
      description: "Served as a front office volunteer at Daarut Tauhiid Foundation, assisting with jamaah services, providing information, handling light administrative tasks, and ensuring a welcoming and organized environment for all visitors.",
      tags: ["Front Office", "Customer Service", "Administrative Support"]
    },
    {
      id: 7,
      title: "Web Developer",
      institution: "DIGITAL CABINET™",
      period: "Sep 2013 - May 2018",
      description: "Developed custom web solutions and information systems for business clients.",
      tags: ["PHP", "MySQL", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Experience & Education</h2>
          <div className="h-1.5 w-24 bg-apple-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="glass-card p-10 shadow-2xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center mb-10 pb-6 border-b border-border/50">
              <div className="bg-primary/10 p-4 rounded-2xl mr-5">
                <FontAwesomeIcon 
                  icon={faGraduationCap} 
                  className="text-primary text-3xl" 
                />
              </div>
              <h3 className="text-3xl font-bold">Academic Journey</h3>
            </div>
            
            <div className="space-y-12">
              {education.map((item) => (
                <div key={`edu-${item.id}`} className="relative pl-10 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                      <p className="text-primary font-bold text-lg mb-1">{item.institution}</p>
                      <p className="text-muted-foreground font-medium text-sm mb-4 bg-muted/50 w-fit px-3 py-1 rounded-full whitespace-nowrap">{item.period}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="bg-primary/5 text-primary/80 border border-primary/10 px-3 py-1 rounded-lg text-xs font-bold tracking-wide">
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
          <div className="glass-card p-10 shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
            <div className="flex items-center mb-10 pb-6 border-b border-border/50">
              <div className="bg-primary/10 p-4 rounded-2xl mr-5">
                <FontAwesomeIcon 
                  icon={faBriefcase} 
                  className="text-primary text-3xl" 
                />
              </div>
              <h3 className="text-3xl font-bold">Professional Paths</h3>
            </div>
            
            <div className="space-y-12">
              {workExperience.map((item) => (
                <div key={`work-${item.id}`} className="relative pl-10 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                  <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                  <p className="text-primary font-bold text-lg mb-1">{item.institution}</p>
                  <p className="text-muted-foreground font-medium text-sm mb-4 bg-muted/50 w-fit px-3 py-1 rounded-full whitespace-nowrap">{item.period}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-primary/5 text-primary/80 border border-primary/10 px-3 py-1 rounded-lg text-xs font-bold tracking-wide">
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