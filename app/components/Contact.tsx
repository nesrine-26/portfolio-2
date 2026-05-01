import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
      <section className="relative min-h-screen overflow-hidden">
         
         {/* Background */}
         <div className="absolute inset-0 -z-10">
           <Image
             src="/bg3.png"
             alt="background"
             fill
             className="object-cover"
             priority
           />
         </div>
      {/* Content */}
      <div className='text-center max-w-xl space-y-6 pt-10 mx-auto'>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-center ">
            Get in <span className="text-green-600 text-center pt-10">touch</span>
          </h2>
      

        <p className='text-gray-600'>
          Have a project in mind or just want to say hello?  
          I’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className='space-y-2 text-gray-800'>
          <p><strong>Email:</strong> yourname@email.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Location:</strong> Your City, Country</p>
        </div>

        {/* Button */}
        <button className='bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition'>
          Send Message
        </button>

        {/* Footer Line */}
        <p className='text-sm text-gray-500'>
          Let’s create something amazing together.
        </p>

      </div>
    </section>
  )
}

export default Contact