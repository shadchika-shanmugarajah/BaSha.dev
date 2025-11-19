import { ExternalLink, Download, Cloud, BarChart2, Briefcase, Server } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function CertificateCard({ cert, index }) {
  const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 scroll-reveal ${cardRevealed ? 'revealed' : ''} stagger-${(index % 3) + 1}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
          {cert.icon}
        </div>
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {cert.year}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
      <div className="flex space-x-3">
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 font-medium text-sm flex items-center gap-1 hover:scale-110 transition-transform"
        >
          <ExternalLink size={14} />
          View
        </a>
        {cert.pdfUrl && (
          <a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-1 hover:scale-110 transition-transform"
          >
            <Download size={14} />
            PDF
          </a>
        )}
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 });
  const [experienceRef, experienceRevealed] = useScrollReveal({ threshold: 0.2 });
  const certificates = [
    {
      title: "Data-visualization",
      description: "Developed a strong foundation in Java through hands-on coding, focusing on object-oriented principles, data structures, file handling, and backend development. Built console-based and GUI applications to solidify core concepts.",
      icon: <Cloud className="text-white" size={24} />, // Lucide Cloud icon
      year: "2025",
      url: "https://www.freecodecamp.org/certification/shadchika_Banu/data-visualization",
     
    },
    {
      title: "Java programming",
      description: "Comprehensive data analytics program covering data processing, analysis, and visualization.",
      icon: <BarChart2 className="text-white" size={24} />, // Lucide BarChart2 icon
      year: "2025",
      url: "https://testautomationu.applitools.com/certificate/?id=121644f4",
      
    },
    {
      title: "Automated Visual Testing with C#",
      description: "Experienced in implementing automated UI and visual regression tests using C# frameworks with Selenium.",
      icon: <Server className="text-white" size={24} />, // Lucide Server icon
      year: "2025",
      url: "https://testautomationu.applitools.com/certificate/?id=703a22e8", 
    },
    {
      title: "DataCamp: Understanding Data Science",
      description: "Completed DataCamp's 'Understanding Data Science' program covering key DS roles, workflows, tooling, and how to scope real-world data projects.",
      icon: <Cloud className="text-white" size={24} />,
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d268a090ecd151d6a1bec7e72e4af626e931bea8",
    },
    {
      title: "DataCamp: Introduction to Python",
      description: "DataCamp certification covering Python essentials—data types, control flow, functions, and practical data wrangling fundamentals.",
      icon: <Cloud className="text-white" size={24} />,
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/008da900b74c01b63e75fac30c5254949f5a10fb",
    },
    {
      title: "DataCamp: Introduction to SQL",
      description: "Mastered SQL fundamentals on DataCamp—SELECT queries, filtering, grouping, joins, and insights generation for analytics workflows.",
      icon: <Cloud className="text-white" size={24} />,
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/e7d80f668434f13709d01c190eabe28654fa32fd",
    },
  ];

  const experienceLetter = {
    title: "Software Engineering Internship Experience Letter",
    company: "BUGSYDE SOFTWARE SOLUTIONS (PVT) LTD",
    duration: "2025jan - 2025jun",
    description: "Professional experience letter documenting 6 month of software engineering Internship.",
    pdfUrl: "/internship Confirmation.pdf",
  };

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications & <span className="text-pink-500 animate-gradient">Documents</span>
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>

        {/* Experience Letter Section */}
        <div ref={experienceRef} className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 scroll-reveal ${experienceRevealed ? 'revealed' : ''}`}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{experienceLetter.title}</h3>
            <p className="text-pink-400 font-medium mb-2">{experienceLetter.company}</p>
            <p className="text-gray-400 text-sm mb-4">{experienceLetter.duration}</p>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">{experienceLetter.description}</p>
            <a
              href="/internship Confirmation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Download size={16} />
              Download Experience Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}