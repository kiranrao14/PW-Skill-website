
import React from "react";

function Contact() {
  return (
    <div id='contact' className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full h-14 bg-indigo-400 flex justify-between px-4 items-center">
        <div className="text-lg sm:text-2xl text-indigo-700 font-bold">PW Skills</div>
      </nav>

      <div className="space-y-12 w-full px-4">
        {/* Header */}
        <header className="w-full bg-indigo-700 text-white text-center py-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 ">Contact Us</h1>
        </header>

        {/* Main */}
        <main className="w-full flex items-center justify-center min-h-screen px-4">
          <div className="bg-gray-800 border border-gray-500 p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold  text-center mb-6 text-white">
              Get in Touch
            </h2>

            {/* Form Container */}
            <div id="form" className="bg-gray-900 p-6 rounded-lg border border-gray-600 space-y-6 w-full">
              {/* Form Fields */}
              <form className="space-y-6">
                {/* Name Field */}
                <div className="flex flex-col mb-4">
                  <label className="block text-white text-lg mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-indigo-400 rounded bg-gray-900 text-white"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col mb-4">
                  <label className="block text-white text-lg mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-indigo-400 rounded bg-gray-900 text-white"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col mb-4">
                  <label className="block text-white text-lg mb-2">Your Message</label>
                  <textarea
                    className="w-full p-3 border border-indigo-400 rounded bg-gray-900 text-white"
                    rows={5}
                    placeholder="Write your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className=" mt-64 w-full px-4 py-3 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-all shadow-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div className="footer__copyright mt-8 text-sm text-white">
        &#169; Copyright. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
