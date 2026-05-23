export default function Contact() {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-extrabold mb-6">
              Get in Touch
            </h2>
            <p className="text-on-surface-variant mb-12">
              Let&apos;s discuss how we can make your celebration legendary. Our
              team is available 24/7 for inquiries.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="neomorph-raised p-4 rounded-2xl bg-background">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    phone
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    Call Us
                  </div>
                  <div className="text-xl font-bold">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="neomorph-raised p-4 rounded-2xl bg-background">
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    mail
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    Email Us
                  </div>
                  <div className="text-xl font-bold">info@sonicindiadj.com</div>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button className="neomorph-raised p-4 rounded-2xl bg-background text-primary hover:scale-[1.1] transition-transform">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button className="neomorph-raised p-4 rounded-2xl bg-background text-[#25D366] hover:scale-[1.1] transition-transform">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.186 1.564 5.94l-1.664 6.06 6.19-1.625c1.728.944 3.712 1.485 5.82 1.485 6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.31 16.593c-.26.732-1.52 1.341-2.095 1.432-.505.08-1.15.114-3.238-.755-2.67-1.115-4.394-3.832-4.528-4.01-.133-.178-1.085-1.441-1.085-2.75 0-1.31.685-1.954.928-2.221.242-.267.531-.334.708-.334.178 0 .355.001.51.01.168.01.393-.064.615.474.223.538.761 1.854.827 1.987.067.134.112.29.022.467-.09.178-.134.29-.267.445-.133.155-.28.347-.4.496-.134.167-.278.349-.12.622.158.273.7 1.144 1.5 1.857.917.817 1.69 1.072 1.933 1.193.243.12.385.101.528-.065.143-.166.611-.711.776-.955.166-.244.333-.206.555-.122.223.084 1.411.666 1.655.788.243.123.405.183.465.284.06.1.06.578-.2.986z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="neomorph-raised p-8 rounded-3xl bg-background">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-2">
                    Name
                  </label>
                  <input
                    className="w-full neomorph-inset bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-2">
                    Event Date
                  </label>
                  <input
                    className="w-full neomorph-inset bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20"
                    type="date"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-2">
                  Phone
                </label>
                <input
                  className="w-full neomorph-inset bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20"
                  placeholder="+91 00000 00000"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-2">
                  Message
                </label>
                <textarea
                  className="w-full neomorph-inset bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your event..."
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg hover:translate-y-[-2px] transition-transform"
                type="submit"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
        {/* Map Placeholder */}
        <div className="mt-20 neomorph-raised rounded-3xl overflow-hidden h-[400px]">
          <div className="w-full h-full bg-surface-container flex items-center justify-center relative">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-20">
              map
            </span>
            <div className="absolute bottom-6 left-6 glass-card px-6 py-3 rounded-xl border-white/20">
              <div className="font-bold">Main Office</div>
              <div className="text-sm text-on-surface-variant">
                Model Town, Ludhiana, Punjab
              </div>
            </div>
            <div className="w-full h-full opacity-50 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
