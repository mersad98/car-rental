import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Model from "./pages/Model";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./styles/main.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle-models" element={<Model />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
