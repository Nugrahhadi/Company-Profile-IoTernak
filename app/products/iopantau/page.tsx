"use client";

import { useState, useEffect } from "react";

export default function AquaSenseMonitorDetail() {
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
                ioPantau
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
              <div className="relative w-full aspect-square bg-gradient-to-br dark:from-blue-900/20 dark:to-blue-900/40 rounded-2xl overflow-hidden flex items-center justify-center group">
                <img
                  alt="Magz Vision Maggenzim"
                  className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90"
                  src="/images/product/magz-vision.webp"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 w-full flex flex-col h-full justify-between space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  ioPantau
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  Advanced water quality and level monitoring system with IoT
                  integration. Detect contamination, track water levels, and
                  prevent leaks in real-time across your entire aquaculture or
                  livestock operation.
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
                    4.7 (198 Reviews)
                  </span>
                </div> */}

                <hr className="border-gray-200 dark:border-gray-700 mb-6" />

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Multi-parameter water testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Real-time level monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Leak detection alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-icons text-primary text-base mt-0.5">
                          check_circle
                        </span>
                        <span>Mobile app notifications</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Why Maggenzim?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          water_drop
                        </span>
                        <span>3-Year Warranty</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          eco
                        </span>
                        <span>Eco-Friendly Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-icons text-secondary text-base">
                          phone_in_talk
                        </span>
                        <span>24/7 Technical Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-8">
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Coming Soon
                  </span>
                  {/* <span className="text-lg text-gray-500 dark:text-gray-400 line-through decoration-red-500 decoration-2">
                    $349.00
                  </span>
                  <span className="text-xs font-bold text-primary bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded">
                    SAVE 28%
                  </span> */}
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
                  openModal(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDH3Q3z-qGvT7RiSgxRRz0aWlLn0NvXR-N6KBvQFQnPJOpW8zPR2lQF_yjW7qJ0w7SczWXLNiDi0GLOxLPEyDkVWq0_7HQzF88gBHQl2xvYZxNBwQGONlTFvJYqXflhKKCx8b7MXQ_R4lEFGrJ5qXaQqj8bKHQ58h1S8vYHr5CtQP6vqKwOaRkNKiLKLJGcPh3v8LmEr4vr7Ng3M_DvP3s3JWGu-3_vQGPK9Hm3L6cNfYOw44mYRkG8Y"
                  )
                }
                className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800 p-0"
              >
                <img
                  alt="Water quality sensor installation"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH3Q3z-qGvT7RiSgxRRz0aWlLn0NvXR-N6KBvQFQnPJOpW8zPR2lQF_yjW7qJ0w7SczWXLNiDi0GLOxLPEyDkVWq0_7HQzF88gBHQl2xvYZxNBwQGONlTFvJYqXflhKKCx8b7MXQ_R4lEFGrJ5qXaQqj8bKHQ58h1S8vYHr5CtQP6vqKwOaRkNKiLKLJGcPh3v8LmEr4vr7Ng3M_DvP3s3JWGu-3_vQGPK9Hm3L6cNfYOw44mYRkG8Y"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons text-white">zoom_in</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() =>
                  openModal(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwKSyDvBPMYWnKO1tqGVnB0wy1JfD8lKV-4CPKQ9H6M1nJJd_RHHSaWm5EqMp0Vg_NMFLPRPHvQl8jNkAVjpZIkz91pPGM4eUhTMr2Vx7Fns9jQ93GWfq0pFn9xGKGvtEeWHAzJBq2LBuwmYXEzTx2RqAKDmqv_EgbI5gvDnHTNiLFXxlqN7RJKb0nnPVEBbcKAhAP5P7NfPXz5hRoM9jQquOg1mfKNJw3H7VwOdUwHIljcLQqxngP-3T2DxYnQfBz5s"
                  )
                }
                className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800 p-0"
              >
                <img
                  alt="Real-time monitoring dashboard"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwKSyDvBPMYWnKO1tqGVnB0wy1JfD8lKV-4CPKQ9H6M1nJJd_RHHSaWm5EqMp0Vg_NMFLPRPHvQl8jNkAVjpZIkz91pPGM4eUhTMr2Vx7Fns9jQ93GWfq0pFn9xGKGvtEeWHAzJBq2LBuwmYXEzTx2RqAKDmqv_EgbI5gvDnHTNiLFXxlqN7RJKb0nnPVEBbcKAhAP5P7NfPXz5hRoM9jQquOg1mfKNJw3H7VwOdUwHIljcLQqxngP-3T2DxYnQfBz5s"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons text-white">zoom_in</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() =>
                  openModal(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDu5eZ3pFdH1x5K_H6sE6HKhxV3GnFKWM03FhMFgvvXL6DTZxfQmHyJQPhH5jCM8zn9K_d9BtkQPdFsLVZ_5y5RnWq4KfGZFLDiBKgKi9fIJxULTHJI02JL7VlZjH1qHqOvn_6c6WJNc5CsDxQFE4gBwszzq8gn4l2bqU5WTX3tXb4v-4VTJEf5WQiLFnPyTLJ1lQEVdwQSzBRZU5A0mDIvAo7WMgQCdI7J6Qd1L0cEWu5xzQqW7XM"
                  )
                }
                className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group border border-gray-100 dark:border-gray-800 p-0"
              >
                <img
                  alt="Mobile app notifications"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDu5eZ3pFdH1x5K_H6sE6HKhxV3GnFKWM03FhMFgvvXL6DTZxfQmHyJQPhH5jCM8zn9K_d9BtkQPdFsLVZ_5y5RnWq4KfGZFLDiBKgKi9fIJxULTHJI02JL7VlZjH1qHqOvn_6c6WJNc5CsDxQFE4gBwszzq8gn4l2bqU5WTX3tXb4v-4VTJEf5WQiLFnPyTLJ1lQEVdwQSzBRZU5A0mDIvAo7WMgQCdI7J6Qd1L0cEWu5xzQqW7XM"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons text-white">play_circle</span>
                </div>
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-center">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">
                  "
                </span>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 italic text-sm md:text-base leading-relaxed">
                  AquaSense gives us peace of mind knowing our water quality is
                  constantly monitored. Early leak detection saved us thousands
                  in damages.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-primary tracking-tight">
                  Maggenzim<span className="text-secondary">.</span>
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Innovative Aquaculture Solutions
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
