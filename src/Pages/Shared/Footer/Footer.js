import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Add meeting
          </Link>
          <Link to="" className="link link-hover">
            My reviews
          </Link>
          <Link to="" className="link link-hover">
            Add service
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover">
            About
          </Link>
          <Link to="" className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img
            className="h-16 w-16 rounded-full"
            src="
            https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>
            Doctor Portal <br />
            Providing reliable health care services
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/rimon_raisul"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCubND4KfOLYSs6KM-roTFnA"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            {/* <Link to="https://www.facebook.com/raisul.rimon/"> */}
            <a
              href="https://www.facebook.com/raisul.rimon/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            {/* </Link> */}
            <a
              href="https://www.linkedin.com/in/md-raisul-islam-rimon/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
