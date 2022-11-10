import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Countdown />
    </div>
  );
};

export default Home;
