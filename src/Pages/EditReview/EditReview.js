import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditReview = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [review, setReview] = useState(data);

  const handleUpdateReview = (e) => {
    e.preventDefault();
    console.log(data, id);
    

    fetch(`http://localhost:5000/get-review/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="mt-10 text-center text-2xl">
        <h1>This is Update Review Page where you can edit your review</h1>
      </div>

      <form onSubmit={handleUpdateReview} className="my-20">
        <div className="container mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Update Your Review : </span>
            </label>
            <textarea
              name="updateReview"
              className="textarea textarea-bordered h-24"
              placeholder="type to update your review"
            ></textarea>
          </div>
        </div>
        <div className="my-4 text-center">
          <button className="btn btn-success">Update Review</button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
