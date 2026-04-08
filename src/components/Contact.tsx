'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { 
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope as faEnvelopeSolid,
  faPhone as faPhoneSolid,
  faLocationDot as faLocationDotSolid
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgvzbzgp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <div className="h-1.5 w-24 bg-apple-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-[2rem] p-10 shadow-2xl animate-in fade-in slide-in-from-left duration-1000">
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full glass bg-muted/30 border-none rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full glass bg-muted/30 border-none rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  className="w-full glass bg-muted/30 border-none rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-apple-primary w-full disabled:opacity-50 shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`text-center font-bold animate-in fade-in duration-300 ${submitMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="glass-card rounded-[2rem] p-10 shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
            <h3 className="text-2xl font-bold mb-10 tracking-tight">Connect With Me</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center group cursor-default">
                <div className="bg-primary/10 p-4 rounded-2xl mr-5 group-hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faEnvelopeSolid} className="text-primary text-xl" />
                </div>
                <a href="mailto:ramaprogramming@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-all font-medium">
                  ramaprogramming@gmail.com
                </a>
              </div>
              
              <div className="flex items-center group cursor-default">
                <div className="bg-primary/10 p-4 rounded-2xl mr-5 group-hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faPhoneSolid} className="text-primary text-xl" />
                </div>
                <a href="tel:+6282217776630" className="text-lg text-muted-foreground hover:text-primary transition-all font-medium">
                  +62 822 1777 6630
                </a>
              </div>
              
              <div className="flex items-center group cursor-default">
                <div className="bg-primary/10 p-4 rounded-2xl mr-5 group-hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faLocationDotSolid} className="text-primary text-xl" />
                </div>
                <span className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors">Bandung, Indonesia</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: faGithub, url: "https://github.com/ramapermadoni", label: "GitHub" },
                { icon: faLinkedin, url: "https://linkedin.com/in/rama-permadoni-247416154", label: "LinkedIn" },
                { icon: faInstagram, url: "https://instagram.com/ramapermadoni", label: "Instagram" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-lg hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}