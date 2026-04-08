'use client';

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="h-1.5 w-20 bg-apple-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="glass-card p-10 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-1000">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-foreground/90 font-medium">
              Hi there! I&apos;m <span className="text-apple-gradient font-bold">Rama Permadoni</span>, a passionate programmer and tech explorer who thrives on solving complex problems 
              and discovering innovative solutions. With a friendly approach and genuine curiosity for technology, I enjoy 
              turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-apple-pink pl-6 py-2">
              My journey in tech is driven by continuous learning and the excitement of building products from zero to one. Apart from coding, I am also growing my own startup, <span className="text-foreground font-semibold">Bahagia Space</span>, where I combine technical skills with product management to solve real human problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}