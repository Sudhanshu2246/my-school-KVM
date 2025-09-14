"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-pink-400">Touch</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions about admissions, school programs, or upcoming
            events? Fill out the form or reach out to us through the following
            details.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <p>
                कमला बालिका पूर्व माध्यमिक विद्यालय ,{" "}
                <br className="hidden md:block" /> राम जानकी मंदिर के पास,{" "}
                <br className="hidden md:block" />
                उमरी, पौधनरामपुर, सुल्तानपुर – उत्तर प्रदेश, भारत
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-400 text-2xl" />
              <div>
                <p>+91 9450976674</p>
                <p>+91 9565563130</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-400 text-2xl" />
              <p>kvm@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/70 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Subject Dropdown */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Reason</option>
              <option value="Admission Inquiry">Admission Inquiry</option>
              <option value="Fee Structure">Fee Structure</option>
              <option value="Teacher Meeting">Teacher Meeting</option>
              <option value="School Programs">School Programs</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:scale-105 transition transform shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
