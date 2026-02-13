"use client";

import { useState, useEffect } from "react";

export default function SmartCollarProDetail() {
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
    <>
      {/* Breadcrumb & Share */}
      <section className="mt-25 -mb-10 pt-6 pb-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <nav className="flex space-x-2">
              <a className="hover:text-primary transition-colors" href="/">
                Home
              </a>
              <span>/</span>
              <a
                className="hover:text-primary transition-colors"
                href="/products"
              >
                Products
              </a>
              <span>/</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ioPakan
              </span>
            </nav>
            <button
              onClick={() => {
                const url =
                  typeof window !== "undefined" ? window.location.href : "";
                if (navigator.share) {
                  navigator.share({ url }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard!");
                }
              }}
              className="hover:text-primary transition-colors flex items-center gap-1"
              title="Share this page"
            >
              <span className="material-icons text-base">share</span> Share
            </button>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="rounded-3xl shadow-lg dark:shadow-none overflow-hidden p-6 md:p-10 lg:flex gap-10 lg:items-start ring-1 ring-black/5 dark:ring-white/10">
            {/* Product Image */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <div className="relative w-full aspect-square dark:from-green-900/20 dark:to-green-900/40 rounded-2xl overflow-hidden flex items-center justify-center group">
                <img
                  alt="AutoWeigh Station Precision Scale"
                  className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90"
                  src="/images/product/ioPakan.webp"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20">
                  Otomatisasi Pakan
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 w-full flex flex-col h-full justify-between space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  ioPakan
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  Sistem pakan otomatis berbasis IoT yang dirancang untuk
                  mengatur jadwal, jumlah, dan distribusi pakan secara presisi.
                  ioPakan membantu meningkatkan efisiensi pemberian pakan,
                  mengurangi pemborosan, serta menjaga konsistensi pertumbuhan
                  ternak.
                </p>

                {/* Ratings */}
                {/* <div className="flex items-center space-x-2 mb-6">
                  <div className="flex text-yellow-400">
                    <span className="material-icons text-lg">star</span>
                    <span className="material-icons text-lg">star</span>
                    <span className="material-icons text-lg">star</span>
                    <span className="material-icons text-lg">star</span>
                    <span className="material-icons text-lg">star_half</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    4.8 (524 Reviews)
                  </span>
                </div> */}

                <hr className="border-gray-200 dark:border-gray-700 mb-6" />

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Fitur Utama
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Penjadwalan pakan otomatis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Kontrol penuh melalui aplikasi mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Pemantauan pakan secara real-time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Kapasitas penyimpanan besar</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Mengapa IoTernak?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          verified_user
                        </span>
                        <span>Garansi perangkat hingga X tahun</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          precision_manufacturing
                        </span>
                        <span>Perangkat kelas industri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          support_agent
                        </span>
                        <span>Dukungan peternak 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-8">
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Rp 3.000.000
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through decoration-red-500 decoration-2">
                    Rp 3.500.000
                  </span>
                  <span className="text-xs font-bold text-primary bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded">
                    SAVE 14%
                  </span>
                </div>
                <a
                  href="https://shopee.co.id/maggenzim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide text-sm"
                >
                  Buy Now on Shopee
                </a>
              </div>
            </div>
          </div>

          {/* Gallery & Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            <div className="lg:col-span-2 grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() =>
                  openModal("/images/product/nutrisync/nutrisync-studio.webp")
                }
                className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800 p-0"
              >
                <img
                  alt="Cows grazing with technology"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="/images/product/nutrisync/nutrisync-studio.webp"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  openModal(
                    "/images/product/nutrisync/ilustrasi-nutrisync.webp"
                  )
                }
                className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800 p-0"
              >
                <img
                  alt="Farmer holding tablet"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="/images/product/nutrisync/ilustrasi-nutrisync.webp"
                />
              </button>
              <div className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800">
                <img
                  alt="Dashboard interface on laptop"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBx7nYXl2mxZpjQaY_3RDA_gPGbVuhW5beZPiAoLsj937tfxEPgK76wSYZsxsIwOVzryHJR1XaV3HUwlxMbBSuNIcUm1MlfIytvt0kW6yUZxWl85vqFBOEQLcwPT76pllbdCW7PkamT45mrG6av7q_nEEoidRrfQk0WK93JX2Q9cLteV_IEcAOn-LW2MpjmE9s_JERj06a0c9Pvtm01yO-57t_ct8GxX3AWcYp-ANOm_8eksOjcnKjAg0n4xqk_vJ65qDuCKLBAt4"
                />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-center">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">
                  "
                </span>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 italic text-sm md:text-base leading-relaxed">
                  Technology is the key to sustainable farming. IoTernak
                  empowers farmers with data, ensuring healthier livestock and
                  higher productivity for a better future.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-primary tracking-tight">
                  Maggenzim<span className="text-secondary">.</span>
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Innovating Livestock Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-4 md:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full md:w-auto md:h-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl max-h-[75vh] md:max-h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 md:-top-12 right-0 md:right-0 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 md:p-3.5 shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Close image preview"
            >
              <span className="material-icons text-white text-xl">close</span>
            </button>
            <img
              src={modalSrc}
              alt="Preview"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
