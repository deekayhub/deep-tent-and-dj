const services = [
  {
    icon: "speaker_group",
    title: "DJ Sound Setup",
    description:
      "Professional high-fidelity JBL & RCF sound systems tailored for the venue size.",
    color: "text-primary",
  },
  {
    icon: "lightbulb",
    title: "Lighting",
    description:
      "Intelligent beam lights, LED washes, and architectural lighting for the perfect mood.",
    color: "text-tertiary",
  },
  {
    icon: "celebration",
    title: "Wedding Entry",
    description:
      "Grand entrance setups with personalized soundtracks and visual synchronized cues.",
    color: "text-primary",
  },
  {
    icon: "cloud",
    title: "Smoke & Cold Pyro",
    description:
      "Safe cold sparklers and heavy fog machines for a cinematic dance floor feel.",
    color: "text-tertiary",
  },
  {
    icon: "music_note",
    title: "Live Dhol",
    description:
      "Energetic traditional Dhol players to elevate the Baarat and Sangeet energy.",
    color: "text-primary",
  },
  {
    icon: "layers",
    title: "Stage Setup",
    description:
      "Modern trussing, LED walls, and modular stages for a grand visual impact.",
    color: "text-tertiary",
  },
  {
    icon: "cake",
    title: "Birthday DJ",
    description:
      "High-energy music and games management for private birthday celebrations.",
    color: "text-primary",
  },
  {
    icon: "park",
    title: "Outdoor Events",
    description:
      "Weather-proof sound solutions for poolside parties and garden weddings.",
    color: "text-tertiary",
  },
];

export default function Services() {
  return (
    <section
      className="py-24 px-6 bg-surface-container-lowest/50"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold mb-4">
            Our Services
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Everything you need to make your event a technical and musical
            triumph.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-3xl hover:scale-[1.02] transition-all group border-primary/10"
            >
              <span
                className={`material-symbols-outlined text-4xl ${service.color} mb-6 block`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
