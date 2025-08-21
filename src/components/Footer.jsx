import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-borderdark">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 - Company */}
        <div>
          <h3 className="text-heading font-semibold text-lg mb-4">
            GOFLOAT TECHNOLOGIES
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Pioneering the future of underwater defense and surveillance systems.
          </p>
        </div>

        {/* Column 2 - Products */}
        <div>
          <h4 className="text-heading font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-brand transition">
                AUV Seeker
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-brand transition">
                Guardian Buoy
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-brand transition">
                SonarIQ Suite
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h4 className="text-heading font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-brand transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h4 className="text-heading font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-muted hover:text-brand transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted hover:text-brand transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted hover:text-brand transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@gofloat.com"
              className="text-muted hover:text-brand transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-borderdark">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} GOFLOAT TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a className="hover:text-brand transition" href="#">
              Privacy
            </a>
            <a className="hover:text-brand transition" href="#">
              Terms
            </a>
            <a className="hover:text-brand transition" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
