import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, price, description, img } = service;
  const descCapital =
    description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="Shoes" className="rounded-xl h-60" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {name && name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <p>
            {descCapital && descCapital.length > 100
              ? descCapital.slice(0, 100) + "..."
              : descCapital}
          </p>

          <p className="text-xl font-bold my-2">Price : ${price}</p>

          <div className="card-actions">
            <Link to={`/services/${id}`}>
              <button className="btn btn-info">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
