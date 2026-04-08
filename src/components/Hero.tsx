'use client';

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faDownload, faHandshake, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Rama_Permadoni_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-semibold text-primary/80 tracking-wide uppercase">
            Tech Explorer & Innovator
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-apple-gradient">Programmer</span><br />
            <span className="text-foreground">at Heart.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
            Passionate about crafting elegant solutions and exploring cutting-edge technologies. 
            Transforming complex ideas into seamless digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button 
              onClick={handleDownloadCV}
              className="btn-apple-primary flex items-center justify-center shadow-lg hover:shadow-primary/20"
            >
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" />
              Download CV
            </button>
            <Link 
              href="#contact" 
              className="btn-apple-secondary flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 mr-2" />
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-apple-blue via-apple-purple to-apple-pink rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative p-2 glass rounded-full ring-1 ring-border/50">
              <Image 
                className="w-80 h-80 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                src="/assets/images/avatar.jpeg" 
                alt="professional programmer avatar" 
                width={320} 
                height={320} 
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 glass rounded-2xl p-4 shadow-2xl ring-1 ring-border animate-bounce">
              <FontAwesomeIcon icon={faCode} className="text-primary text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}