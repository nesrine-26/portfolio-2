import Image from "next/image";
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineColorSwatch } from "react-icons/hi";

const servicesData = [
  {
    title: "Full-Stack Development",
    icon: <HiOutlineCode size={40} />,
    description: "Building scalable web applications with Next.js and Sanity.io, focused on performance and clean architecture.",
  },
  {
    title: "UI/UX & Graphic Design",
    icon: <HiOutlineColorSwatch size={40} />,
    description: "Creating high-fidelity visuals and intuitive user interfaces using Figma, Photoshop, and Illustrator.",
  },
  {
    title: "Process Optimization",
    icon: <HiOutlineLightBulb size={40} />,
    description: "Leveraging Industrial Engineering logic to streamline digital workflows and improve system efficiency.",
  }
];

const Services = () => {
  return (
    <section className="relative ">
         <h2 className="text-5xl font-bold text-center pt-28 ">
        My <span className="text-green-600">Services</span>
      </h2>
        <div className="max-w-7xl mx-auto px-6 md:py-16 py-10 ">

   
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* We need to map over our servicesData array here */}
      </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="p-8 border-2 border-green-100 rounded-2xl bg-white hover:border-green-500 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
          <p>{service.description} </p>
          </div>
        ))}
      </div>
           </div>
    </section>
  )
}

export default Services