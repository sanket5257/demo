"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oceanGrad">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/videos/drone.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/ocean-poster.jpg"
      />
      <div className="absolute inset-0 bg-cyan-300/10 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepsea/20 to-deepsea" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.2em] text-info"
        >
          Pioneering Underwater Defence, AI & Life-Saving Systems
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-4xl md:text-6xl font-bold text-heading"
        >
          Building the next wave of <span className="text-brand">ocean-tech</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 text-lg md:text-xl text-body max-w-3xl mx-auto"
        >
          Advanced autonomous systems, sonar intelligence, and life-saving platforms engineered for the deep.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="/products" className="ocean-button sonar-glow">Discover Products</a>
          <a href="#fields" className="ocean-outline">Our Focus</a>
        </motion.div>
      </div>
      {/* Decorative sonar rings */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full border border-brandRing/30" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[50rem] h-[50rem] rounded-full border border-brandRing/20" />
    </section>
  );
}
