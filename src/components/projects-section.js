import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Spotify ETL Pipeline with AWS",
      description: "Built a complete pipeline using AWS (S3, Glue, Athena, QuickSight) to clean, transform, and visualize Spotify data from Kaggle.",
      icon: "fas fa-stream",
      tags: ["Python", "AWS", "Spark"],
      gradient: "from-pink-500 to-purple-600",
      github: " https://lnkd.in/eyZNQbHn",
      demo: "https://www.linkedin.com/posts/activity-7326851382798413825-2alz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGQLgEBh_mjDAmB5CFq44oi0p382PZBINM",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with React frontend, Node.js backend, and mysql database.",
      icon: "fas fa-shopping-cart",
      tags: ["React", "Node.js", "MySQL","StripApi"],
      gradient: "from-purple-500 to-blue-600",
      github: "https://github.com/shadchika-shanmugarajah/The-gym-club",
      demo: "https://ppa-project-five.vercel.app",
    },
    {
      title: "Power BI Call Center Dashboard",
      description: "Built an interactive dashboard to analyze call center performance using Kaggle data, Power Query, and DAX in Power BI.",
      icon: "fas fa-chart-bar",
      tags: ["powerquery", "Data cleaning", "Dashboard design"],
      gradient: "from-blue-500 to-teal-600",
      github: "https://lnkd.in/esfJB4hU",
      demo: "https://drive.google.com/file/d/1EWaPVelK3Zu5YE0Y5iM7onLadPCp6jKs/view?usp=drive_link",
    },
    {
      title: "Walmart Sales Data ETL Pipeline",
      description: "Designed and implemented an ETL pipeline that pulled sales data from Kaggle via API, cleaned and transformed it using Pandas, and loaded it into PostgreSQL.",
      icon: "fas fa-database",
      tags: ["Python", "PostgreSQL", "ETL Pipeline","Kaggle API"],
      gradient: "from-teal-500 to-green-600",
      github: "https://github.com/shadchika-shanmugarajah/walmart-sales-ETL",
      demo: "https://www.linkedin.com/posts/activity-7321230161062879234-aShq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGQLgEBh_mjDAmB5CFq44oi0p382PZBINM",
    },
    {
      title: "appointment-system",
      description: "React & Node.js app for booking and viewing appointments using JavaScript-based API and UI.",
      icon: "fas fa-calendar-alt",
      tags: ["react.js", "Node.js", "PostgreSQL","JavaScript API"],
      gradient: "from-green-500 to-yellow-600",
      github: "https://github.com/shadchika-shanmugarajah/appointment-system.git",
      demo: "https://social-analytics-demo.com",
    },
    {
      title: "CarCare-Java",
      description: "Developed a car repair service platform using Java, PHP, and MySQL to manage bookings, service records, and customer interactions.",
      icon: "fas fa-wifi",
      tags: ["java", "php", "mysql",],
      gradient: "from-yellow-500 to-orange-600",
      github: "https://github.com/shadchika-shanmugarajah/CarCare-Java.git",
      demo: "https://iot-platform-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient-pink">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${project.icon} text-white text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform`}></i>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}