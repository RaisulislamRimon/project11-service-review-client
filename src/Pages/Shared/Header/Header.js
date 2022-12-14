import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link to='/appointment'>Get Appointment</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email && (
        <>
          <li>
            <Link to="/my-reviews">My reviews</Link>
          </li>
          <li>
            <Link to="/add-service">Add service</Link>
          </li>
        </>
      )}

      {user?.email ? (
        <li>
          <button onClick={logOut}>Log out</button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl">
          Life Care
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <Link to="" className="btn">
          Get started
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
