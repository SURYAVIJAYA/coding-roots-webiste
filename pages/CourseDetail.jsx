
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { ArrowLeft, CheckCircle, Clock, BookOpen, ShieldCheck } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-bold text-white">Course not found</h1>
        <Link to="/" className="text-[#64FFDA] mt-4 inline-block underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-[#64FFDA] hover:underline mb-12">
          <ArrowLeft size={20} />
          <span>Back to All Courses</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold text-[#E6F1FF]">{course.title}</h1>
            <p className="text-xl text-[#8892B0] leading-relaxed">
              {course.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#112240] p-6 rounded-2xl border border-[#233554] flex items-center space-x-4">
                <Clock className="text-[#64FFDA]" size={32} />
                <div>
                  <div className="text-[#E6F1FF] font-bold">Duration</div>
                  <div className="text-[#8892B0] text-sm">3-6 Months</div>
                </div>
              </div>
              <div className="bg-[#112240] p-6 rounded-2xl border border-[#233554] flex items-center space-x-4">
                <BookOpen className="text-[#64FFDA]" size={32} />
                <div>
                  <div className="text-[#E6F1FF] font-bold">Curriculum</div>
                  <div className="text-[#8892B0] text-sm">Hands-on Labs</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#E6F1FF]">What You Will Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-[#8892B0]">
                    <CheckCircle className="text-[#64FFDA]" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#112240] p-8 rounded-3xl border border-[#233554] shadow-2xl space-y-6 sticky top-32">
            <h3 className="text-2xl font-bold text-[#E6F1FF] text-center">Enroll in {course.title}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // basic client-side gather — in real app, send to API
                const formEl = e.currentTarget;
                const data = new FormData(formEl);
                const name = data.get('name');
                const email = data.get('email');
                const contact = data.get('contact');
                const qualification = data.get('qualification');
                if (!name || !email || !contact) {
                  alert('Please fill name, email and contact before enrolling.');
                  return;
                }
                alert(`Enrolled ${name} for ${course.title}. We will contact you at ${email || contact}.`);
                formEl.reset();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-[#8892B0] mb-1">Name</label>
                <input name="name" required className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-3 py-2 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm text-[#8892B0] mb-1">Email</label>
                <input name="email" type="email" required className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-3 py-2 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-[#8892B0] mb-1">Contact</label>
                <input name="contact" required className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-3 py-2 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none" placeholder="1234567890" />
              </div>
              <div>
                <label className="block text-sm text-[#8892B0] mb-1">Qualification</label>
                <input name="qualification" className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-3 py-2 text-sm text-[#E6F1FF] focus:border-[#64FFDA] outline-none" placeholder="e.g. B.Des, B.Tech" />
              </div>
              <button type="submit" className="w-full bg-[#64FFDA] text-[#0A192F] py-3 rounded-md font-bold text-base hover:scale-105 transition-all shadow-xl shadow-[#64FFDA]/10">Enroll Now</button>
              <p className="text-xs text-[#8892B0] text-center">100% Secure Payment | Refundable if cancelled within 48 hours</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;