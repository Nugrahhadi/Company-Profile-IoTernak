"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-12">
        <div className="container mx-auto px-6 max-w-4xl mt-5">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              Mari Terhubung!
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Bicarakan Solusi Terbaik untuk Peternakan Anda
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              Kami siap menjawab pertanyaan Anda, mendiskusikan kebutuhan
              peternakan, dan membantu menemukan solusi terbaik untuk usaha
              ternak Anda. Hubungi kami, dan mari mulai membangun peternakan
              yang lebih cerdas bersama IoTernak.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Mari Diskusikan Kebutuhan Peternakan Anda!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan Nama Lengkap Anda"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Kami akan menghubungi Anda melalui email ini"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nama Usaha
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Beri tahu kami usaha yang Anda wakili"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Topik yang ingin Anda diskusikan"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan atau pertanyaan Anda"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 font-semibold">
                      ✓ Pesan berhasil dikirim! Kami akan segera menghubungi
                      Anda.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-400 font-semibold">
                      ✕ {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-primary hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Butuh Respon Cepat?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="material-icons text-primary text-2xl">
                        phone
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Telepon
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        +62 831-9739-1127
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="material-icons text-primary text-2xl">
                        email
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Email
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ioternakecosystem@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="material-icons text-primary text-2xl">
                        schedule
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Jam Operasional
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Selasa - Sabtu, 9 AM - 6 PM (GMT+7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.1556402676296!2d109.23364189168565!3d-7.395986686315054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655faadad39f19%3A0x26125a4c454dfce7!2sJl.%20Gn.%20Slamet%20XI%20No.40%2C%20Dusun%20II%2C%20Purwosari%2C%20Kec.%20Baturaden%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah%2053126!5e0!3m2!1sid!2sid!4v1765678945216!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
