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
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">What People Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="ubuntu-card rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-ubuntu-grey">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-ubuntu-grey">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}