import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ServiceCard from "../Services/ServiceCard";
import Loading from "../Shared/Loading/Loading";
import LoadingError from "../Shared/Loading/LoadingError";

const AllServices = () => {
  // const [services, setServices] = useState([]);
  // const { loading, setLoading } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch("https://service-review-server-pink-omega.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setServices(data);
  //     });
  // }, [setLoading]);

  const {
    isLoading,
    error,
    data: services = [],
  } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(
        "https://service-review-server-pink-omega.vercel.app/services"
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading />;

  if (error) return <LoadingError />;

  return (
    <div className="my-20">
      <Helmet>
        <title>All Services | Life Care</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold text-center">All Services</h1>
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
    </div>
  );
};

export default AllServices;
