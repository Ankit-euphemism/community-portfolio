import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
// --- Data extracted from your resume ---
const portfolioData = {
  name: "Ankit Kumar",
  // NOTE: Replace this with the actual path to your image in your project.
  imageUrl: "\\ank_pic.jpg",
  contact: {
    email: "ak8622564@gmail.com",
    phone: "+91-9695284445",
    // NOTE: Add your actual LinkedIn and GitHub profile URLs here
    linkedin: "https://www.linkedin.com/in/ankit-k-8639ba28b/",
    github: "https://github.com/Ankit-euphemism",
    website: "#",
  },
  about:
    "Passionate about turning ideas into real-world tech solutions. I'm actively learning Data Structures and Algorithms (Java), hands-on experience in Java, building web apps with React & Node.js, and exploring AI with Python. Whether it's backend logic or frontend design — I strive to make it clean, efficient, and impactful. Explore my work, check out my journey, and let's build something amazing together.",
  education: [
    {
      degree: "Bachelor in Technology (Computer Science and Engineering)",
      institution: "Babu Banarasi Das University",
      location: "Lucknow, UP, India",
      duration: "Aug 2023 - June 2027",
    },
    {
      degree: "Schooling (Till Class-12th)",
      institution: "Modern Academy Inter College",
      location: "Lucknow, UP, India",
      duration: "Apr 2008 - Mar 2023",
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Yuga Yatra Retail OPC Pvt Ltd.",
      location: "Lucknow, UP, India",
      duration: "July, 2025 - September, 2025",
      description: [
        "Developed web applications using modern AI-assisted tools (Cursor AI, Firebase Studio) to improve development speed and productivity",
        "Built and optimized seller-side workflows for e-commerce platforms (Amazon, Flipkart)",
      ],
    },
    {
      role: "Java Programming Intern",
      company: "Code Alpha",
      location: "Lucknow, UP, India",
      duration: "Mar, 2024 - Mar, 2024",
      description: [
        "Built a desktop-based application using Java Swing with MySQL integration for data storage and management",
        "Developed interactive GUI features for enhanced usability and user experience",
      ],
    },
    {
      role: "Java Programming Intern",
      company: "CodSoft",
      location: "Lucknow, UP, India",
      duration: "Mar, 2024 - Mar, 2024",
      description: [
        "Developed Java-based applications using core programming concepts and object-oriented principles",
        "Built a game using randomization logic and modular methods",
      ],
    },
  ],
  projects: [
    {
      title: "SchoolDekho",
      tech: "MERN STACK, Cloudinary, Google Maps API",
      description:
        " Developed a full-stack education platform to help students explore schools, courses, and academic information in atructured way",
      link: "https://github.com/Ankit-euphemism/SchoolDekho",
    },
    {
      title: "taskstag",
      tech: "MERN STACK, MySQL",
      description:
        " Built a full-stack task management application using React, Node.js, Express, and MySQL",
      link: "https://github.com/Ankit-euphemism/Simple-Task-Manager",
    },
    {
      title: "Gale Gallery",
      tech: "React.js, API Integration",
      description:
        "Built a responsive React application fetching real-time weather data using OpenWeather API",
      link: "https://github.com/Ankit-euphemism/weather_app",
    },
    {
      title: "MailClear",
      tech: "Django, BERT, Torch",
      description:
        "Developed an AI-powered web application using BERT and PyTorch for email classification",
      link: "https://github.com/Ankit-euphemism/MailClear",
    },
    {
      title: "CheckInly",
      tech: "Django, PostgreSQL",
      description:
        "Designed a web-based attendance system for marking attendance and generating reports.",
      link: "https://github.com/Ankit-euphemism/CheckInly",
    },
    {
      title: "VidFind",
      tech: "Flask, Regex",
      description:
        " Developed a web application to filter and search GPUs based on title and price range",
      link: "https://github.com/Ankit-euphemism/VidFind",
    },
    {
      title: "Sign Language Translator",
      tech: "Tensorflow-keras, Media-pipe , OpenCV",
      description:
        "Built a real-time gesture recognition system using TensorFlow, MediaPipe, and OpenCV",
      link: "https://github.com/Ankit-euphemism/sign-language-translator",
    },
    // {
    //   title: "Retrieval AI Model",
    //   tech: "Python, Hugging Face, Pinecone DB, FastAPI",
    //   description:
    //     "LLM-Based Documents Query Retrieval to generate JSON summary of the documents ",
    //   link: "https://github.com/Ankit-euphemism/Retrival_model.git",
    // },
    {
      title: "Plinth- Campus ChatRoom",
      tech: "PHP, MySQL, HTML, CSS, JavaScript, jQuery",
      description:
        "Plinth Chatroom is a campus chat application. It uses a pull (polling) model to keep conversations and presence updated in near real time.",
      link: "https://github.com/Ankit-euphemism/Plinth",
    },{
      title: "SPSS-stream",
      tech: "Data Science,IBM SPSS Modeler",
      description:
        "Developed a spss model to perform RFM Analysis on customer's data",
      link: "https://github.com/DS-techies/SPSS-stream",
    },
  ],
  certificates: [
    "Data Concepts",
    "Web Dev Basics",
    "Data Analysis",
    "be10x",
    "CodeAlpha",
    "CodSoft",
    "Web Designing - NILET",
    "AWS APAC Job Simulation",
    " 5-Day AI Agents Course by Kaggle and Google",
    " Deloitte data analysis job simulation",
    "Software Engineer Intern at Yuga Yatra",
  ],
  skills: {
    Languages: ["Java", "Python", "C/C++", "JavaScript", "SQL", "NOSQL", "PHP"],
    Frameworks: [
      "React.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "REST APIs",
    ],
    Databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
    ],
    DeveloperTools: [
      "Git",
      "GitHub",
      "Firebase",
      "AWS",
      "VS Code",
      "IntelliJ",
      "PyCharm",
    ],
    Libraries: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Axios",
      "Multer",
    ],
    Others: [
      "Problem Solving",
      "Debugging and Testing",
      "API Development",
      "Database Design",
    ],
    SoftSkills: ["Teamwork", "Quick learning", "Communication"],
  },
};

// --- SVG Icons (to avoid external dependencies) ---
const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);
const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
      { href: "#certificates", label: "Certificates" },
    { href: "#contact-form", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-gray-900 text-gray-100 font-sans leading-relaxed min-h-screen">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4 sm:py-5 flex justify-between items-center">
          <a href="#home" className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-300 transition-all whitespace-nowrap">
            ✨ Ankit Kumar
          </a>
          <nav className="hidden lg:flex gap-0.5 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2 xs:px-3 sm:px-4 py-2 rounded-lg text-xs xs:text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === link.href.substring(1)
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="lg:hidden p-2 hover:bg-cyan-500/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon className="h-5 w-5 xs:h-6 xs:w-6 text-gray-300" />
          </button>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 xs:top-6 right-3 xs:right-6 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            <XIcon className="h-6 w-6 xs:h-8 xs:w-8 text-gray-300" />
          </button>
          <nav className="flex flex-col gap-6 xs:gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 active:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 2xl:px-10 pt-16 xs:pt-20 sm:pt-24 lg:pt-28">
        {/* --- Hero Section --- */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-8 xs:py-12 sm:py-16 lg:py-20 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 2xl:gap-16"
        >
          <div className="w-full lg:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-8 relative z-10">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <p className="text-cyan-400 font-semibold text-xs xs:text-sm sm:text-base lg:text-lg tracking-widest uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Ankit</span>
              </h1>
            </div>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl 2xl:text-2xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {" "}
              BTech CSE Student | Software Engineer | Full-Stack Developer | DSA (Java) Enthusiast | AI Explorer
            </p>
            <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Building scalable web applications and solving real-world problems with modern tech. Currently exploring full-stack development, AI and machine learning.
            </p>
            <div className="flex justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4 pt-4 xs:pt-5">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 xs:p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30"
              >
                <LinkedinIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 xs:p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30"
              >
                <GithubIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="p-2 xs:p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30"
              >
                <MailIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 xs:gap-4 pt-4 xs:pt-6">
              <a
                href="#contact-form"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-950 font-bold py-2 xs:py-2.5 sm:py-3 px-5 xs:px-6 sm:px-8 text-sm xs:text-base rounded-lg xs:rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 active:scale-95"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-block border-2 border-cyan-400/50 text-cyan-300 font-semibold py-2 xs:py-2.5 sm:py-3 px-5 xs:px-6 sm:px-8 text-sm xs:text-base rounded-lg xs:rounded-xl hover:border-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 active:bg-cyan-500/20"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 mt-6 xs:mt-8 sm:mt-10 lg:mt-0">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 3xl:w-[28rem] 3xl:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-400 shadow-2xl shadow-cyan-500/30 relative">
                <img
                  src={portfolioData.imageUrl}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28 relative z-10">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-center mb-10 xs:mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="h-0.5 xs:h-1 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 p-6 xs:p-8 sm:p-10 lg:p-12 2xl:p-14 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-2xl">
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl 2xl:text-2xl text-gray-200 leading-relaxed">{portfolioData.about}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-24 relative z-10">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="group">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-xl shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:translate-x-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-gray-200 mb-1">{exp.company}</p>
                      <p className="text-sm text-cyan-400/70 mb-4 font-medium">{exp.duration} • {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-3">
                            <span className="text-cyan-400 font-bold mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28 relative z-10">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-center mb-10 xs:mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <div className="h-0.5 xs:h-1 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="group h-full">
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-5 xs:p-6 sm:p-7 rounded-lg xs:rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-2 flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <h3 className="text-lg xs:text-xl sm:text-base lg:text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2 xs:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-xs lg:text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-5">
                      {project.tech.split(", ").slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 xs:px-3 py-1 rounded-full border border-cyan-500/30 font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.tech.split(", ").length > 3 && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 xs:px-3 py-1 rounded-full border border-cyan-500/30 font-medium">
                          +{project.tech.split(", ").length - 3}
                        </span>
                      )}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-2 xs:py-2.5 px-3 xs:px-4 rounded-lg text-xs xs:text-sm transition-all duration-300 gap-2 mt-auto active:scale-95"
                    >
                      View →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28 relative z-10">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-center mb-10 xs:mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
            <div className="h-0.5 xs:h-1 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>
          <div className="max-w-5xl mx-auto space-y-8 xs:space-y-10 sm:space-y-12">
            {Object.entries(portfolioData.skills).map(
              ([category, skillsList], catIndex) => {
                const categoryGradients = [
                  'from-cyan-500 to-blue-500',
                  'from-blue-500 to-purple-500',
                  'from-purple-500 to-pink-500',
                  'from-pink-500 to-rose-500',
                  'from-rose-500 to-orange-500',
                  'from-orange-500 to-amber-500',
                ];
                const gradient = categoryGradients[catIndex % categoryGradients.length];
                
                return (
                  <div key={category}>
                    <h3 className={`text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4 xs:mb-5`}>
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4">
                      {skillsList.map((skill, index) => (
                        <span
                          key={index}
                          className={`bg-gradient-to-r ${gradient} bg-opacity-10 text-gray-200 border border-gray-600/50 hover:border-cyan-400/50 py-1.5 xs:py-2 px-3 xs:px-4 rounded-full text-xs xs:text-sm font-medium shadow-md transition-all duration-300 hover:bg-opacity-20 hover:text-cyan-300 active:scale-95`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </section>

        {/* --- Certificates Section --- */}
        <section id="certificates" className="py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28 relative z-10">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-center mb-10 xs:mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Certifications & Achievements</span>
            </h2>
            <div className="h-0.5 xs:h-1 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
              {portfolioData.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 px-4 xs:px-5 sm:px-6 py-3 xs:py-4 rounded-lg xs:rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-gray-200 font-semibold text-xs xs:text-sm sm:text-base relative text-center">
                    ✓ {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Form Section --- */}
        <section id="contact-form" className="py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28 relative z-10">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </section>
     </main>

      {/* --- Contact & Footer --- */}
      <footer id="contact" className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-900 to-gray-900 border-t border-cyan-500/10 py-12 xs:py-16 sm:py-20 lg:py-24 2xl:py-28">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center space-y-6 xs:space-y-8">
          <div className="space-y-3 xs:space-y-4">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-xs xs:text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              I'm excited about new opportunities, collaborations, and interesting projects. Feel free to reach out!
            </p>
          </div>
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 flex-wrap mb-6 xs:mb-8">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold text-xs xs:text-sm sm:text-base active:scale-95"
            >
              <MailIcon className="h-4 w-4 xs:h-5 xs:w-5" /> {portfolioData.contact.email}
            </a>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold text-xs xs:text-sm sm:text-base active:scale-95"
            >
              📱 {portfolioData.contact.phone}
            </a>
          </div>
          <div className="flex justify-center gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 xs:p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            >
              <LinkedinIcon className="h-5 w-5 xs:h-6 xs:w-6" />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 xs:p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            >
              <GithubIcon className="h-5 w-5 xs:h-6 xs:w-6" />
            </a>
          </div>
          <div className="pt-6 xs:pt-8 border-t border-cyan-500/10">
            <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
              ©2025 Ankit Kumar. Crafted with ✌️❤️😊.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
