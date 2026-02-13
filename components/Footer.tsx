import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black pt-16 pb-12 text-white border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="inline-block mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/images/IoTernak.png"
                  alt="IoTernak Logo"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Ekosistem cerdas untuk peternakan modern yang lebih sehat dan
              produktif.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                href="https://instagram.com/ioternak_id/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="6"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* TikTok */}
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                href="https://tiktok.com/@ioternak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.5 2h2.25c.14 2.13 1.47 3.44 3.25 3.5V8.2c-.7.07-1.4-.01-2.05-.23v6.53c0 3.13-2.13 5.5-5.25 5.5-2.7 0-4.7-2.1-4.7-4.7 0-2.6 2-4.7 4.7-4.7.2 0 .4.01.6.03v2.13c-.2-.03-.4-.06-.6-.06-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c1.4 0 2.25-1.1 2.25-2.5V2z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                href="https://youtube.com/@maggenzim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.1 6 12 6 12 6s-6.1 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001C2 9.78 2 12 2 12s0 2.22.2 3.999a2.75 2.75 0 0 0 1.93 1.94C5.9 18 12 18 12 18s6.1 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94C22 14.22 22 12 22 12s0-2.22-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/products/iopakan"
                >
                  ioPakan
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/products/iopeka"
                >
                  ioPeka
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/products/iopantau"
                >
                  ioPantau
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/about-brainers"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm mt-1">
                  location_on
                </span>
                <span className="text-gray-400">Purwokerto, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">
                  email
                </span>
                <a
                  className="text-gray-400 hover:text-white transition-colors"
                  href="mailto:ioternakecosystem@gmail.com"
                >
                  ioternakecosystem@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">
                  phone
                </span>
                <span className="text-gray-400">+62 831-9739-1127 </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-center items-center text-sm text-gray-500 text-center">
          <p>© 2024 IoTernak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
