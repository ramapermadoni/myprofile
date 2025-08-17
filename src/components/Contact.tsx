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
      // Replace with your form submission logic
      // This example uses Formspree.io (free service)
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange"
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
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange"
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
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`text-center ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faEnvelopeSolid} 
                  className="text-ubuntu-orange text-xl mr-4" 
                />
                <a href="mailto:ramaprogramming@gmail.com" className="text-ubuntu-grey hover:text-ubuntu-orange transition-colors">
                  ramaprogramming@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faPhoneSolid} 
                  className="text-ubuntu-orange text-xl mr-4" 
                />
                <a href="tel:+6282217776630" className="text-ubuntu-grey hover:text-ubuntu-orange transition-colors">
                  +62 822 1777 6630
                </a>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faLocationDotSolid} 
                  className="text-ubuntu-orange text-xl mr-4" 
                />
                <span className="text-ubuntu-grey">Bandung, Indonesia</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://github.com/ramapermadoni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              
              <a 
                href="https://linkedin.com/in/rama-permadoni-247416154" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              
              <a 
                href="https://instagram.com/ramapermadoni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}