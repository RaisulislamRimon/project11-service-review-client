import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const [myReviews, setMyReviews] = React.useState([]);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://service-review-server-pink-omega.vercel.app/my-reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("life-care")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }

        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setMyReviews(data);
      });
  }, [user?.email, logOut]);
  return (
    <div className="my-10 container mx-auto">
      <Helmet>
        <title>My Reviews | Life Care</title>
      </Helmet>
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
              <button
                onClick={() => {
                  fetch(
                    `https://service-review-server-pink-omega.vercel.app/reviews/${myReview._id}`,
                    {
                      method: "DELETE",
                    }
                  )
                    .then((res) => res.json())
                    .then((result) => {
                      if (result) {
                        const remainingReviews = myReviews.filter(
                          (review) => review._id !== myReview._id
                        );
                        setMyReviews(remainingReviews);
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "Your review has been deleted",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      }
                    });
                }}
                className="btn btn-warning"
              >
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
