import About from "./components/About";
import Accredited from "./components/Accredited";
import Banner from "./components/Banner";
import Banner_2 from "./components/Banner_2";
import Certificates from "./components/Certificates";
import Contact from "./components/Countact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Our_goals from "./components/Our_goals";
import Trainee_Journey from "./components/Trainee_Journey";
import Training_courses from "./components/Training_courses";

 
export default function Home() {
  return (
    <div  >
  <Navbar/>
  <Hero/>
  <Banner/>
  <About/>
  <Certificates/>
  <Our_goals/>
  <Banner_2/>
  <Accredited/>
  <Trainee_Journey/>
  <Training_courses/>
  <Contact/>
  <Footer/>
  </div>

  );
}
