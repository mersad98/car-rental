import HeroPages from "../components/HeroPages";
import Company from "../components/Company";
import BannerPages from "../components/BannerPages";

function About() {
  return (
    <>
      <HeroPages page="About" />
      <Company />
      <BannerPages />
    </>
  );
}

export default About;
