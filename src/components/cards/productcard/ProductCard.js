import React from "react";

export const ProductCard = ({ name, img, imgalt }) => {
  return (
    <div className="productcard">
      <img style={{ width: "250px" }} src={img} alt={imgalt} />
      <div>
        <p>Browse our vast selection of</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
