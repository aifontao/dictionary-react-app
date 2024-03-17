import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  return (
    <section className="Gallery">
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
