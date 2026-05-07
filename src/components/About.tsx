'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            About
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange tracking-tight">About Me</h2>
        </div>
        <div className="ubuntu-card rounded-3xl p-10 md:p-12 shadow-xl">
          <p className="text-lg leading-relaxed mb-6 relative z-10">
            Hi there! I&apos;m Rama Permadoni, a passionate programmer and tech explorer who thrives on solving complex problems
            and discovering innovative solutions. With a friendly approach and genuine curiosity for technology, I enjoy
            turning ideas into reality through clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed relative z-10">
            My journey in tech is driven by continuous learning and the excitement of building products from zero to one. Apart from coding, I am also growing my own startup, Bahagia Space, where I combine technical skills with product management to solve real human problems.
          </p>
        </div>
      </div>
    </section>
  );
}