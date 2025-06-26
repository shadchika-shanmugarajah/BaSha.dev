import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const scrollToSkills = () => {
    const element = document.querySelector("#skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background blobs (no animation) */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gradient-pink">
              Shadchika Shanmugarasa
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            Code. Data. Impact.
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I'm a <span className="text-gradient-purple font-semibold">Data Engineer</span> and <span className="text-gradient-pink font-semibold">Full-Stack Developer</span> turning complex challenges into smart, seamless tech solutions.
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/shadchika-shanmugarajah-195338322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/shadchika-shanmugarajah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:shadchika20@gmail.com"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="Mail"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.instagram.com/bashas_update?igsh=dnRxem8xZXAyeWc3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@shadchu2?_t=ZS-8xVAFYADuID&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.pinterest.com/shadchika20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl sm:text-2xl transition-colors"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
            <a
              href="/resume-data-engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center text-sm sm:text-base"
            >
              Data Engineering Resume
            </a>
            <a
              href="/resume-software-engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pink-500 text-pink-500 px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
            >
              Software Engineering Resume
            </a>
          </div>
        </div>

        {/* Right side - Profile picture inside a colored ring */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative z-[60]">
            {/* Gradient ring */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
              {/* Profile picture with SVG fallback */}
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Shadchika Shanmugarasa"
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={scrollToSkills}
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}