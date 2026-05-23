export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-20 border-t border-outline-variant/30 shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5)] bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-xl font-display font-semibold text-primary">
            Sonic India DJ
          </div>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Elevating Indian celebrations with premium audio excellence and
            cinematic stage productions. Over 10 years of professional sound
            service.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-on-surface font-bold mb-2">Quick Links</div>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-y-[-2px]" href="#">
            Instagram
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-y-[-2px]" href="#">
            WhatsApp
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-y-[-2px]" href="#">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-on-surface font-bold mb-2">Legal</div>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-y-[-2px]" href="#">
            Terms of Service
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm hover:translate-y-[-2px]" href="#">
            Privacy Policy
          </a>
          <div className="pt-4 font-body text-on-surface-variant text-sm">
            &copy; 2024 Sonic India DJ Sound Service. Premium Audio Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
