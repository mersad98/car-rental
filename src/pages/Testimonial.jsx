import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";
import BannerPages from "../components/BannerPages";

function Testimonial() {
  return (
    <>
      <HeroPages page="Testimonials" />
      <Testimonials />
      <BannerPages />
    </>
  );
}

export default Testimonial;
