"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("❌ Failed to send. Try again later.");
    }
  }

  return (
    <section className="relative min-h-screen bg-oceanGrad py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Contact Info */}
        <div className="text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-heading drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-lg text-muted max-w-md">
            Have a question or want to collaborate?  
            We’d love to hear from you. Reach out using the form or details below.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-brand" />
              <span>6th Floor, Agnel Technical Complex, Vashi, Navi Mumbai</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-brand" />
              <a href="tel:+918237464373" className="hover:text-brand transition">
                +91 82374 64373
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-brand" />
              <a href="mailto:info@gofloat.tech" className="hover:text-brand transition">
                info@gofloat.tech
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-raised/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-brandRing/20">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-surface/80 border border-borderdark focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-surface/80 border border-borderdark focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md bg-surface/80 border border-borderdark focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button type="submit" className="ocean-button w-full">
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm mt-2">{status}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
