import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditReview = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // const [review, setReview] = useState(data);

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const updatedReview = {
      review: e.target.review.value,
    };

    fetch(
      `https://service-review-server-pink-omega.vercel.app/get-review/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Review Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Edit Review | Life Care</title>
      </Helmet>
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
              name="review"
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
