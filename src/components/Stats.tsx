export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="neomorph-raised p-8 rounded-2xl text-center bg-background group hover:translate-y-[-4px] transition-transform">
          <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
          <div className="text-on-surface-variant font-semibold uppercase tracking-widest text-xs">
            Events Completed
          </div>
        </div>
        <div className="neomorph-raised p-8 rounded-2xl text-center bg-background group hover:translate-y-[-4px] transition-transform">
          <div className="text-4xl font-extrabold text-tertiary mb-2">10+</div>
          <div className="text-on-surface-variant font-semibold uppercase tracking-widest text-xs">
            Years Experience
          </div>
        </div>
        <div className="neomorph-raised p-8 rounded-2xl text-center bg-background group hover:translate-y-[-4px] transition-transform">
          <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
          <div className="text-on-surface-variant font-semibold uppercase tracking-widest text-xs">
            Happy Clients
          </div>
        </div>
      </div>
    </section>
  );
}
