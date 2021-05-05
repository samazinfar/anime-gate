import React from "react";

export default function Footer() {
  return (
    <div className="App">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Anime Gate</h4>
              <ul className="list-unstyled">
                <li>page principale anime gate</li>
              </ul>
            </div>
            <div className="col">
              <h4>Categorie</h4>
              <ul className="list-unstyled">
                <li>Sortie</li>
                <li>Année</li>
                <li>Genre</li>
              </ul>
            </div>
            <div className="col">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>Fondateurs</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="col-small">
              &copy;{new Date().getFullYear()} ANIME GATE INC | All right
              reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
