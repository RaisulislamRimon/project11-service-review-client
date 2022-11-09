import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">Services</h1>
        <p className="w-3/4 mx-auto text-center mt-5 text-lg font-semibold">
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
