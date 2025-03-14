import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ab92, ab91, ab93 } from "../../assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const images = [
  {
    src: ab91,
    title: "Slide 1",
    desc: "This is the first slide description.",
  },
  {
    src: ab92,
    title: "Slide 2",
    desc: "This is the second slide description.",
  },
  {
    src: ab93,
    title: "Slide 3",
    desc: "This is the third slide description.",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full h-117 overflow-hidden rounded-lg shadow-lg mb-20">
        <motion.img
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          alt="Slide"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
        {/* <motion.div
          className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold">{images[currentIndex].title}</h2>
          <p className="text-sm">{images[currentIndex].desc}</p>
        </motion.div> */}
      </div>

      {/* Visionary Leaders Section */}
      <MedicalRecordsBanner />
    </div>
  );
}

const MedicalRecordsBanner = () => {
  return (
    <div className="my-12 mx-2">
      <div className="bg-blue-500 py-6 rounded-lg p-6 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          All medical records, reports & prescriptions in one place <br />
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow">
            Find Your Solution Today
          </button>
        </div>

        <img
          src="https://fhlazwebsap01.blob.core.windows.net/drupal-data/inline-images/report.png"
          alt="Medical Reports"
          className="h-27 w-45"
        />
      </div>
      <AnimatedCards />
    </div>
  );
};

const cards = [
  {
    // src: ab91,
    title:
      "World Kidney Day 2025: Understanding the Importance of early Kidney Health Testing",
    author: "admin",
    date: "Mar 11, 2025",
    src: ab91,
  },
  {
    category: "Nephrology",
    title:
      "World Kidney Day 2025: Understanding the Importance of early Kidney Health Testing",
    author: "admin",
    date: "Mar 11, 2025",
    image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
  },
  {
    category: "Gastroenterology and Hepatobiliary Science",
    title: "Pancreatic Health: 5 Warning Signs You Should Never Overlook",
    author: "Dr. Sushrut Singh",
    date: "Mar 11, 2025",
    image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
  },
  {
    category: "Gastroenterology and Hepatobiliary Science",
    title:
      "Multi-Visceral Resection: A Complex Surgical Approach for Advanced Pelvic Malignancies",
    author: "Dr. Sreedhara V.",
    date: "Mar 10, 2025",
    image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
  },
];

function AnimatedCards() {
  return (
    <div>
      <h1 className="text-4xl py-8 text-blue-600 text-center font-semibold">
        Key Problems & Solutions
      </h1>
      <div className="flex gap-6 overflow-hidden justify-center py-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-80 bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={ab91}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            {/* <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded">
                {card.category}
              </div> */}
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-500 text-sm">
                {card.author} | {card.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <Accordion />
    </div>
  );
}

const faqData = [
  {
    question: "What is F9 Concept ",
    answer:
      "F9 Concept INFRA PRIVATE LIMITED is a leading manufacturer of Reinforced Cement Concrete (RCC) pipes and a construction company specializing in irrigation projects. Established in 2023, the company is dedicated to delivering high-quality products and services.",
  },
  {
    question: "What products does F9 Concept offer?",
    answer:
      "We offer a comprehensive range of RCC pipes, including plain and socket type pipes, reinforced pipes for high-pressure applications (NP3 and NP4 classes), and custom-designed precast cement articles.",
  },
  {
    question: "What industries does F9 Concept serve?",
    answer:
      "We serve government agencies, construction firms, and civil engineering contractors, primarily across the North Maharashtra region.",
  },
  {
    question: "What makes F9 Concept unique in the market?",
    answer:
      "F9 Concept is one of the few private limited companies that manufactures RCC pipes and consumes them in-house for construction projects. This provides a competitive advantage in project efficiency and cost management.",
  },
  {
    question: "What is F9 Concept's commitment to sustainability?",
    answer:
      "We prioritize eco-friendly manufacturing practices and produce RCC pipes designed to minimize environmental impact while maximizing performance and longevity.",
  },
  {
    question: "How can I contact F9 Concept INFRA PRIVATE LIMITED?",
    answer:
      "You can reach us at Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik, or call us at 9403455116 / 9403455280. You can also email us at F9 Conceptinfra@gmail.com.",
  },
];

const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" border-gray-700 w-full text-xs md:text-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-left p-4 bg-gray-600 text-white font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="p-1 text-black   overflow-hidden">{faq.answer}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-palanquin text-center text-blue text-xl md:text-4xl font-bold p-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// export default Accordion;
