import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Contentwrapper from "../../components/Contentwrapper/Contentwrapper";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12 w-full px-8">
      <ContentWrapper>
        <div className="flex justify-center  gap-2">
          {/* About Suviam Infra */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              ABOUT B9 CONCEPT
            </h3>

            <p className="text-lg  text-gray-300">
              Innovating Infrastructure, Strengthening Tomorrow. With over a
              decade of expertise, we specialize in RCC pipe manufacturing and
              large-scale infrastructure projects.
            </p>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">
                OUR SERVICES
              </h3>
              <ul className="text-lg space-y-2 list-disc list-inside text-gray-300">
                <li className="hover:text-yellow-500 cursor-pointer">
                  RCC Pipe Manufacturing
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                  Infrastructure Development
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                  Water Management Solutions
                </li>
                <li className="hover:text-yellow-500 cursor-pointer">
                  Sustainable Engineering
                </li>
              </ul>
            </div>
          </div>

          {/* Blog Section */}
          <div className="flex-1 flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              LATEST BLOGS
            </h3>
            <div className="self-start">
              {[20, 30, 31].map((date) => (
                <div className="mb-4" key={date}>
                  <div className="flex space-x-4">
                    <div>
                      <p className="text-white font-medium">Blog title first</p>
                      <span className="text-sm text-gray-400">
                        By Admin / 28
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="flex  flex-col">
            <h3 className="text-lg font-bold  text-yellow-500">OUR SERVICES</h3>

            <div className="text-left flex flex-col justify-center items-start text-gray-300">
              <p>
                <IoLocationOutline size={20} className="inline mr-2" />
                123 Greenway Street, EcoCity, Earth
              </p>
              <p>
                <MdOutlineEmail size={20} className="inline mr-2" />
                support@envocare.com
              </p>
              <p>
                <IoCallOutline size={20} className="inline mr-2" />
                +91 9876543210
              </p>
            </div>

            <br />
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-end space-x-3 mt-4">
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaFacebookF size={20} />
              </div>
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaTwitter size={20} />
              </div>
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaLinkedinIn size={20} />
              </div>
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaRss size={20} />
              </div>
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaYoutube size={20} />
              </div>
              <div className="bg-gray-500 p-3 rounded-full text-white hover:text-yellow-500 cursor-pointer">
                <FaInstagram size={20} />
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row  gap-29 md:gap-29 border-t border-gray-600 pt-6 text-gray-300">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <p> © 2025 Copyright : b9concept All rights reserved.</p>
          </div>
          {/* Right Column */}
          <div className="flex  space-x-3 text-gray-300">
            <p>Developed By Rich System Solutions Pvt Ltd</p>
          </div>
        </div>
        {/* Rich System Solutions */}
      </Contentwrapper>
    </footer>
  );
};

export default Footer;
