import React from "react";

const TestimonialSection = () => {
  return (
    <div className="mt-12 p-4 sm:p-6 ">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 py-5 text-center">
        Our Patient’s Stories
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 bg-white overflow-hidden">
        {/* Left Side - Small Column */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl py-3 font-semibold">
            Our Patient’s Stories
          </h2>
          <button className="px-4 py-2 border border-yellow-400 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
            We Can Help You
          </button>
        </div>

        {/* Right Side - Large Column with Slide Effect */}
        <div className="w-full md:w-3/5 bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg shadow-gray-400 flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/3">
            <img
              src="https://lionswire.usatoday.com/gcdn/presto/2019/11/13/PPES/7537390b-7351-4bbd-857b-ad77c01d0ae8-Dr._Murphy_Headshot.jpg?width=600&height=750&fit=crop&format=pjpg&auto=webp"
              alt="testimonial"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 sm:pl-4">
            <p className="text-gray-700 text-justify text-sm sm:text-base">
              Dr. Mohan Keshavamurthy conducted my robotic prostatectomy surgery
              on August 5th at Fortis Hospital, Cunningham Road. I am taking the
              liberty of expressing my deep appreciation for the surgery
              performed by him, along with Dr. Shakir Tabrez. The surgery was
              liberty of expressing my deep appreciation for the surgery
              performed by him, along with Dr. Shakir Tabrez. The surgery was
              smooth with minimal side effects.berty of expressing my deep
              appreciation for the surgery performed by him, along with Dr.
              Shakir
            </p>
            <p className="mt-4 py-3 text-gray-500 text-sm sm:text-base">
              - Fortis Hospital CG Road Bangalore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
