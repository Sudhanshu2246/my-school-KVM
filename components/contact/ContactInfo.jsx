import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        संपर्क <span className="text-blue-600">करें</span>
      </h2>
      <p className="text-gray-700 leading-relaxed">
        क्या आपके पास प्रवेश, विद्यालय कार्यक्रमों या आगामी आयोजनों से संबंधित प्रश्न हैं? 
        नीचे दिए गए विवरणों के माध्यम से हमसे संपर्क करें या फ़ॉर्म भरें।
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
          <div className="text-gray-800">
            <p>कमला बालिका पूर्व माध्यमिक विद्यालय</p>
            <p>राम जानकी मंदिर के पास</p>
            <p>उमरी, पौधनरामपुर, सुल्तानपुर – उत्तर प्रदेश, भारत</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-blue-600 text-2xl" />
          <div className="text-gray-800">
            <p>+91 9450976674</p>
            <p>+91 9565563130</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <p className="text-gray-800">kvm@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
