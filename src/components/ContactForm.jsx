import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaEnvelopeOpenText,
} from "react-icons/fa6";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="grid-2-cols items-start gap-5">
          <div>
            <h2 className="heading-secondary">Need additional information?</h2>
            <p className="paragraph">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="contact-form__info">
              <p>
                <FaPhone /> (123) -456-789
              </p>
              <p>
                <FaEnvelope /> example@carrental.com
              </p>
              <p>
                <FaLocationDot /> Tehran, Iran
              </p>
            </div>
          </div>
          <form className="contact-form__form">
            <div>
              <label>
                Full Name <span>*</span>
              </label>
              <input type="text" placeholder="E.g: Juan Carlos" />
            </div>
            <div>
              <label>
                Email Address <span>*</span>
              </label>
              <input type="email" placeholder="mail@example.com" />
            </div>
            <div>
              <label>
                Tell me about it <span>*</span>
              </label>
              <textarea placeholder="write here..." />
            </div>
            <button className="btn-secondary contact-form__form__btn">
              <FaEnvelopeOpenText /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
