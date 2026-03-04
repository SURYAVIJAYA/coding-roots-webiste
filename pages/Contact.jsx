
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', countryCode: '+91' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value: raw } = e.target;
    let value = raw;
    if (name === 'phone') {
      value = raw.replace(/\D/g, '');
    }
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    const phoneDigits = form.phone.replace(/[^0-9]/g, '');
    if (!phoneDigits) e.phone = 'Please enter your phone number.';
    else if (phoneDigits.length !== 10) e.phone = 'Please enter a 10-digit phone number.';
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!form.email.includes('@')) e.email = 'Email must contain "@".';
    else if (!emailRegex.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // On valid submission show a JS popup (alert). Replace with real submission later.
    alert(`Thank you ${form.name}!\nYour message has been submitted.`);
    setForm({ name: '', phone: '', email: '', message: '', countryCode: '+91' });
    setErrors({});
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#E6F1FF] mb-4">Let's Build Something <span className="text-[#64FFDA]">Great</span></h1>
          <p className="text-[#8892B0] text-xl">Reach out to us for collaborations, inquiries, or just a friendly chat.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#112240] p-6 rounded-3xl border border-[#233554] space-y-3 min-h-[160px]">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center text-[#64FFDA]">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#E6F1FF]">Call Us</h3>
                <p className="text-[#8892B0]">{CONTACT_INFO.phone}</p>
              </div>
              <div className="bg-[#112240] p-6 rounded-3xl border border-[#233554] space-y-3 min-h-[160px]">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center text-[#64FFDA]">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#E6F1FF]">Email Us</h3>
                <p className="text-[#8892B0]">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-3xl border border-[#233554] space-y-3 min-h-[160px]">
              <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center text-[#64FFDA]">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#E6F1FF]">Visit Our Office</h3>
              <p className="text-[#8892B0] leading-relaxed">{CONTACT_INFO.address}</p>
              <div className="mt-4 h-48 rounded-2xl overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <iframe
                  src={CONTACT_INFO.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#112240] p-6 rounded-3xl border border-[#233554] shadow-2xl min-h-[160px]">
            <h2 className="text-3xl font-bold text-[#E6F1FF] mb-8 flex items-center space-x-3">
              <MessageSquare size={32} className="text-[#64FFDA]" />
              <span>Send a Message</span>
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8892B0] mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className={`w-full bg-[#0A192F] border ${errors.name ? 'border-red-400' : 'border-[#233554]'} rounded-md px-3 py-3 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all placeholder:text-[#233554]`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8892B0] mb-2">Phone</label>
                  <div className="flex items-stretch gap-2">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="w-28 bg-[#0A192F] border border-[#233554] rounded-l-md px-3 py-3 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all"
                    >
                      <option value="+91">+91 India</option>
                      <option value="+1">+1 USA</option>
                      <option value="+44">+44 UK</option>
                      <option value="+61">+61 Australia</option>
                      <option value="+92">+92 Pakistan</option>
                      <option value="+234">+234 Nigeria</option>
                      <option value="+971">+971 UAE</option>
                    </select>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.ctrlKey || e.metaKey) return;
                        const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
                        if (allowed.includes(e.key)) return;
                        if (!/^\d$/.test(e.key)) e.preventDefault();
                      }}
                      type="tel"
                      className={`flex-1 min-w-0 bg-[#0A192F] border ${errors.phone ? 'border-red-400' : 'border-[#233554]'} rounded-r-md px-3 py-3 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all placeholder:text-[#233554]`}
                      placeholder="1234567890"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-2">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-2">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className={`w-full bg-[#0A192F] border ${errors.email ? 'border-red-400' : 'border-[#233554]'} rounded-md px-3 py-3 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all placeholder:text-[#233554]`}
                  placeholder="email@example.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-2">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8892B0] mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-[#0A192F] border ${errors.message ? 'border-red-400' : 'border-[#233554]'} rounded-md px-3 py-3 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none transition-all placeholder:text-[#233554]`}
                  placeholder="Tell us about your project or inquiry..."
                />
                {errors.message && <p className="text-xs text-red-400 mt-2">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-[#64FFDA] text-[#0A192F] py-3 rounded-md font-bold text-base hover:scale-105 transition-all shadow-xl shadow-[#64FFDA]/10 flex items-center justify-center space-x-3">
                <span>Submit Inquiry</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
