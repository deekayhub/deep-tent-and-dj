export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover filter brightness-50 contrast-125"
          alt="A cinematic, high-energy DJ set during a large-scale Indian wedding celebration. The stage is bathed in deep purple and vibrant indigo neon lights with gold accents reflecting off professional audio gear. A massive, joyful crowd is blurred in the foreground with hands raised under atmospheric smoke and beams of light. The visual style is premium and modern, emphasizing high-production value and a dynamic, festive atmosphere."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmuJPZJ_vpVWVIJ6l5gnERxd8_A3owSHphF4DJ-coYfZn3c0s88J0d4DbQ__MIkeGyQlu4yS9pqG4wbtgGkRY_lnalzChGuBESuo2-hQgJHRRP5q7OQfPHQmO03RrQ7e08SJuQ3Jm5HHCyoizqD8b5F7MOJbnEyiZlOEECNSsRrLhnZ2mkP9vxTWJneXa89QXCxBAheatfmVdPQ1w_1i-74T1bvZrkEPOHko4NFyaIJuFbk75zLp5XJdV3j8bKukQ8H3HXb1QuhcnT"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white tracking-tighter mb-6 drop-shadow-2xl">
          Sonic India DJ
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
          Professional DJ Sound for Every Celebration
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-[1.05] transition-all shadow-xl">
            Book Now
          </button>
          <button className="w-full md:w-auto glass-card text-white border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
