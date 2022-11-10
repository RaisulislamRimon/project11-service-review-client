import React, { useContext, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const [myReviews, setMyReviews] = React.useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/my-reviews?email=" + user?.email)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email]);
  return (
    <div className="my-10 container mx-auto">
      <div>
        <h1 className="text-5xl text-center">
          My Review : {myReviews.length}{" "}
        </h1>
      </div>
      {myReviews.map((myRreview) => (
        <div
          key={myRreview._id}
          className="card w-full border border-primary my-10"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Service Name : {myRreview?.serviceNameCollect}
            </h2>
            <p>
              <strong>Review : {myRreview?.review} </strong>
            </p>
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
      ))}
    </div>
  );
};

export default MyReview;
