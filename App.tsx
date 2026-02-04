
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Code, 
  Terminal, 
  User, 
  Briefcase, 
  Mail, 
  FileText, 
  ExternalLink, 
  Github, 
  Linkedin,
  Cpu,
  Lock,
  Search,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  Monitor,
  Activity,
  Cpu as Processor,
  Gamepad2,
  Database,
  Phone
} from 'lucide-react';
import { Project, Skill, Experience } from './types';

// --- Constants ---

const PROJECTS: Project[] = [
  {
    title: "NITA-U Race Management System",
    description: "Engineered a high-concurrency event management platform for NITA-U. Optimized for 20,000+ concurrent users with automated CI/CD pipelines and high-availability architecture.",
    tags: ["NestJS", "PostgreSQL", "GitHub Actions", "Render"],
  },
  {
    title: "Enterprise Inventory Engine",
    description: "Full-stack tracking system developed during Refactory CSE. Implements complex credit-cycle logic and real-time inventory tracking with a focus on data integrity.",
    tags: ["Node.js", "MongoDB", "Pug", "Express"]
  },
  {
    title: "Avoider Game: JS Engine",
    description: "A real-time collision-based game built with HTML5 Canvas. Features dynamic obstacle spawning, coordinate-based movement, and optimized high-score tracking logic.",
    tags: ["JavaScript", "Canvas API", "Game Logic"]
  },
  {
    title: "Cybersecurity Infrastructure",
    description: "IAM and SIEM monitoring frameworks developed through Deloitte and TCS simulations, focusing on enterprise-level security protocols and incident response.",
    tags: ["Security", "IAM", "SIEM", "Forensics"],
  }
];

const SKILLS: Skill[] = [
  { name: "NestJS / Node.js", category: "Programming", icon: "Processor" },
  { name: "PostgreSQL / Mongo", category: "Programming", icon: "Database" },
  { name: "SIEM Monitoring", category: "Cybersecurity", icon: "Shield" },
  { name: "IAM Governance", category: "Cybersecurity", icon: "Lock" },
  { name: "TypeScript / JS", category: "Programming", icon: "Code" },
  { name: "System Architecture", category: "Programming", icon: "Monitor" },
  { name: "Git / CI-CD", category: "Tools", icon: "Github" },
  { name: "Technical Integrity", category: "Project Management", icon: "CheckCircle" },
];

const EXPERIENCE: Experience[] = [
  {
    company: "OneSpan Limited ft Refactory Academy ",
    role: "Systems Developer Apprentice",
    period: "2025 - Present",
    points: [
      "Engineered the Race and Information Management System (RIMS) for high-concurrency events.",
      "Optimized database queries and backend logic to handle 20k+ simultaneous requests.",
      "Implemented secure authentication and data management protocols using NestJS and PostgreSQL."
    ]
  },
  {
    company: "Refactory CSE",
    role: "Full-Stack Developer Resident",
    period: "2025 - present ",
    points: [
      "Built a robust Enterprise Inventory System with custom responsive dashboard interfaces.",
      "Architected the system using Node.js, MongoDB, and Pug to ensure scalable data handling.",
      "Developed internal business logic for credit management and sales reporting."
    ]
  },
  {
    company: "Freelance / Independent Projects",
    role: "Systems Consultant",
    period: "2025 - present",
    points: [
      "Designed and deployed custom web solutions for private clients and friends, focusing on user-specific workflows.",
      "Provided technical oversight for small-scale IT network management and software transitions.",
      "Coded independent projects including real-time games and personal productivity tools."
    ]
  }
];

// --- Sub-components ---

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-5xl font-black mb-2 flex items-center gap-3 tracking-tighter">
      {title}
    </h2>
    <p className="text-slate-400 max-w-2xl font-medium">{subtitle}</p>
    <div className="h-1 w-20 bg-blue-600 mt-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-300 animate-[translateX_2s_infinite] -translate-x-full"></div>
    </div>
  </div>
);

const OutstandingOrb: React.FC = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
    <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
    <div className="absolute inset-10 border border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
    <div className="absolute inset-20 border border-blue-300/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
    
    <div className="z-10 bg-slate-950 p-8 rounded-full shadow-[0_0_100px_rgba(59,130,246,0.25)] border border-blue-500/30 flex flex-col items-center justify-center">
      <Processor size={64} className="text-blue-500 animate-pulse mb-2" />
      <span className="text-[10px] font-mono text-blue-400 animate-pulse uppercase tracking-[0.3em] mt-2">Kernel Active</span>
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-bounce"></div>
    <div className="absolute bottom-12 right-12 w-2 h-2 bg-blue-400 rounded-full blur-[1px] animate-pulse"></div>
  </div>
);

const TerminalWindow: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "> system.boot()\n> status: SECURE\n> core: systems_architecture\n> engine: NestJS_PostgreSQL\n> inventory: Enterprise_Engine\n> logic: JS_Canvas\n> deployment: SUCCESS";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 3000); 
      }
    }, 35) as any;
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-950/90 rounded-xl overflow-hidden border border-slate-800 shadow-2xl backdrop-blur-md">
      <div className="bg-slate-900/50 px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
        </div>
        <span className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.4em]">Dev Terminal</span>
      </div>
      <div className="p-8 font-mono text-sm md:text-base min-h-[220px] leading-relaxed">
        <div className="flex gap-3">
          <span className="text-blue-500 font-bold">$</span>
          <span className="text-slate-100 whitespace-pre-wrap">{text}</span>
          <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse ml-1 align-middle"></span>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-950 text-slate-100 selection:bg-blue-600/40 selection:text-white">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-blue-600 p-2 rounded-lg text-white font-black group-hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 group-hover:scale-105">
              DN
            </div>
            <span className="font-black tracking-tighter text-2xl text-slate-100 group-hover:text-blue-400 transition-colors">
              Darvin Ann .
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-blue-400 relative py-2 ${
                  activeSection === item.id ? 'text-blue-500' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col items-end">
               <a 
                href="#" 
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-600/20"
              >
                Resume
              </a>
            </div>
          </div>

          <button className="md:hidden text-slate-100 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-950 border-b border-slate-900 flex flex-col p-8 gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-2xl font-black text-slate-300 tracking-tighter"
              >
                {item.label}
              </button>
            ))}
            <a href="#" className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-center uppercase tracking-widest">
              Resume
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        {/* Hero */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start py-20 relative">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-2 text-[10px] font-black tracking-[0.2em] uppercase bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full animate-pulse">
              Security by design. Resilience by default.
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-slate-100 tracking-tighter leading-[0.85] glitch">
              Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">Systems.</span>
            </h1>
            
            <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mt-8 leading-relaxed font-medium">
              I build secure, resilient software systems and protect critical infrastructure by combining hands-on development with proactive security analysis.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all shadow-2xl shadow-blue-600/40 flex items-center gap-3 uppercase tracking-widest text-sm"
              >
                View Selected Work
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#contact"
                className="px-10 py-5 border-2 border-slate-800 hover:border-blue-500 text-slate-300 hover:text-blue-500 rounded-2xl font-black transition-all backdrop-blur-sm uppercase tracking-widest text-sm"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 md:opacity-100 pointer-events-none transform translate-y-32">
            <OutstandingOrb />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-32 scroll-mt-20">
          <SectionHeading title="Strategic Overview" subtitle="Architectural precision applied to high-performance software." />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed">
              <p>
                With a deep focus on <span className="text-slate-100 font-bold">independent ownership</span> of systems, I bridge the gap between complex requirements and user-centric execution. My background in structural discipline from my technical inspector roles allows me to approach software development with unique rigour.
              </p>
              
              <p>
                I believe that robustness is the only non-negotiable feature. Whether I'm managing an internal IT network or engineering a low-code landing page, my focus remains on <span className="text-blue-500 font-bold">reliability</span>, comprehensive documentation, and performance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <Processor className="text-blue-500 mb-3" size={36} />
                  <h4 className="text-slate-100 font-black mb-1 text-sm uppercase">Performance</h4>
                  <p className="text-xs">Optimized CI/CD & Database query logic.</p>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <Gamepad2 className="text-blue-500 mb-3" size={36} />
                  <h4 className="text-slate-100 font-black mb-1 text-sm uppercase">Logic</h4>
                  <p className="text-xs">Real-time collision & state management.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
               <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/15 transition-all duration-700"></div>
               <TerminalWindow />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32 scroll-mt-20">
          <SectionHeading title="Deployed Systems" subtitle="Real-world solutions for complex technical requirements." />
          
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group relative bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl backdrop-blur-sm">
                <div className="h-64 bg-slate-800/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 opacity-20">
                    <Processor size={160} className="text-blue-500" />
                  </div>
                  <div className="absolute top-8 left-8">
                    <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
                      {project.title.includes("Game") ? <Gamepad2 size={24} /> : <Database size={24} />}
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-black text-slate-100 group-hover:text-blue-400 transition-colors tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.externalUrl && (
                    <a 
                      href={project.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-[0.2em] hover:text-blue-400 mt-4"
                    >
                      Source Code <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-32">
          <SectionHeading title="Experience Track" subtitle="Professional milestones in technical systems and national infrastructure." />
          <div className="space-y-12 max-w-5xl mx-auto">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="group relative pl-12 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800 hover:before:bg-blue-600 transition-all">
                <div className="absolute left-0 top-2 w-1 h-12 bg-blue-600 -translate-x-0"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                  <h3 className="text-3xl font-black text-slate-100 group-hover:text-blue-400 transition-colors tracking-tighter">{exp.role}</h3>
                  <span className="text-blue-500 font-mono text-sm">@ {exp.company}</span>
                </div>
                <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] block mb-6">{exp.period}</span>
                <ul className="space-y-4 text-slate-400 text-lg leading-relaxed">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex gap-4">
                      <ChevronRight size={18} className="text-blue-600 flex-shrink-0 mt-1.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-32 scroll-mt-20">
          <SectionHeading title="Technical Arsenal" subtitle="Core competencies in systems development and cybersecurity." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => {
               const IconMap: any = { Shield, Code, Terminal, Lock, Search, CheckCircle, Github, Monitor, Briefcase, Processor, Database };
               const Icon = IconMap[skill.icon] || Cpu;
               return (
                <div key={i} className="p-6 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all group backdrop-blur-sm">
                  <Icon size={32} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-slate-100 font-black text-sm uppercase tracking-widest">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-tighter">{skill.category}</p>
                </div>
               );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 mb-20 scroll-mt-20">
          <div className="relative bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center space-y-12 overflow-hidden shadow-2xl shadow-blue-600/40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/50 to-transparent"></div>
            
            <div className="space-y-6 relative z-10">
              <h2 className="text-white font-black uppercase tracking-[0.4em] text-xs opacity-70">Initiate Protocol</h2>
              <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Ready to Build.</h3>
              <p className="text-blue-100 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                Whether it's a national-scale management system or a high-performance web platform, I have the integrity to deliver.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
              <a 
                href="mailto:ndarvinann@gmail.com"
                className="group flex items-center gap-4 px-12 py-6 bg-white text-blue-600 font-black rounded-3xl transition-all hover:scale-105 shadow-2xl text-xl uppercase tracking-widest"
              >
                <Mail size={28} />
                <span>Email Me</span>
              </a>
              <div className="flex flex-col items-center md:items-start text-white">
                <a 
                  href="https://wa.me/256705539281" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 mb-1 hover:text-blue-100 transition-colors"
                >
                  <Phone size={20} className="opacity-70" />
                  <span className="text-2xl font-black tracking-tight">+256 705 539 281</span>
                </a>
                <span className="text-xs uppercase font-bold opacity-60 tracking-widest">Available for immediate deploy</span>
              </div>
            </div>

            <div className="flex justify-center gap-12 pt-10 relative z-10 border-t border-white/20">
              <a href="https://github.com/ndarvinann" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-125 transition-all"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/darvin-ann-nakigudde-6a4ab6186/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-125 transition-all"><Linkedin size={32} /></a>
              <a href="#" className="text-white hover:scale-125 transition-all"><FileText size={32} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 text-center border-t border-slate-900/50">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-blue-600 w-12 h-1 rounded-full mb-2"></div>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Darvin Ann Nakigudde / Systems Operational
          </p>
          <p className="text-slate-600 text-[10px] font-mono italic">
            Built with Technical Integrity, React and Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
