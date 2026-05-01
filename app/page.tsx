import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div className="    ">
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
