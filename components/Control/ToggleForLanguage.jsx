"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const HeaderControl = ({ language, setLanguage }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between mb-6">
      {/* Left Toggle - Page Switch */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => router.push("/privacy-policy")}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            pathname === "/privacy-policy"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => router.push("/terms-and-conditions")}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            pathname === "/terms-and-conditions"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Right Toggle - Language */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            language === "english"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hindi")}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            language === "hindi"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default HeaderControl;
