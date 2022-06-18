import React, { useState } from "react";
import axios from "axios";
import { key, urlApi } from "../constantes";

function Header(props) {
  const { setPhotos, loading, setLoading } = props;
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (texto === "") {
      console.log("esta vacio");
      return;
    }
    setLoading(true);
    axios
      .get(`${urlApi}/search/photos?page=1&query=${texto}`, {
        headers: {
          Authorization: `Client-ID ${key}`,
        },
      })
      .then(({ data }) => {
        let results = data.results;
        setPhotos([...results]);
        setTexto("");
      })
      .catch(() => {
        console.log("todo mal");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });

    console.log("buscando....");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a
            className="navbar-brand text-white bg-success rounded py-2 px-4"
            href="#"
          >
            Pop
          </a>

          <form onSubmit={handleSubmit} className="d-flex">
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
