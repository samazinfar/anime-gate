import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <ul className="list-unstyled">
          <li>AnimeGate.com</li>
          <li>AnimeChat</li>
          <li>Donation</li>
        </ul>
      </div>
      <div className="row">
        <ul className="list-unstyled">
          <li>Sorties</li>
          <li>Populaires</li>
          <li>Année</li>
        </ul>
      </div>
      <div className="column">
        <ul className="list-unstyled">
          <li>Apps</li>
          <li>Recommendation</li>
          <li>API</li>
        </ul>
      </div>
      <div className="small">
        <ul className="list-unstyled">
          <li>Fondateurs</li>
          <li>Github</li>
          <li>Discord</li>
        </ul>
      </div>
    </div>
  );
}
