import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Countdown from "../Countdown/Countdown";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Countdown />
      <Carousel />
    </div>
  );
};

export default Home;
