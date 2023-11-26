import { Link } from "react-router-dom";
import { CgCheckO, CgChevronRightO } from "react-icons/cg";
import car from "../images/hero/main-car.png";
import bg from "../images/hero/hero-bg.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="grid-2-cols">
          <div className="hero__text-box">
            <div className="mb-2">
              <h4 className="heading-quaternary">Plan your trip now</h4>
              <h1 className="heading-primary">
                Save <span className="text-orange">big</span> with our car
                rental
              </h1>
              <p className="paragraph">
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
            <div className="hero__text-box__buttons">
              <Link to="/" className="btn-primary">
                Book Ride <CgCheckO />
              </Link>
              <Link to="/" className="btn-tertiary">
                Learn More <CgChevronRightO />
              </Link>
            </div>
          </div>
          <div className="hero__img-box">
            <img src={car} alt="car" className="hero__img-box__img" />
          </div>
        </div>
      </div>
      <img src={bg} alt="background" className="hero__bg" />
    </section>
  );
}

export default Hero;
