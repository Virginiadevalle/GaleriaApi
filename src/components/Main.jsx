import React from "react";
import Cards from "./Cards";

function Main(props) {
  const { photos, loading } = props;
  return (
    <div>
      <div className=" m-auto text-center">
        <h2 className="mb-3 pb-3 border-bottom">Galeria Pop</h2>
      </div>
      <div className="container">
        {!loading && <div className="row">
          {photos.map((photo) => (
            <Cards key={photo.id} color={photo.color} regular={photo.urls.regular} />
          ))}
        </div>}
        {loading && <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Main;
