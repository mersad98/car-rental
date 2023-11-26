import { FaPhone, FaEnvelope, FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__contact">
            <h2 className="footer__heading">
              Car <span>Rental</span>
            </h2>
            <p className="paragraph m-0">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className="footer__contact__links">
              <a href="tel:123456789">
                <FaPhone /> (123) -456-789
              </a>
              <a href="mailto:example@carrental.com">
                <FaEnvelope /> example@carrental.com
              </a>
              <a
                href="https://xpeedstudio.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaCopyright /> Designed by XpeedStudio
              </a>
            </div>
          </div>
          <div className="footer__company">
            <h2 className="footer__heading">Company</h2>
            <ul className="footer__list">
              <li>
                <a href="/">Tehran</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Mobile</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">How we work</a>
              </li>
            </ul>
          </div>
          <div className="footer__hours">
            <h2 className="footer__heading">Working Hours</h2>
            <ul className="footer__list">
              <li>
                <span>Mon - Fri:</span> 09:00AM - 09:00PM
              </li>
              <li>
                <span>Sat:</span> 09:00AM - 07:00PM
              </li>
              <li>
                <span>Sun:</span> Closed
              </li>
            </ul>
          </div>
          <div className="footer__subscription">
            <h2 className="footer__heading">Subscription</h2>
            <p className="paragraph m-0">
              Subscribe your Email address for latest news & updates.
            </p>
            <form className="footer__subscription__form">
              <input
                type="emai"
                placeholder="Enter Email Address"
                className="footer__subscription__form--input"
              />
              <button className="btn-secondary footer__subscription__form--btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <p className="footer__copyright">
          &copy;<span>{new Date().getFullYear()}</span>
          <strong> Car Rental</strong>. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
