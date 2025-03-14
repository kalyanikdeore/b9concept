import React from "react";

import { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

const BlogPage = () => {
  const [search, setSearch] = useState("");

  const recentPosts = [
    {
      title:
        "Hon. Supreme Court Judgment on availability of ITC on Plant & /or Machinery",
      date: "2024-10-30 07:11:05",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="md:col-span-2">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src="https://static.wixstatic.com/media/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg"
            alt="Construction site"
            className="w-full h-104 py-5 object-cover rounded-md"
          />
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <div className="mr-2 text-yellow-500" /> - 2024-10-30 07:11:05
          </div>
          <h2 className="text-xl font-bold mt-4">
            Hon. Supreme Court Judgment on availability of ITC on Plant & /or
            Machinery
          </h2>

          <p className="mt-2 text-gray-700 ">
            There always have been controversies regarding the applicability of
            Innovating Infrastructure, Strengthening Tomorrow. With over a
            decade of expertise, we specialize in RCC pipe manufacturing and
            large-scale infrastructure projects.Innovating Infrastructure,
            Strengthening Tomorrow. With over a decade of expertise, we
            specialize in RCC pipe manufacturing and large-scale infrastructure
            projects.Innovating Infrastructure, Strengthening Tomorrow. With
            over a decade of expertise, we specialize in RCC pipe manufacturing
            and large-scale infrastructure projects.Innovating Infrastructure,
            Strengthening Tomorrow. With over a decade of expertise, we
            specialize in RCC pipe manufacturing and large-scale infrastructure
            projects.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div>
        {/* <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
            SEARCH IN SITE
          </h3>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Enter your keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 w-full outline-none"
            />
            <button className="bg-yellow-500 p-2 flex items-center justify-center">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div> */}

        <div className="bg-white shadow-lg rounded-lg mt-6 p-4">
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
            RECENT BLOG
          </h3>
          <ul className="mt-2">
            {recentPosts.map((post, index) => (
              <li key={index} className="border-b py-2">
                <p className="text-blue-700 font-medium">{post.title}</p>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <div className="mr-2 text-yellow-500" />-{post.date}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
