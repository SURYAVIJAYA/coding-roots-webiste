
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, CheckCircle, ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">Project not found</h1>
        <Link to="/portfolio" className="text-[#64FFDA] mt-4 inline-block underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/portfolio" className="inline-flex items-center space-x-2 text-[#64FFDA] hover:underline mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio Gallery</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <div className="text-[#64FFDA] font-bold uppercase tracking-widest text-sm">{project.category}</div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#E6F1FF] leading-tight">{project.title}</h1>
            </div>

            <p className="text-xl text-[#8892B0] leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#112240] p-6 rounded-2xl border border-[#233554] space-y-3">
                <div className="flex items-center space-x-2 text-[#64FFDA]">
                  <Code2 size={24} />
                  <span className="font-bold">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-[#0A192F] px-3 py-1 rounded-full text-xs text-[#8892B0] border border-[#233554]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#112240] p-6 rounded-2xl border border-[#233554] space-y-3">
                <div className="flex items-center space-x-2 text-[#64FFDA]">
                  <Cpu size={24} />
                  <span className="font-bold">Industry</span>
                </div>
                <p className="text-[#8892B0] text-sm">Enterprise Digital Transformation</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#E6F1FF] flex items-center space-x-2">
                <Layers className="text-[#64FFDA]" size={24} />
                <span>Key Features</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-[#8892B0] bg-[#112240]/40 p-3 rounded-xl border border-[#233554]/50">
                    <CheckCircle className="text-[#64FFDA] shrink-0" size={20} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 lg:sticky lg:top-32">
            <div className="relative group rounded-3xl overflow-hidden border border-[#233554] shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent" />
            </div>

            {/* Explore the Work card removed per request */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;