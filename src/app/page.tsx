import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  );
}
