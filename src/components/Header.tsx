export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 px-6 py-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto rounded-xl mt-4 bg-background/80 backdrop-blur-md shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)] px-8 py-4">
        <div className="text-2xl font-display font-semibold tracking-tighter text-on-surface">
          Deep Event & DJ
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined p-2 text-on-surface hover:scale-[1.02] transition-transform">
            chat
          </button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:scale-[1.02] transition-transform active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)]">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}
