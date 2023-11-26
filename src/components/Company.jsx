import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import company from "../images/about/about-main.jpg";
import icon1 from "../images/about/icon1.png";
import icon2 from "../images/about/icon2.png";
import icon3 from "../images/about/icon3.png";

function Company() {
  return (
    <section className="company">
      <div className="container">
        <div className="grid-2-cols items-start gap-5">
          <div>
            <img src={company} alt="" className="company__img" />
          </div>
          <div className="company__text">
            <h4 className="heading-quaternary">About Company</h4>
            <h2 className="heading-secondary">
              You start the engine and your adventure begins
            </h2>
            <p className="paragraph">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="company__text__stats">
              <div className="company__text__stats__stat">
                <img src={icon1} alt="" />
                <p>
                  <CountUp end={20} duration={5} delay={1} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  car types
                </p>
              </div>
              <div className="company__text__stats__stat">
                <img src={icon2} alt="" />
                <p>
                  <CountUp end={85} duration={5} delay={1} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  rental outlets
                </p>
              </div>
              <div className="company__text__stats__stat">
                <img src={icon3} alt="" />
                <p>
                  <CountUp end={75} duration={5} delay={1} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  repair shops
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
