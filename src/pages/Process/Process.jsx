import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.yh5tI6JVosofOhznWcn-8gHaIp&pid=Api&P=0&h=180",
      text: "Discovery & Detailed evaluation of the health issue",
    },
    {
      id: "02",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.yh5tI6JVosofOhznWcn-8gHaIp&pid=Api&P=0&h=180",
      text: "Identify the Root Cause of the health issuesIdentify the Root Cause of the health issues",
    },
    {
      id: "03",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.yh5tI6JVosofOhznWcn-8gHaIp&pid=Api&P=0&h=180",
      text: "Cognitive Techniques and Personalized Navigation for immediate relief",
    },
    {
      id: "04",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.yh5tI6JVosofOhznWcn-8gHaIp&pid=Api&P=0&h=180",
      text: "Continuous Progress Monitoring & personalized Follow-up",
    },
  ];

  return (
    <section className="text-center py-12">
      <h4 className="text-gray-600 uppercase tracking-widest">How it works</h4>
      {/* <h2 className="text-3xl font-bold mb-8">Step by Step Process</h2> */}
      <h1 className="text-4xl font-extrabold text-blue-600  text-center">
        Step by Step Process{" "}
      </h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg p-6 rounded-lg text-center relative"
          >
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {step.id}
              </div>
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="rounded-lg w-40 h-40 object-cover mx-auto"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
