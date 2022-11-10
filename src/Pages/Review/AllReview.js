import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AllReview = () => {
  const [allReview, setAllReview] = useState([]);
  const { user } = useContext(AuthContext);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllReview(data);
      });
  }, [ _id ]);

  return (
    <div className="my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {allReview.map((review) => (
              <tr key={review._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={review?.photoURL} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{review.email}</div>
                    </div>
                  </div>
                </td>
                <td>{review.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReview;
