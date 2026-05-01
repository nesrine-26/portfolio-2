import Image from 'next/image'
import React from 'react'

const reviews = [
  {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote:
      "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg",
  },
  {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote:
      "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg",
  },
  {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote:
      "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg",
  },
]

const Testimonials = () => {
  return (
    <section className="dark:text-white relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dark2.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        
        {/* Heading */}
          <h2 className="text-center md:order-2 order-1 text-5xl md:text-6xl font-bold mb-6 dark:text-white text-gray-900">
            What People <span className="text-green-600">Say</span>
          </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-6 sm:gap-8 mt-12 sm:mt-16">
          
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300/30 bg-white/10 backdrop-blur-md 
                         rounded-xl sm:rounded-2xl 
                         p-5 sm:p-6 lg:p-8 
                         hover:scale-[1.02] transition"
            >
              {/* Quote */}
              <p className="text-sm sm:text-base leading-relaxed mb-6">
                {review.quote}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />

                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {review.name}
                  </h3>
                  <h4 className="text-xs sm:text-sm italic text-gray-300">
                    {review.role}
                  </h4>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Testimonials