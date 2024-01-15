import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const urlCharacter = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (urlCharacter) => {
    axios
      .get(urlCharacter)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(urlCharacter);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <Navbar episode="Episodes" />

      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Anterior
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Siguiente
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Anterior
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Siguiente
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;