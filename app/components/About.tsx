import Image from "next/image";

const About = () => {
  return (
    <section className="dark:bg-dark ">
      <div className="max-w-7xl mx-auto px-4 py-20 ">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center te">
        
        {/* Left Side: Visual Element */}
        <div className="order-2 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden bg-green-50/30 backdrop-blur-2xl border-2 border-dashed border-green-200 flex items-center justify-center">
          {/* We will place your image here later */}
          <span className="text-green-600 font-medium italic">Visualizing the Polymath Process...</span>
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-center md:order-2 order-1 text-5xl md:text-6xl font-bold dark:text-white text-gray-900">
            About <span className="text-green-600">Me</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
             <p className="dark:text-white">
               {/* Your professional story will go here */}
               I bridge the gap between industrial logic and creative execution...
             </p>
          </div>
        </div>

      </div>
            </div>
    </section>
  );
};

export default About;