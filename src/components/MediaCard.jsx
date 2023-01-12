import React from "react";
import { Link } from "react-router-dom";

export default function MediaCard({ id, image, genres, name }) {
  return (
    <Link to={`/tvshows/${id}`}>
      <div
        className="me-4 MediaCard position-relative border-bottom-0"
        style={{ width: "80vw", height: "350px" }}
      >
        <img
          className="w-100 h-100 rounded-3"
          src={image?.original}
          alt={name}
          loading="lazy"
        />
        <div
          className="position-absolute bottom-0 left-0 bg-dark opacity-50 w-100 z-0 border-bottom-0 rounded-bottom"
          style={{ height: "96px" }}
        />
        <div className="d-flex flex-column justify-content-center position-absolute bottom-0 left-0 ps-4 w-100 z-3">
          <h1 className="fs-5 text-light fw-5">{name}</h1>
          <p className="text-light">{genres.join("  -  ")}</p>
        </div>
      </div>
    </Link>
  );
}
