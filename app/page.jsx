import Hero from "./components/Hero";
import About from "./components/section/About";
import PortfolioSection from "./components/section/portfolio";
import Service from "./components/section/Service";
import Testimonial from "./components/section/Testimonial";
import WorkProcess from "./components/section/WorkProcess";
import Cta from "./components/section/Cta";
import Blog from "./components/section/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PortfolioSection />
      <Service />
      <WorkProcess />
      <Testimonial />
      <Cta />
      <Blog />
    </>
  );
}
