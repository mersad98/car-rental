import { CgChevronRightO } from "react-icons/cg";
import cars from "../images/chooseUs/main.png";
import icon1 from "../images/chooseUs/icon1.png";
import icon2 from "../images/chooseUs/icon2.png";
import icon3 from "../images/chooseUs/icon3.png";

function Choose() {
  return (
    <section className="choose">
      <div className="container">
        <div className="choose__img-container">
          <img src={cars} alt="cars" className="choose__img-container__img" />
        </div>

        <div className="choose__content">
          <div className="choose__content__box">
            <div>
              <h4 className="heading-quaternary">Why Choose Us</h4>
              <h2 className="heading-secondary m-0">
                Best valued deals you will ever find
              </h2>
            </div>
            <p className="paragraph m-0">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <a href="/" className="btn-primary choose__content__btn">
              Find Deals <CgChevronRightO />
            </a>
          </div>

          <div className="choose__content__box">
            <div className="choose__content__box__feature">
              <div>
                <img
                  src={icon1}
                  alt=""
                  className="choose__content__box__feature__img"
                />
              </div>
              <div>
                <h4 className="heading-quaternary">Cross Country Drive</h4>
                <p className="paragraph">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="choose__content__box__feature">
              <div>
                <img
                  src={icon2}
                  alt=""
                  className="choose__content__box__feature__img"
                />
              </div>
              <div>
                <h4 className="heading-quaternary">All Inclusive Pricing</h4>
                <p className="paragraph">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="choose__content__box__feature">
              <div>
                <img
                  src={icon3}
                  alt=""
                  className="choose__content__box__feature__img"
                />
              </div>
              <div>
                <h4 className="heading-quaternary">No Hidden Charges</h4>
                <p className="paragraph">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
