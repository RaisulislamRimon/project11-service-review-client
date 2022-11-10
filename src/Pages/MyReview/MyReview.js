import React, { useContext, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const [myReviews, setMyReviews] = React.useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://service-review-server-iota.vercel.app/my-reviews?email=" +
        user?.email
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email]);
  return (
    <div className="my-10 container mx-auto">
      <div>
        <h1 className="text-5xl text-center">My Reviews</h1>
      </div>
      {myReviews.length === 0 && (
        <div>
          <h2 className="text-3xl text-center my-52">
            No reviews were added yet.
          </h2>
        </div>
      )}
      {myReviews.map((myReview) => (
        <div
          key={myReview._id}
          className="card w-full border border-primary my-10"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Service Name : {myReview?.serviceNameCollect}
            </h2>
            <p>
              <strong>Review : {myReview?.review} </strong>
            </p>
            <div className="card-actions justify-end">
              <Link to={`/update/${myReview._id}`}>
                {/* <Link to="/update"> */}
                <div>
                  <button className="btn btn-primary">
                    <FaEdit className="mr-2" /> Edit
                  </button>
                </div>
              </Link>
              <button className="btn btn-warning">
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReview;
