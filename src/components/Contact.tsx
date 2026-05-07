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
        <div className="text-center mb-12">
          <span className="inline-block glass-pill-neutral rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase mb-4">
            Reach Out
          </span>
          <h2 className="text-4xl font-bold text-ubuntu-orange tracking-tight">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="ubuntu-card rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="glass-input w-full rounded-xl px-4 py-3"
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
                  className="glass-input w-full rounded-xl px-4 py-3"
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
                  className="glass-input w-full rounded-xl px-4 py-3 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full disabled:opacity-50 hover-lift"
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
          <div className="ubuntu-card rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Connect With Me</h3>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-center">
                <div className="glass-icon-tile rounded-xl p-2.5 mr-4 inline-flex items-center justify-center w-10 h-10">
                  <FontAwesomeIcon
                    icon={faEnvelopeSolid}
                    className="text-ubuntu-orange"
                  />
                </div>
                <a href="mailto:ramaprogramming@gmail.com" className="text-ubuntu-grey hover:text-ubuntu-orange transition-colors">
                  ramaprogramming@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <div className="glass-icon-tile rounded-xl p-2.5 mr-4 inline-flex items-center justify-center w-10 h-10">
                  <FontAwesomeIcon
                    icon={faPhoneSolid}
                    className="text-ubuntu-orange"
                  />
                </div>
                <a href="tel:+6282217776630" className="text-ubuntu-grey hover:text-ubuntu-orange transition-colors">
                  +62 822 1777 6630
                </a>
              </div>

              <div className="flex items-center">
                <div className="glass-icon-tile rounded-xl p-2.5 mr-4 inline-flex items-center justify-center w-10 h-10">
                  <FontAwesomeIcon
                    icon={faLocationDotSolid}
                    className="text-ubuntu-orange"
                  />
                </div>
                <span className="text-ubuntu-grey">Bandung, Indonesia</span>
              </div>
            </div>

            <div className="flex space-x-3 relative z-10">
              <a
                href="https://github.com/ramapermadoni"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white w-11 h-11 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://linkedin.com/in/rama-permadoni-247416154"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white w-11 h-11 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://instagram.com/ramapermadoni"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ubuntu-purple hover:bg-purple-700 text-white w-11 h-11 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center"
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