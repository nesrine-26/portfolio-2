import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
      <section className="relative min-h-screen overflow-hidden">
         
         {/* Background */}
         <div className="absolute inset-0 -z-10">
           <Image
             src="/bg2.png"
             alt="background"
             fill
             className="object-cover"
             priority
           />
         </div>
      {/* Content */}
      <div className='text-center max-w-xl space-y-6'>
        
        <h1 className='text-4xl font-bold text-green-700'>
          Get In Touch
        </h1>

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