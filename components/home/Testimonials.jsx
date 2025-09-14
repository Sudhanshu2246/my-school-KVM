"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "B.Sc. Graduate",
    text: "हमारे स्कूल की शिक्षा ने मुझे जीवन में नई दिशा दी।",
    image: "/students/student1.jpg",
  },
  {
    id: 2,
    name: "Anita Verma",
    role: "Software Engineer",
    text: "शिक्षकों का मार्गदर्शन अद्भुत था।",
    image: "/students/student2.jpg",
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "UP Board Topper",
    text: "यहाँ पढ़ाई ने मुझे आत्मविश्वासी बनाया।",
    image: "/students/student3.jpg",
  },
  {
    id: 4,
    name: "Priya Mishra",
    role: "MCA Student",
    text: "पढ़ाई का आधुनिक तरीका बहुत अच्छा था।",
    image: "/students/student4.jpg",
  },
  {
    id: 5,
    name: "Vikas Yadav",
    role: "IT Professional",
    text: "स्कूल की पढ़ाई ने मेरे करियर में मदद की।",
    image: "/students/student5.jpg",
  },
  {
    id: 6,
    name: "Kiran Gupta",
    role: "Teacher",
    text: "यह स्कूल विद्यार्थियों के भविष्य को आकार देता है।",
    image: "/students/student6.jpg",
  },
  {
    id: 7,
    name: "Suman Tiwari",
    role: "Bank Officer",
    text: "यहाँ की शिक्षा ने मुझे प्रतियोगी परीक्षाओं के लिए तैयार किया।",
    image: "/students/student7.jpg",
  },
  {
    id: 8,
    name: "Amit Kumar",
    role: "Govt. Job",
    text: "शिक्षकगण बहुत सहयोगी और प्रेरणादायक थे।",
    image: "/students/student8.jpg",
  },
  {
    id: 9,
    name: "Neha Patel",
    role: "Ph.D. Scholar",
    text: "विद्यालय का वातावरण पढ़ाई के लिए उत्तम था।",
    image: "/students/student9.jpg",
  },
];

// animation configs
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], // move left fully
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // adjust speed
        ease: "linear",
      },
    },
  },
};

function TestimonialCard({ t }) {
  return (
    <div id="testimonials" className="min-w-[300px] max-w-[320px] p-5 bg-white shadow-md rounded-2xl mx-2 flex flex-col">
      <p className="text-gray-700 text-sm flex-grow">{t.text}</p>
      <div className="flex items-center gap-3 mt-4">
        <img
          src={t.image}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold">{t.name}</h4>
          <p className="text-xs text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-white relative">
      {/* Side label */}
      <div className="absolute left-0 top-25 -translate-y-1/2 rotate-180">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-sm font-semibold tracking-wider rotate-90">
          TESTIMONY
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Alumni Say <br className="hidden md:block" /> About Our School
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

        {/* Row 2 (opposite direction for nice effect) */}
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
