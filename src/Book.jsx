/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { dataContext, readingContext, setReadingContext } from "./App";

import "./Book.css";

function Book() {
  const data = useContext(dataContext);
  const reading = useContext(readingContext);
  const setReading = useContext(setReadingContext);

  const [allBooks, setAllBooks] = useState(data);

  const addReading = (book) => {
    reading.find((el) => el.ISBN === book.ISBN)
      ? console.log("Ya este libro se encuentra en la lista ")
      : setReading([...reading, book]);
  };

  return (
    <>
      {allBooks.map((el) => {
        return (
          <div key={el.book.ISBN} className="book-container">
            <h3>Title: {el.book.title}</h3>
            <h5>Genre: {el.book.genre}</h5>
            <p>Synopsis: {el.book.synopsis}</p>
            <p>Year: {el.book.year}</p>
            <h5>Pages: {el.book.pages}</h5>
            <button onClick={() => addReading(el.book)}>+</button>
          </div>
        );
      })}
    </>
  );
}

export default Book;
