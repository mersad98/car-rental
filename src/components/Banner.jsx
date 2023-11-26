import { CgCheckO } from "react-icons/cg";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <div>
          <h2 className="heading-secondary banner__content--title">
            Save big with our cheap car rental!
          </h2>
          <p className="banner__content--text">
            Top airports. Local suppliers. 24/7 support.
          </p>
        </div>
        <a href="/" className="btn-primary banner__content--btn">
          Book Ride <CgCheckO />
        </a>
      </div>
    </section>
  );
}

export default Banner;
