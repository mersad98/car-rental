import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function Faq() {
  const [activeTab, setActiveTab] = useState(1);

  function handleActiveTab(tab) {
    if (activeTab === tab) setActiveTab(0);
    else setActiveTab(tab);
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__title">
          <h4 className="heading-quaternary">FAQ</h4>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
          <p className="paragraph">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="faq__accordion">
          <div
            className={`faq__accordion__box ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleActiveTab(1)}
          >
            <h5 className="faq__accordion__box--question">
              1. What is special about comparing rental car deals?
              <span>
                <FaAngleDown />
              </span>
            </h5>
            <p className="paragraph m-0">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>

          <div
            className={`faq__accordion__box ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleActiveTab(2)}
          >
            <h5 className="faq__accordion__box--question">
              2. How do I find the car rental deals?
              <span>
                <FaAngleDown />
              </span>
            </h5>
            <p className="paragraph m-0">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>

          <div
            className={`faq__accordion__box ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleActiveTab(3)}
          >
            <h5 className="faq__accordion__box--question">
              3. How do I find such low rental car prices?
              <span>
                <FaAngleDown />
              </span>
            </h5>
            <p className="paragraph m-0">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
