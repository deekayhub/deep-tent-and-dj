const testimonials = [
  {
    quote:
      "The sound quality at my sister's wedding was incredible. The transition from traditional music to DJ set was seamless. Highly recommended for weddings!",
    name: "Rajesh Malhotra",
    subtitle: "Wedding Event in Jaipur",
  },
  {
    quote:
      "Sonic India DJ handled the lighting and sound for our corporate gala. The professional attitude and top-tier equipment made a huge difference.",
    name: "Neha Sharma",
    subtitle: "Corporate Event, Delhi",
  },
  {
    quote:
      "From the cold pyro entry to the late-night dancing, everything was perfect. They really know how to keep the crowd engaged.",
    name: "Amit Singh",
    subtitle: "Sangeet Party, Mumbai",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold mb-4">
            Client Feedback
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            The rhythm of our success lies in the happiness of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="neomorph-raised p-10 bg-background rounded-3xl relative"
            >
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">
                format_quote
              </span>
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface font-medium italic mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-bold text-lg">{t.name}</div>
              <div className="text-on-surface-variant text-sm">
                {t.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
