'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { faDownload, faHandshake, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id="hero" className="h-[800px] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-ubuntu-orange">Programmer</span> &<br />
            <span className="text-white">Tech Explorer</span>
          </h1>
          <p className="text-xl text-ubuntu-grey mb-8 leading-relaxed">
            Passionate about crafting elegant solutions and exploring cutting-edge technologies. 
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift">
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" />
              Download CV
            </button>
            <button className="bg-ubuntu-purple hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift">
              <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 mr-2" />
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image 
              className="w-80 h-80 rounded-full border-4 border-ubuntu-orange shadow-2xl" 
              src="/assets/images/avatar.png" 
              alt="professional programmer avatar illustration, dark theme, ubuntu style, tech explorer" 
              width={320} 
              height={320} 
              loading="lazy" 
              priority={false} 
            />
            <div className="absolute -bottom-4 -right-4 bg-ubuntu-orange rounded-full p-4 shadow-lg">
              <FontAwesomeIcon icon={faCode} className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}