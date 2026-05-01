import Image from "next/image";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg1.png"
        alt="Creative Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Animated Heading */}
        <h1 className="italic text-[clamp(60px,10vw,120px)] font-black leading-[0.9] tracking-tighter uppercase mb-8">
          <span className="text-green-500">G</span>raphic<br />
          Desi<span className="text-green-500">gner</span>
        </h1>

        {/* Professional Icon Stack */}
        <div className="flex items-center gap-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
          <DiPhotoshop size={45} className="text-blue-400 hover:scale-110 transition-transform" />
          <DiIllustrator size={45} className="text-orange-400 hover:scale-110 transition-transform" />
          <FaFigma size={40} className="text-purple-400 hover:scale-110 transition-transform" />
        </div>

        {/* Refined Glow Effect */}
        <div className="absolute -z-10 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
};

export default Hero;