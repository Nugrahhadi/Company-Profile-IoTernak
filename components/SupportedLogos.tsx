import Image from "next/image";

export default function SupportedLogos() {
  const logos = [
    { name: "Belmawa", src: "/images/supported/belmawa.png" },
    { name: "DIKTI", src: "/images/supported/dikti.png" },
    { name: "P2MW", src: "/images/supported/p2mw.png" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#0a230d] to-[#041206]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#02B919_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Didukung Oleh
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-md mx-auto font-light">
            Program Resmi & Mitra Kelembagaan Terpercaya Kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative group flex items-center justify-center p-6 h-28 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.07] hover:border-secondary/30 hover:shadow-[0_0_30px_-5px_rgba(2,185,25,0.2)] hover:-translate-y-1"
            >
              {/* Internal glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-[200px] object-contain opacity-75 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern bottom border/divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

