import HeroPages from "../components/HeroPages";
import Vehicles from "../components/Vehicles";
import BannerPages from "../components/BannerPages";

function Model() {
  return (
    <>
      <HeroPages page="Vehicle Models" />
      <Vehicles />
      <BannerPages />
    </>
  );
}

export default Model;
