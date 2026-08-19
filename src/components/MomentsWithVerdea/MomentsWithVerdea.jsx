import React, { useRef, useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./MomentsWithVerdea.css";

import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/drink1.png";
import test4 from "../../assets/drink2.png";
import test5 from "../../assets/test1.png";
import test6 from "../../assets/test2.png";
import test7 from "../../assets/test1.png";

const MomentsWithMatcha = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const matchaImages = [test1, test2, test3, test4, test5, test6, test7];

  const handleWheel = (e) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    // Vertical mouse wheel ko horizontal scroll mein convert karega
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  // Scroll position check karke buttons ko enable/disable karta hai
  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 4);
    setCanScrollRight(container.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Button click par ek card jitna smooth scroll karega
  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".moment-image");
    const gap = 20;
    const step = card ? card.getBoundingClientRect().width + gap : 320;

    container.scrollBy({ left: direction * step * 2, behavior: "smooth" });
  };

  return (
    <section className="moments-section">
      {/* ================================
          MAIN CONTENT
      ================================= */}
      <div className="moments-content">
        {/* HEADING */}
        <div className="moments-heading">
          <h2>
            Moments with <span>Matcha</span>
          </h2>
          <p>
            Real cups, real moments — shared by people who start their day the
            matcha way. Tag us for a chance to see yours featured right here.
          </p>
        </div>

        {/* ================================
            HORIZONTAL IMAGE SCROLLER
        ================================= */}
        <div className="moments-viewport" ref={scrollRef} onWheel={handleWheel}>
          <div className="moments-track">
            {matchaImages.map((image, index) => (
              <div className="moment-image" key={index}>
                <img
                  src={image}
                  alt={`Moments with Matcha ${index + 1}`}
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================
          BOTTOM GREEN STRIP
      ================================= */}
      <div className="moments-footer">
        <span className="moments-footer-text">Share Your Verdea Moment</span>

        <div className="moments-footer-nav">
          <button
            type="button"
            className="moments-icon-button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll images left"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            className="moments-icon-button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Scroll images right"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MomentsWithMatcha;
