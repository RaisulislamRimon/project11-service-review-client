import React from "react";
import AllReview from "./AllReview";

const Review = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Reviews</h1>
        <h1>This is Review Page</h1>
      </div>
      <div className="w-2/4 mx-auto text-center">
        <button className="lg:text-lg btn btn-warning ">
          Please login to write a review
        </button>
      </div>
      <AllReview />
    </div>
  );
};

export default Review;
