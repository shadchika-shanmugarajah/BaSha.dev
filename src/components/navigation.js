import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { href: "#home", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#certificates", label: "CERTIFICATES" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg" : "bg-black/50 backdrop-blur-lg"
      } border-b border-gray-800`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-pink-500">BaSha.dev</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="/resume-data-engineer.pdf"
              download
              className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors w-full text-left tracking-wider"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume-data-engineer.pdf"
                download
                className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mt-4"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}