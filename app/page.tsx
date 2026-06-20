import SupportedLogos from "@/components/SupportedLogos";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background/bg-home.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex-grow">
          <div className="flex flex-col items-center max-w-5xl mx-auto mt-18">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Kendali Kandang dalam <br></br>
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Genggaman IoTernak
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Memberdayakan peternak dengan solusi smart farming generasi
              terbaru. Monitor, kelola, dan optimalkan ternak Anda dengan
              ekosistem terintegrasi kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <a
                href="/products/iopakan"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-full font-semibold text-sm sm:text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/25 w-full sm:w-auto"
              >
                Mulai Sekarang
                <span className="material-icons text-lg sm:text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur border border-white/40 text-white rounded-full font-semibold text-sm sm:text-lg hover:bg-white/30 transition-all w-full sm:w-auto"
              >
                Pelajari Lebih Lanjut
                <span className="material-icons text-lg sm:text-xl group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Logos Section */}
      <SupportedLogos />

      {/* Products Section */}
      {/* Products Section */}
      <section
        className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950 relative overflow-hidden"
        id="products"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#009312_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-green-400 font-semibold tracking-wide uppercase text-xs mb-4">
              Ekosistem IoTernak
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Solusi Cerdas Peternakan Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Rangkaian teknologi terintegrasi untuk membantu peternak memantau,
              mengelola, dan mengoptimalkan setiap aspek operasional secara real-time.
            </p>
          </div>

          {/* Three Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-32">
            {/* Hardware */}
            <div className="group relative bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-gray-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-primary/30 dark:hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  alt="Smart Livestock Collar Device"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src="images/features/hardware.webp"
                />
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 shadow-sm z-20">
                  Hardware
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-green-50 dark:bg-green-950/50 rounded-xl text-primary border border-green-100 dark:border-green-900/30">
                      <span className="material-icons text-xl block">watch</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Perangkat IoTernak
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Perangkat IoT untuk kemudahan operasional dan efektivitas
                    ternak secara real-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Software */}
            <div className="group relative bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-gray-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  alt="Farm Management Dashboard Interface"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src="images/features/software.webp"
                />
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-600 border border-blue-200 dark:border-blue-800/30 shadow-sm z-20">
                  Software
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                      <span className="material-icons text-xl block">analytics</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Aplikasi IoTernak
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Pusat kendali seluruh perangkat IoTernak untuk membantu
                    pengelolaan data kandang dengan mudah.
                  </p>
                </div>
              </div>
            </div>

            {/* Automation */}
            <div className="group relative bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-gray-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-orange-500/30 dark:hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  alt="Smart Automated Feeding System"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src="images/features/automation.webp"
                />
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-orange-600 border border-orange-200 dark:border-orange-800/30 shadow-sm z-20">
                  Automation
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-orange-50 dark:bg-orange-950/50 rounded-xl text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                      <span className="material-icons text-xl block">precision_manufacturing</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Ekosistem Otomasi
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Ekosistem otomasi IoT untuk menciptakan operasional peternakan
                    yang lebih cerdas dan adaptif.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App & Products Showcase Detail */}
          <div className="space-y-36">
            {/* App Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
                <span className="text-primary dark:text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Pusat Kendali Utama
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                  IoTernak App
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-base leading-relaxed font-light">
                  Aplikasi pusat untuk mengelola seluruh ekosistem IoTernak Anda. Pantau semua perangkat, analisis data real-time, dan ambil keputusan bisnis yang lebih tepat dengan dashboard yang intuitif dan mudah dipahami.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Dashboard analitik real-time & interaktif
                  </li>
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Kontrol perangkat pintar dari mana saja
                  </li>
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Laporan otomatis bulanan dan insights prediktif
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center relative group">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl filter blur-3xl opacity-70 scale-95 pointer-events-none group-hover:scale-105 transition-all duration-700" />
                <img
                  src="images/features/3d-app.webp"
                  alt="IoTernak App Interface"
                  className="w-full max-w-lg relative z-10 drop-shadow-[0_20px_50px_rgba(0,147,18,0.15)] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Product 1: ioPakan */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent rounded-3xl filter blur-3xl opacity-70 scale-95 pointer-events-none group-hover:scale-105 transition-all duration-700" />
                <img
                  src="images/product/IoPakan/IoPakanNew.webp"
                  alt="ioPakan Device"
                  className="w-full max-w-lg h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(2,185,19,0.12)] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-5">
                <span className="text-primary dark:text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Pemberian Pakan Presisi
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                  ioPakan
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-base leading-relaxed font-light">
                  Sistem pemberian pakan otomatis yang presisi untuk unggas broiler. Dirancang untuk menyalurkan nutrisi secara konsisten, meminimalkan pemborosan pakan, dan mengoptimalkan efisiensi pertumbuhan melalui kontrol berbasis mobile app.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Pemberian pakan otomatis & terjadwal cerdas
                  </li>
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Kapasitas pakan ekstra besar & tahan cuaca ekstrim
                  </li>
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Monitoring konsumsi pakan secara real-time
                  </li>
                </ul>
                <a
                  href="/products/iopakan"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Product 2: ioPeka */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-primary dark:text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Sensor Lingkungan Kandang
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                  ioPeka
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-base leading-relaxed font-light">
                  Sistem monitoring kondisi lingkungan kandang yang komprehensif. Memantau kelembaban, suhu ruangan, kualitas sirkulasi udara, serta parameter lingkungan penting lainnya untuk memastikan habitat sehat bagi ternak.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Peringatan instan apabila kondisi kandang abnormal
                  </li>
                  <li className="flex items-center gap-3.5 text-gray-700 dark:text-gray-300 font-medium">
                    <span className="material-icons text-primary bg-primary/10 p-1 rounded-full text-base flex-shrink-0">
                      check
                    </span>
                    Monitoring suhu dan kelembaban 24/7 otomatis
                  </li>
                </ul>
                <a
                  href="/products/iopeka"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <div className="lg:col-span-7 flex justify-center order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl filter blur-3xl opacity-70 scale-95 pointer-events-none group-hover:scale-105 transition-all duration-700" />
                <img
                  src="images/product/ioPeka.webp"
                  alt="ioPeka Device"
                  className="w-full max-w-lg h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,147,18,0.12)] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="mt-32 bg-primary/5 rounded-3xl p-6 md:p-12 relative overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-10">
              <div className="lg:w-1/2">
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
                  Satu Ekosistem, Banyak Solusi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base text-center lg:text-left">
                  Kekuatan utama IoTernak terletak pada{" "}
                  <span className="font-semibold text-primary">
                    IoTernak Ecosystem.
                  </span>{" "}
                  Setiap perangkat dan sistem tidak berjalan sendiri, melainkan
                  saling terhubung dan berkomunikasi secara real-time untuk
                  memberikan gambaran menyeluruh tentang performa peternakan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base justify-center lg:justify-start">
                    <span className="material-icons text-primary flex-shrink-0">
                      check_circle
                    </span>
                    Sinkronisasi data secara real-time
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base justify-center lg:justify-start">
                    <span className="material-icons text-primary flex-shrink-0">
                      check_circle
                    </span>
                    Analisis prediktif untuk kesehatan ternak
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base justify-center lg:justify-start">
                    <span className="material-icons text-primary flex-shrink-0">
                      check_circle
                    </span>
                    Pemicu otomasi untuk alur kerja peternakan
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center w-full">
                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-xs">
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm text-center">
                    <span className="material-icons text-3xl md:text-4xl text-primary mb-2 flex justify-center">
                      cloud_sync
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white text-xs md:text-base">
                      Sinkronisasi Cloud
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm text-center">
                    <span className="material-icons text-3xl md:text-4xl text-secondary mb-2 flex justify-center">
                      smartphone
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white text-xs md:text-base">
                      Akses Mobile
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm text-center">
                    <span className="material-icons text-3xl md:text-4xl text-secondary mb-2 flex justify-center">
                      hub
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white text-xs md:text-base">
                      Pusat Koneksi IoT
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm text-center">
                    <span className="material-icons text-3xl md:text-4xl text-green-600 mb-2 flex justify-center">
                      trending_up
                    </span>
                    <p className="font-bold text-gray-900 dark:text-white text-xs md:text-base">
                      Analitik Pertumbuhan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
