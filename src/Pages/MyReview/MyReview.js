import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyReview = () => {
  return (
    <div className="my-10 container mx-auto">
      <div>
        <h1 className="text-5xl text-center">My Review</h1>
      </div>
      <div className="card w-full border border-primary my-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">service name</h2>
          <p>service review</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="btn btn-warning">
              <FaTrashAlt className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
