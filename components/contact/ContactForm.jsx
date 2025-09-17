"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("भेजा जा रहा है...");

    try {
      const result = await emailjs.send(
        "service_clsf43q",
        "template_9bvuwvb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        "QRYxZAaxVKjCGMtXI"
      );

      console.log("EmailJS result:", result.text);
      setStatus("✅ संदेश सफलतापूर्वक भेजा गया!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS error:", error);
      setStatus("❌ संदेश भेजने में असफल। कृपया पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="पूरा नाम"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="ईमेल पता"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          name="phone"
          placeholder="फ़ोन नंबर"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">कारण चुनें</option>
          <option value="Admission Inquiry">प्रवेश संबंधी जानकारी</option>
          <option value="Fee Structure">शुल्क संरचना</option>
          <option value="Teacher Meeting">शिक्षक से मुलाकात</option>
          <option value="School Programs">स्कूल कार्यक्रम</option>
          <option value="Other">अन्य</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="अपना संदेश लिखें"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {status && (
        <p
          className={`text-sm mt-2 ${
            status.startsWith("✅")
              ? "text-green-600"
              : status.startsWith("❌")
              ? "text-red-600"
              : "text-yellow-600"
          }`}
        >
          {status}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold transition transform shadow-md ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105"
        }`}
      >
        {loading ? "भेजा जा रहा है..." : "संदेश भेजें"}
      </button>
    </form>
  );
}
