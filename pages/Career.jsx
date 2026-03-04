
import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Send } from 'lucide-react';
import { JOBS } from '../constants';

const Career = () => {
  const [form, setForm] = useState({ name: '', email: '', role: '', link: '' });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!emailRegex.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.role.trim()) e.role = 'Please select a role of interest.';
    if (form.link.trim()) {
      try { new URL(form.link); } catch (_) { e.link = 'Please enter a valid URL.'; }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: hook up real submission (API/email)
    alert('Application submitted — thank you!');
    setForm({ name: '', email: '', role: '', link: '' });
    setErrors({});
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-extrabold text-[#E6F1FF]">Join Our <span className="text-[#64FFDA]">Innovative Team</span></h1>
          <p className="text-[#8892B0] text-xl max-w-2xl mx-auto">
            We're looking for passionate individuals who want to push boundaries and build the next generation of digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#E6F1FF] mb-8">Current Openings</h2>
            {JOBS.map((job) => (
              <div key={job.id} className="bg-[#112240] p-6 rounded-2xl border border-[#233554] hover:border-[#64FFDA] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#E6F1FF]">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-[#8892B0] text-sm">
                    <span className="flex items-center space-x-1">
                      <Briefcase size={16} className="text-[#64FFDA]" />
                      <span>{job.type}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={16} className="text-[#64FFDA]" />
                      <span>{job.location}</span>
                    </span>
                  </div>
                </div>
                <button className="bg-[#112240] border border-[#64FFDA] text-[#64FFDA] px-6 py-2 rounded-lg font-bold hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Quick Apply Form */}
          <div className="bg-[#112240] p-6 rounded-3xl border border-[#233554] shadow-2xl h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-[#E6F1FF] mb-4">Quick Application</h2>
            <form className="space-y-3" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-1">Full Name</label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  aria-invalid={!!errors.name}
                  className={`w-full bg-[#0A192F] border ${errors.name ? 'border-red-400' : 'border-[#233554]'} rounded-lg px-3 py-2.5 text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-1">Email Address</label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  aria-invalid={!!errors.email}
                  className={`w-full bg-[#0A192F] border ${errors.email ? 'border-red-400' : 'border-[#233554]'} rounded-lg px-3 py-2.5 text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-1">Role of Interest</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  aria-invalid={!!errors.role}
                  className={`w-full bg-[#0A192F] border ${errors.role ? 'border-red-400' : 'border-[#233554]'} rounded-lg px-3 py-2.5 text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all`}
                >
                  <option value="">Select a role</option>
                  {JOBS.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                </select>
                {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-1">Portfolio/Resume Link</label>
                <input
                  value={form.link}
                  onChange={handleChange}
                  type="url"
                  name="link"
                  aria-invalid={!!errors.link}
                  className={`w-full bg-[#0A192F] border ${errors.link ? 'border-red-400' : 'border-[#233554]'} rounded-lg px-3 py-2.5 text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all`}
                  placeholder="https://..."
                />
                {errors.link && <p className="text-xs text-red-400 mt-1">{errors.link}</p>}
              </div>
              <button type="submit" className="w-full bg-[#64FFDA] text-[#0A192F] py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-all flex items-center justify-center space-x-2">
                <span>Submit Application</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
