import { Link } from "react-router-dom";

function HeroPages({ page }) {
  return (
    <section className="hero-pages">
      <div className="container">
        <div className="hero-pages__content">
          <h1 className="heading-secondary mb-2">{page}</h1>
          <p className="hero-pages__content__text">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{page}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroPages;
