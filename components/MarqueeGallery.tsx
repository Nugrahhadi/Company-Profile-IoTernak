"use client";

const galleryPhotos = [
  {
    src: "/images/product/IoPakan/ioPakan-AyamBangkok.webp",
    alt: "ioPakan di Kandang",
    title: "ioPakan",
    desc: "Sistem Pakan Otomatis Ayam",
  },
  {
    src: "/images/product/IoPakan/ioPakan-Produk.webp",
    alt: "Produk ioPakan",
    title: "ioPakan",
    desc: "Desain Modern & Presisi Efisien",
  },
  {
    src: "/images/product/IoPakan/PenerapanIoPakan.webp",
    alt: "Penerapan ioPakan di Kandang",
    title: "ioPakan",
    desc: "Terpasang Kokoh di Kandang Peternak",
  },
  {
    src: "/images/product/IoPakan/PenerapanIoPakan1.webp",
    alt: "ioPakan Operasional",
    title: "ioPakan",
    desc: "Beroperasi 24/7 Otomatis & Terjadwal",
  },
  {
    src: "/images/product/IoPeka/ioPeka-VersiBaru.webp",
    alt: "ioPeka Sensor Lingkungan",
    title: "ioPeka",
    desc: "Sensor Suhu & Kelembaban Lingkungan",
  },
  {
    src: "/images/product/IoPeka/Penerapan-IoPeka.webp",
    alt: "ioPeka di Kandang Modern",
    title: "ioPeka",
    desc: "Monitoring Real-Time di Kandang",
  },
  {
    src: "/images/product/IoPeka/Penerapan-IoPeka1.jpg",
    alt: "Instalasi ioPeka",
    title: "ioPeka",
    desc: "Instalasi Cepat, Praktis & Handal",
  },
  {
    src: "/images/product/IoTernak-App/Dashboard-Utama.webp",
    alt: "Dashboard Aplikasi IoTernak",
    title: "IoTernak App",
    desc: "Dashboard Monitoring & Kontrol Lengkap",
  },
  {
    src: "/images/product/IoTernak-App/Monitoring-ioPeka.webp",
    alt: "Live Monitoring IoTernak App",
    title: "IoTernak App",
    desc: "Grafik & Peringatan Kondisi Kandang",
  },
  {
    src: "/images/product/IoTernak-App/Setup-ioPakan.webp",
    alt: "Setup Pakan IoTernak App",
    title: "IoTernak App",
    desc: "Pengaturan Dosis & Waktu Pakan Praktis",
  },
];

export default function MarqueeGallery() {
  return (
    <div className="relative py-10 md:py-14 overflow-hidden -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-24 xl:-mx-36">
      {/* Header Section */}
      <div className="text-center mb-10 px-6">
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-100/90 border border-green-200 text-green-700 text-xs font-bold mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Dokumentasi Lapangan
        </div> */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
          Dipercaya Peternak di Seluruh Indonesia
        </h3>
        <p className="text-gray-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
          Sudah terpasang dan beroperasi di kandang-kandang modern
        </p>
      </div>

      {/* Marquee Gallery Container */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

        {/* Marquee Track (Auto-scrolling / Jalan Sendiri) */}
        <div className="animate-marquee flex items-center">
          {/* First loop track */}
          <div className="flex shrink-0 items-center gap-5 pr-5">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={`gallery-a-${idx}`}
                className="group relative w-72 sm:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 bg-gray-900 shrink-0 select-none"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-green-500 text-white font-bold text-xs tracking-wide shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                    {photo.desc}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate track for seamless infinite marquee loop */}
          <div
            className="flex shrink-0 items-center gap-5 pr-5"
            aria-hidden="true"
          >
            {galleryPhotos.map((photo, idx) => (
              <div
                key={`gallery-b-${idx}`}
                className="group relative w-72 sm:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 bg-gray-900 shrink-0 select-none"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-green-500 text-white font-bold text-xs tracking-wide shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                    {photo.desc}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
