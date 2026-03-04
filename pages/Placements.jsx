
import React, { useState } from 'react';
import { Award, Briefcase, Star, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { STATS } from '../constants';

const PartnerLogo = ({ name, domain }) => {
  const [hasError, setHasError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Stage 1: Clearbit (High Quality)
  // Stage 2: Google Favicon Service (Reliable)
  // Stage 3: Text Fallback
  const logoUrl = `https://logo.clearbit.com/${domain}?size=256`;
  const fallbackUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className="bg-[#112240] h-32 rounded-2xl flex items-center justify-center border border-[#233554] hover:border-[#64FFDA]/50 hover:bg-[#112240]/80 transition-all group relative overflow-hidden p-4">
      <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#64FFDA] transition-all" />

      {!hasError ? (
        <div className="w-full h-full bg-white rounded-xl p-4 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-105">
          <img
            src={useFallback ? fallbackUrl : logoUrl}
            alt={`${name} logo`}
            onError={() => {
              if (!useFallback) {
                setUseFallback(true);
              } else {
                setHasError(true);
              }
            }}
            className="max-w-full max-h-full object-contain filter contrast-125"
          />
        </div>
      ) : (
        <div className="text-center px-2">
          <Globe className="mx-auto text-[#64FFDA]/20 mb-1" size={20} />
          <span className="text-[#E6F1FF] font-bold text-sm tracking-tight opacity-80 group-hover:opacity-100 group-hover:text-[#64FFDA] transition-all">
            {name}
          </span>
        </div>
      )}

      <div className="absolute bottom-1 text-[8px] text-[#64FFDA] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
        {name}
      </div>
    </div>
  );
};

const Placements = () => {
  const partners = [
    { name: 'TCS', domain: 'tcs.com' },
    { name: 'Infosys', domain: 'infosys.com' },
    { name: 'Accenture', domain: 'accenture.com' },
    { name: 'Capgemini', domain: 'capgemini.com' },
    { name: 'Wipro', domain: 'wipro.com' },
    { name: 'HCL Tech', domain: 'hcl.com' },
    { name: 'Tech Mahindra', domain: 'techmahindra.com' },
    { name: 'IBM', domain: 'ibm.com' },
    { name: 'Amazon', domain: 'amazon.com' },
    { name: 'Microsoft', domain: 'microsoft.com' },
    { name: 'Google', domain: 'google.com' },
    { name: 'Cognizant', domain: 'cognizant.com' }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center space-x-2 bg-[#64FFDA]/10 px-4 py-2 rounded-full border border-[#64FFDA]/20 mb-4">
            <Star size={16} className="text-[#64FFDA]" />
            <span className="text-[#64FFDA] text-xs font-bold uppercase tracking-widest">Career Excellence</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#E6F1FF]">
            Global <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-[#8892B0] text-xl max-w-2xl mx-auto leading-relaxed">
            Our alumni are driving innovation at the world's most influential technology enterprises. Your journey to the top starts here.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-[#112240] p-10 rounded-3xl border border-[#233554] text-center space-y-2 group hover:border-[#64FFDA]/50 transition-all shadow-xl hover:-translate-y-2 duration-300">
              <div className="text-5xl font-extrabold text-[#64FFDA] group-hover:scale-110 transition-transform">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[#8892B0] font-medium uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners & Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          {/* Partners Grid */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#E6F1FF]">Our Recruitment <span className="text-[#64FFDA]">Partners</span></h2>
              <p className="text-[#8892B0] text-lg max-w-xl">
                We bridge the gap between talent and opportunity by collaborating with industry giants and fast-growing tech startups.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {partners.map((partner, idx) => (
                <PartnerLogo key={idx} name={partner.name} domain={partner.domain} />
              ))}
            </div>

            <div className="bg-[#112240]/30 p-8 rounded-3xl border border-dashed border-[#233554] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[#E6F1FF] font-bold text-xl mb-1">Become a Hiring Partner</h4>
                <p className="text-[#8892B0] text-sm">Looking for pre-trained, high-quality technical talent?</p>
              </div>
              <button className="bg-[#64FFDA] text-[#0A192F] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all whitespace-nowrap">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Support Features */}
          <div className="lg:col-span-5 bg-[#112240] rounded-[2.5rem] border border-[#233554] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Award size={180} className="text-[#64FFDA]" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#64FFDA]/10 rounded-2xl flex items-center justify-center text-[#64FFDA] mb-8">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#E6F1FF] mb-8 leading-tight">Elite Career <br />Support Program</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Resume Engineering', desc: 'ATS-optimized resume building by experts.' },
                  { title: 'Mock Interviews', desc: 'Realistic simulation with industry mentors.' },
                  { title: 'Personal Branding', desc: 'LinkedIn optimization and portfolio reviews.' },
                  { title: 'Soft Skills Training', desc: 'Communication and corporate etiquette modules.' },
                  { title: 'Direct Referrals', desc: 'Priority access to our internal hiring network.' },
                  { title: 'Post-Placement Mentorship', desc: 'Support even after you land your dream job.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 bg-[#64FFDA]/20 p-1 rounded-full text-[#64FFDA]">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <div className="text-[#E6F1FF] font-bold text-lg">{item.title}</div>
                      <div className="text-[#8892B0] text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
