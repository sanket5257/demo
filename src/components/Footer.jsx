import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-borderdark">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Column 1 - Company */}
        <div className="">
          <h3 className="text-heading font-semibold text-lg mb-4">
            GOFLOAT TECHNOLOGIES
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-sm">
            Pioneering the future of underwater defense and surveillance systems.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="">
          <h4 className="text-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-brand transition">Home</a></li>
            <li><a href="/product" className="hover:text-brand transition">Product</a></li>
            <li><a href="/about" className="hover:text-brand transition">About</a></li>
            <li><a href="#contact" className="hover:text-brand transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact & Social */}
        <div className="">
          <h4 className="text-heading font-semibold mb-3">Contact & Follow Us</h4>
          <div className="text-sm text-muted space-y-3 mb-5">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>
                6th Floor, Agnel Technical Complex,<br />
                Sector 9A, Vashi, Navi Mumbai,<br />
                Maharashtra 400703
              </span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand transition">
              <Phone className="w-4 h-4" />
              <a href="tel:+918433938384">+91 8433938384</a>
            </div>
            <div className="flex items-center gap-2 hover:text-brand transition">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@gofloat.tech">info@gofloat.tech</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-muted hover:text-brand transition"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted hover:text-brand transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted hover:text-brand transition"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:info@gofloat.com" className="text-muted hover:text-brand transition"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-borderdark">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted text-center sm:text-left">
            © {new Date().getFullYear()} GOFLOAT TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a className="hover:text-brand transition" href="#">Privacy</a>
            <a className="hover:text-brand transition" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
