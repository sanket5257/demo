import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-56 pb-20 bg-oceanGrad min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-heading drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-4 text-muted max-w-md text-lg">
              Reach out for collaborations, product inquiries, or support.  
              We’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-5 text-body">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-brand" />
              <a href="mailto:info@gofloat.tech" className="hover:text-brand transition">
                info@gofloat.tech
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-brand" />
              <a href="tel:+918237464373" className="hover:text-brand transition">
                +91 82374 64373
              </a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand flex-shrink-0" />
              <span>
                6th Floor, Agnel Technical Complex,  
                Vashi, Navi Mumbai, Maharashtra 400703
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-raised/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-brandRing/20">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
