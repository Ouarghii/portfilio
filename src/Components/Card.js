import React from "react";
import "./cards.css";
const Card = ({ image, title, description }) => {
  return (
    
      <div className="flex-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    
  );
};

export default Card;
