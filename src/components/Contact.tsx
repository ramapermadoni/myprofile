'use client';

import { FontAwesomeIcon } from "@/components/FontAwesomeProviders";
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope as faEnvelopeSolid,
  faPhone as faPhoneSolid,
  faLocationDot as faLocationDotSolid
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-ubuntu-orange mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="ubuntu-card rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Your Message" 
                  className="w-full bg-ubuntu-dark border border-ubuntu-grey/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ubuntu-orange resize-none"
                ></textarea>
              </div>
              <button className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full">
                Send Message
              </button>
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
                <span className="text-ubuntu-grey">rama.permadoni@email.com</span>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faPhoneSolid} 
                  className="text-ubuntu-orange text-xl mr-4" 
                />
                <span className="text-ubuntu-grey">+62 123 456 789</span>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faLocationDotSolid} 
                  className="text-ubuntu-orange text-xl mr-4" 
                />
                <span className="text-ubuntu-grey">Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              
              <a href="#" className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              
              <a href="#" className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              
              <a href="#" className="bg-ubuntu-purple hover:bg-purple-700 text-white p-3 rounded-lg transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}