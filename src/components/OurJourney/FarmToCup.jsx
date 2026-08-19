import React from "react";
import "./OurJourney.css";

import farmImage from "../../assets/farm.png";

const FarmToCup = () => {
  return (
    <section className="farm-section">
      <div className="farm-container">
        {/* LEFT CONTENT */}
        <div className="farm-content">
          <span className="farm-label">Our Journey</span>

          <h2>
            From Farm to
            <br />
            <span>Your Cup.</span>
          </h2>

          <p className="farm-description">
            From carefully nurtured verdea farms to every cup we create, our
            journey is rooted in quality, tradition, and a deep respect for
            nature.
          </p>

          <button className="farm-button">
            <span>DISCOVER OUR STORY</span>

            <span className="farm-button-arrow">→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="farm-image-wrapper">
          <img src={farmImage} alt="Verdea tea farm" className="farm-image" />

          <div className="farm-image-overlay" />

          <span className="farm-image-label">PREMIUM VERDEA</span>
        </div>
      </div>
    </section>
  );
};

export default FarmToCup;
