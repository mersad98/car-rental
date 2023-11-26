import BookFormMessage from "./BookFormMessage";
import BookForm from "./BookForm";
import Reservation from "./Reservation";

function Book() {
  return (
    <section id="book" className="book">
      <div className="container">
        <div className="book__content">
          <h2 className="heading-tertiary">Book a car</h2>
          <BookFormMessage />
          <BookForm />
        </div>
        <Reservation />
      </div>
    </section>
  );
}

export default Book;
