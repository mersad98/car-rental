import car from "../images/plan/icon1.png";
import operator from "../images/plan/icon2.png";
import drive from "../images/plan/icon3.png";

function Plan() {
  return (
    <section className="plan">
      <div className="container">
        <h4 className="heading-quaternary">Plan your trip now</h4>
        <h2 className="heading-secondary">Quick & easy car rental</h2>
        <div className="grid-3-cols">
          <div className="plan__item">
            <div className="plan__item__box">
              <img src={car} alt="car" className="plan__item__box__img" />
            </div>
            <div className="plan__item__box">
              <h3 className="heading-tertiary">Select Car</h3>
              <p className="paragraph">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
          </div>
          <div className="plan__item">
            <div className="plan__item__box">
              <img
                src={operator}
                alt="operator"
                className="plan__item__box__img"
              />
            </div>
            <div className="plan__item__box">
              <h3 className="heading-tertiary">Contact Operator</h3>
              <p className="paragraph">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
          </div>
          <div className="plan__item">
            <div className="plan__item__box">
              <img src={drive} alt="drive" className="plan__item__box__img" />
            </div>
            <div className="plan__item__box">
              <h3 className="heading-tertiary">Let&apos;s Drive</h3>
              <p className="paragraph">
                Whether you&apos;re hitting the open road, we&apos;ve always got
                you covered with our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan;
