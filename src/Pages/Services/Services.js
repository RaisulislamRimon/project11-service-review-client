import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("https://service-review-server-iota.vercel.app/services")
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">Services</h1>
        <p className="w-3/4 mx-auto text-center mt-5 text-md mb-10">
          We focus on helping you build a better healthier body. An efficient
          health care system can contribute to a significant part of a country's
          economy, development, and industrialization. Health care is
          conventionally regarded as an important determinant in promoting the
          general physical and mental health and well-being of people around the
          world.{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
      <div className="w-56 mx-auto text-center my-20">
        <Link to="/services">
          <button className="btn btn-active btn-accent text-white  ">
            See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
