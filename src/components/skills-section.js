import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/*
  NOTE:
  This version uses Font Awesome class names for icons.
  Make sure you have Font Awesome loaded in your project (via CDN or npm package).
*/

function SkillCategory({ category, index }) {
  const [categoryRef, categoryRevealed] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div ref={categoryRef} className={`mb-8 scroll-reveal ${categoryRevealed ? 'revealed' : ''} stagger-${index + 1}`}>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
        {category.title} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">()</span>
      </h3>
      <div className={`bg-gradient-to-br ${category.gradient} p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300`}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="bg-gray-900/80 p-3 sm:p-4 rounded-xl hover:bg-gray-800/80 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group cursor-default text-center"
            >
              <i className={`${skill.icon} ${skill.color} text-2xl sm:text-3xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}></i>
              <p className="text-white text-xs sm:text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 });
  const frontEndSkills = [
    { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "Tailwind", icon: "fas fa-wind", color: "text-teal-400" },
    { name: "React", icon: "fab fa-react", color: "text-blue-400" },
    { name: "Angular", icon: "fab fa-angular", color: "text-red-500" },
    { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-600" },
    { name: "Next.js", icon: "fas fa-forward", color: "text-gray-300" },
  ];

  const backEndSkills = [
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Express.js", icon: "fas fa-server", color: "text-gray-400" },
    { name: "PHP", icon: "fab fa-php", color: "text-purple-400" },
    { name: ".NET", icon: "fas fa-code", color: "text-blue-600" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-600" },
    { name: "MySQL", icon: "fas fa-database", color: "text-orange-500" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-500" },
    { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
    { name: "REST API", icon: "fas fa-exchange-alt", color: "text-blue-400" },
  ];

  const programmingSkills = [
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "Java", icon: "fab fa-java", color: "text-red-500" },
    { name: "Python", icon: "fab fa-python", color: "text-yellow-500" },
    { name: "R", icon: "fab fa-r-project", color: "text-blue-400" },
    { name: "C++", icon: "fas fa-code", color: "text-blue-500" },
    { name: "C", icon: "fas fa-code", color: "text-purple-500" },
    { name: "C#", icon: "fas fa-code", color: "text-green-500" },
  ];

  const techToolsSkills = [
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-400" },
    { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
    { name: "Figma", icon: "fab fa-figma", color: "text-pink-500" },
    { name: "IntelliJ", icon: "fas fa-brain", color: "text-red-500" },
    { name: "Power BI", icon: "fas fa-chart-bar", color: "text-yellow-500" },
    { name: "Selenium", icon: "fas fa-robot", color: "text-green-500" },
    { name: "Vercel", icon: "fas fa-play", color: "text-gray-400" }, // changed from triangle to play
    { name: "Netlify", icon: "fas fa-cloud", color: "text-teal-500" },
    { name: "Tableau", icon: "fas fa-chart-line", color: "text-blue-400" },
    { name: "Jupyter", icon: "fas fa-file-code", color: "text-orange-500" },
    { name: "Airflow", icon: "fas fa-wind", color: "text-purple-500" },
  ];

  const skillCategories = [
    { title: "Front-End", skills: frontEndSkills, gradient: "from-pink-500/20 to-purple-500/20" },
    { title: "Back-End", skills: backEndSkills, gradient: "from-purple-500/20 to-blue-500/20" },
    { title: "Programming", skills: programmingSkills, gradient: "from-blue-500/20 to-teal-500/20" },
    { title: "Tech & Tools", skills: techToolsSkills, gradient: "from-teal-500/20 to-pink-500/20" },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">Stack</span> 🚀
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory key={categoryIndex} category={category} index={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
