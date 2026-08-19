import React, { useEffect, useRef, useState } from "react";
import "./OurMatchaCreation.css";

/* =========================================================
   IMAGES
   ========================================================= */

import creation1 from "../../assets/drink1.png";
import creation2 from "../../assets/drink2.png";
import creation3 from "../../assets/drink3.png";
import creation4 from "../../assets/drink4.png";
import creation5 from "../../assets/drink5.png";
import creation6 from "../../assets/drink6.png";
import creation7 from "../../assets/drink3.png";

/* =========================================================
   PRODUCT DATA
   ========================================================= */

const creations = [
  {
    image: creation1,
    name: "Classic Matcha Latte",
    description: "Smooth & creamy",
    price: "$6.50",
  },
  {
    image: creation2,
    name: "Iced Matcha",
    description: "Fresh & refreshing",
    price: "$6.00",
  },
  {
    image: creation3,
    name: "Coconut Matcha",
    description: "Creamy & tropical",
    price: "$7.00",
  },
  {
    image: creation4,
    name: "Matcha Espresso",
    description: "Bold & energizing",
    price: "$7.50",
  },
  {
    image: creation5,
    name: "Strawberry Matcha",
    description: "Fruity & creamy",
    price: "$7.00",
  },
  {
    image: creation6,
    name: "Vanilla Matcha",
    description: "Soft & naturally sweet",
    price: "$6.50",
  },
  {
    image: creation7,
    name: "Ceremonial Matcha",
    description: "Pure & premium",
    price: "$8.00",
  },
];

const OurMatchaCreation = () => {
  const viewportRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(20);

  /* =========================================================
     RESPONSIVE CARD COUNT
     ========================================================= */

  useEffect(() => {
    const updateSlider = () => {
      if (!viewportRef.current) return;

      const width = window.innerWidth;

      let cards = 4;

      if (width <= 600) {
        cards = 1;
      } else if (width <= 900) {
        cards = 2;
      } else if (width <= 1200) {
        cards = 3;
      } else {
        cards = 4;
      }

      setVisibleCards(cards);

      const containerWidth = viewportRef.current.clientWidth;

      let sliderGap = 20;

      if (width <= 600) {
        sliderGap = 14;
      } else if (width <= 900) {
        sliderGap = 16;
      } else if (width <= 1200) {
        sliderGap = 18;
      } else if (width >= 1400) {
        sliderGap = 22;
      }

      setGap(sliderGap);

      const calculatedCardWidth =
        (containerWidth - sliderGap * (cards - 1)) / cards;

      setCardWidth(calculatedCardWidth);
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  /* =========================================================
     KEEP INDEX VALID
     ========================================================= */

  useEffect(() => {
    const maxIndex = Math.max(0, creations.length - visibleCards);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  /* =========================================================
     SLIDER
     ========================================================= */

  const slideDistance = cardWidth + gap;

  const maxIndex = Math.max(0, creations.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((previous) => {
      if (previous >= maxIndex) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((previous) => {
      if (previous <= 0) {
        return maxIndex;
      }

      return previous - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="creations-section">
      <div className="creations-inner">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="creations-header">
          <div className="creations-title">
            <span className="creations-eyebrow">Our Matcha Creations</span>

            <h2>
              Made for every{" "}
              <span className="heading-highlight">Matcha Moment.</span>
            </h2>
          </div>

          {/* =================================================
              CONTROLS
              ================================================= */}

          <div className="creations-controls">
            <button
              type="button"
              className="creation-nav"
              onClick={previousSlide}
              aria-label="Previous products"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 18L9 12L15 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="creation-nav"
              onClick={nextSlide}
              aria-label="Next products"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 18L15 12L9 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            SLIDER VIEWPORT
            ===================================================== */}

        <div className="creations-viewport" ref={viewportRef}>
          <div
            className="creations-track"
            style={{
              transform: `translate3d(-${
                currentIndex * slideDistance
              }px, 0, 0)`,
              gap: `${gap}px`,
            }}
          >
            {creations.map((creation, index) => (
              <article
                className="creation-card"
                key={index}
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                }}
              >
                <div className="creation-image">
                  <img
                    src={creation.image}
                    alt={creation.name}
                    loading="lazy"
                  />

                  <div className="creation-image-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="creation-info">
                  <div className="creation-copy">
                    <h3>{creation.name}</h3>

                    <p>{creation.description}</p>

                    <span>{creation.price}</span>
                  </div>

                  <button
                    type="button"
                    className="creation-detail"
                    aria-label={`View ${creation.name}`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M7 17L17 7M9 7H17V15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROGRESS
            ===================================================== */}

        <div className="creations-bottom">
          <div className="creations-progress">
            <span
              className="creations-progress-fill"
              style={{
                width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
              }}
            />
          </div>

          <div className="creations-counter">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>

            <i>/</i>

            <span>{String(maxIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* =====================================================
            MOBILE DOTS
            ===================================================== */}

        <div className="creations-dots">
          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={
                index === currentIndex ? "creation-dot active" : "creation-dot"
              }
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMatchaCreation;
