import Hero from "./components/Hero";
import About from "./components/section/About";
import PortfolioSection from "./components/section/portfolio";
import Service from "./components/section/Service";
import WorkProcess from "./components/section/WorkProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PortfolioSection />
      <Service />
      <WorkProcess />
  
      <section className="min-h-screen"></section>
    </>
  );
}
