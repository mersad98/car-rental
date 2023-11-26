import { FaQuoteRight } from "react-icons/fa6";
import { testimonials } from "../Data";
import { useEffect, useState } from "react";

function Testimonials() {
  const [curSlide, setCurSlide] = useState(0);

  useEffect(
    function () {
      const intervaiId = setInterval(() => {
        if (curSlide < testimonials.length - 1) {
          setCurSlide((c) => (c += 1));
        } else setCurSlide(0);
      }, 3500);

      return () => clearInterval(intervaiId);
    },
    [curSlide]
  );

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__title">
          <h4 className="heading-quaternary">Reviewed by People</h4>
          <h2 className="heading-secondary">Clients&apos; Testimonials</h2>
          <p className="paragraph">
            Discover the positive impact we&apos;ve made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they&apos;re eager to share their positive
            experiences with you.
          </p>
        </div>

        <div className="slider">
          {testimonials.map((item, i) => (
            <div className="slider__slide" key={i}>
              <div
                className="card"
                style={{ transform: `translateX(${(i - curSlide) * 155}%)` }}
              >
                <blockquote className="card__quote">
                  <q>{item.quote}</q>
                </blockquote>
                <div className="card__customer">
                  <div className="card__customer__info">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card__customer__info--img"
                      />
                    </div>
                    <div>
                      <h5 className="card__customer__info--name">
                        {item.name}
                      </h5>
                      <address className="card__customer__info--city">
                        {item.city}
                      </address>
                    </div>
                  </div>

                  <div className="card__customer__info--icon">
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              className={`dots__dot ${curSlide === i ? "active" : ""}`}
              key={i}
              onClick={() => setCurSlide(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
