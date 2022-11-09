import React from "react";

const ReviewForm = () => {
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    console.log(review);
  };
  return (
    <div className="my-10">
      <form onSubmit={handleAddReview}>
        <div className="text-center">
          <input
            type="text"
            name="review"
            placeholder="Type your review here"
            className="input input-bordered border-primary w-full max-w-lg"
          />
          <button className="btn btn-active btn-ghost md:ml-2 my-5">
            Add review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
