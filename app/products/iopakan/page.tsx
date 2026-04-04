"use client";

import { useState, useEffect } from "react";

export default function IoPakanDetail() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  function openModal(src: string) {
    setModalSrc(src);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalSrc("");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-green-500 selection:text-white">
      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* KIRI: Sticky Product Showcase (Immersive 50% Width) */}
        <div className="w-full lg:w-1/2 bg-[#F3F8F5] lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-10 lg:pt-20 relative overflow-hidden">
          {/* Abstract Organic Background Element */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
          <div
            className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Badge Absolute */}
          <div className="absolute top-24 lg:top-32 left-10 lg:left-20 bg-white px-4 py-2 rounded-full shadow-xl shadow-green-900/10 border border-green-100 flex items-center gap-3 z-20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            <span className="text-sm font-extrabold text-green-700 uppercase tracking-wider">
              Automasi Pakan
            </span>
          </div>

          <img
            alt="Mesin ioPakan IoTernak"
            className="relative z-10 w-full max-w-lg lg:max-w-2xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            src="/images/product/IoPakan/IoPakanNew.webp"
          />
        </div>

        {/* KANAN: Scrollable Content Area */}
        <div className="w-full lg:w-1/2 px-6 py-12 lg:px-20 lg:py-16 xl:px-28 xl:py-24 flex flex-col justify-center">
          {/* ACTION BAR */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-10 pt-4 lg:pt-0">
            <a
              href="/products"
              className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-green-600 transition-colors"
            >
              <span className="material-icons text-base transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              Kembali ke Produk
            </a>

            <button
              onClick={() => {
                const url =
                  typeof window !== "undefined" ? window.location.href : "";
                if (navigator.share) {
                  navigator.share({ url }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(url);
                  alert("Tautan berhasil disalin!");
                }
              }}
              className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-700 transition-colors bg-gray-50 hover:bg-green-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm"
            >
              <span className="material-icons text-sm">share</span> Bagikan
            </button>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-[1.1]">
              Otomatisasi Pakan, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Tanpa Repot.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Tinggalkan cara takar manual. ioPakan mendistribusikan pakan
              secara presisi tepat waktu. Anda cukup pantau dari HP, kami yang
              urus perawatan alatnya.
            </p>
          </div>

          {/* Detailed Features & HaaS Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 mb-16 bg-gray-50/50 p-6 lg:p-8 rounded-[2rem] border border-gray-100">
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <span className="material-icons text-xl">tune</span>
                </div>
                Fitur Utama
              </h3>
              <ul className="space-y-4 text-sm text-gray-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 text-xl">
                    check_circle
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Penjadwalan pakan presisi
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 text-xl">
                    check_circle
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Kontrol via aplikasi mobile
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 text-xl">
                    check_circle
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Pemantauan sisa pakan real-time
                  </span>
                </li>
              </ul>
            </div>

            {/* Keuntungan HaaS */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <span className="material-icons text-xl">verified</span>
                </div>
                Keuntungan HaaS
              </h3>
              <ul className="space-y-4 text-sm text-gray-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-blue-500 text-xl">
                    build
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Gratis servis & perawatan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-blue-500 text-xl">
                    autorenew
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Garansi ganti unit rusak
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-blue-500 text-xl">
                    support_agent
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    Dukungan teknisi 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* HaaS Pricing "Ticket" Block */}
          <div className="relative bg-[#0F172A] rounded-[2rem] p-8 lg:p-10 text-white overflow-hidden shadow-2xl mb-20 transform hover:-translate-y-2 transition-transform duration-500">
            {/* Ticket effect cutouts */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-white rounded-full transform -translate-y-1/2 hidden lg:block"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full transform -translate-y-1/2 hidden lg:block"></div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 relative z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-green-400 text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
                  Paket Langganan
                </span>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-black tracking-tight">
                    Rp 200rb
                  </span>
                  <span className="text-gray-400 font-medium mb-2">
                    / bulan
                  </span>
                </div>
              </div>

              <div className="w-full xl:w-auto">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20IoTernak,%20saya%20tertarik%20berlangganan%20ioPakan."
                  className="group w-full xl:w-auto flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-2xl transition-all"
                >
                  Pesan Sekarang
                  <span className="material-icons group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Staggered Masonry Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Penerapan di Lapangan</h3>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <button
                type="button"
                onClick={() =>
                  openModal("/images/product/IoPakan/PenerapanIoPakan1.webp")
                }
                className="w-full h-48 lg:h-64 rounded-3xl overflow-hidden relative group"
              >
                <img
                  src="/images/product/IoPakan/PenerapanIoPakan1.webp"
                  alt="Kandang"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </button>

              <button
                type="button"
                onClick={() =>
                  openModal("/images/product/IoPakan/PenerapanIoPakan.webp")
                }
                className="w-full h-64 lg:h-80 rounded-3xl overflow-hidden relative group -mt-10 lg:-mt-16"
              >
                <img
                  src="/images/product/IoPakan/PenerapanIoPakan.webp"
                  alt="Aplikasi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Out of the box Quote Section */}
          <div className="border-l-4 border-green-500 pl-6 lg:pl-10 py-2">
            <p className="text-xl lg:text-2xl text-gray-800 font-serif italic leading-relaxed mb-6">
              "Peternak yang sukses di masa depan bukanlah yang bekerja paling
              keras mengangkut karung, tapi yang paling pintar menggunakan
              data."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Maggenzim.</h4>
                <p className="text-sm text-gray-500">Visi IoTernak Ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Image Viewer (Tetap Elegan) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-xl p-4 transition-opacity"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-sm"
            >
              Tutup <span className="material-icons">close</span>
            </button>
            <img
              src={modalSrc}
              alt="Preview"
              className="w-full h-full object-contain rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
