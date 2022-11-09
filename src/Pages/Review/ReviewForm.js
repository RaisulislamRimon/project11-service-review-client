import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewForm = () => {
  const [review, setReview] = useState([]);
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    // const email = user?.email;
    // const newReview = { review, email };
    setReview(review);

    fetch(`https://service-review-server-iota.vercel.app/services`, {
      method: "POST",
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
    <div className="my-10">
      <form onSubmit={handleAddReview}>
        <div className="text-center">
          <input
            onChange={(e) => setReview(e.target.value)}
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
