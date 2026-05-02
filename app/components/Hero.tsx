import Image from "next/image";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">      
      {/* Background Image */}
       <Image
        src="/bg1.png"
        alt="Creative Background"
        fill
        priority
        className="object-cover dark:hidden block"
      />
      <Image
        src="/dark.png"
        alt="Creative Background"
        fill
        priority
        className="object-cover  hidden dark:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="italic font-black leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8
                       text-[clamp(42px,14vw,120px)] dark:text-white">
          <span className="text-green-500">G</span>raphic<br />
          Desi<span className="text-green-500">gner</span>
        </h1>
        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 
                        bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl 
                        border border-white/20 shadow-xl">
          
          <DiPhotoshop className="text-blue-400 transition-transform hover:scale-110
                                 w-8 md:w-12 md:h-12  h-8" />
          
          <DiIllustrator className="text-orange-400 transition-transform hover:scale-110
                                   w-12 h-12 " />
          
          <FaFigma className="text-purple-400 transition-transform hover:scale-110
                             w-12 h-12 " />
        </div>

        {/* Glow Effect */}
        <div className="absolute -z-10 
                        w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]
                        bg-green-500/20 blur-[80px] sm:blur-[100px] lg:blur-[120px] 
                        rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
};

export default Hero;