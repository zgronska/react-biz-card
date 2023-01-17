import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <a href="" className="btn btn-social">
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </a>
      <a href="" className="btn btn-social">
        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
      </a>
      <a href="" className="btn btn-social">
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </a>
      <a href="" className="btn btn-social">
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    </footer>
  );
}
