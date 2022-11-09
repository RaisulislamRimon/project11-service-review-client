import React from "react";

const ServiceCard = ({ service }) => {
  const { id, name, price, description, img } = service;
  const descCapital =
    description.charAt(0).toUpperCase() + description.slice(1);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-60" />
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
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
