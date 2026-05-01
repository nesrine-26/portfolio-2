import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="py-10 relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg4.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-xl mx-auto 
                      px-4 sm:px-6 lg:px-8">

        <div className="bg-white/10 backdrop-blur-md 
                        border border-white/20 
                        rounded-2xl shadow-xl 
                        p-6 sm:p-8 lg:p-10 
                        space-y-6 sm:space-y-8 text-center">

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-bold text-green-500 
                           text-3xl sm:text-4xl lg:text-5xl">
              Get In Touch
            </h1>

            <p className="text-gray-200 text-sm sm:text-base">
              Have a project in mind or just want to say hello?  
              I’d love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 text-left">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 sm:py-3 
                         rounded-lg 
                         bg-white/20 text-white 
                         placeholder-gray-300 
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2.5 sm:py-3 
                         rounded-lg 
                         bg-white/20 text-white 
                         placeholder-gray-300 
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2.5 sm:py-3 
                         rounded-lg 
                         bg-white/20 text-white 
                         placeholder-gray-300 
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white 
                         py-2.5 sm:py-3 
                         rounded-lg 
                         text-sm sm:text-base 
                         font-medium 
                         hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-300 text-xs sm:text-sm space-y-1">
            <p><strong>Email:</strong> yourname@email.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Location:</strong> Your City, Country</p>
          </div>

          {/* Footer */}
          <p className="text-gray-400 text-xs sm:text-sm">
            Let’s create something amazing together.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Contact;