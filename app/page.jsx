import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/section/Service";

import About from "./components/section/About";
import PortfolioSection from "./components/section/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <PortfolioSection />
    </main>
  );
}
