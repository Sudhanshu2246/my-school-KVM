"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Info,
  Users,
  Star,
  Heart,
} from "@deemlol/next-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-purple-200 transition-colors duration-300 flex items-center group"
                  >
                    <Info className="text-lg mr-3 text-purple-400 group-hover:text-purple-200 transition-colors duration-300" />
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teachers"
                    className="text-gray-300 hover:text-purple-200 transition-colors duration-300 flex items-center group"
                  >
                    <Users className="text-lg mr-3 text-purple-400 group-hover:text-purple-200 transition-colors duration-300" />
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-gray-300 hover:text-purple-200 transition-colors duration-300 flex items-center group"
                  >
                    <Star className="text-lg mr-3 text-purple-400 group-hover:text-purple-200 transition-colors duration-300" />
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/culture"
                    className="text-gray-300 hover:text-purple-200 transition-colors duration-300 flex items-center group"
                  >
                    <Heart className="text-lg mr-3 text-purple-400 group-hover:text-purple-200 transition-colors duration-300" />
                    Our Culture
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-200">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Twitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Details
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Phone className="text-purple-300 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919450976674"
                    className="text-white hover:text-purple-200 hover:underline transition-colors duration-300 font-medium mr-1"
                  >
                    +91 9450976674,
                  </a>
                  <a
                    href="tel:+919565563130"
                    className="text-white hover:text-purple-200 hover:underline transition-colors duration-300 font-medium"
                  >
                    +91 9565563130
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Mail className="text-purple-300 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:kvm@gmail.com"
                    className="text-white hover:text-purple-200 transition-colors duration-300 font-medium"
                  >
                    kvm@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <MapPin className="text-purple-300 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white leading-relaxed">
                    Village- Umari, near Shree ram Janki Temple
                    <br />
                    Post-Paudhanrampur,
                    <br />
                    Sultanpur, Uttar Pradesh 228171, India
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-purple-200 font-semibold mb-2">
                  School Hours
                </h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>Monday - Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Location
            </h3>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.5908353253328!2d82.5199819683267!3d26.164587207825175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399060e2954874df%3A0xefb50833b7c01694!2sKamla%20Bal%20Vidya%20Mandir!5e1!3m2!1sen!2sin!4v1757701137817!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter brightness-90 hover:brightness-100 transition-all duration-300"
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none rounded-lg"></div>
            </div>

            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/qWFE6mADZm6REHdQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <MapPin className="text-lg" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Logo
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2004 Kamla Bal Vidya Mandir. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link
                  href="/privacy"
                  className="hover:text-purple-200 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link
                  href="/terms"
                  className="hover:text-purple-200 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
