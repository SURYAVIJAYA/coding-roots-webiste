
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Monitor,
  ShieldCheck,
  Users,
  Award,
  Clock,
  Briefcase,
  Terminal as TerminalIcon
} from 'lucide-react';
import { EXPERTISE, COURSES, STATS } from '../constants';

const CodeTerminalAnimation = () => {
  const codeLines = [
    "import { AI } from 'coding-roots';",
    "const innovation = new Innovation();",
    "innovation.deploy({ scalable: true });",
    "// Engineering digital growth...",
    "roots.connect(global_ecosystem);",
    "function craftSolutions() {",
    "  return userCentric(design);",
    "}",
    "class HighPerformance extends Core {",
    "  constructor() { super(); }",
    "}",
    "// Driving efficiency 2025",
    "npm install growth-engine",
    "git commit -m 'Final production build'",
    "const api = roots.v2.initialize();",
    "innovation.scale('enterprise');"
  ];

  return (
    <div className="relative w-full h-[450px] bg-[#020C1B] rounded-2xl border border-[#233554] shadow-2xl overflow-hidden font-mono text-[10px] sm:text-xs">
      {/* Terminal Header */}
      <div className="h-8 bg-[#112240] flex items-center px-4 space-x-2 border-b border-[#233554]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
        <div className="ml-2 text-[#8892B0] text-[10px] uppercase tracking-widest flex items-center space-x-1">
          <TerminalIcon size={12} />
          <span>innovation_root.exe</span>
        </div>
      </div>

      {/* Code Loop */}
      <div className="p-4 relative h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020C1B] z-10 pointer-events-none" />
        <div className="space-y-2 animate-code-scroll opacity-60">
          {[...codeLines, ...codeLines].map((line, idx) => (
            <div key={idx} className="flex space-x-4">
              <span className="text-[#233554] select-none">{idx + 1}</span>
              <span className={idx % 3 === 0 ? "text-[#64FFDA]" : idx % 2 === 0 ? "text-[#00BFFF]" : "text-[#8892B0]"}>
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes code-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-code-scroll {
          animation: code-scroll 25s linear infinite;
        }
      `}</style>

      {/* Floating Image Overlay removed per request */}

      {/* Floating animation styles removed since overlay was deleted */}
    </div>
  );
};

const Home = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#64FFDA]/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#00BFFF]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 bg-[#112240] px-4 py-2 rounded-full border border-[#233554]">
                <span className="text-[#64FFDA] text-xs sm:text-sm font-semibold uppercase tracking-wider">Innovative Digital Solutions For Scalable Growth</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#E6F1FF] leading-tight">
                Empowering <span className="gradient-text">Innovation</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8892B0]">
                Crafting High-Performance Digital Ecosystems for Modern Enterprises
              </p>
              <p className="text-[#8892B0] text-base sm:text-lg leading-relaxed max-w-xl">
                At Coding Roots, we don't just build software; we engineer growth. By merging cutting-edge technology with user-centric design, we deliver bespoke web and mobile solutions that drive efficiency and scale businesses.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/portfolio" className="bg-[#64FFDA] text-[#0A192F] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Discover Our DNA</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="border border-[#64FFDA] text-[#64FFDA] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#64FFDA]/10 transition-all text-center">
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              {/* Dynamic Animated Terminal Visual */}
              <div className="relative z-10 group">
                <CodeTerminalAnimation />
                {/* Decorative border elements */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#64FFDA]/20 rounded-2xl -z-10 group-hover:border-[#64FFDA]/40 transition-all duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-[#64FFDA]/5 to-transparent -z-20 blur-3xl opacity-20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#112240]/50 border-y border-[#233554]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E6F1FF] mb-4 uppercase tracking-tighter">Our Expertise</h2>
            <div className="h-1 w-20 bg-[#64FFDA] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Category Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              {EXPERTISE.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExpertise(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all font-semibold flex items-center justify-between group ${activeExpertise === idx ? 'bg-[#64FFDA] text-[#0A192F]' : 'text-[#8892B0] hover:bg-[#233554]'}`}
                >
                  <span>{item.category}</span>
                  <ArrowRight size={18} className={`transition-transform ${activeExpertise === idx ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-50'}`} />
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-in fade-in zoom-in duration-300">
                {EXPERTISE[activeExpertise].tools.map((tool, idx) => {
                  return (
                    <div key={idx} className="bg-[#112240] border border-[#233554] p-4 rounded-xl text-center group hover:border-[#64FFDA] hover:translate-y-[-4px] transition-all shadow-lg">
                      <span className="text-sm font-medium text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#E6F1FF]">Explore Our Courses</h2>
              <p className="text-[#8892B0] max-w-xl text-lg">
                Build a future-proof career with our industry-leading technical training programs designed by experts.
              </p>
            </div>
            <Link to="/contact" className="text-[#64FFDA] flex items-center space-x-2 font-bold hover:underline">
              <span>View All Courses</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-[#112240] p-6 rounded-3xl border border-[#233554] hover:border-[#64FFDA] transition-all group flex flex-col h-full shadow-2xl">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[16/10] relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#E6F1FF] mb-4 group-hover:text-[#64FFDA] transition-colors">{course.title}</h3>
                  <p className="text-[#8892B0] mb-8 flex-grow leading-relaxed">{course.description}</p>
                  <Link to={`/courses/${course.id}`} className="inline-flex items-center space-x-2 text-[#64FFDA] font-bold group/btn self-start">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements & Stats */}
      <section className="py-24 bg-[#0A192F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#64FFDA]">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[#8892B0] font-medium uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#112240] rounded-3xl p-12 border border-[#233554] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award size={120} className="text-[#64FFDA]" />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#E6F1FF] mb-8">Our Success Stories</h2>
              <div className="space-y-6 italic text-[#8892B0] text-xl leading-relaxed">
                "Coding Roots completely transformed my career path. The mentors are top-notch and the project-based learning approach helped me secure a position at a leading tech firm."
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-14 h-14 bg-[#233554] rounded-full overflow-hidden border-2 border-[#64FFDA]">
                  <img src="https://picsum.photos/200" alt="Student" />
                </div>
                <div>
                  <div className="text-[#E6F1FF] font-bold">Rohan Sharma</div>
                  <div className="text-[#64FFDA] text-sm">Full Stack Developer @ Tech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
