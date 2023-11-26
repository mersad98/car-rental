import { FaPhone } from "react-icons/fa6";

function BannerPages() {
  return (
    <section className="banner-pages">
      <div className="banner-pages__content">
        <div>
          <h2 className="heading-secondary banner-pages__content--title">
            Book a car by getting in touch with us
          </h2>
          <p className="banner-pages__content--text">
            <span>
              <FaPhone /> Call to book
            </span>
            <span>(123) -456-789</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerPages;
