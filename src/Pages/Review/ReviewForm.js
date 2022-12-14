import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewForm = () => {
  const [review, setReview] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const { user, loading, setLoading } = useContext(AuthContext);

  const { _id } = useParams();
  // getting service name from state

  // collect service name from service id
  useEffect(() => {
    // fetch(`https://service-review-server-iota.vercel.app/services/${_id}`)
    fetch(`https://service-review-server-pink-omega.vercel.app/services/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        const serviceName = data.name;
        setServiceName(serviceName);
      });
  }, [_id, setServiceName]);

  const handleAddReview = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const name = user?.displayName;
    // const postTime = new Date().getTime();
    const date = new Date().toJSON();
    const serviceId = _id;

    const serviceNameCollect = serviceName;

    const newReview = {
      review,
      name,
      email,
      photoURL,
      serviceId,
      serviceNameCollect,
      date,
    };

    // fetch(`https://service-review-server-iota.vercel.app/services`, {
    fetch(`https://service-review-server-pink-omega.vercel.app/add-review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoading(false);
          setReview(newReview);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New review added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          form.reset();
          window.location.reload();
        }
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
