import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const SingleService = () => {
  const data = useLoaderData();
  const { id, name, description, price, img } = data;
  console.log(description);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt=""
            className="rounded-lg shadow-2xl md:w-96 md:h-96"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <p className="text-xl font-bold my-2">Price : ${price}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold">Reviews</h1>
        <Review />
      </div>
    </div>
  );
};

export default SingleService;
