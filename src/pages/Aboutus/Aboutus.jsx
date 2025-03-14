import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { ab91, ab92, ab93 } from "../../assets";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LabTestingCenter = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-20 py-8 bg-white">
      {/* About Company */}
      <AboutCompany />
      {/* Map Section */}
      <OurLocations />
      {/* Vision & Mission */}
      <VisionMission />
      {/* Team Meet Section */}
      <VisionaryLeaders />
    </div>
  );
};

const AboutCompany = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Left Section - Image */}
      <div className="relative md:w-1/3">
        <img
          src={ab91}
          alt="Lab Testing"
          className="rounded-lg shadow-lg w-full"
        />
        <div className="absolute top-5 left-5 w-24 h-24 md:w-50 md:h-52 rounded-full border-4 border-white overflow-hidden">
          <img
            src={ab92}
            alt="Scientist"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left mt-8 md:mt-0">
        <p className="text-sm text-blue-600 font-semibold">About Company</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-justify">
          The Largest Network Of Laboratories provider of Testing Center.
        </h2>
        <p className="text-gray-600 py-5 text-justify">
          Mauris ut enim sit amet lacus ornare ullamcorper. Praesent posuere
          tristique mauris non blandit. Mauris ut enim sit amet lacus ornare
          ullamcorper. Praesent posuere tristique mauris non blandit. Mauris ut
          enim sit amet lacus ornare ullamcorper. Praesent posuere tristique
          mauris non blandit. Mauris ut enim sit amet lacus ornare ullamcorper.
          Praesent posuere tristique mauris non blandit. Mauris ut enim sit amet
          lacus ornare ullamcorper. Praesent posuere tristique mauris non
          blandit.
        </p>
        {/* Icons Section */}
        <div className="flex flex-col md:flex-row mt-6 py-5 gap-6">
          <div className="flex items-center space-x-3">
            <img src={ab93} alt="Blood Bank" className="w-20 h-20" />
            <span className="font-semibold text-gray-800">
              Blood Bank & <br /> Chemistry Center
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={ab93} alt="Research" className="w-20 h-20" />
            <span className="font-semibold text-gray-800">
              Chemical Research & <br /> Testing Center
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurLocations = () => {
  return (
    <div className="mt-10 w-full z-10 py-13">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 py-9 text-center">
        Our Locations
      </h1>
      <MapContainer
        className="shadow"
        center={[19.076, 72.8777]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[19.076, 72.8777]}>
          <Popup>Ion Exchange, Mumbai</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const VisionMission = () => {
  return (
    <div className="flex flex-col py-12 items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Vision Section */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Eye className="text-blue-600 w-10 h-10 mb-3" />
          <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
          <p className="text-gray-700 mt-2">
            To be the most trusted and innovative laboratory network, ensuring
            To be the most trusted and innovative laboratory network, ensuring
            To be the most trusted and innovative laboratory network, ensuring
            quality and reliability in testing and research.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Target className="text-blue-600 w-10 h-10 mb-3" />
          <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            We strive to deliver precise and high-quality testing services
            through advanced technology, expert professionals, and a commitment
            To be the most trusted and innovative laboratory network.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const VisionaryLeaders = () => {
  const leaders = [
    {
      name: "Priyanka Mukund Kale",
      position: "Marketing Head",
      description:
        "Aarohi drives innovative marketing strategies to enhance brand presence and engagement.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Laltika Shankar Pawar",
      position: "Creative Director",
      description:
        "Sanya leads the creative team with a vision for compelling storytelling and branding.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Riya Jagdish Mehta",
      position: "Operations Manager",
      description:
        "Riya ensures smooth operations and strategic growth for long-term success.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h1 className="text-3xl font-bold text-blue-600 py-9">Team Meet</h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-24 px-4 md:px-12">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-30 h-30 rounded-full object-cover shadow-lg border border-gray-200"
            />
            <h1 className="  text-2xl font-semibold text-gray-900">
              {leader.name}
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              {leader.position}
            </p>
            <p className="mt-2 text-lg text-gray-700 max-w-xs">
              {leader.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabTestingCenter;
