import { useState } from "react";
import { cars } from "../Data";

function Pick() {
  const [selectedCar, setSelectedCar] = useState(cars.at(0));

  return (
    <section className="pick">
      <div className="container">
        <div className="mb-5">
          <h4 className="heading-quaternary">Vehicle Models</h4>
          <h2 className="heading-secondary">Our rental fleet</h2>
          <p className="paragraph">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div className="grid-3-cols ">
          <ul className="pick__cars-list">
            {cars.map((car) => (
              <li key={car.id}>
                <button
                  className={`btn-quaternary ${
                    selectedCar.id === car.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCar(car)}
                >
                  {car.mark} {car.model} {car.type}
                </button>
              </li>
            ))}
          </ul>

          <div className="pick__car">
            <img
              src={selectedCar.image}
              alt={selectedCar.mark}
              className="pick__car__img"
            />
          </div>

          <div className="pick__table-container">
            <table className="pick__table-container__table">
              <tbody>
                <tr>
                  <th colSpan="2">
                    <span>${selectedCar.price}</span> / rent per day
                  </th>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>{selectedCar.mark}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{selectedCar.model}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{selectedCar.year}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>{selectedCar.doors}</td>
                </tr>
                <tr>
                  <td>AC</td>
                  <td>{selectedCar.ac}</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>{selectedCar.transmission}</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td>{selectedCar.fuel}</td>
                </tr>
              </tbody>
            </table>

            <a href="#book" className="btn-primary pick__btn">
              Reseve now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pick;
