"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "राहुल शर्मा",
    role: "बी.एससी. स्नातक",
    text: "हमारे स्कूल की शिक्षा ने मुझे जीवन में नई दिशा दी।",
    image: "/students/student1.jpg",
  },
  {
    id: 2,
    name: "अनीता वर्मा",
    role: "सॉफ़्टवेयर इंजीनियर",
    text: "शिक्षकों का मार्गदर्शन अद्भुत था।",
    image: "/students/student2.jpg",
  },
  {
    id: 3,
    name: "अर्जुन सिंह",
    role: "यूपी बोर्ड टॉपर",
    text: "यहाँ पढ़ाई ने मुझे आत्मविश्वासी बनाया।",
    image: "/students/student3.jpg",
  },
  {
    id: 4,
    name: "प्रिया मिश्रा",
    role: "एम.सी.ए. छात्रा",
    text: "पढ़ाई का आधुनिक तरीका बहुत अच्छा था।",
    image: "/students/student4.jpg",
  },
  {
    id: 5,
    name: "विकास यादव",
    role: "आईटी प्रोफेशनल",
    text: "स्कूल की पढ़ाई ने मेरे करियर में मदद की।",
    image: "/students/student5.jpg",
  },
  {
    id: 6,
    name: "किरण गुप्ता",
    role: "शिक्षिका",
    text: "यह स्कूल विद्यार्थियों के भविष्य को आकार देता है।",
    image: "/students/student6.jpg",
  },
  {
    id: 7,
    name: "सुमन तिवारी",
    role: "बैंक अधिकारी",
    text: "यहाँ की शिक्षा ने मुझे प्रतियोगी परीक्षाओं के लिए तैयार किया।",
    image: "/students/student7.jpg",
  },
  {
    id: 8,
    name: "अमित कुमार",
    role: "सरकारी नौकरी",
    text: "शिक्षकगण बहुत सहयोगी और प्रेरणादायक थे।",
    image: "/students/student8.jpg",
  },
  {
    id: 9,
    name: "नेहा पटेल",
    role: "पीएच.डी. शोधार्थी",
    text: "विद्यालय का वातावरण पढ़ाई के लिए उत्तम था।",
    image: "/students/student9.jpg",
  },
];

// animation configs
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
};

function TestimonialCard({ t }) {
  return (
    <div
      id="testimonials"
      className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] max-w-[320px] p-4 sm:p-5 bg-white shadow-md rounded-2xl mx-2 flex flex-col"
    >
      <p className="text-gray-700 text-sm sm:text-base flex-grow leading-relaxed">
        {t.text}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <img
          src={t.image}
          alt={t.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm sm:text-base font-semibold">{t.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Side label */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-xs sm:text-sm font-semibold tracking-wider rotate-90">
          प्रशंसा
        </div>
      </div> */}

      <div className="px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          हमारे पूर्व विद्यार्थियों की <br className="hidden md:block" /> राय
        </h2>

        {/* Row 1 */}
        <div className="flex overflow-hidden mb-6">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row2-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
