import HeroPages from "../components/HeroPages";
import Members from "../components/Members";
import BannerPages from "../components/BannerPages";

function Team() {
  return (
    <>
      <HeroPages page="Our Team" />
      <Members />
      <BannerPages />
    </>
  );
}

export default Team;
