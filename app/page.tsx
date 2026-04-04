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

      {/* Products Section */}
      <section
        className="py-24 bg-gray-50 dark:bg-gray-900 relative"
        id="products"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
              Ekosistem IoTernak
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Solusi Cerdas Peternakan Ayam Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Rangkaian solusi terintegrasi untuk membantu peternak memantau,
              mengelola, dan mengoptimalkan setiap aspek operasional peternakan
              ayam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Hardware */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-gray-900 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  alt="Smart Livestock Collar Device"
                  className="w-full h-full object-cover"
                  src="images/features/hardware.webp"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20">
                  Hardware
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-primary">
                    <span className="material-icons">watch</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Perangkat IoTernak
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Perangkat IoT untuk kemudahan operasional dan efektivitas
                  ternak secara real-time.
                </p>
              </div>
            </div>

            {/* Software */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-gray-900 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  alt="Farm Management Dashboard Interface"
                  className="w-full h-full object-cover"
                  src="images/features/software.webp"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-secondary border border-secondary/20">
                  Software
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <span className="material-icons">analytics</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Aplikasi IoTernak
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Pusat kendali seluruh perangkat IoTernak untuk membantu
                  pengelolaan data kandang dengan mudah.
                </p>
              </div>
            </div>

            {/* Automation */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-gray-900 rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  alt="Smart Automated Feeding System"
                  className="w-full h-full object-cover"
                  src="images/features/automation.webp"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                  Automation
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                    <span className="material-icons">
                      precision_manufacturing
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Ekosistem Otomasi
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Ekosistem otomasi IoT untuk menciptakan operasional peternakan
                  yang lebih cerdas dan adaptif.
                </p>
              </div>
            </div>
          </div>

          {/* App & Products Feature Section */}
          <div className="mt-32 space-y-24">
            {/* App Introduction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex flex-col">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  IoTernak App
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                  Aplikasi pusat untuk mengelola seluruh ekosistem IoTernak
                  Anda. Pantau semua perangkat, analisis data real-time, dan
                  ambil keputusan bisnis yang lebih baik dengan dashboard yang
                  intuitif dan mudah digunakan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    <span className="material-icons text-primary text-xl flex-shrink-0">
                      check_circle
                    </span>
                    Dashboard analitik real-time
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    <span className="material-icons text-primary text-xl flex-shrink-0">
                      check_circle
                    </span>
                    Kontrol perangkat dari mana saja
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    <span className="material-icons text-primary text-xl flex-shrink-0">
                      check_circle
                    </span>
                    Laporan otomatis dan insights
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src="images/features/3d-app.webp"
                  alt="Maggenzim App"
                  className="w-full max-w-lg"
                />
              </div>
            </div>

            {/* Product 1: ioPakan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="images/product/IoPakan/IoPakanNew.webp"
                  alt="ioPakan"
                  className="w-full max-w-lg h-auto"
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ioPakan
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  Sistem pemberian pakan otomatis yang presisi untuk unggas
                  broiler. Dirancang untuk memberikan nutrisi yang konsisten dan
                  optimal, mengurangi pemborosan pakan, dan meningkatkan
                  efisiensi pertumbuhan dengan kontrol berbasis aplikasi mobile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Pemberian pakan otomatis terjadwal
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Kapasitas pakan besar dan tahan lama
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Monitoring konsumsi real-time
                  </li>
                </ul>
                <a
                  href="/products/iopakan"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Product 2: ioPeka */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ioPeka
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  Sistem monitoring lingkungan kandang yang komprehensif. Pantau
                  suhu, kelembaban, kualitas udara, dan parameter lingkungan
                  lainnya untuk memastikan kondisi optimal bagi ternak Anda
                  dengan alert otomatis untuk deviasi.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Peringatan kondisi kandang abnormal
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Monitoring suhu 24/7
                  </li>
                </ul>
                <a
                  href="/products/iopeka"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src="images/product/ioPeka.webp"
                  alt="ioPeka"
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>

            {/* Product 3: ioPantau */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="images/product/magz-vision.webp"
                  alt="ioPantau"
                  className="w-full max-w-lg h-auto"
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ioPantau
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  Sistem monitoring lingkungan kandang yang komprehensif. Pantau
                  suhu, kelembaban, kualitas udara, dan parameter lingkungan
                  lainnya untuk memastikan kondisi optimal bagi ternak Anda
                  dengan alert otomatis untuk deviasi.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Sensor aktifitas ternak real-time
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="material-icons text-primary text-xl">
                      check_circle
                    </span>
                    Deteksi gejala penyakit dini
                  </li>
                </ul>
                <a
                  href="/products/iopantau"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </div>
            </div> */}
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
