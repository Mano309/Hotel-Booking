import React from "react";
import "./RoomCard.css";

function RoomCard({ image, title, price }) {
  return (
    <div className="room-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price} / night</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  );
}

export default RoomCard;
