'use client';

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "/assets/images/avatar-2.jpg",
      name: "Alex Johnson",
      role: "Tech Lead",
      quote: "\"Rama's technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule with outstanding quality.\""
    },
    {
      avatar: "/assets/images/avatar-3.jpg",
      name: "Sarah Chen",
      role: "Product Manager",
      quote: "\"Working with Rama was a pleasure. His attention to detail and communication skills made our collaboration seamless and productive.\""
    },
    {
      avatar: "/assets/images/avatar-4.jpg",
      name: "Mike Rodriguez",
      role: "Startup Founder",
      quote: "\"Rama helped us build our MVP from scratch. His full-stack expertise and dedication were crucial to our success.\""
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What People Say</h2>
          <div className="h-1.5 w-24 bg-apple-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-10 shadow-2xl animate-in fade-in zoom-in duration-700" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center mb-8">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-5 ring-2 ring-primary/20"
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic text-lg">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}