import React from "react";
import location from "../image/loc.png"
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card-img" alt="" />
      <div className="card-info">
              <div className="link">
                  <img src={location} alt="" />
          <span>{props.item.location}</span>
          <a href={props.item.googleMapsUrl} className="map">
            View On Google Maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <h5>{props.item.date}</h5>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
