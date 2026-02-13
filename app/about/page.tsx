export default function About() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 mt-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-secondary text-xs font-semibold tracking-wide uppercase mb-4">
              Teknologi Cerdas untuk Peternakan Ayam Modern
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Memodernisasi Peternakan Ayam dengan{" "}
              <span className="text-primary dark:text-secondary">
                IoTernak Ecosystem
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400">
              IoTernak menghadirkan ekosistem teknologi IoT praktis untuk
              peternakan ayam, membantu peternak mengelola kandang dengan lebih
              mudah, terukur, dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-[520px] flex flex-col items-center justify-center -mt-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
        <img
          alt="IoTernak Software Dashboard"
          className="relative z-10 max-h-[480px] w-full md:w-4/5 lg:w-3/4 object-contain drop-shadow-2xl my-4"
          src="images/features/software-ioternak.webp"
        />
        <div className="relative z-10 text-center px-4 pb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Aplikasi IoTernak
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Menghubungkan data, kandang, dan peternak dalam satu aplikasi.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Arah Kami ke Depan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Menjadi pemimpin global dalam solusi peternakan ayam berbasis
                teknologi cerdas, dengan memberdayakan peternak melalui data
                yang membantu meningkatkan produktivitas, menjaga kesejahteraan
                ternak, dan mendukung keberlanjutan.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Cara Kami Membantu Peternak
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="material-icons text-white text-sm">
                      check
                    </span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-300">
                    Mengembangkan perangkat IoT yang mudah digunakan untuk
                    operasional peternakan ayam.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="material-icons text-white text-sm">
                      check
                    </span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-300">
                    Menyediakan platform digital yang intuitif untuk pengelolaan
                    kandang ayam secara real-time.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="material-icons text-white text-sm">
                      check
                    </span>
                  </div>
                  <p className="ml-4 text-gray-600 dark:text-gray-300">
                    Membantu peternak ayam bekerja lebih cerdas dan
                    berkelanjutan melalui solusi IoTernak yang terintegrasi.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                alt="Smart farming technology concept"
                className="relative rounded-xl shadow-2xl w-3/4 aspect-square object-cover mx-auto"
                src="images/features/features_ioternak.webp"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary dark:text-secondary font-semibold tracking-wide uppercase">
              Nilai Inti Kami
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Nilai di Balik Setiap Inovasi
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
              IoTernak dibangun di atas nilai-nilai yang menjadi dasar kami
              dalam menghadirkan solusi terbaik bagi peternak dan keberlanjutan
              peternakan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-2xl">
                  lightbulb
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Inovasi
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Kami terus mengembangkan teknologi peternakan untuk menjawab
                tantangan lama dengan cara yang lebih cerdas dan relevan bagi
                peternak.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-2xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Integritas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Kami menjaga transparansi data dan membangun kemitraan yang
                jujur serta bertanggung jawab.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-2xl">
                  eco
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Keberlanjutan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solusi kami dirancang untuk mendukung peternakan yang lebih
                berkelanjutan, menjaga lingkungan, dan mendukung ketahanan
                pangan jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary opacity-10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-base text-secondary font-semibold tracking-wide uppercase">
              Powered by Technology
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-white">
              Teknologi di Balik IoTernak
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 group-hover:bg-primary transition-colors duration-300 mb-6 border border-gray-700 mx-auto">
                <span className="material-icons text-3xl text-gray-300 group-hover:text-white">
                  memory
                </span>
              </div>
              <h3 className="text-lg font-medium text-white">Sensor Cerdas</h3>
              <p className="mt-2 text-sm text-gray-400">
                Perangkat Presisi untuk
                <br />
                Pemantauan Kesehatan Ternak
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 group-hover:bg-primary transition-colors duration-300 mb-6 border border-gray-700 mx-auto">
                <span className="material-icons text-3xl text-gray-300 group-hover:text-white">
                  cloud_queue
                </span>
              </div>
              <h3 className="text-lg font-medium text-white">Analitik Cloud</h3>
              <p className="mt-2 text-sm text-gray-400">
                Data Kandang yang Diolah
                <br />
                Menjadi Informasi Penting
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 group-hover:bg-primary transition-colors duration-300 mb-6 border border-gray-700 mx-auto">
                <span className="material-icons text-3xl text-gray-300 group-hover:text-white">
                  smartphone
                </span>
              </div>
              <h3 className="text-lg font-medium text-white">Kontrol Mobile</h3>
              <p className="mt-2 text-sm text-gray-400">
                Pantau dan Kelola
                <br />
                Kandang dari Mana Saja
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-center lg:text-left">
            <span className="block">Siap Memodernisasi Peternakan Anda?</span>
            <span className="block bg-gradient-to-r from-green-100 to-green-200 bg-clip-text text-transparent opacity-90 text-lg sm:text-xl md:text-xl">
              Bergabunglah dengan ekosistem IoTernak dan rasakan kemudahan
              mengelola peternakan dengan IoTernak Ecosystem.
            </span>
          </h2>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 lg:mt-0 lg:flex-shrink-0 justify-center lg:justify-end w-full lg:w-auto">
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 w-full sm:w-auto"
                href="https://wa.me/6281397391127"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Sekarang
              </a>
            </div>
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-secondary/30 hover:bg-secondary/40 backdrop-blur-sm w-full sm:w-auto"
                href="/contact"
              >
                Hubungi Tim Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
