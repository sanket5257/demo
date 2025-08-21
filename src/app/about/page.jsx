"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-40 bg-abyss border-t border-borderdark">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading">About Us</h2>
            <p className="mt-4 text-body leading-relaxed">
              GoFloat Tech is a dynamic defense startup specializing in advanced{" "}
              <span className="text-heading font-medium">underwater drone technology</span>, 
              flotation devices, and tracking systems. With a strong focus on innovation and 
              reliability, our team is dedicated to creating pioneering solutions that expand 
              the possibilities in underwater operations — including{" "}
              <span className="text-heading font-medium">defense, exploration, and environmental monitoring</span>.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              As a trusted manufacturer, GoFloat Tech also delivers{" "}
              <span className="text-heading font-medium">high-quality flotation and water safety equipment</span> 
              engineered for maximum durability and performance in demanding aquatic environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/Pralay 2/DJI_20250813150451_0336_D.JPG"
              alt="Underwater Drone"
              className="rounded-2xl shadow-lg border border-brandRing/20"
            />
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-2xl bg-brand/10 blur-2xl" />
          </motion.div>
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <img
              src="images/Pralay 1/1000052458.jpg"
              alt="Ocean Mission"
              className="rounded-2xl shadow-lg border border-brandRing/20"
            />
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-2xl bg-cyan-400/10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading">Our Mission</h2>
            <p className="mt-4 text-body leading-relaxed">
              Our mission is to propel{" "}
              <span className="text-heading font-medium">underwater technology</span> forward, 
              establishing new standards in{" "}
              <span className="text-heading font-medium">quality, durability, and functionality</span> 
              for aquatic equipment.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              At GoFloat Tech, we lead the charge in{" "}
              <span className="text-heading font-medium">aquatic innovation</span>, developing 
              advanced tools and solutions that elevate{" "}
              <span className="text-heading font-medium">operational efficiency, safety, and reliability</span> 
              across a range of challenging environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
