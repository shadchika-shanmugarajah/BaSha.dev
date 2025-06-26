export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-instagram", href: "https://www.instagram.com/bashas_update?igsh=dnRxem8xZXAyeWc3&utm_source=qr" },
    { icon: "fab fa-tiktok", href: "https://www.tiktok.com/@shadchu2?_t=ZS-8xVAFYADuID&_r=1" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/shadchika-shanmugarajah-195338322/" },
    { icon: "fab fa-pinterest", href: "https://www.pinterest.com/shadchika20/" },
    { icon: "fas fa-envelope", href: "mailto:shadchika20@gmail.com" },
    { icon: "fab fa-github", href: "https://github.com/shadchika-shanmugarajah" },
  ];

  return (
    <footer className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wave decoration */}
        <div className="relative mb-8">
          <svg className="w-full h-16 text-purple-500" viewBox="0 0 1200 120" fill="currentColor">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
        
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-gradient-pink mb-2">C</h3>
            <p className="text-white text-lg">Basha | Portfolio</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors text-2xl"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          
          <p className="text-gray-400">
            © Copyright 2025-2027 | Basha
          </p>
        </div>
      </div>
    </footer>
  );
}