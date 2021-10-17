import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-700 py-5">
      <div className="container mx-auto text-white text-center">
        <div className="">
          <a href="https://www.facebook.com/KBgymSande/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/kbgymsande/"
            className="p-1 bg-white h-1 w-1"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Kb Gym&Coaching AS{" - "}
          <Link to="personvernerklaering">
            Personvern og informajonskapsler
          </Link>
        </p>
        <p>
          Drift og design: <a href="https://strandos-ikt.no">Strandos IKT</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
