import React, { useState, useEffect } from 'react';

// --- Data extracted from your resume ---
const portfolioData = {
  name: "Ankit Kumar",
  // NOTE: Replace this with the actual path to your image in your project.
  imageUrl: "\\WhatsApp Image 2025-09-05 at 13.52.43_a5c90f5d.jpg",
  contact: {
    email: "ak8622564@gmail.com",
    phone: "+91-9695284445",
    // NOTE: Add your actual LinkedIn and GitHub profile URLs here
    linkedin: "https://www.linkedin.com/in/ankit-k-8639ba28b/",
    github: "https://github.com/Ankit-euphemism",
    website: "#",
  },
  about: "Passionate about turning ideas into real-world tech solutions. I'm actively learning Data Structures and Algorithms (C++), master in Java, building web apps with React & Node.js, and exploring AI with Python. Whether it's backend logic or frontend design — I strive to make it clean, efficient, and impactful. Explore my work, check out my journey, and let's build something amazing together.",
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
      duration: "July 2025 - Present",
      description: [
        "Developing websites and apps using Cursor AI, Firebase Studio, and other AI Technologies.",
        "Managing seller portals on platforms like Amazon and Flipkart.",
      ],
    },
    {
      role: "Java Programming Intern",
      company: "Code Alpha",
      location: "Lucknow, UP, India",
      duration: "Mar 2024 - Mar 2024",
      description: [
        "Completed tasks using basic and core Java concepts.",
        "Developed a desktop application with Swing and MySQL for data management with an interactive GUI.",
      ],
    },
    {
      role: "Java Programming Intern",
      company: "CodSoft",
      location: "Lucknow, UP, India",
      duration: "Mar 2024 - Mar 2024",
      description: [
        "Finished all assigned tasks within the given timeframe using Java.",
        "Developed a number guessing game using Java's random module and methods.",
      ],
    },
  ],
  projects: [
    {
      title: "Simple Task Manager",
      tech: "HTML/CSS, JavaScript, MySQL, Node.js, Express.js",
      description: "A web app for creating, reading, updating, and deleting tasks.",
      link: "https://github.com/Ankit-euphemism/Simple-Task-Manager.git",
    },
    {
      title: "Weather App",
      tech: "HTML, CSS, JavaScript, OpenWeatherMap API",
      description: "Provides real-time weather information for any city.",
      link: "https://github.com/Ankit-euphemism/weather_app.git",
    },
    {
      title: "Spam Email Detection",
      tech: "Python, Django, BERT, Torch",
      description: "A web application that detects spam emails by analyzing their content.",
      link: "https://github.com/DS-techies/Spam_email_detection.git",
    },
     {
      title: "Student Attendance System",
      tech: "Python, Django, PostgreSQL",
      description: "A web application for viewing, tracking, and marking student attendance.",
      link: "https://github.com/DS-techies/Student-Management-System.git",
    },
    {
      title: "Simple GPU Finder",
      tech: "Python, Flask, Regex, FastAPI",
      description: "A web app to search for graphics cards by title and price range.",
      link: "https://github.com/Ankit-euphemism/Simple-GPU-Finder.git",
    },
    {
      title: "Sign Language Translator",
      tech: "Python, Tensorflow-keras, Media-pipe , OpenCV",
      description: "A Python based Sign translator helps to understand the hands gestures ",
      link: "https://github.com/Ankit-euphemism/sign-language-translator.git",
    },
    {
      title: "Retrieval AI Model",
      tech: "Python, Hugging Face, Pinecone DB, FastAPI",
      description: "LLM-Based Documents Query Retrieval to generate JSON summary of the documents ",
      link: "https://github.com/Ankit-euphemism/Retrival_model.git",
    },
    {
      title: "SPSS-stream",
      tech: "Data Science,IBM SPSS Modeler",
      description: "Data Science Project used to perform RFM Analysis on customer's data",
      link: "https://github.com/DS-techies/SPSS-stream.git",
    },
  ],
    certificates: [
    "Data Concepts", "Web Dev Basics", "Data Analysis", "be10x", "CodeAlpha",
    "CodSoft", "Web Designing - NILET", "AWS APAC Job Simulation"
  ],
  skills: {
    Languages: ["Java", "Python", "C/C++", "SQL (MySQL, Postgres)", "JavaScript", "HTML/CSS", "PHP", "MongoDB"],
    Frameworks: ["React", "Bootstrap", "Node.js", "Express.js", "Django", "Flask", "Angular.js", "RESTful API", "Fast API"],
    DeveloperTools: ["Git", "Github", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Cursor AI", "Firebase"],
    Libraries: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Axios"],
    Others: ["Testing", "Debugging", "Documentation", "Code Maintenance"],
    SoftSkills: ["Problem solving", "Teamwork", "Quick learning", "Communication"]
  }
};

// --- SVG Icons (to avoid external dependencies) ---
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
);
const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);


// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-cyan-400">Ankit Kumar</a>
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={`text-lg transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>{link.label}</a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon className="h-6 w-6 text-gray-300"/>
          </button>
        </div>
      </header>
      
      {/* --- Mobile Menu --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
            <XIcon className="h-8 w-8 text-gray-300"/>
          </button>
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
        </div>
      )}

      <main className="container mx-auto px-6 pt-24">
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-16 md:pt-0">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Ankit Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8"> BTech CSE Student | MERN Stack Developer | DSA (C++) & AI Enthusiast | Internship-Ready Full-Stack Learner </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"><LinkedinIcon className="h-8 w-8"/></a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"><GithubIcon className="h-8 w-8"/></a>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"><MailIcon className="h-8 w-8"/></a>
            </div>
             <a href="#contact" className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">Contact Me</a>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20">
              <img src={portfolioData.imageUrl} alt={portfolioData.name} className="w-full h-full object-cover" />
             </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-800 p-8 rounded-lg shadow-xl">
            <p className="text-lg text-gray-300">{portfolioData.about}</p>
          </div>
        </section>
        
        {/* --- Experience Section --- */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="mb-12 flex justify-center w-full">
                <div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-cyan-400 text-center">{exp.role}</h3>
                    <p className="text-md font-semibold text-gray-300 mb-2 text-center">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.duration} &bull; {exp.location}</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm ">
                      {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>
                <p className="text-xs text-cyan-300 mb-4 italic">{project.tech}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-center bg-gray-700 text-gray-200 py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-5xl mx-auto">
            {Object.entries(portfolioData.skills).map(([category, skillsList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsList.map((skill, index) => (
                    <span key={index} className="bg-gray-700 text-gray-200 py-2 px-4 rounded-full text-sm shadow-md">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* --- Certificates Section --- */}
        <section id="certificates" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
              {portfolioData.certificates.map((cert, index) => (
                  <span key={index} className="bg-gray-800 text-cyan-300 py-2 px-5 rounded-lg text-md shadow-lg">{cert}</span>
              ))}
          </div>
        </section>

      </main>

      {/* --- Contact & Footer --- */}
      <footer id="contact" className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">I'm currently looking for new opportunities. Feel free to reach out if you have any questions or just want to connect!</p>
            <a href={`mailto:${portfolioData.contact.email}`} className="text-xl text-cyan-400 hover:underline mb-8 inline-block">{portfolioData.contact.email}</a> <br/>
            <a className="text-xl text-cyan-400 hover:underline mb-8 inline-block">{portfolioData.contact.phone}</a>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"><LinkedinIcon className="h-8 w-8"/></a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"><GithubIcon className="h-8 w-8"/></a>
            </div>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Ankit Kumar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
