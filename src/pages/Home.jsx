import { BookProvider } from "../contexts/BookContext";
import Hero from "../components/Hero";
import Book from "../components/Book";
import Plan from "../components/Plan";
import Pick from "../components/Pick";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import BackToTop from "../components/BackToTop";
import SlideUp from "../components/SlideUp";

function Home() {
  return (
    <>
      <Hero />
      <BookProvider>
        <Book />
      </BookProvider>
      <SlideUp>
        <Plan />
      </SlideUp>
      <SlideUp>
        <Pick />
      </SlideUp>
      <SlideUp>
        <Banner />
      </SlideUp>
      <SlideUp>
        <Choose />
      </SlideUp>
      <SlideUp>
        <Testimonials />
      </SlideUp>
      <SlideUp>
        <Faq />
      </SlideUp>
      <Download />
      <BackToTop />
    </>
  );
}

export default Home;
