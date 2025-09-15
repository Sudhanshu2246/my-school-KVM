"use client";

export default function SchoolJourney() {
  const journey = [
    {
      year: "2004",
      title: "Foundation Year",
      description:
        "Our school was started by Late Mr. Sampati Ram Ji with just three shaded classrooms, built by himself after retirement.",
    },
    {
      year: "2008",
      title: "Growth Phase",
      description:
        "Despite many challenges and resistance, the school kept growing with the support of his son, family, and dedicated community members.",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Added more classrooms and modern facilities to provide better learning opportunities for students.",
    },
    {
      year: "2020",
      title: "Recognition",
      description:
        "The school was recognized locally for providing affordable education to all categories of society.",
    },
    {
      year: "2023",
      title: "Future Vision",
      description:
        "Carrying forward his vision, the school adopted digital learning methods to make education future-ready.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our <span className="text-blue-600">Journey</span>
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
