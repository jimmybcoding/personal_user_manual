import Nav from "./components/Menu/page";
import Intro from "./components/Home/page";
import Working from "./components/Working with me/page";
import About from "./components/About/page";
import Projects from "./components/Motivators/DealBreakers/page";
import Contact from "./components/Perceptions/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro /> 
      <About />
      <Working />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}