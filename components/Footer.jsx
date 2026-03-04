
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#020C1B] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#64FFDA] rounded flex items-center justify-center">
                <span className="text-[#0A192F] font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-[#E6F1FF]">Coding <span className="text-[#64FFDA]">Roots</span></span>
            </Link>
            <p className="text-[#8892B0] leading-relaxed">
              Coding Roots is an offshore application development service based in India. We strive to deliver quality solutions involving high-end technology at reasonable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#112240] rounded-lg text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-[#112240] rounded-lg text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E6F1FF] font-bold text-lg mb-6">Get To Know Us</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Career', 'Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[#E6F1FF] font-bold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-4">
              {['UI/UX Design', 'Full Stack Web', 'AI Development', 'Mobile Apps'].map((item) => (
                <li key={item} className="text-[#8892B0] hover:text-[#64FFDA] cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E6F1FF] font-bold text-lg mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[#8892B0]">
                <MapPin className="text-[#64FFDA] shrink-0" size={20} />
                <span className="text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-[#8892B0]">
                <Phone className="text-[#64FFDA] shrink-0" size={20} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#64FFDA]">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3 text-[#8892B0]">
                <Mail className="text-[#64FFDA] shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#64FFDA]">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#233554] pt-8 flex flex-col md:flex-row justify-between items-center text-[#8892B0] text-sm">
          <p>© 2025 Coding Roots. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#64FFDA]">Terms of Use</a>
            <a href="#" className="hover:text-[#64FFDA]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;