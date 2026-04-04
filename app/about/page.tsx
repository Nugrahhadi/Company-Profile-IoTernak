export default function About() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-green-500 selection:text-white relative">
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 circuit-bg pointer-events-none opacity-60 dark:opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/50 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative z-10 mt-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary dark:text-secondary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 border border-primary/20 dark:border-secondary/20">
              <span className="material-icons text-xs sm:text-sm mr-2">
                psychology
              </span>{" "}
              Teknologi Cerdas untuk Peternakan Ayam Modern
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
              Memodernisasi Peternakan Ayam dengan{" "}
              <span className="text-primary dark:text-secondary bg-gradient-to-r from-primary to-green-600 dark:from-secondary dark:to-emerald-400 bg-clip-text text-transparent opacity-90">
                IoTernak Ecosystem
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-8 sm:mb-12 px-2 sm:px-0">
              IoTernak menghadirkan ekosistem teknologi IoT praktis untuk
              peternakan ayam, membantu peternak mengelola kandang dengan lebih
              mudah, terukur, dan berkelanjutan. Satu pintu untuk menghubungkan
              data real-time, perangkat IoT, dan manajemen peternak dalam satu
              genggaman yang praktis.
            </p>
          </div>

          <div className="container mx-auto px-6 flex flex-col items-center justify-center relative">
            <img
              alt="IoTernak Software Dashboard"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              src="images/features/Aplikasi-IoTernak.webp"
            />
            <div className="relative z-10 text-center px-4 mt-10 max-w-2xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Aplikasi Pusat Kendali IoTernak
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                Satu pintu untuk menghubungkan data real-time dari kandang,
                perangkat IoT, dan manajemen peternak dalam satu genggaman yang
                praktis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ... AKHIR HERO SECTION ... */}

      <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-secondary/10 text-secondary-dark text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 sm:mb-4 border border-secondary/20">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  Eksklusif di IoTernak Ecosystem
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
                  Kenalan sama{" "}
                  <span className="text-primary dark:text-secondary bg-gradient-to-r from-primary to-green-600 dark:from-secondary dark:to-emerald-400 bg-clip-text text-transparent opacity-90">
                    Prof. Jago
                  </span>
                  :
                  <br className="hidden md:block" /> AI Farming Assistant Anda
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Lebih dari sekadar data, IoTernak menghadirkan mitra cerdas
                  yang mengerti bahasa kandang Anda. Prof. Jago menganalisis,
                  menyarankan, dan menemani perjalanan sukses peternakan Anda
                  24/7.
                </p>
              </div>
            </div>

            {/* Image - Reordered for mobile */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2 relative group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-500"></div>

              <div className="relative p-0 rounded-2xl overflow-visible transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out group">
                <img
                  alt="Prof. Jago AI Farming Assistant Chatbot"
                  className="relative z-10 rounded-2xl max-h-[500px] sm:max-h-[720px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src="images/features/Prof.Jago.webp"
                />
                <div
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <span className="material-icons text-primary text-3xl opacity-80">
                    psychology
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid - After image on all screens */}
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Benefit 1 */}
              <div className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="material-icons text-white text-2xl font-bold tracking-widest">
                    summarize
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Rangkuman Real-Time
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Prof. Jago menyajikan ringkasan instan kondisi seluruh
                    kandang Anda dari data sensor yang kompleks secara
                    real-time.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="material-icons text-white text-2xl font-bold tracking-widest">
                    tips_and_updates
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Saran Penanganan
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Dapatkan rekomendasi tindakan preventif atau korektif yang
                    cerdas berdasarkan analisis data ayam aktual di lapangan.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 sm:col-span-2">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="material-icons text-white text-2xl font-bold tracking-widest">
                    forum
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Teman Diskusi & Solusi Ternak
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Bingung hadapi masalah kandang? Ngobrol langsung dengan
                    Prof. Jago kapan saja untuk mencari solusi terbaik bagi
                    peternakan Anda secara interaktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- VISION, MISSION, & METHODS SECTION --- */}
      <div className="bg-white dark:bg-gray-900 py-24 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        {/* Dekorasi halus background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-secondary text-xs font-semibold tracking-wide uppercase mb-3 border border-primary/20 dark:border-secondary/20">
                  Visi & Arah Kami
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
                  Arah Kami ke Depan
                </h2>
                <p className="mt-5 text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Menjadi pemimpin global dalam solusi peternakan ayam berbasis
                  teknologi cerdas, memberdayakan peternak melalui data untuk
                  produktivitas optimal, kesejahteraan ternak, dan
                  keberlanjutan.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-secondary text-xs font-semibold tracking-wide uppercase mb-3 border border-primary/20 dark:border-secondary/20">
                  Metode & Pendekatan
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-8">
                  Cara Kami Membantu Peternak
                </h2>
                <ul className="space-y-6">
                  {[
                    "Mengembangkan perangkat IoT praktis dan mudah digunakan khusus untuk operasional ayam.",
                    "Menyediakan platform digital intuitif untuk pengelolaan kandang secara real-time.",
                    "Membantu peternak bekerja lebih cerdas dan berkelanjutan lewat solusi IoTernak terintegrasi.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <span className="material-icons text-white text-lg font-bold">
                          check
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>
              <img
                alt="Smart farming technology concept"
                className="relative rounded-[2rem] shadow-2xl w-full aspect-square object-cover mx-auto ring-4 ring-white/50 dark:ring-gray-800/50"
                src="images/features/features_ioternak.webp"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CORE VALUES SECTION --- */}
      <div className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-base text-primary dark:text-secondary font-bold tracking-wide uppercase">
              Nilai Inti Kami
            </h2>
            <p className="mt-2 text-4xl leading-[1.1] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Nilai di Balik Setiap Inovasi
            </p>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
              IoTernak dibangun di atas nilai-nilai yang menjadi dasar kami
              dalam menghadirkan solusi terbaik bagi peternak dan keberlanjutan
              peternakan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            {[
              {
                icon: "lightbulb",
                title: "Inovasi",
                desc: "Kami terus mengembangkan teknologi peternakan untuk menjawab tantangan lama dengan cara yang lebih cerdas dan relevan bagi peternak.",
              },
              {
                icon: "verified_user",
                title: "Integritas",
                desc: "Kami menjaga transparansi data dan membangun kemitraan yang jujur serta bertanggung jawab.",
              },
              {
                icon: "eco",
                title: "Keberlanjutan",
                desc: "Solusi kami dirancang untuk mendukung peternakan yang lebih berkelanjutan, menjaga lingkungan, dan mendukung ketahanan pangan.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
                  <span className="material-icons text-primary text-4xl font-bold">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TECHNOLOGY STACK SECTION --- */}
      <div className="bg-gray-950 text-white py-24 relative overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[480px] h-[480px] bg-primary/20 blur-[128px] rounded-full pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 blur-[128px] rounded-full pointer-events-none opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border border-gray-800 rounded-[32px] bg-gray-900/50 backdrop-blur-sm p-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-sm sm:text-base text-secondary dark:text-secondary-dark font-semibold tracking-widest uppercase">
              Powered by Technology
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-extrabold tracking-tighter text-white">
              Teknologi di Balik IoTernak Ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "memory",
                title: "Sensor Cerdas",
                desc: "Perangkat Presisi untuk Pemantauan Kesehatan Ternak",
              },
              {
                icon: "cloud_queue",
                title: "Analitik Cloud",
                desc: "Data Kandang Diolah Menjadi Informasi Penting",
              },
              {
                icon: "smartphone",
                title: "Kontrol Mobile",
                desc: "Pantau dan Kelola Kandang dari Mana Saja",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center group bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-primary/40 transition-colors transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-800 group-hover:bg-primary transition-colors duration-300 mb-8 border border-gray-700 mx-auto shadow-inner">
                  <span className="material-icons text-5xl text-gray-400 group-hover:text-white transition-colors font-medium">
                    {tech.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {tech.title}
                </h3>
                <p className="mt-3 text-lg text-gray-400 group-hover:text-gray-200 leading-relaxed font-medium">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-primary relative overflow-hidden">
        {/* Pola background carbon halus */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white text-center lg:text-left leading-tight">
            <span className="block mb-2">
              Siap Memodernisasi Peternakan Anda?
            </span>
            <span className="block bg-gradient-to-r from-green-100 to-green-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-2xl leading-relaxed max-w-3xl opacity-90 mx-auto lg:mx-0 font-medium">
              Bergabunglah dengan ekosistem IoTernak dan rasakan kemudahan
              mengelola peternakan dengan kekuatan teknologi cerdas terkini.
            </span>
          </h2>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0 justify-center lg:justify-end w-full lg:w-auto">
            <div className="inline-flex rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <a
                className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 border border-transparent text-base md:text-lg font-bold rounded-xl text-primary bg-white hover:bg-gray-50 w-full sm:w-auto shadow-md"
                href="https://wa.me/6281397391127"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Sekarang{" "}
                <span className="material-icons text-base ml-2">
                  rocket_launch
                </span>
              </a>
            </div>
            <div className="inline-flex rounded-xl shadow transform hover:scale-105 transition-transform">
              <a
                className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 border border-white/40 text-base md:text-lg font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
                href="/contact"
              >
                Hubungi Tim Kami{" "}
                <span className="material-icons text-base ml-2">
                  support_agent
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
