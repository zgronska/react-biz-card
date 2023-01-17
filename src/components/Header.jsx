import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picture from "../pfp.jpg";

export default function Header() {
  return (
    <header>
      <img src={Picture} alt="" />
      <h1 className="header--title">Zuza Grońska</h1>
      <h2 className="header--subtitle">Frontend Developer</h2>
      <div className="header--buttons">
        <a
          href="mailto:zgronska@gmail.com"
          className="btn btn-header btn-email">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/zuza-gro%C5%84ska-2b2601116/"
          className="btn btn-header btn-linkedin">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
