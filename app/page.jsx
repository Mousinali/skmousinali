import Hero from "./components/Hero";
import About from "./components/section/About";
import PortfolioSection from "./components/section/portfolio";
import Service from "./components/section/Service";
import Testimonials from "./components/section/Testimonial";
import WorkProcess from "./components/section/WorkProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PortfolioSection />
      <Service />
      <WorkProcess />
      <Testimonials />
  
      <section className="min-h-screen"></section>
    </>
  );
}
