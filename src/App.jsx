import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import axios from "axios";
import { key, urlApi } from "./constantes";



function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get( `${urlApi}/photos?page=1`,{
        headers: {
          'Authorization' : `Client-ID ${key}`
        }
      } )
      .then(({ data }) => {
        setPhotos([...data]);
      })
      .catch(() => {
        console.log("Todo me male sal mi#a");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      });
  }, []);

  return (
    <div className="App">
      <Header loading={loading} setLoading={setLoading} setPhotos={setPhotos} />
      <Main loading={loading} photos={photos}/>
    </div>
  );
}

export default App;
