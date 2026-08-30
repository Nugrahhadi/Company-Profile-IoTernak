"use client";

import { useRef, useState, useEffect } from "react";

export default function MarqueeGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Dipercaya Peternak di Seluruh Indonesia
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          Sudah terpasang dan beroperasi di kandang-kandang modern
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={scrollContainerRef}
          className={`marquee-container overflow-x-auto overflow-y-hidden scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        >
          <div className="marquee-content flex gap-4 hover:animation-paused">
            <div className="flex gap-4 shrink-0">
              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/ioPakan-AyamBangkok.webp"
                  alt="ioPakan di Kandang"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Sistem Pakan Otomatis</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/ioPakan-Produk.webp"
                  alt="Produk ioPakan"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Desain Modern & Efisien</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/PenerapanIoPakan1.webp"
                  alt="ioPakan Operasional"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Beroperasi 24/7</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/ioPeka-VersiBaru.webp"
                  alt="ioPeka Terbaru"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Sensor Lingkungan</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/Penerapan-IoPeka.webp"
                  alt="ioPeka di Kandang"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Monitor Real-time</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/Penerapan-IoPeka1.jpg"
                  alt="ioPeka Instalasi"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Easy Installation</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Dashboard-Utama.webp"
                  alt="Dashboard IoTernak"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Dashboard Control</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Monitoring-ioPeka.webp"
                  alt="Monitoring App"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Live Monitoring</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Setup-ioPakan.webp"
                  alt="Setup App"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Easy Setup</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 shrink-0" aria-hidden="true">
              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/ioPakan-AyamBangkok.webp"
                  alt="ioPakan di Kandang"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Sistem Pakan Otomatis</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/ioPakan-Produk.webp"
                  alt="Produk ioPakan"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Desain Modern & Efisien</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/PenerapanIoPakan.webp"
                  alt="Penerapan ioPakan"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Terpasang di Kandang</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPakan/PenerapanIoPakan1.webp"
                  alt="ioPakan Operasional"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPakan</span>
                    <p className="text-white/80 text-xs">Beroperasi 24/7</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/ioPeka-VersiBaru.webp"
                  alt="ioPeka Terbaru"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Sensor Lingkungan</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/Penerapan-IoPeka.webp"
                  alt="ioPeka di Kandang"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Monitor Real-time</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoPeka/Penerapan-IoPeka1.jpg"
                  alt="ioPeka Instalasi"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">ioPeka</span>
                    <p className="text-white/80 text-xs">Easy Installation</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Dashboard-Utama.webp"
                  alt="Dashboard IoTernak"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Dashboard Control</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Monitoring-ioPeka.webp"
                  alt="Monitoring App"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Live Monitoring</p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src="/images/product/IoTernak-App/Setup-ioPakan.webp"
                  alt="Setup App"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white font-bold text-sm">IoTernak App</span>
                    <p className="text-white/80 text-xs">Easy Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
