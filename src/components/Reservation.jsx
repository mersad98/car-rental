import { useBook } from "../contexts/BookContext";
import { FaCircleInfo, FaLocationDot, FaCalendarDays } from "react-icons/fa6";

function Reservation() {
  const {
    selectedCar,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    status,
    dispatch,
  } = useBook();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "success" });
  }

  if (status === "reservation")
    return (
      <section className="reservation">
        <div className="reservation__modal-container">
          <h1 className="reservation__modal-container--heading">
            Complete reservation
            <span onClick={() => dispatch({ type: "close" })}>X</span>
          </h1>
          <div className="reservation__modal-container--message">
            <h2>
              <FaCircleInfo /> Upon completing this reservation enquiry, you
              will receive:
            </h2>
            <p className="paragraph">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className="reservation__modal-container--overview">
            <div>
              <h3>Location & Date</h3>
              <h4>
                <FaCalendarDays /> Pick-Up Date
              </h4>
              <p>{pickUpDate}</p>
              <h4>
                <FaCalendarDays /> Drop-Off Date
              </h4>
              <p>{dropOffDate}</p>
              <h4>
                <FaLocationDot /> Pick-Up Location
              </h4>
              <p>{pickUpLocation}</p>
              <h4>
                <FaLocationDot /> Drop-Off Location
              </h4>
              <p>{dropOffLocation}</p>
            </div>
            <div>
              <h3 className="m-0">
                Car: {selectedCar.mark} {selectedCar.model} {selectedCar.type}
              </h3>
              <div>
                <img src={selectedCar.image} alt={selectedCar.model} />
              </div>
            </div>
          </div>
          <form
            className="reservation__modal-container--form"
            onSubmit={handleSubmit}
          >
            <h3>Personal information</h3>
            <div>
              <label>
                First name <span>*</span>
              </label>
              <input type="text" placeholder="Enter yor first name" />
            </div>
            <div>
              <label>
                Last name <span>*</span>
              </label>
              <input type="text" placeholder="Enter yor last name" />
            </div>
            <div>
              <label>
                Phone number <span>*</span>
              </label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div>
              <label>
                Age <span>*</span>
              </label>
              <input type="number" min="18" max="70" placeholder="18" />
            </div>
            <div>
              <label>
                Email <span>*</span>
              </label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <label>
                Address <span>*</span>
              </label>
              <input type="text" placeholder="Enter your address" />
            </div>
            <div>
              <label>
                City <span>*</span>
              </label>
              <input type="text" placeholder="Enter your city" />
            </div>
            <div>
              <label>
                Zip code <span>*</span>
              </label>
              <input type="text" placeholder="Enter your zip code" />
            </div>
            <div>
              <input type="checkbox" />
              <p className="paragraph">
                Please send me latest news and updates
              </p>
            </div>
            <button className="btn-secondary">Reserve now</button>
          </form>
        </div>
      </section>
    );
}

export default Reservation;
