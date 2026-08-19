import React from "react";
import "./OurPhilosophy.css";

import { FaLeaf, FaSeedling, FaCircle } from "react-icons/fa";

import Glass from "../../assets/glass.png";

const OurPhilosophySection = () => {
  return (
    <section id="mission" className="matcha-section">
      <div className="matcha-container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="matcha-content">
          <span className="matcha-label">OUR PHILOSOPHY</span>

          <h2>
            The Art of Pure
            <br />
            Matcha
          </h2>

          <p className="matcha-description">
            At Matcha, we believe in embracing tradition with modernity. Our
            matcha is sourced directly from Uji, Japan — stone ground to
            perfection to preserve its nutrients, antioxidants, and vibrant
            color.
          </p>

          {/* =========================================
              FEATURES
          ========================================= */}
          <div className="matcha-features">
            {/* Feature 1 */}
            <div className="matcha-feature">
              <div className="feature-icon">
                <FaLeaf />
              </div>

              <span>
                Handpicked
                <br />
                Young Leaves
              </span>
            </div>

            {/* Feature 2 */}
            <div className="matcha-feature">
              <div className="feature-icon">
                <FaSeedling />
              </div>

              <span>
                Stone Ground
                <br />
                Perfection
              </span>
            </div>

            {/* Feature 3 */}
            <div className="matcha-feature">
              <div className="feature-icon">
                <FaCircle />
              </div>

              <span>
                Rich in
                <br />
                Antioxidants
              </span>
            </div>
          </div>

          {/* =========================================
              BUTTON
          ========================================= */}
          <button className="matcha-button">
            <span>OUR STORY</span>

            <span className="button-arrow">→</span>
          </button>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}
        <div className="matcha-image-wrapper">
          <img src={Glass} alt="Pure Matcha" className="matcha-image" />

          {/* =========================================
              GREEN SIDE STRIP
          ========================================= */}
          <div className="matcha-side-strip">
            <span className="vertical-text">THE FAITH IN EVERY SIP</span>

            <button className="side-play" aria-label="Play">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophySection;
