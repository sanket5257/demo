"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";
import Footer from "../../components/Footer";

// --- Category Data ---
const PRODUCT_CATEGORIES = [
  {
    title: "GoFloat Defence",
    products: [
      {
        name: "Autonomous Underwater Drone - Pralay 1",
        image: "/images/Pralay 1/1000052458.jpg",
        summary: "AI-based ship detection and stealth surveillance.",
        description:
          "Pralay 1 is designed for stealth surveillance, virtual anchoring, and advanced navigation. It leverages AI for ship detection and underwater monitoring.",
        highlights: [
          "AI-based ship detection",
          "Stealth surveillance",
          "Virtual anchoring",
          "Advanced navigation",
        ],
      },
      {
        name: "Drone Catcher - Net Thrower",
        image: "/images/Drone Catcher/drone-catcher.png",
        summary: "Modular net-throwing drone countermeasure.",
        description:
          "A modular net-throwing countermeasure system with 10m range, portable design, and reusability for tactical defence.",
        highlights: ["10m range", "Portable design", "Reusable cartridges", "Non-lethal"],
      },
      {
        name: "GT Airborne RGES",
        image: "/images/RGES/Untitled design.png",
        summary: "Aerial system to entangle vessel propulsion.",
        description:
          "RGES provides a 30m aerial system for entangling vessel propulsion. Corrosion-resistant, non-lethal, and field tested.",
        highlights: ["30m range", "Corrosion-resistant", "Non-lethal", "Lightweight frame"],
      },
    ],
  },
  {
    title: "GoFloat LSA",
    products: [
      {
        name: "Guardian Buoy S",
        image: "/images/product-buoy.jpg",
        summary: "Smart surface buoy for SAR and comms relay.",
        description:
          "Guardian Buoy S acts as a rapid-deploy rescue node, offering mesh relays and distress localization for large incident areas.",
        highlights: [
          "AIS + LTE/5G relay",
          "Solar trickle charging",
          "Acoustic modem bridge",
          "Strobe & beacon suite",
        ],
      },
      {
        name: "Inflatable Life Vest",
        image: "/images/product-vest.jpg",
        summary: "Durable life vest engineered for rescue ops.",
        description:
          "High-buoyancy inflatable life vest designed for both civilian and defense aquatic rescue scenarios.",
        highlights: ["High buoyancy", "Compact design", "Durable material", "Quick inflation"],
      },
    ],
  },
  {
    title: "GoFloat Tech Suite",
    products: [
      {
        name: "SonarIQ Suite",
        image: "/images/product-sonar.jpg",
        summary: "Realtime signal processing & threat detection AI.",
        description:
          "SonarIQ accelerates detection and classification with GPU-accelerated models tuned for littoral and deep-sea environments.",
        highlights: [
          "On-edge inference",
          "Dataset tooling & labeling",
          "Operator UX with heatmaps",
          "Open plugin SDK",
        ],
      },
      {
        name: "AUV-Seeker X1",
        image: "/images/product-auv.jpg",
        summary: "Autonomous underwater vehicle for recon and mapping.",
        description:
          "Seeker X1 delivers long-endurance autonomous reconnaissance with adaptive mission planning and sonar fusion for high-fidelity mapping.",
        highlights: [
          "24h endurance · 200m depth",
          "Multi-beam sonar + INS",
          "Swarm/co-op capable",
          "Hot-swap battery pods",
        ],
      },
    ],
  },
];

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (p) => {
    setActive(p);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-oceanGrad min-h-screen">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {PRODUCT_CATEGORIES.map((cat) => (
            <section key={cat.title}>
              <h2 className="text-2xl md:text-3xl font-semibold text-heading">
                {cat.title}
              </h2>
              <p className="mt-2 text-muted">
                Hover to elevate, click to learn more. Modal centers with translucent backdrop.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.products.map((p) => (
                  <ProductCard key={p.name} product={p} onOpen={onOpen} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <ProductModal open={open} onClose={onClose} product={active} />
    </>
  );
}
