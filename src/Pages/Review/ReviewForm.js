import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewForm = () => {
  const [review, setReview] = useState([]);
  const { user } = useContext(AuthContext);

  const { _id } = useParams();

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const serviceId = _id;
    const newReview = { review, email, photoURL, serviceId };
    setReview(newReview);
    console.log(review);

    // fetch(`https://service-review-server-iota.vercel.app/services`, {
    fetch(`http://localhost:5000/add-review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New review added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          form.reset();
        }
        console.log(data);
        setReview(data);
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
