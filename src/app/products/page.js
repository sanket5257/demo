"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";
import Footer from "../../components/Footer";

const PRODUCTS = [
  {
    name: "AUV-Seeker X1",
    image: "/images/product-auv.jpg",
    summary: "Autonomous underwater vehicle for recon and mapping.",
    description: "Seeker X1 delivers long-endurance autonomous reconnaissance with adaptive mission planning and sonar fusion for high-fidelity mapping.",
    highlights: [
      "24h endurance · 200m depth",
      "Multi-beam sonar + INS",
      "Swarm/co-op capable",
      "Hot-swap battery pods",
    ],
  },
  {
    name: "Guardian Buoy S",
    image: "/images/product-buoy.jpg",
    summary: "Smart surface buoy for SAR and comms relay.",
    description: "Guardian Buoy S acts as a rapid-deploy rescue node, offering mesh relays and distress localization for large incident areas.",
    highlights: [
      "AIS + LTE/5G relay",
      "Solar trickle charging",
      "Acoustic modem bridge",
      "Strobe & beacon suite",
    ],
  },
  {
    name: "SonarIQ Suite",
    image: "/images/product-sonar.jpg",
    summary: "Realtime signal processing & threat detection AI.",
    description: "SonarIQ accelerates detection and classification with GPU-accelerated models tuned for littoral and deep-sea environments.",
    highlights: [
      "On-edge inference",
      "Dataset tooling & labeling",
      "Operator UX with heatmaps",
      "Open plugin SDK",
    ],
  },
];

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (p) => { setActive(p); setOpen(true); };
  const onClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-oceanGrad min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-heading">Products</h1>
          <p className="mt-2 text-muted">Hover to elevate, click to learn more. Modal centers with translucent backdrop.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} product={p} onOpen={onOpen} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ProductModal open={open} onClose={onClose} product={active} />
    </>
  );
}
