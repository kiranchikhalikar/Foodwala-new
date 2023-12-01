// src/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-fit py-[24.5px] flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-lg w-full bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-2">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-800 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-3 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Kiran Chikhalikar"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-800 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border border-pink-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
              placeholder="kiran@example.com"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-800 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-3 border border-red-300 rounded-md focus:outline-none focus:ring focus:border-red-500"
              placeholder="Type your message here..."></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-md hover:shadow-xl transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
