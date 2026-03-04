
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '../constants';
// types removed for JS

const Portfolio = () => {
  // Double the projects to create a seamless infinite scroll loop
  const extendedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <div className="pt-32 pb-24 overflow-hidden min-h-screen bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4 relative z-20">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#E6F1FF]">
            Our <span className="gradient-text">Digital Craft</span>
          </h1>
          <p className="text-[#8892B0] text-xl max-w-2xl mx-auto">
            Explore our dynamic portfolio through our innovative vertical gallery. Click on a project to view its full technical profile.
          </p>
        </div>

        {/* Dynamic Scrolling Gallery */}
        <div className="relative h-[800px] w-full mt-8 overflow-hidden rounded-3xl border border-[#233554]/30 bg-[#112240]/20">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0A192F] via-transparent to-[#0A192F]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full p-4 md:p-8">
            {/* Column 1: Scrolling Down */}
            <div className="relative h-full overflow-hidden group">
              <div className="flex flex-col gap-8 animate-scroll-down group-hover:pause-animation">
                {extendedProjects.map((project, idx) => (
                  <ProjectCard key={`down-${idx}`} project={project} />
                ))}
              </div>
            </div>

            {/* Column 2: Scrolling Up (Desktop Only) */}
            <div className="relative h-full overflow-hidden group hidden md:block">
              <div className="flex flex-col gap-8 animate-scroll-up group-hover:pause-animation">
                {extendedProjects.map((project, idx) => (
                  <ProjectCard key={`up-${idx}`} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-down {
            animation: scroll-down 40s linear infinite;
          }
          .animate-scroll-up {
            animation: scroll-up 40s linear infinite;
          }
          .pause-animation {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <Link to={`/portfolio/${project.id}`} className="group relative bg-[#112240] rounded-3xl overflow-hidden border border-[#233554] shadow-2xl hover:border-[#64FFDA] transition-all duration-500 block">
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
      <div className="text-[#64FFDA] text-xs font-bold uppercase tracking-widest mb-1">{project.category}</div>
      <h3 className="text-xl font-bold text-[#E6F1FF] mb-3">{project.title}</h3>

      <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-[#64FFDA] flex items-center space-x-2 text-sm font-bold">
          <Eye size={18} />
          <span>View Project Details</span>
        </div>
      </div>
    </div>

    <div className="absolute top-4 right-4 bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
      CLICK TO VIEW
    </div>
  </Link>
);

export default Portfolio;
