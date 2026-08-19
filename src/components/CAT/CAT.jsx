import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import "./CAT.css";

function CTA() {
  const handleExplore = () => {
    const menuSection = document.getElementById("menu");

    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="cta-section" id="cta">
      {/* Background Effects */}
      <div className="cta-bg-glow cta-bg-glow-one"></div>
      <div className="cta-bg-glow cta-bg-glow-two"></div>

      <div className="cta-noise"></div>

      {/* Decorative Lines */}
      <div className="cta-line cta-line-one"></div>
      <div className="cta-line cta-line-two"></div>

      <div className="cta-container">
        {/* Top Label */}
        <div className="cta-label">
          <span className="cta-label-line"></span>

          <LuLeaf />

          <span>PURE MATCHA EXPERIENCE</span>

          <span className="cta-label-line"></span>
        </div>

        {/* Main Content */}
        <div className="cta-content">
          <div className="cta-heading">
            <p className="cta-eyebrow">SLOW DOWN. SIP BETTER.</p>

            <h2>
              Find your
              <span> perfect moment.</span>
            </h2>
          </div>

          <div className="cta-description">
            <p>
              Crafted for calm mornings, focused afternoons, and everything in
              between.
            </p>

            <button
              type="button"
              className="cta-button"
              onClick={handleExplore}
              aria-label="Explore our menu"
            >
              <span>EXPLORE MENU</span>

              <span className="cta-button-icon">
                <FiArrowUpRight />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="cta-bottom">
          <span>100% ORGANIC</span>

          <span className="cta-bottom-dot">•</span>

          <span>HANDCRAFTED DAILY</span>

          <span className="cta-bottom-dot">•</span>

          <span>AUTHENTIC MATCHA</span>

          <div className="cta-scroll-mark">
            <FiArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
