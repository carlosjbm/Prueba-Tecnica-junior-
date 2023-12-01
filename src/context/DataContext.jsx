import { createContext, useState } from "react";
import { useFetch } from "../hoks/useFetch";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const { data, loading } = useFetch("http://localhost:3000/library");

  // const [response, setResponse] = useState(data);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}
