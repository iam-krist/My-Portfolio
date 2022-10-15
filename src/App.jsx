import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Portfolio />
      {/* <About />
      <Experiance />
      <Services />
      
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  )
}
export default App