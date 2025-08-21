"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oceanGrad">
      {/* Background video */}
      <video
        className="absolute w-full h-full object-cover opacity-60"
        src="/videos/drone.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/ocean-poster.jpg"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-cyan-300/10 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepsea/30 to-deepsea" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-heading leading-tight"
        >
          GOFLOAT <br />
          TECHNOLOGIES <br />
          PVT. LTD.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-body max-w-3xl mx-auto"
        >
          Pioneering the future of underwater defense and surveillance systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto"
        >
          At GoFloat Technologies, <span className="text-brand">innovation meets reliability</span> in the most demanding aquatic environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="/products" className="ocean-button sonar-glow">
            Explore Our Products
          </a>
          <a href="/about" className="ocean-outline">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Decorative sonar rings */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full border border-brandRing/30 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[50rem] h-[50rem] rounded-full border border-brandRing/20 animate-pulse" />
    </section>
  );
}
