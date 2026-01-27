import Hero from "./components/Hero";
import About from "./components/section/About";
import Service from "./components/section/Service";
import PortfolioSection from "./components/section/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <PortfolioSection />
    </>
  );
}
