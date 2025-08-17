'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">About Me</h2>
        <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
          <p className="text-lg leading-relaxed mb-6">
            Hi there! I&apos;m Rama Permadoni, a passionate programmer and tech explorer who thrives on solving complex problems 
            and discovering innovative solutions. With a friendly approach and genuine curiosity for technology, I enjoy 
            turning ideas into reality through clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech is driven by continuous learning and the excitement of exploring new frameworks, languages, 
            and methodologies. I believe that great software comes from understanding both the technical challenges and 
            the human needs behind every project.
          </p>
        </div>
      </div>
    </section>
  );
}