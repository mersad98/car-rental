import { useBook } from "../contexts/BookContext";

function BookFormMessage() {
  const { status, dispatch } = useBook();

  if (status === "error")
    return (
      <p className="book__content__message--error">
        All fields are required!
        <span onClick={() => dispatch({ type: "close" })}>X</span>
      </p>
    );

  if (status === "success")
    return (
      <p className="book__content__message--success">
        Check your email to confirm order.
        <span onClick={() => dispatch({ type: "close" })}>X</span>
      </p>
    );
}

export default BookFormMessage;
