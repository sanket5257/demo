"use client";
import { motion } from "framer-motion";
import { FishSymbol, Activity, Search, BarChart } from "lucide-react";

export default function Fields() {
  const items = [
    {
      title: "Underwater Robotics for Defence",
      desc: "Autonomous surveillance, threat detection and countermeasures.",
      icon: <FishSymbol className="size-10 text-brand" />,
    },
    {
      title: "AI & Autonomy",
      desc: "Real-time perception, control loops and mission planning.",
      icon: <Activity className="size-10 text-brand" />,
    },
    {
      title: "Search & Rescue",
      desc: "Rapid deployment, comms relays and surface beacons.",
      icon: <Search className="size-10 text-brand" />,
    },
    {
      title: "Data & Analytics",
      desc: "Sonar fusion, bathymetry, and geospatial insights.",
      icon: <BarChart className="size-10 text-brand" />,
    },
  ];

  // Variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="fields"
      className="relative py-20 bg-oceanGrad border-t border-borderdark"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-heading"
        >
          Four pillars of our work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 max-w-2xl text-muted"
        >
          Consistent patterns, minimal whitespace, and a deep-sea interface.
        </motion.p>

        {/* Animated Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={card}
              whileHover={{ y: -6, scale: 1.03 }}
              className="ocean-card p-6 transition-all cursor-pointer"
            >
              <div className="size-10 rounded-lg border border-brandRing mb-4 flex items-center justify-center text-brand">
                {it.icon}
              </div>
              <h3 className="text-heading font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-body">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
