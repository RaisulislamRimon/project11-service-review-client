import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-lg h-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <img
              className="h-20 w-20 rounded-full mb-10"
              src="
            https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className="text-5xl mb-7 font-bold">
              <div>The Best health care services,</div>
              <div className="mt-4">Near to your home</div>
            </h1>
            <p className="py-6">
              Health care is the improvement of health via the prevention,
              diagnosis, treatment, cure of disease, illness, injury, and other
              physical and mental impairments in people. Health care is
              delivered by health professionals and allied health fields.
            </p>
            <button className="btn btn-accent hover:text-white">
              <Link to="/services">Get Services</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
