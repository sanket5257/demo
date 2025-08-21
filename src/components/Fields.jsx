export default function Fields() {
  const items = [
    { title: "Underwater Defence", desc: "Autonomous surveillance, threat detection and countermeasures." },
    { title: "AI & Autonomy", desc: "Real-time perception, control loops and mission planning." },
    { title: "Search & Rescue", desc: "Rapid deployment, comms relays and surface beacons." },
    { title: "Data & Analytics", desc: "Sonar fusion, bathymetry, and geospatial insights." },
  ];
  return (
    <section id="fields" className="relative py-20 bg-oceanGrad border-t border-borderdark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-heading">Four pillars of our work</h2>
        <p className="mt-3 max-w-2xl text-muted">Consistent patterns, minimal whitespace, and a deep-sea interface.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="ocean-card p-6 hover:bg-raised/90 transition-colors">
              <div className="size-10 rounded-lg bg-brand/20 border border-brandRing mb-4" />
              <h3 className="text-heading font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-body">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
