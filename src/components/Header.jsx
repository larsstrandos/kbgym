import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center p-1 flex-wrap">
        <Link to="/">
          <img src={Logo} alt="kb gym sande logo" className="h-28" />
        </Link>
        <button
          onClick={() => setNavbar(!navbar)}
          className="text-white inline-flex p-3 hover:bg-gray-900 rounded md:hidden ml-auto"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={
            "top-nav w-full md:inline-flex md:flex-grow md:w-auto " +
            (navbar ? "flex-inline" : "hidden")
          }
        >
          <div className="md:inline-flex md:flex-row md:ml-auto flex flex-col">
            <Link
              to="/"
              className="md:inline-flex md:w-auto px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-900 uppercase"
            >
              <span>Heim</span>
            </Link>
            <Link
              to="/om-oss/"
              className="md:inline-flex md:w-auto px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-900 uppercase"
            >
              <span>Om oss</span>
            </Link>
            <Link
              to="/pt/"
              className="md:inline-flex md:w-auto px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-900 uppercase"
            >
              <span>PT</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
