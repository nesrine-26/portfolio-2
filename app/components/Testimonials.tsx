import Image from 'next/image'
import React from 'react'

// 1. Define your data array
const reviews = [
  {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote: "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg"
  },
    {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote: "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg"
  },
    {
    name: "Alex Rivera",
    role: "Tech Lead at Map.ca",
    quote: "Your ability to bridge complex engineering logic with intuitive UI design is rare. A total game-changer for our project.",
    avatar: "/globe.svg"
  },
]

const Testimonials = () => {
  return (
    <section className='relative min-h-screen '>
       {/* Background Layer */}
        <div className='absolute inset-0 h-full -z-10 w-full  '>
      <Image
                    src="/bg2.png"
                    alt="bg image"
                    width={1000}
                    height={1000}
                    className="object-fill w-full h-full "
                  />
            </div>

       <div className="max-w-7xl mx-auto px-6 py-32 ">
         <h2 className="text-5xl font-bold text-center">
           What People <span className="text-green-500">Say</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
           {reviews?.map((review,index)=>(
            <div className='border border-gray-300 rounded-2xl p-10 '>
                <p>{review.quote}</p>
                <div className='flex items-center gap-2 '>
   <Image
                    src={review.avatar}
                    alt="bg image"
                    width={1000}
                    height={1000}
                    className="object-fill rounded-full bg-amber-500 w-10 h-10  "
                  />
                  <div>
  <h3 className='font-bold text-lg'>{review.name} </h3>
                  <h4 className='font-thin  text-sm italic'>{review.role} </h4>
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