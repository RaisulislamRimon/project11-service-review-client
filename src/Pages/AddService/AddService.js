import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddService = () => {
  const [addService, setAddService] = useState([]);
  const { user } = useContext(AuthContext);

  const handleAddServiceData = (e) => {
    const newService = { ...addService, email: user?.email };
    newService[e.target.name] = e.target.value;
    setAddService(newService);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    // fetch(`https://service-review-server-pink-omega.vercel.app/add-service`, {
    fetch(`https://service-review-server-pink-omega.vercel.app/add-service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New service added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Service | Life Care</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add your service now!</h1>
            <p className="py-6">
              Here you can add your service and you can also see all services.
              You can also see all reviews and write a review.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddService} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Title</span>
                </label>
                <input
                  onChange={handleAddServiceData}
                  type="text"
                  name="title"
                  placeholder="service title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  onChange={handleAddServiceData}
                  type="text"
                  name="description"
                  placeholder="service description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  onChange={handleAddServiceData}
                  type="text"
                  name="img"
                  placeholder="image link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  onChange={handleAddServiceData}
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Service</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
