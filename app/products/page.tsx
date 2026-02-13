export default function Products() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background/bg-product.webp"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex-grow">
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mt-26 mb-5">
              Peternakan Ayam Modern
              <br className="hidden md:block" />
              Dalam{" "}
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Satu Genggaman
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              IoTernak Ecosystem membantu peternak mengelola dan memantau
              peternakan ayam melalui satu sistem yang praktis dan terintegrasi.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center w-full mb-12 md:mb-16 mt-6 sm:mt-0">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-4 bg-primary text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/25 w-full sm:w-auto"
              >
                Jelajahi Produk
                <span className="material-icons text-base sm:text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-4 bg-white/20 backdrop-blur border border-white/40 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/30 transition-all w-full sm:w-auto"
              >
                Tentang Kami
                <span className="material-icons text-base sm:text-lg group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <div className="relative pt-28 pb-20 overflow-hidden bg-white dark:bg-gray-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.15]"></div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl"></div>
        <div
          className="container mx-auto px-6 max-w-6xl space-y-24"
          id="products"
        >
          {/* ioPakan */}
          <div className="mb-24">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
              <div className="absolute top-1/2 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform -translate-y-1/2 group-hover:bg-secondary/30 transition-colors duration-500"></div>
              <div className="lg:w-1/2 relative z-10 flex justify-center order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-xs lg:max-w-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center p-6 md:p-8 shadow-inner">
                  <img
                    alt="Smart Pakan"
                    className="object-cover w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-500"
                    src="/images/product/ioPakan-1-1.webp"
                  />
                  <div
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 sm:gap-3 animate-bounce text-xs sm:text-base"
                    style={{ animationDuration: "3s" }}
                  >
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                      <span className="material-icons text-xs sm:text-sm">
                        check
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Feeding Automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 z-10 order-2 lg:order-1">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ioPakan
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-lg leading-relaxed">
                  Sistem pakan otomatis berbasis IoT yang dirancang untuk
                  menyalurkan pakan secara presisi dan konsisten dalam skala
                  peternakan. ioPakan membantu mengoptimalkan pertumbuhan ayam,
                  mengurangi pemborosan pakan, dan meningkatkan efisiensi
                  operasional.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        schedule
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Automated Feeding
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        smartphone
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      App-Based Control
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        analytics
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Smart Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        storage
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Large Feed Capacity
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Rp 3.000.000
                  </div>
                  <a
                    href="/products/iopakan"
                    className="bg-primary hover:bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    Learn More
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ioPeka */}
          <div className="mb-24">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
              <div className="absolute top-1/2 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl transform -translate-y-1/2 group-hover:bg-primary/30 transition-colors duration-500"></div>
              <div className="lg:w-1/2 relative z-10 flex justify-center order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-xs lg:max-w-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center p-6 md:p-8 shadow-inner">
                  <img
                    alt="Smart Detector"
                    className="object-cover w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-500"
                    src="/images/product/ioPeka-1-1.webp"
                  />
                  <div
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 sm:gap-3 animate-bounce text-xs sm:text-base"
                    style={{ animationDuration: "3s" }}
                  >
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                      <span className="material-icons text-xs sm:text-sm">
                        sensors
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Smart Monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 z-10 order-2 lg:order-1">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ioPeka
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-lg leading-relaxed">
                  Perangkat sensor cerdas untuk memantau suhu, kelembapan, serta
                  gas amonia dan metana di dalam kandang secara real-time.
                  ioPeka membantu peternak mendeteksi kondisi lingkungan yang
                  berisiko sejak dini, menjaga kenyamanan ternak, dan mencegah
                  penurunan performa akibat stres lingkungan.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        thermostat
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Temperature Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        opacity
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Humidity Tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        air
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Gas Detection
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xs md:text-sm">
                        notifications_active
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-base">
                      Alert System
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Rp 4.200.000
                  </div>
                  <a
                    href="/products/iopeka"
                    className="bg-primary hover:bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    Learn More
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="mt-20 md:mt-24 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-12 text-center md:text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-black opacity-10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="max-w-xl text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  Mulai Peternakan Ayam yang Lebih Cerdas Hari Ini
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  Bergabunglah dengan peternak yang telah menggunakan ekosistem
                  IoTernak untuk meningkatkan efisiensi kerja dan operasional
                  ternak.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/6281234567890"
                  className="bg-white text-primary hover:bg-gray-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg md:rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  Request Demo
                  <span className="material-icons text-base sm:text-lg">
                    rocket_launch
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
