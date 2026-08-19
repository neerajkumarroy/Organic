import React from "react";
import "./WhySection.css";
import WhyImage from "../../assets/why.png";

/**
 * WhySection
 * Two-column "why choose us" panel: dark charcoal content column on the
 * left (label, heading, copy, benefit list, CTA) and a full-bleed inset
 * product photo on the right. Fully responsive from large desktop down
 * to small mobile, with no horizontal overflow at any width.
 */
const FEATURES = [
  { id: "energy", label: "Calm Energy Without the Crash" },
  { id: "focus", label: "Supports Focus & Mental Clarity" },
  { id: "detox", label: "Natural Detox & Immunity Boost" },
  { id: "sourcing", label: "Sustainable & Ethically Sourced" },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12.5 9.5 17 19 7.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 17 17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhySection = () => {
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="why-container">
        {/* LEFT CONTENT */}
        <div className="why-content">
          <span className="why-label">Why Choose Macup?</span>

          <h2 id="why-heading">More Than Just a Drink</h2>

          <p className="why-description">
            Matcha is more than a trend — it&rsquo;s a lifestyle. Discover the
            natural energy, calm focus, and wellness benefits in every cup.
          </p>

          <ul className="why-features">
            {FEATURES.map((feature) => (
              <li key={feature.id}>
                <span className="feature-icon">
                  <CheckIcon />
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          <button type="button" className="why-button">
            <span>Learn More</span>
            <span className="button-arrow">
              <ArrowIcon />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-image">
          <img src={WhyImage} alt="Fresh iced matcha drink" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
