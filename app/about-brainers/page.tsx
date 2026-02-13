interface AboutBrainersProps {
  imageClassName?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

export default function AboutBrainers({
  imageClassName = "w-full",
  imageWidth,
  imageHeight,
}: AboutBrainersProps) {
  const team = [
    {
      name: "Nugrahhadi Al Khawarizmi",
      role: "Founder & Chief Executive Officer",
      description:
        "With over 3 years in business & technology, Hadi leads the vision of Maggenzim. His passion lies in bridging the gap between traditional farming and modern IoT solutions to maximize livestock yield.",
      specialty: "Strategic Planning & Innovation",
      image: "images/hadi.png",
      icon: "psychology",
      linkedin: "https://linkedin.com/in/muhammad-nugrahhadi-al-khawarizmi/",
    },
    {
      name: "Arga Aryanta Indrafata",
      role: "Founder & Chief Technology Officer",
      description:
        "An expert systems architect, Arga ensures the IoTernak ecosystem is robust and scalable. He oversees the development of our sensor networks and AI-driven analytics platform.",
      specialty: "IoT Architecture & Data Science",
      image: "images/Arga.png",
      icon: "memory",
      linkedin: "https://linkedin.com/in/argaaryanta/",
    },
    {
      name: "Lula Khaisha Delavia",
      role: "IT Specialist",
      description:
        "A dedicated IT professional who ensures the stability and security of IoTernak's technical infrastructure. Lula manages system administration, network operations, and technical support to keep our platform running smoothly and reliably.",
      specialty: "System Administration & Infrastructure",
      image: "images/Lula_Casual.webp",
      icon: "computer",
      linkedin: "https://linkedin.com/",
    },
    // {
    //   name: "Budi Hartono",
    //   role: "Chief Operations Officer",
    //   description:
    //     "Budi manages on-ground operations, ensuring seamless integration of our tech with farms. His hands-on experience in livestock management is invaluable to our product relevance.",
    //   specialty: "Operations & Logistics",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuA3luu39gN_HA1C7zkiT-p0gRAP0DOXjKVHyJqcWr0pXxTrvbhJ7RBFCFuvo113-KRcuCoE2CVrIjIqc05_d69SlXS4xjXbelK92y0ukZkgI9GHMpmyoEcTPPDZrex1N_XTR4PsgfJq2zhfr2ldaYwWjjT-2-ke-XTuzldQLxj6yBgB4-lPNo0iNVkwJeP8AYsbR5r3sq32s7yEOYwdEhJnRiSlW14XVXLvLR3ERigb_Ir7tymbRlxPAoxFH8S50iILbgZPhJ8qdxY",
    //   icon: "agriculture",
    // },
  ];

  return (
    <>
      <div className="relative py-20 lg:py-32 overflow-hidden">
        {/* Creative background with pattern, gradients, and blur effects */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-secondary/5 dark:via-primary/10 dark:to-secondary/10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto -mt-20 px-4 sm:px-6 lg:px-8 relative z-10 mt-5">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Brainers
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Para inovator di balik pengembangan IoTernak Ecosystem untuk
              peternakan ayam yang lebih cerdas dan berkelanjutan.
            </p>
          </div>

          {/* Team Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 -mt-0 sm:-mt-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-secondary/10 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                  <img
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 relative z-10"
                    src={member.image}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <div className="flex gap-2 sm:gap-3 justify-end">
                      <a
                        className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white text-white transition-colors"
                        href={member.linkedin ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn ${member.name}`}
                      >
                        <svg
                          className="w-3 sm:w-4 h-3 sm:h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium tracking-wide text-xs sm:text-sm uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {member.description}
                  </p>
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="material-icons text-xs sm:text-sm mr-1 text-secondary">
                        {member.icon}
                      </span>
                      {member.specialty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <img
                alt="Team collaborating on tech project"
                className={`rounded-2xl shadow-2xl relative z-10 ${imageClassName}`}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARYwJtNbD71vuPXaKYm9lxQm32eUT0-LSLCL-HoCdVKzg9sofVXBfNIWz2c2vf7F7QelHWz94FJ8IXJtdAXybH65OG9UbDiIjXrI1KytLTeP1Sh3OlJySW6Imk2gAn9oFKQ7CblnOm_G7I4_etFCpeQ1svb0QhpoWb7Xpk1HxBvS4b2mTyaw7ni9iTIn4uiKczosMv214-4GkfFxp0KyEvupm2lXfoEBl8L_ccuWBQHxU9rcGSysXndxeoWBSoQGHn3ayoBFPPLVU"
                width={imageWidth}
                height={imageHeight}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Bergerak untuk Memberi Dampak
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                “Brainers” di IoTernak bukan hanya pengembang teknologi, tetapi
                pemecah masalah yang berkomitmen pada ketahanan pangan. Kami
                percaya bahwa dengan memberdayakan peternak melalui data, kami
                dapat menciptakan masa depan peternakan yang lebih
                berkelanjutan, di Indonesia maupun secara global.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons">eco</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Keberlanjutan
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Mendorong praktik peternakan yang lebih ramah lingkungan
                      dan berkelanjutan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Efisiensi
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Memaksimalkan hasil ternak melalui pemanfaatan data yang
                      cerdas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold group transition-colors"
                  href="#"
                >
                  Join our journey
                  <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
