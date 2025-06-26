import { ExternalLink, Download, Cloud, BarChart2, Briefcase, Server } from "lucide-react";

export default function CertificatesSection() {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications & <span className="text-pink-500">Documents</span>
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg flex items-center justify-center">
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
                  className="text-pink-400 hover:text-pink-300 font-medium text-sm flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  View
                </a>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-1"
                >
                  <Download size={14} />
                  PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Letter Section */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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