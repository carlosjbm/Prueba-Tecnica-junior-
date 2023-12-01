import { useContext } from "react";
import "./ReadingList.css";
import { readingContext, setReadingContext } from "./App";

function ReadingList() {
  const readingList = useContext(readingContext);
  const setReading = useContext(setReadingContext);

  const removeBook = (book) => {
    setReading(readingList.filter((el) => el.ISBN !== book.ISBN));
  };

  const removeAll = () => {
    setReading([]);
  };

  return (
    <>
      <div className="list-read">
        <h3>
          Listado de libros para leer: <span>{readingList.length}</span>
        </h3>
        {readingList.length !== 0 && (
          <button
            onClick={() => {
              removeAll();
            }}
          >
            Remover Todos
          </button>
        )}
        <div>
          {readingList.map((el) => {
            return (
              <div className="list-read__book" key={el.ISBN}>
                <h5 className="list-read__title">{el.title}</h5>
                <p className="list-read__author">{el.author.name}</p>
                <button
                  onClick={() => {
                    removeBook(el);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ReadingList;
