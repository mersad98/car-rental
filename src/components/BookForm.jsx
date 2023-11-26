import { FaCar, FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import { cars } from "../Data";
import { useBook } from "../contexts/BookContext";

function BookForm() {
  const {
    selectedCar,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    dispatch,
  } = useBook();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !Object.keys(selectedCar).length ||
      !pickUpLocation ||
      !dropOffLocation ||
      !pickUpDate ||
      !dropOffDate
    ) {
      dispatch({ type: "error" });
      return;
    }

    dispatch({ type: "reservation" });
  }

  return (
    <form className="book__content__form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="car-type">
          <FaCar /> Select Your Car Type<span>*</span>
        </label>
        <select
          id="car-type"
          value={`${selectedCar.mark} ${selectedCar.model} ${selectedCar.type}`}
          onChange={(e) =>
            dispatch({ type: "carSelected", payload: e.target.value })
          }
        >
          <option>Select your car type</option>
          {cars.map((car) => (
            <option value={`${car.mark} ${car.model} ${car.type}`} key={car.id}>
              {car.mark} {car.model} {car.type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pick-up-location">
          <FaLocationDot /> Pick-up<span>*</span>
        </label>
        <select
          id="pick-up-location"
          value={pickUpLocation}
          onChange={(e) =>
            dispatch({
              type: "PickUpLocationSelected",
              payload: e.target.value,
            })
          }
        >
          <option value="">Select pick up location</option>
          <option value="Tehran">Tehran</option>
          <option value="Mashhad">Mashhad</option>
          <option value="Isfahan">Isfahan</option>
          <option value="Tabriz">Tabriz</option>
          <option value="Rasht">Rasht</option>
        </select>
      </div>
      <div>
        <label htmlFor="drop-off-location">
          <FaLocationDot /> Drop-off<span>*</span>
        </label>
        <select
          id="drop-off-location"
          value={dropOffLocation}
          onChange={(e) =>
            dispatch({
              type: "dropOffLocationSelected",
              payload: e.target.value,
            })
          }
        >
          <option value={""}>Select drop off location</option>
          <option value="Tehran">Tehran</option>
          <option value="Mashhad">Mashhad</option>
          <option value="Isfahan">Isfahan</option>
          <option value="Tabriz">Tabriz</option>
          <option value="Rasht">Rasht</option>
        </select>
      </div>
      <div>
        <label htmlFor="pick-up-date">
          <FaCalendarDays /> Pick-up<span>*</span>
        </label>
        <input
          id="pick-up-date"
          type="date"
          value={pickUpDate}
          onChange={(e) =>
            dispatch({
              type: "pickUpDateSelected",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="drop-off-date">
          <FaCalendarDays /> Drop-off<span>*</span>
        </label>
        <input
          id="drop-off-date"
          type="date"
          value={dropOffDate}
          onChange={(e) =>
            dispatch({
              type: "dropOffDateSelected",
              payload: e.target.value,
            })
          }
        />
      </div>
      <button className="btn-secondary book__content__form__btn">Search</button>
    </form>
  );
}

export default BookForm;
