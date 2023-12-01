import { createContext, useState } from "react";
import "./App.css";
import { useFetch } from "./hoks/useFetch";
import Book from "./Book";
import ReadingList from "./readingList";

export const dataContext = createContext();
export const readingContext = createContext();
export const setReadingContext = createContext();

function App() {
  const { data, loading } = useFetch("http://localhost:3000/library");

  const [reading, setReading] = useState([]);

  return (
    <>
      <dataContext.Provider value={data}>
        <readingContext.Provider value={reading}>
          <setReadingContext.Provider value={setReading}>
            <main className="listador">
              <article className="listador__reading">
                <ReadingList />
              </article>

              <section className="listador__contaner-list">
                <h2>Listado de Libros</h2>
                <label htmlFor="filter">
                  <h4>Filtrar por</h4>
                </label>
                <select name="filter" id="">
                  <option value="all">All</option>
                  <option value="terror">Terror</option>
                  <option value="cienciaF">Ciencia Ficcion</option>
                </select>
                <article className="listador__list-book">
                  {loading ? <p>Cargando libros...</p> : <Book />}
                </article>
              </section>
            </main>
          </setReadingContext.Provider>
        </readingContext.Provider>
      </dataContext.Provider>
    </>
  );
}

export default App;
