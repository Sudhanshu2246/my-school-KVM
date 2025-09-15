
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">
        Get in <span className="text-pink-400">Touch</span>
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Have questions about admissions, school programs, or upcoming events? 
        Fill out the form or reach out to us through the following details.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-pink-400 text-2xl" />
          <div>
            <p>कमला बालिका पूर्व माध्यमिक विद्यालय</p>
            <p>राम जानकी मंदिर के पास</p>
            <p>उमरी, पौधनरामपुर, सुल्तानपुर – उत्तर प्रदेश, भारत</p>
          </div>
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
  );
}
