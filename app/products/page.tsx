export default function Products() {
  return (
    <>
      {/* Hero Section - Modern, Clean & Elegant Agritech Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-white">
        {/* Dekorasi Background Halus */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -ml-40 -mb-20 pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            {/* Kolon Kiri: Teks */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Langganan Minimal, Untung Maksimal
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-6">
                Rasa Aman
                <br />
                <span className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Dalam Genggaman
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-none mb-10 leading-relaxed font-medium">
                Ekosistem IoTernak membantu Anda mengelola kandang lebih cerdas.
                Fokus besarkan ayam Anda, biarkan kami yang mengurus mesin dan
                perawatannya.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full mt-2">
                <a
                  href="#products"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-green-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_10px_40px_rgba(22,163,74,0.5)] w-full sm:w-auto hover:-translate-y-1"
                >
                  Lihat Paket Langganan
                  <span className="material-icons group-hover:translate-y-1 transition-transform text-xl">
                    arrow_downward
                  </span>
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Gambar Visual Utama */}
            <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2 relative">
              {/* Blob dekoratif di belakang gambar */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-70 transform scale-110 pointer-events-none"></div>

              <div className="relative z-10 w-full max-w-lg lg:max-w-none transform lg:scale-105 xl:scale-110">
                <img
                  src="/images/features/ProductFeatures.webp"
                  alt="Visual Fitur Produk IoTernak Modern"
                  className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Clean White SaaS Layout */}
      <div
        className="relative pt-24 pb-32 bg-gray-50 overflow-hidden"
        id="products"
      >
        {/* Abstract Background Elements (Soft Green) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-32">
          {/* ioPakan */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-200 to-emerald-100 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl shadow-green-900/5">
              {/* Image Section */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="relative w-full aspect-square max-w-md bg-green-50 rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-green-100">
                  <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                  <img
                    alt="Mesin ioPakan"
                    className="object-cover w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                    src="/images/product/IoPakan/IoPakanNew.webp"
                  />
                  {/* Floating Badge - Bahasa Indonesia */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-green-200 text-green-700 px-2.5 py-1.5 rounded-full text-xs font-bold z-20 flex items-center gap-1 shadow-sm">
                    <span
                      className="material-icons text-green-600"
                      style={{ fontSize: "16px" }}
                    >
                      autorenew
                    </span>{" "}
                    <span className="hidden sm:inline">Pakan Otomatis</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold w-max mb-4">
                  Sistem Distribusi Pakan
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  ioPakan
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Bagikan pakan secara tepat dan merata ke seluruh penjuru
                  kandang. Atur jadwal dan takaran langsung dari HP Anda, tidak
                  perlu lagi repot menakar manual.
                </p>

                {/* Grid Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-green-50 text-green-600">
                      <span className="material-icons">schedule</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm">
                        Jadwal Tepat Waktu
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Ayam makan teratur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-green-50 text-green-600">
                      <span className="material-icons">analytics</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm">
                        Catatan Harian
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Pantau jumlah pakan habis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-100 mb-8"></div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 bg-green-50/80 p-6 rounded-2xl border border-green-200">
                  <div>
                    <p className="text-gray-600 text-sm mb-1 font-semibold">
                      Berlangganan mulai dari
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-green-700">
                        Rp 200rb
                      </span>
                      <span className="text-gray-500 font-medium">/ bulan</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      <li className="text-sm text-gray-700 flex items-center gap-2 font-medium">
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>{" "}
                        Garansi alat seumur hidup
                      </li>
                      <li className="text-sm text-gray-700 flex items-center gap-2 font-medium">
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>{" "}
                        Gratis servis dan perawatan rutin
                      </li>
                    </ul>
                  </div>
                  <a
                    href="/products/iopakan"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-green-600/20 hover:-translate-y-0.5"
                  >
                    Daftar Sekarang{" "}
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ioPeka */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100 to-green-200 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl shadow-green-900/5">
              {/* Content Section (Swapped order) */}
              <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold w-max mb-4">
                  Pemantau Lingkungan
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  ioPeka
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Ketahui kondisi udara kandang sebelum ayam jatuh sakit. Sensor
                  ioPeka memantau suhu, kelembapan, dan gas berbahaya 24 jam
                  nonstop.
                </p>

                {/* Grid Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-green-50 text-green-600">
                      <span className="material-icons">thermostat</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm">
                        Suhu & Kelembapan
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Jaga ayam tetap nyaman
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-green-50 text-green-600">
                      <span className="material-icons">air</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm">
                        Deteksi Gas
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Pantau kadar Amonia & Metana
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-100 mb-8"></div>

                {/* HaaS Pricing Block */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 bg-green-50/80 p-6 rounded-2xl border border-green-200">
                  <div>
                    <p className="text-gray-600 text-sm mb-1 font-semibold">
                      Berlangganan mulai dari
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-green-700">
                        Rp 150rb
                      </span>
                      <span className="text-gray-500 font-medium">/ bulan</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      <li className="text-sm text-gray-700 flex items-center gap-2 font-medium">
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>{" "}
                        Penggantian sensor jika rusak
                      </li>
                      <li className="text-sm text-gray-700 flex items-center gap-2 font-medium">
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>{" "}
                        Pembaruan aplikasi gratis
                      </li>
                    </ul>
                  </div>
                  <a
                    href="/products/iopeka"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-green-600/20 hover:-translate-y-0.5"
                  >
                    Daftar Sekarang{" "}
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-md bg-green-50 rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-green-100">
                  <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                  <img
                    alt="Sensor ioPeka"
                    className="object-cover w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                    src="/images/product/ioPeka-1-1.webp"
                  />
                  {/* Floating Alert Badge */}
                  <div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-orange-200 text-orange-600 px-2.5 py-1.5 rounded-full text-xs font-bold z-20 flex items-center gap-1 shadow-sm animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <span
                      className="material-icons"
                      style={{ fontSize: "16px" }}
                    >
                      notifications_active
                    </span>{" "}
                    <span className="hidden sm:inline">
                      Notifikasi ke HP Anda
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Agritech Fresh Vibe */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-green-600 p-6 sm:p-8 md:p-16 text-center shadow-2xl shadow-green-700/20 group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-48 -mt-48 blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-400/20 rounded-full -ml-48 -mb-48 blur-[80px]"></div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6 backdrop-blur-sm">
                Gabung Bersama Peternak Sukses Lainnya
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Tinggalkan Cara Lama,
                <br />
                Mulai Ternak Lebih Pintar Hari Ini
              </h2>
              <p className="text-green-50 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-2xl px-2 sm:px-0">
                Cukup bayar langganan bulanan, tim IoTernak akan memasang alat
                di kandang Anda dan memastikannya berjalan normal setiap hari.
              </p>
              <a
                href="https://wa.me/6281234567890"
                className="bg-white text-green-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300 font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
              >
                Tanya Jawab di WhatsApp Gratis
                <span className="material-icons text-lg sm:text-xl">
                  support_agent
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
