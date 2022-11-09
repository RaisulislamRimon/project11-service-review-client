import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import AllReview from "./AllReview";
import ReviewForm from "./ReviewForm";

const Review = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Reviews</h1>
        <h1>
          This is Review Page where you can see all reviews and you can also
          write a review
        </h1>
      </div>

      {user?.email ? (
        <div>
          <ReviewForm />
        </div>
      ) : (
        <div className="w-2/4 mx-auto text-center">
          <Link to="/login">
            <button className="lg:text-lg btn btn-warning hover:text-white">
              Please login to post a review
            </button>
          </Link>
        </div>
      )}
      <AllReview />
    </div>
  );
};

export default Review;
