import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "../../components/ConntactForm";

export default function ContactPage() {
  return (
    <main className="pt-56 pb-20 bg-oceanGrad min-h-screen">
      <div className="max-w-7xl mx-auto px-6 ">
        
      
        <div className="bg-raised/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-brandRing/20">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
