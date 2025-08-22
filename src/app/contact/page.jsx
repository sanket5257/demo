"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-24 bg-oceanGrad min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-heading">Get in Touch</h1>
          <p className="text-muted max-w-md">
            We'd love to hear from you. Whether you’re curious about our 
            solutions, want to partner with us, or just have a question—let’s talk.
          </p>

          <div className="space-y-4 text-sm text-muted">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand" />
              <span>
                6th Floor, Agnel Technical Complex,<br />
                Sector 9A, Vashi, Navi Mumbai,<br />
                Maharashtra 400703
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand" />
              <a href="tel:+918237464373" className="hover:text-brand transition">
                +91 82374 64373
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand" />
              <a href="mailto:info@gofloat.tech" className="hover:text-brand transition">
                info@gofloat.tech
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="text-muted hover:text-brand transition"><Github /></a>
            <a href="#" className="text-muted hover:text-brand transition"><Twitter /></a>
            <a href="#" className="text-muted hover:text-brand transition"><Linkedin /></a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          action="https://formspree.io/f/mayvlqdo"  // Replace with your Formspree endpoint
          method="POST"
          className="ocean-card p-8 space-y-6 shadow-glow"
        >
          <h2 className="text-2xl font-semibold text-heading">Send us a Message</h2>
          
          <div>
            <label className="block text-sm mb-1 text-muted">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-surface border border-borderdark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-muted">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-surface border border-borderdark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-muted">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-surface border border-borderdark focus:border-brand focus:ring-1 focus:ring-brand outline-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="ocean-button sonar-glow w-full"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
