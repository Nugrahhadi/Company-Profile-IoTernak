export default function Testimonials() {
  return (
    <>
      {/* Hero Section Testimoni */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Dekorasi Background Hijau */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-50 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
            <span className="material-icons text-sm">verified</span>
            Bukti Nyata di Lapangan
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Jangan Hanya Percaya <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Kata-Kata Kami
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Lihat langsung bagaimana ekosistem IoTernak telah terpasang dan
            membantu peternak mengelola kandang menjadi lebih efisien, terukur,
            dan tenang.
          </p>
        </div>
      </section>

      {/* Asymmetrical Bento Grid Section - Foto Instalasi */}
      <section className="py-10 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Alat Kami di Kandang Peternak
            </h2>
            <div className="w-20 h-1.5 bg-green-500 rounded-full mt-4"></div>
          </div>

          {/* Grid Abstrak Modern */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px]">
            {/* Wide Image (1017x650) - Kiri Atas */}
            <div className="md:col-span-8 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img
                src="/images/Feedback/PembelianAlat2.webp"
                alt="Instalasi IoTernak"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-green-100 shadow-sm">
                <p className="text-green-800 font-bold text-sm">
                  Pemasangan Sensor ioPeka
                </p>
              </div>
            </div>

            {/* Tall Image (551x1080) - Kanan (Penuh) */}
            <div className="md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-lg hidden md:block">
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img
                src="/images/Feedback/PembelianAlat1.webp"
                alt="Penggunaan Alat IoTernak"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 z-20 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md">
                Kandang Terpantau 24/7
              </div>
            </div>

            {/* Mobile View Only for Tall Image */}
            <div className="md:hidden rounded-3xl overflow-hidden relative group shadow-lg h-[400px]">
              <img
                src="/images/Feedback/PembelianAlat1.webp"
                alt="Penggunaan Alat IoTernak"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Square Image (1080x1080) - Kiri Bawah */}
            <div className="md:col-span-4 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img
                src="/images/Feedback/PembelianAlat.webp"
                alt="Serah Terima IoTernak"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Blok Teks Hijau - Tengah Bawah */}
            <div className="md:col-span-4 md:row-span-1 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-8 flex flex-col justify-center text-white shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
              <span className="material-icons text-4xl mb-4 text-green-200">
                handshake
              </span>
              <h3 className="text-2xl font-extrabold mb-2">
                Teruji di Lapangan
              </h3>
              <p className="text-green-50 text-sm leading-relaxed">
                Alat kami didesain tahan banting untuk kondisi kandang yang
                berdebu dan lembap. Pemasangan dilakukan langsung oleh teknisi
                ahli kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Feedback/Chat - Layout Staggered */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-100 mt-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-[100px] -mr-40 -mt-20 pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Apa Kata Peternak?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback jujur langsung dari WhatsApp peternak yang sudah
              menggunakan ioPakan dan ioPeka.
            </p>
          </div>

          {/* Grid 4 Kolom dengan efek naik-turun (Staggered) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-start">
            {/* Chat 1 */}
            <div className="mt-0 md:mt-0 relative group">
              <div className="absolute -inset-1 bg-green-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/images/Feedback/testimoni-pakJoko.png"
                alt="Testimoni Chat 1"
                className="relative rounded-2xl w-full h-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-white object-cover"
              />
            </div>

            {/* Chat 2 (Sedikit turun) */}
            <div className="mt-4 md:mt-12 relative group">
              <div className="absolute -inset-1 bg-green-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/images/Feedback/testimoni-pakMardi.png"
                alt="Testimoni Chat 2"
                className="relative rounded-2xl w-full h-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-white object-cover"
              />
            </div>

            {/* Chat 3 */}
            <div className="mt-0 md:mt-0 relative group">
              <div className="absolute -inset-1 bg-green-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/images/Feedback/testimoni-pakSugeng.png"
                alt="Testimoni Chat 3"
                className="relative rounded-2xl w-full h-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-white object-cover"
              />
            </div>

            {/* Chat 4 (Sedikit turun) */}
            <div className="mt-4 md:mt-12 relative group">
              <div className="absolute -inset-1 bg-green-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="/images/Feedback/testimoni-pakyanto.png"
                alt="Testimoni Chat 4"
                className="relative rounded-2xl w-full h-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-white object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mengikuti Gaya Sebelumnya */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-green-600 p-8 md:p-16 text-center shadow-2xl shadow-green-700/20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-48 -mt-48 blur-[80px]"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Giliran Anda Membuktikannya
              </h2>
              <p className="text-green-50 text-base md:text-lg mb-8">
                Jangan tunggu sampai ada masalah di kandang. Pasang sekarang,
                bayar langganan bulanan tanpa pusing mikir maintenance mesin.
              </p>
              <a
                href="https://wa.me/6281234567890"
                className="bg-white text-green-700 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 font-extrabold py-4 px-8 rounded-xl shadow-lg flex items-center gap-3 text-lg"
              >
                Konsultasi Gratis Sekarang
                <span className="material-icons">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
