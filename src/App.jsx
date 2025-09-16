import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Method from "./sections/Method/Method";
import Portfolio from "./sections/Portfolio/Portfolio";
import Testimonials from "./sections/Testimonials/Testimonials";
import Cta from "./sections/Cta/Cta";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Method />
      <Portfolio />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
}
