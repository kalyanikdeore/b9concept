import React from "react";
import { Input, Button, Form, Card } from "antd";
import {
  IoCallOutline,
  IoMailOpenOutline, // Corrected email icon
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-10 p-6"
    >
      <div className="mt-25 p-6 sm:p-10 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-blue-600 py-7 text-center">
          Contact Us
        </h1>

        {/* Row 1 - Two Columns (Map & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1 - Google Map */}
          <iframe
            title="Google Map"
            className="w-full h-102 rounded-lg border border-gray-300 shadow-md"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
            loading="lazy"
          />

          {/* Column 2 - Contact Form */}
          <Card className="shadow-lg p-6">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <TextArea rows={4} placeholder="Write your message here..." />
              </Form.Item>
              <div className="flex justify-between mt-4">
                <Button className="w-39" type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </div>

        {/* Row 2 - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 py-15 gap-6 mt-8">
          {/* Phone */}
          <Card className="shadow-md  flex items-center gap-4 hover:bg-blue-50 transition-all">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 text-blue-900 text-2xl border-2 border-[#00afe9] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
            >
              <IoCallOutline />
            </motion.div>
            <div className="py-3">
              <span className="text-gray-700 ">+91 9403455116</span>
            </div>
          </Card>

          {/* Email */}
          <Card className="shadow-md p-4 flex items-center gap-4 hover:bg-blue-50 transition-all">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
            >
              <IoMailOpenOutline /> {/* Fixed here */}
            </motion.div>
            <div className="py-3">
              <span className="text-gray-700 py-8">b9concept123@gmail.com</span>
            </div>
          </Card>

          {/* Address */}
          <Card className="shadow-md p-4 flex items-center gap-4 hover:bg-blue-50 transition-all">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" w-16 h-16 text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
            >
              <IoLocationOutline />
            </motion.div>
            <div className="py-3 text-center">
              <span className="text-gray-700">
                Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik.
              </span>
            </div>
          </Card>

          {/* Business Hours */}
          <Card className="shadow-md p-4 flex items-center gap-4 hover:bg-blue-50 transition-all">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" w-16 h-16 text-blue-900  text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
            >
              <IoTimeOutline />
            </motion.div>
            <div className="py-2">
              <span className="text-gray-700 fe-bold block">
                Monday - Saturday
              </span>
              <span className="text-gray-700 block">Sunday - Closed</span>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
