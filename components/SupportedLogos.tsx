import Image from "next/image";

export default function SupportedLogos() {
  const logos = [
    { name: "Dikti Saintek", src: "/images/supported/diktisaintek-berdampak.webp" },
    { name: "Belmawa", src: "/images/supported/belmawa.webp" },
    { name: "P2MW", src: "/images/supported/p2mw.webp" },
    { name: "CV Jenderal Solusi Digital", src: "/images/supported/CV-Jenderal.webp" },
    { name: "PT Archipelago Media Komunikasi", src: "/images/supported/PT-Archipelago.webp" },
    { name: "Toko Pinjam", src: "/images/supported/toko-pinjam.webp" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-green-300/15 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="text-center mb-5">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-5">
            Didukung Oleh
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Program Resmi & Mitra Kelembagaan Terpercaya Kami
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

              <div className="relative flex items-center justify-center p-6 h-36 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-lg transition-all duration-500 group-hover:border-green-400 group-hover:shadow-2xl group-hover:shadow-green-500/25 group-hover:-translate-y-4 group-hover:scale-105">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/50 transition-all duration-500" />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`max-h-full object-contain transition-all duration-500 filter drop-shadow-md group-hover:drop-shadow-xl ${logo.name === "PT Archipelago Media Komunikasi" ? "max-w-[130px] scale-150" : logo.name === "CV Jenderal Solusi Digital" ? "max-w-[100px] scale-110" : "max-w-[100px]"}`}
                  />
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

