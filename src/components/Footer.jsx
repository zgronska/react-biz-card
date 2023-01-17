import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <a role="link" aria-disabled="true" className="btn btn-social">
        <FontAwesomeIcon
          icon="fa-brands fa-twitter"
          mask="fa-solid fa-square"
          size="2xl"
          transform="shrink-5"
        />
      </a>

      <a role="link" aria-disabled="true" className="btn btn-social">
        <FontAwesomeIcon
          icon="fa-brands fa-facebook-f"
          mask="fa-solid fa-square"
          size="2xl"
          transform="shrink-4 down-1"
        />
      </a>

      <a role="link" aria-disabled="true" className="btn btn-social">
        <FontAwesomeIcon
          icon="fa-brands fa-instagram"
          mask="fa-solid fa-square"
          size="2xl"
          transform="shrink-5"
        />
      </a>

      <a href="https://github.com/zgronska/" className="btn btn-social">
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          mask="fa-solid fa-square"
          size="2xl"
          transform="shrink-5"
        />
      </a>
    </footer>
  );
}
