"use client";

export default function SchoolJourney() {
  const journey = [
    {
      year: "2004",
      title: "स्थापना वर्ष",
      description:
        "हमारे विद्यालय की स्थापना स्व. श्री संपति राम जी द्वारा मात्र तीन छायादार कक्षाओं से की गई, जिन्हें उन्होंने सेवानिवृत्ति के बाद स्वयं बनाया था।",
    },
    {
      year: "2008",
      title: "विकास चरण",
      description:
        "कई चुनौतियों और विरोध के बावजूद, विद्यालय उनके पुत्र, परिवार और समर्पित समुदाय के सहयोग से निरंतर आगे बढ़ता रहा।",
    },
    {
      year: "2015",
      title: "विस्तार",
      description:
        "छात्रों को बेहतर सीखने के अवसर देने के लिए और अधिक कक्षाएँ और आधुनिक सुविधाएँ जोड़ी गईं।",
    },
    {
      year: "2020",
      title: "मान्यता",
      description:
        "विद्यालय को समाज के सभी वर्गों को किफायती शिक्षा प्रदान करने के लिए स्थानीय स्तर पर मान्यता मिली।",
    },
    {
      year: "2023",
      title: "भविष्य की दृष्टि",
      description:
        "उनकी सोच को आगे बढ़ाते हुए विद्यालय ने डिजिटल शिक्षण पद्धतियाँ अपनाईं ताकि शिक्षा को भविष्य के लिए तैयार किया जा सके।",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          हमारी <span className="text-blue-600">यात्रा</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-8">
          {journey.map((item, index) => (
            <div key={index} className="mb-12 relative">
              {/* Dot */}
              <div className="absolute -left-5 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>

              {/* Content */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition transform bg-white">
                <h3 className="text-xl font-semibold text-blue-700">
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
