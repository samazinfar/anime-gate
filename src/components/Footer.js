import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="relative">
      <div className="footer-main">
        <div className="container">
          <div className="list-unstyled">
            <p className="navigationText">AnimeGate.com</p>
            <p className="navigationText">AnimeChat</p>
            <p className="navigationText">Donation</p>
          </div>
        </div>
        <div className="row">
          <div className="list-unstyled">
            <p className="navigationText">Sorties</p>
            <p className="navigationText">Populaires</p>
            <p className="navigationText">Année</p>
          </div>
        </div>
        <div className="column">
          <div className="list-unstyled">
            <p className="navigationText">Apps</p>
            <p className="navigationText">Recommendation</p>
            <p className="navigationText">API</p>
          </div>
        </div>
        <div className="small">
          <div className="list-unstyled">
            <p className="navigationText">Fondateurs</p>
            <p className="navigationText">Github</p>
            <p className="navigationText">Discord</p>
          </div>
        </div>
      </div>
    </div>
  );
}
