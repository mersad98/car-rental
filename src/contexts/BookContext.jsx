import { useContext, createContext, useReducer, useEffect } from "react";
import { cars } from "../Data";

const initialState = {
  selectedCar: {},
  pickUpLocation: "",
  dropOffLocation: "",
  pickUpDate: "",
  dropOffDate: "",
  status: "idle",
};

function reducer(state, action) {
  switch (action.type) {
    case "carSelected":
      return {
        ...state,
        selectedCar:
          cars.find(
            (car) => `${car.mark} ${car.model} ${car.type}` === action.payload
          ) || {},
      };
    case "PickUpLocationSelected":
      return { ...state, pickUpLocation: action.payload };
    case "dropOffLocationSelected":
      return { ...state, dropOffLocation: action.payload };
    case "pickUpDateSelected":
      return { ...state, pickUpDate: action.payload };
    case "dropOffDateSelected":
      return { ...state, dropOffDate: action.payload };
    case "reservation":
      return { ...state, status: "reservation" };
    case "error":
      return { ...state, status: "error" };
    case "success":
      return { ...state, status: "success" };
    case "close":
      return { ...state, status: "idle" };
    default:
      throw new Error("Unknown action type");
  }
}

const BookContext = createContext();

function BookProvider({ children }) {
  const [
    {
      selectedCar,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      status,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      if (status === "reservation")
        document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "visible";
    },
    [status]
  );

  return (
    <BookContext.Provider
      value={{
        selectedCar,
        pickUpLocation,
        dropOffLocation,
        pickUpDate,
        dropOffDate,
        status,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBook() {
  const context = useContext(BookContext);

  if (context === undefined)
    throw new Error("BookContext was used outside of the BookProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { BookProvider, useBook };
