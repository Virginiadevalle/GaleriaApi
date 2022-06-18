import React from "react";

function cards(props) {
  const { color, regular } = props;
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card" style={{backgroundColor: color}}>
        <img src={regular} className="card-img-top p-3" alt="Imagen regular" />
        {/* <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default cards;
