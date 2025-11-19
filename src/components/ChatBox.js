import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import projectsData from '../data/projects';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you learn about Shadchika's projects, certifications, skills, and more. Ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const projects = projectsData;

  const certificates = [
    {
      title: "Data-visualization",
      description: "Developed a strong foundation in data visualization through hands-on projects, focusing on creating interactive dashboards and visual analytics.",
      year: "2025",
      url: "https://www.freecodecamp.org/certification/shadchika_Banu/data-visualization",
      keywords: ["data visualization", "visualization", "freecodecamp", "data"]
    },
    {
      title: "Java programming",
      description: "Comprehensive Java programming certification covering object-oriented principles, data structures, file handling, and backend development.",
      year: "2025",
      url: "https://testautomationu.applitools.com/certificate/?id=121644f4",
      keywords: ["java", "programming", "test automation"]
    },
    {
      title: "Automated Visual Testing with C#",
      description: "Experienced in implementing automated UI and visual regression tests using C# frameworks with Selenium.",
      year: "2025",
      url: "https://testautomationu.applitools.com/certificate/?id=703a22e8",
      keywords: ["c#", "csharp", "testing", "automation", "selenium", "visual testing"]
    },
    {
      title: "DataCamp: Understanding Data Science",
      description: "Completed DataCamp's 'Understanding Data Science' program covering key DS roles, workflows, tooling, and real-world project scoping.",
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d268a090ecd151d6a1bec7e72e4af626e931bea8",
      keywords: ["datacamp", "data science", "understanding", "workflow", "roles"]
    },
    {
      title: "DataCamp: Introduction to Python",
      description: "DataCamp certification covering Python essentials—data types, control flow, functions, and practical data wrangling fundamentals.",
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/008da900b74c01b63e75fac30c5254949f5a10fb",
      keywords: ["datacamp", "python", "introduction", "control flow", "wrangling"]
    },
    {
      title: "DataCamp: Introduction to SQL",
      description: "Mastered SQL fundamentals on DataCamp—SELECT queries, filtering, grouping, joins, and insight generation for analytics workflows.",
      year: "2025",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/e7d80f668434f13709d01c190eabe28654fa32fd",
      keywords: ["datacamp", "sql", "introduction", "queries", "joins"]
    }
  ];

  const skills = {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "React", "Angular", "TypeScript", "Next.js"],
    backend: ["Node.js", "Express.js", "PHP", ".NET", "MongoDB", "MySQL", "PostgreSQL", "AWS", "REST API"],
    programming: ["JavaScript", "Java", "Python", "R", "C++", "C", "C#"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "IntelliJ", "Power BI", "Selenium", "Vercel", "Netlify", "Tableau", "Jupyter", "Airflow"]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findProject = (query) => {
    const lowerQuery = query.toLowerCase();
    return projects.find(project => 
      project.keywords.some(keyword => lowerQuery.includes(keyword)) ||
      project.title.toLowerCase().includes(lowerQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  const findCertificate = (query) => {
    const lowerQuery = query.toLowerCase();
    return certificates.find(cert => 
      cert.keywords.some(keyword => lowerQuery.includes(keyword)) ||
      cert.title.toLowerCase().includes(lowerQuery)
    );
  };

  const getSkillCategory = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('front') || lowerQuery.includes('frontend') || lowerQuery.includes('ui')) {
      return { name: 'Front-End', skills: skills.frontend };
    } else if (lowerQuery.includes('back') || lowerQuery.includes('backend') || lowerQuery.includes('server')) {
      return { name: 'Back-End', skills: skills.backend };
    } else if (lowerQuery.includes('programming') || lowerQuery.includes('language')) {
      return { name: 'Programming Languages', skills: skills.programming };
    } else if (lowerQuery.includes('tool') || lowerQuery.includes('tech')) {
      return { name: 'Tech & Tools', skills: skills.tools };
    }
    return null;
  };

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase().trim();

    // Greetings
    if (lowerQuery.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
      return {
        text: "Hello! 👋 How can I help you today? You can ask me about:\n• Projects\n• Certifications\n• Skills\n• Contact information",
        type: 'bot'
      };
    }

    // Projects
    if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('portfolio')) {
      const project = findProject(lowerQuery);
      if (project) {
        return {
          text: `**${project.title}**\n\n${project.description}\n\n**Technologies:** ${project.tags.join(', ')}\n\n🔗 [View Code](${project.github})\n🔗 [View Demo](${project.demo})`,
          type: 'bot',
          project: project
        };
      }
      return {
        text: `Here are the projects:\n\n${projects.map((p, i) => `${i + 1}. **${p.title}** - ${p.tags.join(', ')}`).join('\n')}\n\nAsk me about a specific project for more details!`,
        type: 'bot'
      };
    }

    // Certifications
    if (lowerQuery.includes('certif') || lowerQuery.includes('certificate') || lowerQuery.includes('cert')) {
      const cert = findCertificate(lowerQuery);
      if (cert) {
        return {
          text: `**${cert.title}** (${cert.year})\n\n${cert.description}\n\n🔗 [View Certificate](${cert.url})`,
          type: 'bot',
          cert: cert
        };
      }
      return {
        text: `Here are the certifications:\n\n${certificates.map((c, i) => `${i + 1}. **${c.title}** (${c.year})`).join('\n')}\n\nAsk me about a specific certification for more details!`,
        type: 'bot'
      };
    }

    // Skills
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech') || lowerQuery.includes('know')) {
      const category = getSkillCategory(lowerQuery);
      if (category) {
        return {
          text: `**${category.name} Skills:**\n\n${category.skills.join(', ')}`,
          type: 'bot'
        };
      }
      return {
        text: `**Tech Stack:**\n\n**Front-End:** ${skills.frontend.join(', ')}\n\n**Back-End:** ${skills.backend.join(', ')}\n\n**Programming:** ${skills.programming.join(', ')}\n\n**Tools:** ${skills.tools.join(', ')}\n\nAsk about a specific category for more details!`,
        type: 'bot'
      };
    }

    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('connect')) {
      return {
        text: `**Contact Information:**\n\n📧 Email: shadchika20@gmail.com\n\n📍 Location: Available for onsite | Remote Work\n\n📱 Available: Monday - Friday, 9AM - 6PM\n\n🔗 LinkedIn: [Connect with me](https://www.linkedin.com/in/shadchika-shanmugarajah-195338322/)\n\n💼 GitHub: [View my code](https://github.com/shadchika-shanmugarajah)`,
        type: 'bot'
      };
    }

    // Resume
    if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
      return {
        text: `**Resumes Available:**\n\n📄 [Data Engineering Resume](/resume-data-engineering.pdf)\n\n📄 [Software Engineering Resume](/resume-software-engineering.pdf)`,
        type: 'bot'
      };
    }

    // About
    if (lowerQuery.includes('about') || lowerQuery.includes('who') || lowerQuery.includes('introduce')) {
      return {
        text: `**About Shadchika:**\n\nI'm a Full Stack Data Engineer with a deep passion for software engineering and data-driven innovation. I specialize in developing robust data pipelines, designing scalable architectures, and crafting interactive web applications.\n\nI love building seamless digital experiences that not only look great but also work efficiently behind the scenes!`,
        type: 'bot'
      };
    }

    // Help
    if (lowerQuery.includes('help') || lowerQuery.includes('what can you')) {
      return {
        text: `I can help you with:\n\n📁 **Projects** - Ask about any project (e.g., "Tell me about Spotify project")\n\n🏆 **Certifications** - Ask about certifications (e.g., "What certifications do you have?")\n\n💻 **Skills** - Ask about technical skills (e.g., "What frontend skills?")\n\n📧 **Contact** - Get contact information\n\n📄 **Resume** - Access resume links\n\n💡 Try asking: "Tell me about your projects" or "What skills do you know?"`,
        type: 'bot'
      };
    }

    // Default response
    return {
      text: "I'm not sure I understand. Try asking about:\n• Projects\n• Certifications\n• Skills\n• Contact info\n• Resume\n\nOr type 'help' for more options! 😊",
      type: 'bot'
    };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Generate and add bot response
    setTimeout(() => {
      setIsTyping(false);
      const response = generateResponse(inputValue);
      setMessages(prev => [...prev, {
        ...response,
        timestamp: new Date()
      }]);
    }, 1000 + Math.random() * 500); // Random delay for more natural feel
  };

  const formatMessage = (text) => {
    // Simple markdown-like formatting
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('[') && part.includes('](')) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline">
              {match[1]}
            </a>
          );
        }
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-90' : 'animate-button-pulse'
        }`}
        aria-label="Open chat"
        style={{ 
          display: 'flex', 
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
      >
        {isOpen ? (
          <X size={24} className="animate-message-pop" />
        ) : (
          <div className="relative">
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col animate-slide-up" style={{ display: 'flex', position: 'fixed' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Portfolio Assistant</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 items-end ${message.type === 'user' ? 'justify-end animate-slide-in-right' : 'justify-start animate-slide-in-left'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {message.type === 'bot' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Bot size={18} className="text-pink-400" />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-br-sm'
                      : 'bg-gray-800 text-gray-100 rounded-bl-sm'
                  }`}
                >
                  <div className="text-sm whitespace-pre-line leading-relaxed">
                    {formatMessage(message.text)}
                  </div>
                </div>
                {message.type === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <User size={18} className="text-purple-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-end animate-slide-in-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <Bot size={18} className="text-pink-400" />
                  </div>
                </div>
                <div className="bg-gray-800 text-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

