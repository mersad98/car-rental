import { cars } from "../Data";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra, MdLuggage } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { CgCheckO } from "react-icons/cg";

function Vehicles() {
  return (
    <section className="vehicles">
      <div className="container">
        <div className="grid-3-cols">
          {cars.map((car) => (
            <div className="vehicles__card" key={car.id}>
              <div>
                <img
                  src={car.image}
                  alt={car.model}
                  className="vehicles__card__img"
                />
              </div>
              <div className="vehicles__card__info">
                <h2 className="vehicles__card__info--title">
                  {car.mark}&nbsp;
                  {car.model}&nbsp;
                </h2>
                <div className="vehicles__card__info--price">
                  <h3 className="heading-quaternary m-0">
                    <span>$</span> {car.price}
                  </h3>
                  <p>per day</p>
                </div>
                <div className="vehicles__card__info--desc">
                  <p className="paragraph">
                    <FaCar /> {car.category}
                  </p>
                  <p className="paragraph">
                    <MdAirlineSeatReclineExtra /> {car.seats} Seats
                  </p>
                  <p className="paragraph">
                    <MdLuggage /> {car.luggage} Luggage
                  </p>
                  <p className="paragraph">
                    <GiGearStickPattern /> {car.transmission}
                  </p>
                </div>
              </div>
              <a href="/" className="btn-primary vehicles__card__btn">
                Book Ride <CgCheckO />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
