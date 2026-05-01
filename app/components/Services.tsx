import Image from "next/image";
import {
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineColorSwatch,
} from "react-icons/hi";

const servicesData = [
  {
    title: "Full-Stack Development",
    icon: HiOutlineCode,
    description:
      "Building scalable web applications with Next.js and Sanity.io, focused on performance and clean architecture.",
  },
  {
    title: "UI/UX & Graphic Design",
    icon: HiOutlineColorSwatch,
    description:
      "Creating high-fidelity visuals and intuitive user interfaces using Figma, Photoshop, and Illustrator.",
  },
  {
    title: "Process Optimization",
    icon: HiOutlineLightBulb,
    description:
      "Leveraging Industrial Engineering logic to streamline digital workflows and improve system efficiency.",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-16 sm:pt-20 md:pt-28">
        My <span className="text-green-600">Services</span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="p-6 sm:p-8 border-2 border-green-100 rounded-2xl bg-white hover:border-green-500 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 text-green-600">
                  <Icon size={32} className="sm:w-10 sm:h-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg2.png"
          alt="bg image"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
    </section>
  );
};

export default Services;