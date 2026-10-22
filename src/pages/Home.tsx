import Hero from "../components/Hero";
import MovingBanner from "../components/MovingBanner";
import BrandMarquee from "../components/BrandMarquee";
import About from "../sections/About";
import Stats from "../sections/Stats";
import WebProjects from "../sections/WebProjects";
import Skills from "../sections/Skills";
import Freelance from "../sections/Freelance";

export default function Home() {
  return (
    <>
      <Hero />
      <MovingBanner />
      <BrandMarquee />
      <About />
      <Stats />
      <WebProjects />
      <Skills />
      <Freelance />
    </>
  );
}
