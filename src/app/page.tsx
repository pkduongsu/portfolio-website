import Hero from "@/components/ui/main/Hero";
import About from "@/components/ui/main/About";
import Projects from "@/components/ui/main/Projects";
import Contact from "@/components/ui/main/Contact";
import { Layout } from "@/components/ui/main/Navigation";

export default function Home() {
  return (
    <Layout>
      <div id="hero-section">
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </Layout>
  );
}
