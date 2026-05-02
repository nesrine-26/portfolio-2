"use client"
import { useTheme } from "next-themes";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div className=" relative   ">
      <div className="sticky top-0 z-50 ">
<Header />
      </div>
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
