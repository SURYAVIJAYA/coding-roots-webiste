
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, Users, Target, Rocket, Eye, Cpu, Code2, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-[#64FFDA]/10 px-4 py-2 rounded-full border border-[#64FFDA]/20">
              <span className="text-[#64FFDA] text-xs font-bold uppercase tracking-widest">Our DNA</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#E6F1FF] leading-tight">
              We Engineer <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="text-xl text-[#8892B0] leading-relaxed max-w-xl">
              Founded on the principles of innovation and user-centricity, Coding Roots has evolved into a powerhouse of digital transformation. We bridge the gap between complex technical challenges and elegant user experiences.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#64FFDA]">500+</div>
                <div className="text-[#8892B0] text-xs uppercase tracking-widest">Students</div>
              </div>
              <div className="w-px h-12 bg-[#233554]" />
              <div className="text-center">
                <div className="text-4xl font-bold text-[#64FFDA]">50+</div>
                <div className="text-[#8892B0] text-xs uppercase tracking-widest">Enterprise Clients</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#233554] group aspect-square lg:aspect-video">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Coding Environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-[#112240] p-8 rounded-3xl border border-[#233554] shadow-2xl animate-bounce-slow z-20">
              <div className="text-4xl font-bold text-[#64FFDA] mb-1">100%</div>
              <div className="text-[#8892B0] font-medium text-sm uppercase tracking-widest">Project Based</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#64FFDA]/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-[#112240] border border-[#233554] rounded-[2.5rem] relative overflow-hidden group hover:border-[#64FFDA]/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} className="text-[#64FFDA]" />
            </div>
            <div className="w-16 h-16 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center text-[#64FFDA] mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#E6F1FF] mb-6">Our Vision</h3>
            <p className="text-[#8892B0] text-lg leading-relaxed">
              To be the global catalyst for digital evolution, where technology meets human intuition. We envision a world where every enterprise, regardless of size, has access to high-performance, scalable digital ecosystems.
            </p>
          </div>

          <div className="p-12 bg-[#112240] border border-[#233554] rounded-[2.5rem] relative overflow-hidden group hover:border-[#64FFDA]/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Rocket size={120} className="text-[#64FFDA]" />
            </div>
            <div className="w-16 h-16 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center text-[#64FFDA] mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#E6F1FF] mb-6">Our Mission</h3>
            <p className="text-[#8892B0] text-lg leading-relaxed">
              Our mission is to engineer growth. We deliver bespoke software solutions and world-class technical training that empowers the next generation of developers and drives operational efficiency for modern businesses.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-16 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#E6F1FF]">The Values That <span className="text-[#64FFDA]">Drive Us</span></h2>
            <p className="text-[#8892B0] max-w-2xl mx-auto text-lg">We operate at the intersection of quality, integrity, and innovation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu size={32} />,
                title: "Tech Sovereignty",
                desc: "We stay ahead of the curve, mastering AI, Cloud, and decentralized systems."
              },
              {
                icon: <Code2 size={32} />,
                title: "Code Excellence",
                desc: "We don't just write code; we architect scalable, bug-free solutions."
              },
              {
                icon: <HeartHandshake size={32} />,
                title: "Client-Centric",
                desc: "Your growth is our benchmark for success. We build for your scale."
              },
              {
                icon: <Globe size={32} />,
                title: "Global Impact",
                desc: "Providing high-end technology from India to every corner of the world."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-[#112240]/50 p-8 rounded-3xl border border-[#233554] hover:bg-[#112240] hover:border-[#64FFDA] transition-all group">
                <div className="text-[#64FFDA] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-[#E6F1FF] font-bold text-xl mb-4">{value.title}</h4>
                <p className="text-[#8892B0] text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Image & CTA */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#112240] border border-[#233554] p-12 lg:p-24 text-center space-y-8">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600"
              alt="Technology Background"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#112240] via-transparent to-[#112240]" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E6F1FF]">Ready to <span className="text-[#64FFDA]">Root</span> Your Success?</h2>
            <p className="text-[#8892B0] text-xl max-w-2xl mx-auto">
              Whether you are an aspiring developer or a growing enterprise, we have the tools and expertise to scale your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link to="/contact" className="bg-[#64FFDA] text-[#0A192F] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#64FFDA]/10">
                Work With Us
              </Link>
              <Link to="/career" className="border border-[#64FFDA] text-[#64FFDA] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#64FFDA]/10 transition-all">
                Explore Careers
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
