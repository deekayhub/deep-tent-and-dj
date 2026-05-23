const images = [
  {
    alt: "A wide-angle shot of a luxurious Indian wedding dance floor under high-key indigo and purple lighting. The floor is packed with energetic guests dancing amidst professional smoke effects and beams of light. The ceiling features elegant crystal chandeliers. The overall atmosphere is premium, joyous, and vibrant, showcasing a successful event production.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgsf0XQNvVV-k0TfzQ_0ECXv5acvSfrXVn63Ib3JkyKs26KcznUre4CIVRjdddgYmSSwi-OcA9wWj6SK6huLQx2KYAs40BxMdYYD3G9t7WpAmN4mZJ84MfDs0beFcaQmvr0tCcU-YIXoESCOObW0yR5cvXyNeLG8WxNss1QpJ2Bivz01RKZBzbgyBtwxwXRH77JF0q1yJKeVhVuq10y6yAE_D9NYytQC7djM37S66pI4rEqXpHGhf35TWZ3mdGHM1Y2w0mG7KSqTPb",
  },
  {
    alt: "A focused shot of a high-tech DJ console with vibrant violet and gold lighting reflections. In the background, the soft blur of a grand wedding stage setup can be seen. The lighting is sophisticated and moody, emphasizing the premium quality of the audio-visual technology. The image captures the anticipation and professionalism of a live DJ performance.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5Dju708FfcvjS6-TM3oYEGah4vpFmHRU6ZkTf3AVCOVjCZ3A8Ogi6WrLh6-oS_Sz3M2XDjukZVEtdnHglEUpQd-fUfxx2FuFMXhCkaPanYjYMejIwn7-FU6yOe0CgB4bDXW47bRYK9jml0V8hSAECC8zfjzQlMj8OM-tcZvphFTxvCXiyHYQm0Oe7qBFvk4munLM0vdsn1hzgveC1epoI1ErT9CuUiwlM9IOc5EEr_xA5tmBU1K40v63gKZr8yHDGTUAHjJWc96u",
  },
  {
    alt: "A dramatic shot of the outdoor entry of a wedding venue featuring massive professional lighting towers emitting sharp beams of blue and white light into the night sky. The pathway is lined with gold-toned decorations. The scene conveys a sense of grandeur and professional event management on a large scale.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnjzHL505Kf71rVI1HA_L_POW07bmI6ZjCgLUnYEh7UHPk3Oyjzx3oNgMBaqAgdzTv5Fp25ImhlqGz-u7IvArym4BngloJT0IfIa32tvs697JpIpscJlyDpqDAoQ6jcccLUL-8Z8xqy_SC3KGR1mWZ0nDBl0xZdjQqscwTdQeRxzn_Kkj1HPQBQ5zOWP38zsv2p_ddmbK3Uma6pxR3M8kjbY48T0z0GuaB1xb3RVt6nBkalsUCHLyh-Lx7q_o5cSl5SHq_PXJYPd20",
  },
  {
    alt: "An intimate shot of a couple&apos;s first dance on a wedding stage, surrounded by heavy low-lying fog and glowing cold pyro sparklers. The lighting is romantic with soft pink and violet hues. The focus is on the magical atmosphere created by professional stage effects, providing a cinematic experience for the couple and guests.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Rop8XoTt2rHWZdyG_UonvDT_7_0BbQcfDSDu0Bg0hOH6PHO3C3YZ4mqc_XB5gk_CbB6hk-Jk_HhK595evTmiA7Zqa2zmRjdnEY8tkaSgwAuyxyBs8NoDr6bH-HC-FH_X2XoedxVSeEI7ulPQXHlRaWwCgaLYlZje8IkbjBur5bELKp5DFeaFZWePzmjIuLTlWfBSktRw3a3QSA_ZeblXzDqQN0UiBX3zCAc5xgQsrH5MoXtO0WIUSbYnBuQdbGVu4j7ZFFAC4jhi",
  },
  {
    alt: "A high-energy shot of traditional Indian dhol players wearing colorful vests, performing on a brightly lit dance floor. The background features a large LED screen showing abstract vibrant patterns. The mood is celebratory and culturally rich, blending traditional music with modern event technology. The lighting is high-contrast and vivid.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANa7bvy4yf5BV9euMtoGP7duK2AZrG81Ek7LTB9gxK1OstS9e9yCUBkXLBLlz3WugSYoP8ui362MqXj6CnZHZ5WdGdYBuWOQnurbb3Pclu40bd_bOT8sreN1GH-Pdq5GjEwg43vnNtpg7kS3XxjI1fbyg42zeISr208jSlHCvsqRZ1n8vxfYDEv8bpJLFYdIDeZLIEePHL9A3oBjPanWx_EUOZz2WGDlVTixP7ufmVN7QZdZybW5eYrRJW3JOof5kMNmSXufsp5jOf",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-extrabold mb-4">
              Event Gallery
            </h2>
            <p className="text-on-surface-variant">
              Visual snapshots of our recent masterpieces.
            </p>
          </div>
          <button className="neomorph-raised px-6 py-3 rounded-xl font-semibold hover:text-primary transition-colors">
            See More
          </button>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, i) => (
            <div
              key={i}
              className="neomorph-raised p-3 rounded-2xl break-inside-avoid hover:scale-[1.03] transition-all"
            >
              <img className="rounded-xl w-full" alt={image.alt} src={image.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
