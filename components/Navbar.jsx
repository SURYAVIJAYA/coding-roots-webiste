
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Rocket } from 'lucide-react';
import { COURSES } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Placements', path: '/placements' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A192F]/90 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#64FFDA] rounded-lg flex items-center justify-center">
              <span className="text-[#0A192F] font-bold text-2xl">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#E6F1FF]">
              Coding <span className="text-[#64FFDA]">Roots</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">About Us</Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              <button className="flex items-center space-x-1 text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">
                <span>Courses</span>
                <ChevronDown size={16} />
              </button>
              {showCourses && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#112240] border border-[#233554] rounded-xl shadow-2xl p-4 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {COURSES.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="p-2 rounded-lg hover:bg-[#233554] text-[#8892B0] hover:text-[#64FFDA] text-sm transition-all"
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/placements" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">Placements</Link>
            <Link to="/portfolio" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">Portfolio</Link>
            <Link to="/career" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">Career</Link>
            <Link to="/contact" className="text-[#E6F1FF] hover:text-[#64FFDA] font-medium transition-colors">Contact Us</Link>

            <div className="flex items-center space-x-4 ml-4">
              <a href="tel:+918639176137" className="flex items-center space-x-2 text-[#64FFDA] border border-[#64FFDA] px-4 py-2 rounded-lg hover:bg-[#64FFDA]/10 transition-all font-medium text-sm">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <Link to="/contact" className="bg-[#64FFDA] text-[#0A192F] px-5 py-2 rounded-lg hover:scale-105 transition-all font-bold text-sm">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#64FFDA]">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#112240] absolute top-full left-0 w-full border-t border-[#233554] py-6 px-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-lg text-[#E6F1FF] hover:text-[#64FFDA] font-medium">
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <a href="tel:+918639176137" className="flex items-center justify-center space-x-2 text-[#64FFDA] border border-[#64FFDA] p-3 rounded-xl font-bold">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <Link to="/contact" className="bg-[#64FFDA] text-[#0A192F] p-3 rounded-xl text-center font-bold">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;