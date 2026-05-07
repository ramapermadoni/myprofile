'use client';

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faDownload, faHandshake, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const handleDownloadCV = () => {
    // Create a temporary anchor tag
    const link = document.createElement('a');
    link.href = '/CV_Rama_Permadoni.pdf'; // Path to your CV in public folder
    link.download = 'Rama_Permadoni_CV.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-[800px] flex items-center justify-center px-4 mt-16 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ubuntu-orange animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-ubuntu-orange">Programmer</span> &<br />
            <span className="text-white">Tech Explorer</span>
          </h1>
          <p className="text-xl text-ubuntu-grey mb-8 leading-relaxed">
            Passionate about crafting elegant solutions and exploring cutting-edge technologies.
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all hover-lift inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" />
              Download CV
            </button>
            <Link
              href="#contact"
              className="bg-ubuntu-purple hover:bg-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all hover-lift text-center inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 mr-2" />
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            {/* soft refractive halo */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-ubuntu-orange/40 via-purple-500/25 to-blue-500/30 blur-2xl opacity-70 pointer-events-none" />
            <div className="avatar-glass-ring relative">
              <Image
                className="w-80 h-80 rounded-full block"
                src="/assets/images/avatar.jpeg"
                alt="professional programmer avatar illustration, dark theme, ubuntu style, tech explorer"
                width={320}
                height={320}
                loading="lazy"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 glass-icon-bubble rounded-2xl p-4">
              <FontAwesomeIcon icon={faCode} className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}